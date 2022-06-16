import { Component, HostListener, OnInit } from '@angular/core';
import jump from 'jump.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'NuCare';
  collection: any;
  list = true;
  ariaExpanded: boolean = false;
  windowScrolled: boolean = false;

  constructor() {

  }
  ngOnInit(): void {
    this.response();
  }

  response() {
    if (window.innerWidth <= 500) {
      this.list = true;
    }
    else {
      this.list = false;
    }
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll = ($event: any) => {
    const verticalOffset = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

    if (verticalOffset > 80) {
      document.getElementById("nav").classList.add('navbar-shrink');
      this.windowScrolled = true;
    }
    else {
      document.getElementById("nav").classList.remove('navbar-shrink');
      this.windowScrolled = false;
    }
  }
  scrollToTarget = (target: string) => {
    const menuButtonElement = document.getElementById("menu-button");
    menuButtonElement.classList.add('collapsed');
    menuButtonElement.setAttribute("aria-expanded", "false");
    document.getElementById("navbarNavAltMarkup").classList.remove('show');

    this.ariaExpanded = false;
    jump(target, {
      offset: -15,
      duration: 500,
    });

  }
}

