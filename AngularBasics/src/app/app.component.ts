import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'AngularBasics';
  name = 'Akwasi Konadu Akuoko';
  age: number = 54;
  getNameAndAge = () => {
    return `My name is ${this.name} and I am ${this.age} years old`;
  };
}
