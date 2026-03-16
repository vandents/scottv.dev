import { Component, inject, PLATFORM_ID, signal } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
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
    FormsModule,
    MatButtonModule, MatInputModule,
    MatFormFieldModule, MatProgressSpinnerModule,
    FontAwesomeModule
  ]
})
export class ChatbotComponent {
  isOpen = signal(false);
  isLoading = signal(false);
  userInput = '';
  messages = signal<ChatMessage[]>([]);
  isBrowser = isPlatformBrowser(inject(PLATFORM_ID));

  private chatService = inject(ChatService);

  toggle() {
    this.isOpen.update(v => !v);
    if (this.isOpen() && this.messages().length === 0) {
      this.messages.set([{
        role: 'assistant',
        content: 'Hi! I\'m Scott\'s AI assistant. Ask me anything about his experience, projects, or hobbies!'
      }]);
    }
    // Prevent background scroll on mobile when chat is open
    if (this.isBrowser) {
      document.body.style.overflow = this.isOpen() ? 'hidden' : '';
    }
  }

  send() {
    const question = this.userInput.trim();
    if (!question || this.isLoading()) return;

    this.messages.update(msgs => [...msgs, { role: 'user', content: question }]);
    this.userInput = '';
    this.isLoading.set(true);

    this.chatService.ask(question).subscribe(answer => {
      this.messages.update(msgs => [...msgs, { role: 'assistant', content: answer.trim() }]);
      this.isLoading.set(false);
    });
  }

  onKeydown(event: KeyboardEvent) {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      this.send();
    }
  }
}
