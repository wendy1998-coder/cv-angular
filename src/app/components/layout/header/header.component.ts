import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  query: string;

  constructor(private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(queryParams => {
      if (typeof queryParams.query !== 'undefined') {
        this.query = queryParams.query;
      }
    });
  }

  onQuery(event): void {
    this.query = event.target.value;

    this.router.navigate(
      ['search'],
      {
        queryParams: {
          offset: 0,
          count: 30,
          query: event.target.value
        },
        queryParamsHandling: 'merge'
      }
    );
    return;
  }
}
