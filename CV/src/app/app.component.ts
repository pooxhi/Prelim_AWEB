import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PersonInfoComponent } from './person-info/person-info.component';
import { EducComponent } from './educ/educ.component';
import { SkillsComponent } from './skills/skills.component';
import { TrainingComponent } from './training/training.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, PersonInfoComponent, EducComponent, SkillsComponent, TrainingComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'CV';
}
