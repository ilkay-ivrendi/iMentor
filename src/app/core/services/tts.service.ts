import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface ttsData {
    audioPath: string,
    message: string,
}

@Injectable({
    providedIn: 'root'
})
export class TTSService {
    private apiUrl = 'http://localhost:8080/api/v1/tts';

    constructor(private http: HttpClient) { }

    generateTTS(body: any): Observable<ttsData> {
        return this.http.post<ttsData>(this.apiUrl + "/synthesize", body); // Add model later
    }
}
