import { HostListener } from '@angular/core';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isShowScrollToTop = false;
  // tslint:disable-next-line: typedef
  @HostListener('window:scroll', ['$event']) onWindowScroll() {
    const c = document.documentElement.scrollTop || document.body.scrollTop;
    this.isShowScrollToTop = c > 100;
  }

  scrollToTop = () => {
    const c = document.documentElement.scrollTop || document.body.scrollTop;
    console.log(c);
    if (c > 0) {
      window.requestAnimationFrame(this.scrollToTop);
      window.scrollTo(0, c - c / 16);
    }
  }


}

