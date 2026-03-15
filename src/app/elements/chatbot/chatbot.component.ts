import { Component, inject, NgZone, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser, NgClass, NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ChatService, ChatMessage } from '@services/chat-service/chat.service';


@Component({
  standalone: true,
  selector: 'app-chatbot',
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.scss'],
  imports: [
    NgIf, NgFor, NgClass, FormsModule,
    MatButtonModule, MatInputModule,
    MatFormFieldModule, MatProgressSpinnerModule,
    FontAwesomeModule
  ]
})
export class ChatbotComponent {
  isOpen = false;
  isLoading = false;
  userInput = '';
  messages: ChatMessage[] = [];
  isBrowser = isPlatformBrowser(inject(PLATFORM_ID));

  private chatService = inject(ChatService);
  private ngZone = inject(NgZone);

  toggle() {
    this.isOpen = !this.isOpen;
    if (this.isOpen && this.messages.length === 0) {
      this.messages.push({
        role: 'assistant',
        content: 'Hi! I\'m Scott\'s AI assistant. Ask me anything about his experience, projects, or hobbies!'
      });
    }
  }

  send() {
    const question = this.userInput.trim();
    if (!question || this.isLoading) return;

    this.messages.push({ role: 'user', content: question });
    this.userInput = '';
    this.isLoading = true;

    this.chatService.ask(question).subscribe(answer => {
      this.ngZone.run(() => {
        this.messages.push({ role: 'assistant', content: answer.trim() });
        this.isLoading = false;
      });
    });
  }

  onKeydown(event: KeyboardEvent) {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      this.send();
    }
  }
}
