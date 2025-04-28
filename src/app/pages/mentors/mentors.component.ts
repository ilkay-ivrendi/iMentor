import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-mentors',
  imports: [CommonModule, FlexLayoutModule, MatCardModule, MatButtonModule, MatIconModule],
  templateUrl: './mentors.component.html',
  styleUrl: './mentors.component.scss'
})
export class MentorsComponent {
  mentors = [
    {
      name: 'Samurai Mentor',
      description: 'A disciplined and honorable Samurai guiding users through wisdom, discipline, and the art of war.',
      avatar: 'https://cdn.prod.website-files.com/632ac1a36830f75c7e5b16f0/67b7a5f48c891e8806fa526e_C49-3LfYdkeHDr3LHVYYmueA5ZWiUIDwp6ZBJHLSXao.webp',
      lessons: [
        'Bushido Code',
        'History of Samurai',
        'Zen Buddhism',
        'Martial Arts Philosophy',
        'Swordsmanship Basics'
      ]
    },
    {
      name: 'History Teacher',
      description: 'Learn the stories of our ancestors and dive deep into world history with a master storyteller.',
      avatar: 'https://static.vecteezy.com/system/resources/thumbnails/029/796/015/small_2x/asian-girl-anime-avatar-ai-art-photo.jpg',
      lessons: [
        'Ancient Civilizations',
        'World Wars',
        'Renaissance Art & Culture',
        'Modern History'
      ]
    },
    {
      name: 'Music Maestro',
      description: 'Dive into the world of music with a virtuoso who teaches the beauty of music theory and performance.',
      avatar: 'https://static.vecteezy.com/system/resources/thumbnails/029/796/022/small_2x/asian-girl-anime-avatar-ai-art-photo.jpg',
      lessons: [
        'Music Theory',
        'Composition',
        'Music History',
        'Piano Basics'
      ]
    },
    {
      name: 'History Teacher',
      description: 'Learn the stories of our ancestors and dive deep into world history with a master storyteller.',
      avatar: 'https://img.freepik.com/premium-photo/high-quality-digital-image-wallpaper_783884-173025.jpg',
      lessons: [
        'Ancient Civilizations',
        'World Wars',
        'Renaissance Art & Culture',
        'Modern History'
      ]
    }
    // More mentors can be added here...
  ];
}
