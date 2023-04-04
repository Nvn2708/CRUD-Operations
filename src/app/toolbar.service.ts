import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ToolbarService {

  visible: boolean = false;

  valid: boolean = false;

  constructor() { }

  hide() { this.visible = true; }

  show() { this.visible = false; }

}
