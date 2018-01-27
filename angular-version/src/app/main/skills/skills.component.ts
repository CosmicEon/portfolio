import { Component, OnInit } from '@angular/core';

import { Skills } from '../../constants/skills';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  public skills = Skills.techSkills;
  public preface = Skills.preface;

  constructor() { }

  ngOnInit() {
  }

}
