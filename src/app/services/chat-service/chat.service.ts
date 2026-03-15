import { Injectable, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from '@environments/environment';


export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}

@Injectable({ providedIn: 'root' })
export class ChatService {
  private isBrowser = isPlatformBrowser(inject(PLATFORM_ID));
  private http = inject(HttpClient);

  private get apiUrl(): string {
    return environment.production
      ? 'https://us-east1-scottv-dev.cloudfunctions.net/chat'
      : 'http://127.0.0.1:5001/scottv-dev/us-east1/chat';
  }

  ask(question: string): Observable<string> {
    if (!this.isBrowser) return of('');

    return this.http
      .post<{ answer: string }>(this.apiUrl, { question })
      .pipe(
        map(res => res.answer),
        catchError(() => of('Sorry, something went wrong. Please try again.'))
      );
  }
}
