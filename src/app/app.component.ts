import { Component, OnInit } from '@angular/core';
import { ToolbarService } from './toolbar.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'Maaze';
  constructor(public toolbar: ToolbarService) {this.toolbar.hide()}


  ngOnInit(): void {
    // this.toolbar.hide()
  }


  logOut() {
    this.toolbar.valid = false;
    this.toolbar.hide()
  }
}
