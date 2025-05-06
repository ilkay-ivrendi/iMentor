import { Component, inject } from '@angular/core';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { map } from 'rxjs/operators';
import { AsyncPipe, CommonModule } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { UserStrengthsChartComponent } from "../../common/charts/user-strengths-chart/user-strengths-chart.component";
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
  imports: [
    AsyncPipe,
    CommonModule,
    MatGridListModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatListModule,
    UserStrengthsChartComponent
  ]
})
export class DashboardComponent {
  private breakpointObserver = inject(BreakpointObserver);

  quickStats = [
    { label: 'Completed Lessons', value: 42, icon: 'check_circle', color: 'primary' },
    { label: 'Upcoming Lessons', value: 5, icon: 'schedule', color: 'accent' },
    { label: 'Active Mentors', value: 8, icon: 'person', color: 'warn' },
    { label: 'Total Hours', value: 120, icon: 'access_time', color: 'primary' }
  ];

  upcomingSchedules = [
    { title: 'Math Tutoring with Alice', date: '2025-05-08', time: '10:00 AM', location: 'Room A1' },
    { title: 'Science Workshop', date: '2025-05-09', time: '2:00 PM', location: 'Lab 3' },
    { title: 'Career Mentorship: Software', date: '2025-05-10', time: '4:00 PM', location: 'Online' },
    { title: 'Group Project Review', date: '2025-05-11', time: '1:30 PM', location: 'Room B2' }
  ];

  lessonSuggestions = [
    { lesson: "Introduction to Web Development", mentor: "Alice Johnson", area: "Frontend Development" },
    { lesson: "Fundamentals of Mathematics", mentor: "Dr. Brian Smith", area: "Mathematics" },
    { lesson: "Creative Writing Workshop", mentor: "Catherine Lee", area: "Literature" },
    { lesson: "Basic Python Programming", mentor: "Daniel Kim", area: "Software Engineering" },
    { lesson: "Understanding Artificial Intelligence", mentor: "Emily Zhang", area: "AI & Machine Learning" },
    { lesson: "Public Speaking Essentials", mentor: "Franklin Carter", area: "Communication" },
    { lesson: "Environmental Science Basics", mentor: "Grace Patel", area: "Environmental Studies" },
    { lesson: "Design Thinking for Beginners", mentor: "Henry Brooks", area: "UX/UI Design" },
    { lesson: "Emotional Intelligence & Self-Awareness", mentor: "Isla Rivera", area: "Psychology" },
    { lesson: "Collaboration & Team Building Skills", mentor: "Jacob Lee", area: "Leadership & Management" }
  ];
  

  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { id: 1, title: 'Student Skill & Interest Profile', cols: 2, rows: 1 },
          { id: 2, title: 'Quick Stats', cols: 2, rows: 1 },
          { id: 3, title: 'Lesson Suggestions', cols: 2, rows: 2 },
          { id: 4, title: 'Upcoming Schedules', cols: 2, rows: 1 }
        ];
      }

      return [
        { id: 1, title: 'Student Skill & Interest Profile', cols: 2, rows: 1 },
        { id: 2, title: 'Quick Stats', cols: 1, rows: 1 },
        { id: 3, title: 'Lesson Suggestions', cols: 1, rows: 2 },
        { id: 4, title: 'Upcoming Schedules', cols: 1, rows: 1 }
      ];
    })
  );
}
