import { Component, OnInit, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Title } from '@angular/platform-browser';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { SharedModule } from '@app/shared.module';

/** Markdown Previewer page */
@Component({
  standalone: true,
  imports: [SharedModule],
  selector: 'app-markdown-previewer',
  templateUrl: './markdown-previewer.component.html',
  styleUrls: ['./markdown-previewer.component.scss']
})
export class MarkdownPreviewerComponent implements OnInit {
  // Input/Output
  markdownInput = '';
  htmlOutput: SafeHtml = '';

  // Options
  enableGfm = true;
  enableLineBreaks = true;
  private platformId = inject(PLATFORM_ID);

  constructor(
    private title: Title,
    private snackBar: MatSnackBar,
    private sanitizer: DomSanitizer
  ) {
    this.title.setTitle('Scott VandenToorn - Markdown Previewer');
  }

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) window.scrollTo(0, 0);
  }

  /**
   * Handle input change - auto render
   */
  onInputChange(): void {
    if (!this.markdownInput.trim()) {
      this.htmlOutput = '';
      return;
    }

    this.renderMarkdown();
  }

  /**
   * Render markdown to HTML
   */
  private renderMarkdown(): void {
    try {
      let html = this.parseMarkdown(this.markdownInput);
      this.htmlOutput = this.sanitizer.sanitize(1, html) || '';
    } catch (error: any) {
      console.error('Error rendering markdown:', error);
      this.openSnackBar('Error rendering markdown');
    }
  }

  /**
   * Parse markdown text to HTML (GitHub Flavored Markdown)
   */
  private parseMarkdown(markdown: string): string {
    let html = markdown;

    // Escape HTML to prevent XSS
    html = html.replace(/&/g, '&amp;')
               .replace(/</g, '&lt;')
               .replace(/>/g, '&gt;');

    // Code blocks with syntax highlighting (```language)
    html = html.replace(/```(\w+)?\n([\s\S]*?)```/g, (match, lang, code) => {
      const language = lang || 'plaintext';
      const highlightedCode = this.highlightCode(code.trim(), language);
      return `<pre class="code-block"><code class="language-${language}">${highlightedCode}</code></pre>`;
    });

    // Inline code
    html = html.replace(/`([^`]+)`/g, '<code class="inline-code">$1</code>');

    // Headers
    html = html.replace(/^### (.*$)/gim, '<h3>$1</h3>');
    html = html.replace(/^## (.*$)/gim, '<h2>$1</h2>');
    html = html.replace(/^# (.*$)/gim, '<h1>$1</h1>');

    // Bold
    html = html.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
    html = html.replace(/__(.+?)__/g, '<strong>$1</strong>');

    // Italic
    html = html.replace(/\*(.+?)\*/g, '<em>$1</em>');
    html = html.replace(/_(.+?)_/g, '<em>$1</em>');

    // Strikethrough (GFM)
    if (this.enableGfm) {
      html = html.replace(/~~(.+?)~~/g, '<del>$1</del>');
    }

    // Links
    html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>');

    // Images
    html = html.replace(/!\[([^\]]*)\]\(([^)]+)\)/g, '<img src="$2" alt="$1" />');

    // Horizontal rules
    html = html.replace(/^\s*[-*_]{3,}\s*$/gim, '<hr>');

    // Unordered lists
    html = html.replace(/^\s*[-*+]\s+(.+)$/gim, '<li>$1</li>');
    html = html.replace(/(<li>.*<\/li>)/s, '<ul>$1</ul>');

    // Ordered lists
    html = html.replace(/^\s*\d+\.\s+(.+)$/gim, '<li>$1</li>');

    // Blockquotes
    html = html.replace(/^&gt;\s*(.+)$/gim, '<blockquote>$1</blockquote>');

    // Tables (GFM)
    if (this.enableGfm) {
      html = this.parseTables(html);
    }

    // Task lists (GFM)
    if (this.enableGfm) {
      html = html.replace(/\[ \]/g, '<input type="checkbox" disabled>');
      html = html.replace(/\[x\]/gi, '<input type="checkbox" checked disabled>');
    }

    // Line breaks
    if (this.enableLineBreaks) {
      html = html.replace(/\n\n/g, '</p><p>');
      html = html.replace(/\n/g, '<br>');
      html = '<p>' + html + '</p>';
    }

    return html;
  }

  /**
   * Parse tables
   */
  private parseTables(html: string): string {
    const lines = html.split('\n');
    let inTable = false;
    let result = '';
    let tableRows: string[] = [];

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i].trim();

      if (line.includes('|') && !inTable) {
        inTable = true;
        tableRows = [line];
      } else if (inTable && line.includes('|')) {
        tableRows.push(line);
      } else if (inTable) {
        result += this.renderTable(tableRows);
        tableRows = [];
        inTable = false;
        result += line + '\n';
      } else {
        result += line + '\n';
      }
    }

    if (inTable) {
      result += this.renderTable(tableRows);
    }

    return result;
  }

  /**
   * Render table HTML
   */
  private renderTable(rows: string[]): string {
    if (rows.length < 2) return rows.join('\n');

    let html = '<table class="markdown-table">';

    // Header row
    const headerCells = rows[0].split('|').filter(cell => cell.trim());
    html += '<thead><tr>';
    headerCells.forEach(cell => {
      html += `<th>${cell.trim()}</th>`;
    });
    html += '</tr></thead>';

    // Body rows (skip separator row at index 1)
    html += '<tbody>';
    for (let i = 2; i < rows.length; i++) {
      const cells = rows[i].split('|').filter(cell => cell.trim());
      html += '<tr>';
      cells.forEach(cell => {
        html += `<td>${cell.trim()}</td>`;
      });
      html += '</tr>';
    }
    html += '</tbody></table>';

    return html;
  }

  /**
   * Basic syntax highlighting
   */
  private highlightCode(code: string, language: string): string {
    // Basic keyword highlighting for common languages
    const keywords: { [key: string]: string[] } = {
      javascript: ['const', 'let', 'var', 'function', 'class', 'return', 'if', 'else', 'for', 'while', 'switch', 'case', 'break', 'continue', 'import', 'export', 'default', 'async', 'await', 'try', 'catch', 'throw', 'new'],
      typescript: ['const', 'let', 'var', 'function', 'class', 'return', 'if', 'else', 'for', 'while', 'switch', 'case', 'break', 'continue', 'import', 'export', 'default', 'async', 'await', 'try', 'catch', 'throw', 'new', 'interface', 'type', 'enum', 'public', 'private', 'protected'],
      python: ['def', 'class', 'return', 'if', 'elif', 'else', 'for', 'while', 'import', 'from', 'as', 'try', 'except', 'finally', 'with', 'lambda', 'yield', 'pass', 'break', 'continue'],
      java: ['public', 'private', 'protected', 'class', 'interface', 'extends', 'implements', 'return', 'if', 'else', 'for', 'while', 'switch', 'case', 'break', 'continue', 'new', 'try', 'catch', 'finally', 'throw', 'throws'],
    };

    let highlighted = code;
    const langKeywords = keywords[language.toLowerCase()] || [];

    // Highlight strings
    highlighted = highlighted.replace(/(['"`])(.*?)\1/g, '<span class="syntax-string">$1$2$1</span>');

    // Highlight comments
    highlighted = highlighted.replace(/(\/\/.*$)/gm, '<span class="syntax-comment">$1</span>');
    highlighted = highlighted.replace(/(\/\*[\s\S]*?\*\/)/g, '<span class="syntax-comment">$1</span>');
    highlighted = highlighted.replace(/(#.*$)/gm, '<span class="syntax-comment">$1</span>');

    // Highlight keywords
    langKeywords.forEach(keyword => {
      const regex = new RegExp(`\\b(${keyword})\\b`, 'g');
      highlighted = highlighted.replace(regex, '<span class="syntax-keyword">$1</span>');
    });

    // Highlight numbers
    highlighted = highlighted.replace(/\b(\d+\.?\d*)\b/g, '<span class="syntax-number">$1</span>');

    return highlighted;
  }

  /**
   * Clear all inputs and outputs
   */
  clearAll(): void {
    this.markdownInput = '';
    this.htmlOutput = '';
  }

  /**
   * Load sample markdown
   */
  loadSample(): void {
    this.markdownInput = `# Markdown Previewer

## Features

This markdown previewer supports **GitHub Flavored Markdown** with syntax highlighting!

### Text Formatting

- **Bold text** using \`**text**\` or \`__text__\`
- *Italic text* using \`*text*\` or \`_text_\`
- ~~Strikethrough~~ using \`~~text~~\`
- \`Inline code\` using backticks

### Links and Images

[Visit my website](https://scottv.dev)

### Code Blocks

\`\`\`javascript
const greeting = "Hello, World!";
function sayHello(name) {
  return \`Hello, \${name}!\`;
}
console.log(sayHello("Scott"));
\`\`\`

\`\`\`python
def fibonacci(n):
    if n <= 1:
        return n
    return fibonacci(n-1) + fibonacci(n-2)

print(fibonacci(10))
\`\`\`

### Lists

#### Unordered List
- Item 1
- Item 2
- Item 3

#### Ordered List
1. First item
2. Second item
3. Third item

#### Task List
- [x] Completed task
- [ ] Pending task

### Tables

| Name | Role | Experience |
|------|------|------------|
| Scott | Full Stack Engineer | 5+ years |
| Angular | Framework | Advanced |
| TypeScript | Language | Expert |

### Blockquotes

> This is a blockquote
> It can span multiple lines

### Horizontal Rule

---

Happy markdown editing! 🚀`;

    this.onInputChange();
    this.openSnackBar('Sample markdown loaded');
  }

  /**
   * Copy markdown to clipboard
   */
  copyMarkdown(): void {
    if (!this.markdownInput) {
      this.openSnackBar('No markdown to copy');
      return;
    }

    navigator.clipboard.writeText(this.markdownInput).then(() => {
      this.openSnackBar('Markdown copied to clipboard!');
    }).catch(() => {
      this.openSnackBar('Failed to copy markdown');
    });
  }

  /**
   * Copy HTML to clipboard
   */
  copyHtml(): void {
    if (!this.htmlOutput) {
      this.openSnackBar('No HTML to copy');
      return;
    }

    const htmlString = typeof this.htmlOutput === 'string' ? this.htmlOutput : this.htmlOutput.toString();
    navigator.clipboard.writeText(htmlString).then(() => {
      this.openSnackBar('HTML copied to clipboard!');
    }).catch(() => {
      this.openSnackBar('Failed to copy HTML');
    });
  }

  /**
   * Open snackbar with message
   */
  private openSnackBar(message: string): void {
    this.snackBar.open(message, 'Dismiss', {
      duration: 3000,
    });
  }
}
