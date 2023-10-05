# AngularComponent - Notes

Here are the steps in creating a new Angular component:

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
