import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

interface Tool {
  name: string;
  description: string;
  icon: string[];
  route: string;
  actionText: string;
}

/** Tools page displaying available developer tools */
@Component({
  standalone: false,
  selector: 'app-tools',
  templateUrl: './tools.component.html',
  styleUrls: ['./tools.component.scss']
})
export class ToolsComponent implements OnInit {
  tools: Tool[] = [
    {
      name: 'Base64 Encoder/Decoder',
      description: 'Encode text to Base64 or decode Base64 to text',
      icon: ['fas', 'file-code'],
      route: '/base64-tool',
      actionText: 'Encode or decode'
    },
    {
      name: 'Diff Checker',
      description: 'Compare two text blocks and see the differences highlighted',
      icon: ['fas', 'code-branch'],
      route: '/diff-checker',
      actionText: 'Compare texts'
    },
    {
      name: 'JSON Formatter',
      description: 'Beautify, minify, and validate JSON with ease',
      icon: ['fas', 'magic'],
      route: '/json-formatter',
      actionText: 'Format JSON'
    },
    {
      name: 'Markdown Previewer',
      description: 'Preview GitHub Flavored Markdown with syntax highlighting',
      icon: ['fas', 'file-code'],
      route: '/markdown-previewer',
      actionText: 'Preview markdown'
    },
    {
      name: 'JWT Debugger',
      description: 'Encode and decode JSON Web Tokens',
      icon: ['fas', 'key'],
      route: '/jwt-debugger',
      actionText: 'Decode a token'
    }
  ];

  constructor(
    private title: Title,
    private router: Router
  ) {
    this.title.setTitle('Scott VandenToorn - Tools');
  }

  ngOnInit(): void {
    window.scrollTo(0, 0);
  }

  navigateToTool(route: string): void {
    this.router.navigate([route]);
  }
}
