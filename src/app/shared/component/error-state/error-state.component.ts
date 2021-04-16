import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-error-state',
  templateUrl: './error-state.component.html',
  styleUrls: ['./error-state.component.sass']
})
export class ErrorStateComponent implements OnInit {

  @Input() message: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
