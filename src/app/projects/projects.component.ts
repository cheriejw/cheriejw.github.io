import { Component, OnInit } from '@angular/core';
import { ProjectSubject, Employer } from './projects.component.model';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
/**
 * @summary Displays exactly 3 project subjects and drills down.
 */
export class ProjectsComponent implements OnInit {
  onCloseSubScreen: Function;
  onListItemClick: Function;
  projectSubjects: ProjectSubject[];
  selectedItemID: String;

  constructor() {
    this.selectedItemID = '';
    this.projectSubjects = [
      require('app/projects/project-data/0/subject-info.json'),
      require('app/projects/project-data/1/subject-info.json'),
      require('app/projects/project-data/2/subject-info.json')
    ];
    this.onListItemClick = (id) => {
      // if (includes(this.selectedItemID, this.SUBJECT_IDS) || this.selectedItemID.length === 0) {
      this.selectedItemID = id;
      console.log('HELLO ' + this.selectedItemID);
    };
    this.onCloseSubScreen = () => {
      this.selectedItemID = '';
    };
  }

  ngOnInit() {
  }

}
