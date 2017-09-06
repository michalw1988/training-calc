import { Component, OnInit } from '@angular/core';
declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

$(document).on('click', 'a', function(event){
  event.preventDefault();

  // smooth scrolling
  $('html, body').animate({
      scrollTop: $( $.attr(this, 'href') ).offset().top-70
  }, 500);
});