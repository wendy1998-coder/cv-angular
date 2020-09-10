import { Component, OnInit } from '@angular/core';
import { projects } from '../../../../../angular.json';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  public scripts: string[];
  constructor() {}

  ngOnInit(): void {
    this.scripts = Array.from(projects['angular-website'].architect.build.options.scripts.values());
  }

}
