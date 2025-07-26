import {Component, Input, OnInit} from '@angular/core';
import {NavTab} from "../../models/nav-tab";

@Component({
  selector: 'app-nav-tabs',
  templateUrl: './nav-tabs.component.html',
  styleUrls: ['./nav-tabs.component.css'],
  standalone: true
})
export class NavTabsComponent implements OnInit {
  @Input({ required: true }) navTabs!: NavTab[]

  protected activeTab: NavTab | undefined;

  ngOnInit(): void {
    this.activeTab = this.navTabs[0];
  }

  protected setActiveTab(tab: NavTab){
    this.activeTab = tab;
  }
}
