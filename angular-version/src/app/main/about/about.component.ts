import { Component, OnInit } from '@angular/core';
import { About } from '../../constants/about';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  public aboutMe = About.me;

  constructor() { }

  ngOnInit() {
  }

}
