import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MentorsService } from './mentors.service';

@Component({
  selector: 'app-mentors',
  imports: [CommonModule, FlexLayoutModule, MatCardModule, MatButtonModule, MatIconModule],
  templateUrl: './mentors.component.html',
  styleUrl: './mentors.component.scss'
})
export class MentorsComponent implements OnInit {
  mentors: any = [];



  constructor(private mentorsService: MentorsService) { }

  ngOnInit(): void {
    this.mentorsService.getMentors().subscribe({
      next: (data) => this.mentors = data,
      error: (err) => console.error('Error loading mentors:', err)
    });
  }

}
