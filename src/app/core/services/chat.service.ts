import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface ChatMessage {
  userId: string,
  mentorId: string,
  message: string,
  sessionId: any,
  stream: boolean
}

@Injectable({
  providedIn: 'root',
})
export class ChatService {
  private apiUrl = 'http://localhost:8080/api/v1/chat';

  constructor(private http: HttpClient) { }

  // Send a message
  sendMessage(chatMessage: ChatMessage): Observable<any> {
    return this.http.post(`${this.apiUrl}`, chatMessage);
  }

  // Get chat history between two users
  getMessages(sender: string, receiver: string): Observable<ChatMessage[]> {
    return this.http.get<ChatMessage[]>(
      `${this.apiUrl}/history?sender=${sender}&receiver=${receiver}`
    );
  }

  // Optionally: Get all conversations of current user
  getConversations(username: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/conversations/${username}`);
  }
}
