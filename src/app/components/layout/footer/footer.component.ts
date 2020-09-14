import {Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  constructor(private router: Router) {
    router.events.subscribe(() => this.position_footer());
  }

  position_footer(): void {
    const footer = $(document.getElementsByClassName('footer')[0]);
    const text = document.getElementsByClassName('text');
    // tslint:disable-next-line:only-arrow-functions typedef
    const calculateIndexHeight = function() {
      let totalHeight = 0;
      totalHeight += $(document.getElementsByClassName('header')[0]).outerHeight();
      totalHeight += $(document.getElementById('cssmenu')).outerHeight();
      // tslint:disable-next-line:only-arrow-functions typedef
      $(text).toArray().forEach(function(item) {
        totalHeight += $(item).outerHeight();
      });

      return totalHeight;
    };

    // tslint:disable-next-line:only-arrow-functions typedef
    const positionFooter = function() {
      let reference;

      if (text.length > 0) {
        reference = calculateIndexHeight();
      } else {
        reference = document.body.scrollHeight;
      }

      const windowHeight = window.innerHeight;

      if (reference < (windowHeight - footer.outerHeight() - 10)) {
        footer.addClass('adjusted');
      } else {
        footer.removeClass('adjusted');
      }
    };

    // tslint:disable-next-line:only-arrow-functions typedef
    setTimeout(function() {
      positionFooter();
    }, 200);

    $(window).on('resize', positionFooter);

    // when a nav tab is clicked, height should be re-evaluated
    const buttons = $('.nav-tabs li a').toArray();
    // add an onClick event for all the buttons on the page
    // tslint:disable-next-line:only-arrow-functions typedef
    buttons.forEach(function(item) {
      // tslint:disable-next-line:only-arrow-functions typedef
      $(item).on('click', function() {
        // tslint:disable-next-line:only-arrow-functions typedef
        setTimeout(function() {
          positionFooter();
        }, 200);
      });
    });
  }
}
