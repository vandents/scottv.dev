import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { MatSnackBar } from '@angular/material/snack-bar';

interface DecodedJWT {
  header: any;
  payload: any;
  signature: string;
}

/** JWT Debugger page for encoding and decoding JWT tokens */
@Component({
  selector: 'app-jwt-debugger',
  templateUrl: './jwt-debugger.component.html',
  styleUrls: ['./jwt-debugger.component.scss']
})
export class JwtDebuggerComponent implements OnInit {
  // Encoded JWT token
  encodedToken = '';

  // Decoded parts
  decodedHeader = '';
  decodedPayload = '';
  decodedPayloadObject: any = null;
  signature = '';

  // For encoding
  headerInput = '{\n  "alg": "HS256",\n  "typ": "JWT"\n}';
  payloadInput = '{\n  "sub": "1234567890",\n  "name": "John Doe",\n  "iat": 1516239022\n}';
  secretKey = 'your-256-bit-secret';
  selectedAlgorithm = 'HS256';

  // Supported algorithms
  readonly algorithms = [
    { value: 'HS256', label: 'HS256 (HMAC-SHA256)', type: 'HMAC' },
    { value: 'HS384', label: 'HS384 (HMAC-SHA384)', type: 'HMAC' },
    { value: 'HS512', label: 'HS512 (HMAC-SHA512)', type: 'HMAC' }
  ];

  // Validation
  isValidToken = true;
  errorMessage = '';

  constructor(
    private title: Title,
    private snackBar: MatSnackBar
  ) {
    this.title.setTitle('Scott VandenToorn - JWT Debugger');
  }

  ngOnInit(): void {
    window.scrollTo(0, 0);
    // Set a sample JWT token
    this.encodedToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c';
    this.decodeToken();
  }

  /**
   * Decode the JWT token into header, payload, and signature
   */
  decodeToken(): void {
    this.isValidToken = true;
    this.errorMessage = '';

    if (!this.encodedToken || this.encodedToken.trim() === '') {
      this.decodedHeader = '';
      this.decodedPayload = '';
      this.signature = '';
      return;
    }

    try {
      const parts = this.encodedToken.split('.');

      if (parts.length !== 3) {
        throw new Error('Invalid JWT format. Token must have 3 parts separated by dots.');
      }

      // Decode header
      const header = JSON.parse(this.base64UrlDecode(parts[0]));
      this.decodedHeader = JSON.stringify(header, null, 2);

      // Decode payload
      const payload = JSON.parse(this.base64UrlDecode(parts[1]));
      this.decodedPayload = JSON.stringify(payload, null, 2);
      this.decodedPayloadObject = payload;

      // Store signature (not decoded, as it's binary)
      this.signature = parts[2];

    } catch (error) {
      this.isValidToken = false;
      this.errorMessage = error instanceof Error ? error.message : 'Invalid JWT token';
      this.decodedHeader = '';
      this.decodedPayload = '';
      this.decodedPayloadObject = null;
      this.signature = '';
    }
  }

  /**
   * Check if a field name or value is a timestamp
   */
  isTimestampField(key: string, value: any): boolean {
    // Common JWT timestamp fields
    const timestampFields = ['iat', 'exp', 'nbf', 'auth_time', 'updated_at', 'created_at'];
    
    // Check if field name is a known timestamp field
    if (timestampFields.includes(key.toLowerCase())) {
      return true;
    }
    
    // Check if value looks like a Unix timestamp (10 digits, reasonable date range)
    if (typeof value === 'number') {
      const timestamp = value;
      // Check if it's a 10-digit number (seconds since epoch)
      // Between year 2000 and 2100
      if (timestamp > 946684800 && timestamp < 4102444800) {
        return true;
      }
    }
    
    return false;
  }

  /**
   * Format timestamp to human-readable date
   */
  formatTimestamp(timestamp: number): string {
    const date = new Date(timestamp * 1000);
    return date.toLocaleString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      timeZoneName: 'short'
    });
  }

  /**
   * Get object keys for template iteration
   */
  getKeys(obj: any): string[] {
    return obj ? Object.keys(obj) : [];
  }

  /**
   * Get formatted JSON value as string
   */
  getValueString(value: any): string {
    if (typeof value === 'string') {
      return `"${value}"`;
    }
    if (typeof value === 'object' && value !== null) {
      return JSON.stringify(value, null, 2);
    }
    return String(value);
  }

  /**
   * Encode header and payload into a JWT token
   */
  async encodeToken(): Promise<void> {
    try {
      // Parse and validate JSON inputs
      const header = JSON.parse(this.headerInput);
      const payload = JSON.parse(this.payloadInput);

      // Update algorithm in header
      header.alg = this.selectedAlgorithm;

      // Encode header and payload
      const encodedHeader = this.base64UrlEncode(JSON.stringify(header));
      const encodedPayload = this.base64UrlEncode(JSON.stringify(payload));

      // Create signature using Web Crypto API
      const data = `${encodedHeader}.${encodedPayload}`;
      const signature = await this.createSignature(data, this.secretKey, this.selectedAlgorithm);

      // Combine all parts
      this.encodedToken = `${encodedHeader}.${encodedPayload}.${signature}`;

      // Update header input to reflect the algorithm change
      this.headerInput = JSON.stringify(header, null, 2);

    } catch (error) {
      this.openSnackBar('Error encoding token. Please check your JSON format.');
      console.error('Encoding error:', error);
    }
  }

  /**
   * Base64 URL decode
   */
  private base64UrlDecode(str: string): string {
    // Replace URL-safe characters
    let base64 = str.replace(/-/g, '+').replace(/_/g, '/');

    // Pad with '=' to make length multiple of 4
    while (base64.length % 4) {
      base64 += '=';
    }

    // Decode base64
    try {
      return decodeURIComponent(
        atob(base64)
          .split('')
          .map(c => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2))
          .join('')
      );
    } catch (error) {
      throw new Error('Failed to decode base64 string');
    }
  }

  /**
   * Base64 URL encode
   */
  private base64UrlEncode(str: string): string {
    const base64 = btoa(
      encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, (match, p1) => {
        return String.fromCharCode(parseInt(p1, 16));
      })
    );

    // Make it URL-safe
    return base64.replace(/\+/g, '-').replace(/\//g, '_').replace(/=/g, '');
  }

  /**
   * Create HMAC signature using Web Crypto API
   */
  private async createSignature(data: string, secret: string, algorithm: string): Promise<string> {
    // Map JWT algorithm to Web Crypto API algorithm
    const algorithmMap: { [key: string]: string } = {
      'HS256': 'SHA-256',
      'HS384': 'SHA-384',
      'HS512': 'SHA-512'
    };

    const hashAlgorithm = algorithmMap[algorithm];
    if (!hashAlgorithm) {
      throw new Error(`Unsupported algorithm: ${algorithm}`);
    }

    // Convert secret to key
    const encoder = new TextEncoder();
    const keyData = encoder.encode(secret);
    const key = await crypto.subtle.importKey(
      'raw',
      keyData,
      { name: 'HMAC', hash: hashAlgorithm },
      false,
      ['sign']
    );

    // Sign the data
    const dataBuffer = encoder.encode(data);
    const signatureBuffer = await crypto.subtle.sign('HMAC', key, dataBuffer);

    // Convert to base64url
    const signatureArray = Array.from(new Uint8Array(signatureBuffer));
    const signatureBase64 = btoa(String.fromCharCode(...signatureArray));
    return signatureBase64.replace(/\+/g, '-').replace(/\//g, '_').replace(/=/g, '');
  }

  /**
   * Copy token to clipboard
   */
  copyToken(): void {
    if (!this.encodedToken) {
      this.openSnackBar('No token to copy');
      return;
    }

    const tempElement = document.createElement('textarea');
    tempElement.style.display = 'none';
    tempElement.value = this.encodedToken;
    document.body.appendChild(tempElement);
    tempElement.focus();
    tempElement.select();
    document.execCommand('copy');
    document.body.removeChild(tempElement);

    this.openSnackBar('Token copied to clipboard!');
  }

  /**
   * Clear all fields
   */
  clearAll(): void {
    this.encodedToken = '';
    this.decodedHeader = '';
    this.decodedPayload = '';
    this.decodedPayloadObject = null;
    this.signature = '';
    this.isValidToken = true;
    this.errorMessage = '';
  }

  /**
   * Format JSON input
   */
  formatJSON(field: 'header' | 'payload'): void {
    try {
      if (field === 'header') {
        const parsed = JSON.parse(this.headerInput);
        this.headerInput = JSON.stringify(parsed, null, 2);
      } else {
        const parsed = JSON.parse(this.payloadInput);
        this.payloadInput = JSON.stringify(parsed, null, 2);
      }
    } catch (error) {
      this.openSnackBar('Invalid JSON format');
    }
  }

  private openSnackBar(message: string): void {
    this.snackBar.open(message, 'Dismiss', {
      duration: 3000,
    });
  }
}
