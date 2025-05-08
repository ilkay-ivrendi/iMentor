import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class TTSService {
    private apiUrl = 'http://localhost:8080/api/v1/tts';

    constructor(private http: HttpClient) { }

    generateTTS(body: any): Observable<any[]> {
        return this.http.post<any[]>(this.apiUrl + "/synthesize", body); // Add model later
    }
}
