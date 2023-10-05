# AngularComponent - Notes

## Table of Content

- [Steps in creating a new Angular Component](#steps-in-creating-a-new-angular-component)

- [How to create a new Angular Component using the command line](#how-to-create-a-new-angular-component-using-the-command-line)

## Steps in creating a new Angular Component

1. Create a folder for your component, in my case it's called `Container`
2. Create a new Typescript file for the particular component, in our case it's called `container.component.ts`.
3. Now create the angular component using a class with the `@Component` decorator, inside the `container.component.ts`
4. In the `@Component` decorator specify the:

    - `selector`: A CSS selector that tells Angular to create and insert an instance of this component wherever it finds the corresponding tag in template HTML. For example, if an application's HTML contains `<app-container></app-container>`, then Angular inserts an instance of the HeroListComponent view between those tags.

    - `templateUrl`: The HTML view template corresponding to the component created.

    - `styleUrls`: The link of all the stylesheets used within or corresponding to the HTML view template.

5. Create an HTML template that will work with the Typescript component, in our case it'll be called `container.component.html`.
6. If you specified a `styleUrls` create the appropriate css styling files according to the `stylesUrls`
7. Register your new Angular component in the `app.module.ts` file by importing it and adding it to the `declarations` array property in the `@NgModule` decorator.

## How to create a new Angular Component using the command line

1. Open the terminal and type `ng generate component [component-name]`, where `[component-name]` is the name of the component you are creating. Example: `ng generate component components/nav`, this will create a nav component with all the parts, i.e html, css, typescript file, and a spec file inside a parent folder called nav which is also in a components folder. This command will also register your component in the `app.module.ts` file.

2. You can also create a new component with the following shortcut command: `ng g c components/header`
