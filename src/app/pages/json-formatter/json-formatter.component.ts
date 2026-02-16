import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { MatSnackBar } from '@angular/material/snack-bar';

type IndentationType = '2' | '4' | 'tab';

interface JsonStats {
  size: number;
  keys: number;
  depth: number;
}

/** JSON Formatter page */
@Component({
  selector: 'app-json-formatter',
  templateUrl: './json-formatter.component.html',
  styleUrls: ['./json-formatter.component.scss']
})
export class JsonFormatterComponent implements OnInit {
  // Input/Output
  inputJson = '';
  outputJson = '';

  // Options
  indentation: IndentationType = '2';
  lastAction: 'beautify' | 'minify' | null = null;

  // Validation
  isValid = true;
  errorMessage = '';

  // Stats
  stats: JsonStats = { size: 0, keys: 0, depth: 0 };

  constructor(
    private title: Title,
    private snackBar: MatSnackBar
  ) {
    this.title.setTitle('Scott VandenToorn - JSON Formatter');
  }

  ngOnInit(): void {
    window.scrollTo(0, 0);
  }

  /**
   * Handle input change - auto validate and format
   */
  onInputChange(): void {
    if (!this.inputJson.trim()) {
      this.isValid = true;
      this.errorMessage = '';
      this.outputJson = '';
      this.resetStats();
      return;
    }

    this.validate();

    // Auto-format if a format action was previously selected
    if (this.isValid && this.lastAction) {
      this.autoFormat();
    }
  }

  /**
   * Beautify JSON
   */
  beautify(): void {
    if (!this.inputJson.trim()) {
      this.openSnackBar('Please enter JSON to beautify');
      return;
    }

    this.lastAction = 'beautify';

    try {
      const parsed = JSON.parse(this.inputJson);
      const indent = this.getIndentString();
      this.outputJson = JSON.stringify(parsed, null, indent);
      this.isValid = true;
      this.errorMessage = '';
      this.calculateStats(parsed);
      this.openSnackBar('JSON beautified successfully!');
    } catch (error: any) {
      this.isValid = false;
      this.errorMessage = error.message || 'Invalid JSON';
      this.outputJson = '';
      this.resetStats();
      this.openSnackBar('Invalid JSON: ' + this.errorMessage);
    }
  }

  /**
   * Minify JSON
   */
  minify(): void {
    if (!this.inputJson.trim()) {
      this.openSnackBar('Please enter JSON to minify');
      return;
    }

    this.lastAction = 'minify';

    try {
      const parsed = JSON.parse(this.inputJson);
      this.outputJson = JSON.stringify(parsed);
      this.isValid = true;
      this.errorMessage = '';
      this.calculateStats(parsed);
      this.openSnackBar('JSON minified successfully!');
    } catch (error: any) {
      this.isValid = false;
      this.errorMessage = error.message || 'Invalid JSON';
      this.outputJson = '';
      this.resetStats();
      this.openSnackBar('Invalid JSON: ' + this.errorMessage);
    }
  }

  /**
   * Validate JSON
   */
  private validate(): void {
    try {
      const parsed = JSON.parse(this.inputJson);
      this.isValid = true;
      this.errorMessage = '';
      this.calculateStats(parsed);
    } catch (error: any) {
      this.isValid = false;
      this.errorMessage = error.message || 'Invalid JSON';
      this.outputJson = '';
      this.resetStats();
    }
  }

  /**
   * Auto-format JSON based on last action (silent, no snackbar)
   */
  private autoFormat(): void {
    try {
      const parsed = JSON.parse(this.inputJson);

      if (this.lastAction === 'beautify') {
        const indent = this.getIndentString();
        this.outputJson = JSON.stringify(parsed, null, indent);
      } else if (this.lastAction === 'minify') {
        this.outputJson = JSON.stringify(parsed);
      }

      this.calculateStats(parsed);
    } catch (error: any) {
      // Validation already handled, just clear output
      this.outputJson = '';
    }
  }

  /**
   * Clear all inputs and outputs
   */
  clearAll(): void {
    this.inputJson = '';
    this.outputJson = '';
    this.isValid = true;
    this.errorMessage = '';
    this.lastAction = null;
    this.resetStats();
  }

  /**
   * Load sample JSON
   */
  loadSample(): void {
    this.inputJson = `{
  "name": "Scott VandenToorn",
  "title": "Full Stack Engineer",
  "location": "Grand Rapids, MI",
  "skills": [
    "Angular",
    "TypeScript",
    "Node.js",
    ".NET",
    "AWS"
  ],
  "experience": {
    "current": {
      "company": "TSPi",
      "role": "Lead Angular Developer",
      "startDate": "2024-05"
    },
    "previous": [
      {
        "company": "Volgistics",
        "role": "Full Stack Engineer",
        "years": 5
      },
      {
        "company": "DornerWorks",
        "role": "Intern",
        "years": 0.25
      }
    ]
  },
  "contact": {
    "website": "https://scottv.dev",
    "github": "https://github.com/vandents",
    "linkedin": "https://www.linkedin.com/in/scott-vandentoorn"
  }
}`;
    this.openSnackBar('Sample JSON loaded');
  }

  /**
   * Copy output to clipboard
   */
  copyOutput(): void {
    if (!this.outputJson) {
      this.openSnackBar('No output to copy');
      return;
    }

    const tempElement = document.createElement('textarea');
    tempElement.style.display = 'none';
    tempElement.value = this.outputJson;
    document.body.appendChild(tempElement);
    tempElement.focus();
    tempElement.select();
    document.execCommand('copy');
    document.body.removeChild(tempElement);

    this.openSnackBar('Output copied to clipboard!');
  }

  /**
   * Get indent string based on selected indentation
   */
  private getIndentString(): string | number {
    switch (this.indentation) {
      case '2':
        return 2;
      case '4':
        return 4;
      case 'tab':
        return '\t';
      default:
        return 2;
    }
  }

  /**
   * Calculate JSON statistics
   */
  private calculateStats(obj: any): void {
    this.stats.size = new Blob([JSON.stringify(obj)]).size;
    this.stats.keys = this.countKeys(obj);
    this.stats.depth = this.calculateDepth(obj);
  }

  /**
   * Count total number of keys in JSON
   */
  private countKeys(obj: any): number {
    let count = 0;

    if (obj && typeof obj === 'object') {
      for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
          count++;
          if (typeof obj[key] === 'object' && obj[key] !== null) {
            count += this.countKeys(obj[key]);
          }
        }
      }
    }

    return count;
  }

  /**
   * Calculate maximum depth of JSON
   */
  private calculateDepth(obj: any, currentDepth: number = 0): number {
    if (obj === null || typeof obj !== 'object') {
      return currentDepth;
    }

    let maxDepth = currentDepth;

    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        const depth = this.calculateDepth(obj[key], currentDepth + 1);
        maxDepth = Math.max(maxDepth, depth);
      }
    }

    return maxDepth;
  }

  /**
   * Reset statistics
   */
  private resetStats(): void {
    this.stats = { size: 0, keys: 0, depth: 0 };
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
