import {AfterViewInit, Component, ElementRef, inject, OnDestroy} from '@angular/core';

@Component({
  selector: 'app-refused',
  imports: [],
  templateUrl: './refused.html',
  styleUrl: './refused.css',
})
export class Refused implements AfterViewInit,OnDestroy {
  elementRef = inject(ElementRef)
  ngAfterViewInit() {
    this.elementRef.nativeElement.ownerDocument
    .body.style.background = 'linear-gradient(135deg, #0a0101, #3b0404 50%, #250000), url("data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\' width=\'200\' height=\'200\'><filter id=\'n\'><feTurbulence type=\'fractalNoise\' baseFrequency=\'0.8\' numOctaves=\'4\' stitchTiles=\'stitch\'/></filter><rect width=\'100%\' height=\'100%\' filter=\'url(%23n)\' opacity=\'0.08\'/></svg>")';
  }
  ngOnDestroy() {
    this.elementRef.nativeElement.ownerDocument
      .body.style.background = '';
  }
}
