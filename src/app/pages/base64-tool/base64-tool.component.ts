import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { MatSnackBar } from '@angular/material/snack-bar';

/** Base64 Encoder/Decoder page */
@Component({
  selector: 'app-base64-tool',
  templateUrl: './base64-tool.component.html',
  styleUrls: ['./base64-tool.component.scss']
})
export class Base64ToolComponent implements OnInit {
  // Input/Output
  plainText = '';
  encodedText = '';

  // Active tab
  activeTab: 'encode' | 'decode' = 'encode';

  constructor(
    private title: Title,
    private snackBar: MatSnackBar
  ) {
    this.title.setTitle('Scott VandenToorn - Base64 Encoder/Decoder');
  }

  ngOnInit(): void {
    window.scrollTo(0, 0);
  }

  /**
   * Encode plain text to Base64
   */
  encodeToBase64(): void {
    if (!this.plainText) {
      this.encodedText = '';
      return;
    }

    try {
      // Use TextEncoder for proper UTF-8 encoding
      const encoder = new TextEncoder();
      const data = encoder.encode(this.plainText);

      // Convert Uint8Array to binary string
      let binary = '';
      for (let i = 0; i < data.length; i++) {
        binary += String.fromCharCode(data[i]);
      }

      // Encode to base64
      this.encodedText = btoa(binary);
    } catch (error) {
      this.openSnackBar('Error encoding text');
      console.error('Encoding error:', error);
    }
  }

  /**
   * Decode Base64 to plain text
   */
  decodeFromBase64(): void {
    if (!this.encodedText) {
      this.plainText = '';
      return;
    }

    try {
      // Decode from base64
      const binary = atob(this.encodedText);

      // Convert binary string to Uint8Array
      const bytes = new Uint8Array(binary.length);
      for (let i = 0; i < binary.length; i++) {
        bytes[i] = binary.charCodeAt(i);
      }

      // Use TextDecoder for proper UTF-8 decoding
      const decoder = new TextDecoder();
      this.plainText = decoder.decode(bytes);
    } catch (error) {
      this.openSnackBar('Error decoding Base64. Please check your input.');
      console.error('Decoding error:', error);
    }
  }

  /**
   * Copy text to clipboard
   */
  copyToClipboard(text: string, label: string): void {
    if (!text) {
      this.openSnackBar(`No ${label} to copy`);
      return;
    }

    const tempElement = document.createElement('textarea');
    tempElement.style.display = 'none';
    tempElement.value = text;
    document.body.appendChild(tempElement);
    tempElement.focus();
    tempElement.select();
    document.execCommand('copy');
    document.body.removeChild(tempElement);

    this.openSnackBar(`${label} copied to clipboard!`);
  }

  /**
   * Clear all fields
   */
  clearAll(): void {
    this.plainText = '';
    this.encodedText = '';
  }

  /**
   * Switch active tab
   */
  setActiveTab(tab: 'encode' | 'decode'): void {
    this.activeTab = tab;
  }

  private openSnackBar(message: string): void {
    this.snackBar.open(message, 'Dismiss', {
      duration: 3000,
    });
  }
}
