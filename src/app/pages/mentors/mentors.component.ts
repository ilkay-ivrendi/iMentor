import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { Router, RouterModule } from '@angular/router';
import { MentorsService } from '@core/services/mentors.service';

@Component({
  selector: 'app-mentors',
  imports: [CommonModule, RouterModule, FlexLayoutModule, MatCardModule, MatButtonModule, MatIconModule],
  templateUrl: './mentors.component.html',
  styleUrl: './mentors.component.scss'
})
export class MentorsComponent implements OnInit {
  mentors: any = [];
  currentAudio: HTMLAudioElement | null = null;

  constructor(private mentorsService: MentorsService, private router: Router) { }

  ngOnInit(): void {
    this.mentorsService.getMentors().subscribe({
      next: (data) => this.mentors = data,
      error: (err) => console.error('Error loading mentors:', err)
    });
  }

  playAudio(audioUrl: string): void {
    if (!audioUrl) return;

    this.stopAudio(); // Stop any existing audio

    this.currentAudio = new Audio(audioUrl);
    this.currentAudio.play().catch((err) => console.error("Audio play error:", err));
  }

  stopAudio(): void {
    if (this.currentAudio) {
      this.currentAudio.pause();
      this.currentAudio.currentTime = 0;
      this.currentAudio = null;
    }
  }

  chatWithMentor(mentor: any) {
    this.mentorsService.setMentor(mentor);
    this.stopAudio();
    this.router.navigate(['/imentor']);
  }
}
