import { Component } from '@angular/core';
import { NgbSlideEvent } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-photo-display',
  templateUrl: './photo-display.component.html',
  styleUrls: ['./photo-display.component.css'],
  standalone: false
})
export class PhotoDisplayComponent {
  protected readonly initialSlideIndex = 0
  protected activeSlideIndex = this.initialSlideIndex;

  onSlide(event: NgbSlideEvent) {
    this.activeSlideIndex = parseInt(event.current)
  }
}
