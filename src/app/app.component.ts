import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  headingText = 'Exercise – ngForOf Directive';
  books = [
    { title: 'The Hitchhiker\'s Guide to the Galaxy', author: 'Douglas Adams'},
    { title: 'The Principia : Mathematical Principles of Natural Philosophy', author: 'Isaac Newton'},
    { title: 'Start with Why: How Great Leaders Inspire Everyone to Take Action', author: 'Simon Sinek'},
    { title: 'Frankenstein', author: 'Mary Shelley'},
    { title: 'To Kill a Mockingbird', author: 'Harper Lee'}
  ];
}
