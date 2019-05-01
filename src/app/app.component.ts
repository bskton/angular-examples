import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  todos: string[] = [
    'Get eggs from grocery store',
    'Change the oil & filter in car',
    'Do the dishes',
    'Pay the utility bill'
  ];

  completed: string[] = [
    'Wash the car',
    'Response to InMail'
  ]
}
