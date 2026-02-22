import { Component, OnInit, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Title } from '@angular/platform-browser';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SharedModule } from '@app/shared.module';

interface DiffResult {
  type: 'equal' | 'insert' | 'delete';
  value: string;
}

type DiffMode = 'characters' | 'words' | 'lines';

/** Diff Checker page for comparing text */
@Component({
  standalone: true,
  imports: [SharedModule],
  selector: 'app-diff-checker',
  templateUrl: './diff-checker.component.html',
  styleUrls: ['./diff-checker.component.scss']
})
export class DiffCheckerComponent implements OnInit {
  // Input texts
  originalText = '';
  modifiedText = '';

  // Options
  diffMode: DiffMode = 'lines';
  ignoreCase = false;
  ignoreWhitespace = false;

  // Results
  diffResults: DiffResult[] = [];
  hasCompared = false;
  private platformId = inject(PLATFORM_ID);

  constructor(
    private title: Title,
    private snackBar: MatSnackBar
  ) {
    this.title.setTitle('Scott VandenToorn - Diff Checker');
  }

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) window.scrollTo(0, 0);
  }

  /**
   * Compare the two text inputs
   */
  compareTexts(): void {
    let original = this.originalText;
    let modified = this.modifiedText;

    // Split based on mode (using original text for display)
    let originalParts: string[];
    let modifiedParts: string[];

    switch (this.diffMode) {
      case 'characters':
        originalParts = original.split('');
        modifiedParts = modified.split('');
        break;
      case 'words':
        originalParts = original.split(/(\s+)/);
        modifiedParts = modified.split(/(\s+)/);
        break;
      case 'lines':
        originalParts = original.split('\n');
        modifiedParts = modified.split('\n');
        break;
    }

    // Create normalized versions for comparison if needed
    let originalPartsForComparison = originalParts;
    let modifiedPartsForComparison = modifiedParts;

    if (this.ignoreCase || this.ignoreWhitespace) {
      originalPartsForComparison = originalParts.map(part => this.normalizePart(part));
      modifiedPartsForComparison = modifiedParts.map(part => this.normalizePart(part));
    }

    // Calculate diff using normalized versions for comparison, but original values for display
    this.diffResults = this.calculateDiff(originalParts, modifiedParts, originalPartsForComparison, modifiedPartsForComparison);

    // Post-process: when ignoreWhitespace is enabled, don't highlight whitespace-only changes
    if (this.ignoreWhitespace) {
      this.diffResults = this.diffResults.map(result => {
        if ((result.type === 'insert' || result.type === 'delete') && this.isWhitespaceOrEmpty(result.value)) {
          return { ...result, type: 'equal' };
        }
        return result;
      });
    }

    this.hasCompared = true;
  }

  /**
   * Normalize a part for comparison based on options
   */
  private normalizePart(part: string): string {
    let normalized = part;

    if (this.ignoreCase) {
      normalized = normalized.toLowerCase();
    }

    if (this.ignoreWhitespace) {
      // Trim and collapse whitespace for comparison
      normalized = normalized.trim().replace(/\s+/g, ' ');
    }

    return normalized;
  }

  /**
   * Calculate differences using Myers diff algorithm (simplified)
   * @param original - Original parts for display
   * @param modified - Modified parts for display
   * @param originalForComparison - Normalized original parts for comparison
   * @param modifiedForComparison - Normalized modified parts for comparison
   */
  private calculateDiff(
    original: string[],
    modified: string[],
    originalForComparison: string[] = original,
    modifiedForComparison: string[] = modified
  ): DiffResult[] {
    const results: DiffResult[] = [];
    const n = originalForComparison.length;
    const m = modifiedForComparison.length;

    // Create a 2D array for dynamic programming
    const matrix: number[][] = Array(n + 1).fill(0).map(() => Array(m + 1).fill(0));

    // Fill the matrix
    for (let i = 0; i <= n; i++) {
      for (let j = 0; j <= m; j++) {
        if (i === 0) {
          matrix[i][j] = j;
        } else if (j === 0) {
          matrix[i][j] = i;
        } else if (originalForComparison[i - 1] === modifiedForComparison[j - 1]) {
          matrix[i][j] = matrix[i - 1][j - 1];
        } else {
          matrix[i][j] = 1 + Math.min(
            matrix[i - 1][j],     // deletion
            matrix[i][j - 1],     // insertion
            matrix[i - 1][j - 1]  // substitution
          );
        }
      }
    }

    // Backtrack to find the diff - use original values for display
    let i = n;
    let j = m;

    while (i > 0 || j > 0) {
      if (i > 0 && j > 0 && originalForComparison[i - 1] === modifiedForComparison[j - 1]) {
        results.unshift({ type: 'equal', value: original[i - 1] });
        i--;
        j--;
      } else if (j > 0 && (i === 0 || matrix[i][j - 1] <= matrix[i - 1][j])) {
        results.unshift({ type: 'insert', value: modified[j - 1] });
        j--;
      } else if (i > 0) {
        results.unshift({ type: 'delete', value: original[i - 1] });
        i--;
      }
    }

    return results;
  }

  /**
   * Get statistics about the diff
   */
  getStats(): { additions: number; deletions: number; unchanged: number } {
    const additions = this.diffResults.filter(r => r.type === 'insert').length;
    const deletions = this.diffResults.filter(r => r.type === 'delete').length;
    const unchanged = this.diffResults.filter(r => r.type === 'equal').length;

    return { additions, deletions, unchanged };
  }

  /**
   * Check if a value is only whitespace
   */
  isWhitespace(value: string): boolean {
    return /^\s+$/.test(value);
  }

  /**
   * Check if a value is only whitespace or empty
   */
  private isWhitespaceOrEmpty(value: string): boolean {
    return value.trim().length === 0;
  }

  /**
   * Clear all inputs and results
   */
  clearAll(): void {
    this.originalText = '';
    this.modifiedText = '';
    this.diffResults = [];
    this.hasCompared = false;
  }

  /**
   * Get formatted diff text for copying
   */
  getFormattedDiff(): string {
    return this.diffResults.map(result => {
      const prefix = result.type === 'insert' ? '+ ' : result.type === 'delete' ? '- ' : '  ';
      return prefix + result.value;
    }).join(this.diffMode === 'lines' ? '\n' : '');
  }

  /**
   * Copy diff to clipboard
   */
  copyDiff(): void {
    if (!this.hasCompared) {
      this.openSnackBar('Please compare texts first');
      return;
    }

    if (isPlatformBrowser(this.platformId)) {
      const formattedDiff = this.getFormattedDiff();
      navigator.clipboard.writeText(formattedDiff).then(() => {
        this.openSnackBar('Diff copied to clipboard!');
      }).catch(() => {
        this.openSnackBar('Failed to copy diff');
      });
    }
  }

  private openSnackBar(message: string): void {
    this.snackBar.open(message, 'Dismiss', {
      duration: 3000,
    });
  }
}
