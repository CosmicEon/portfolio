import { Component, OnInit } from '@angular/core';

import { Projects } from '../../constants/projects';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  public projects = Projects.information;
  constructor() { }

  ngOnInit() {
  }

}
