# AngularBasics - Notes

## Table of Content

1. [What is a component in Angular](#what-is-a-component-in-angular)

## What is a component in Angular

**Component** is a Typescript class decorated with `@Component` decorator and it contains methods and properties that we can use in our HTML.

In TypeScript, a decorator is a special kind of declaration that can be attached to a class, method, accessor, property, or parameter. Decorators use the form `@expression`, where `expression` must evaluate to a function that will be called at runtime with information about the decorated declaration [Source 2](https://blog.logrocket.com/practical-guide-typescript-decorators/).

Decorators can be used to modify or augment the behavior of the target, such as a class or method. They're used for a variety of tasks, including logging, type checking, or modifying the target's functionality [Source 2](https://blog.logrocket.com/practical-guide-typescript-decorators/).

In an Angular application the main component is the root component, and there is only one root component, in our case it is the `app-root` component. The root component can hold many other nested components.

An example of an Angular component:

``` typescript
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

```
