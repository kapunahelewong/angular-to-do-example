# Add some styles

The Angular CLI generates two types of style files:

* Component styles: The Angular CLI gives each component its own file for styles.
  The styles in this file apply only to its component.

* `styles.css`: In the `src` directory, the styles in this file apply to your entire application unless you specify styles at the component level.

Depending on whether you are using a CSS preprocessor, the extension on your CSS files can vary.
Angular supports plain CSS, SCSS, Sass, Less, and Stylus.

In `src/styles.css`, paste the following styles:

```css

body {
  font-family: Helvetica, Arial, sans-serif;
}

.btn-wrapper {
  /* flexbox */
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
}

.btn {
  color: #000;
  background-color: #fff;
  border: 2px solid #cecece;
  padding: .35rem 1rem .25rem 1rem;
  font-size: 1rem;
}

.btn:hover {
  background-color: #ecf2fd;
}

.btn:active {
  background-color: #d1e0fe;
}

.btn:focus {
  outline: none;
  border: black solid 2px;
}

.btn-primary {
  color: #fff;
  background-color: #000;
  width: 100%;
  padding: .75rem;
  font-size: 1.3rem;
  border: black solid 2px;
  margin: 1rem 0;
}

.btn-primary:hover {
  background-color: #444242;
}

.btn-primary:focus {
  color: #000;
  outline: none;
  border: #000 solid 2px;
  background-color: #d7ecff;
}

.btn-primary:active {
  background-color: #212020;
}

```

The CSS in `src/styles.css` apply to the entire application, however, these styles don't effect everything on the page.
The next step is to add styles that apply specifically to the `AppComponent`.

In `app.component.css`, add the following styles:

```css

body {
  color: #4d4d4d;
  background-color: #f5f5f5;
  color: #4d4d4d;
}

.main {
  max-width: 500px;
  width: 85%;
  margin: 2rem auto;
  padding: 1rem;
  text-align: center;
  box-shadow: 0 2px 4px 0 rgba(0,0,0,.2), 0 2.5rem 5rem 0 rgba(0,0,0,.1);
}

@media screen and (min-width: 600px) {
  .main {
    width: 70%;
  }
}

label {
  font-size: 1.5rem;
  font-weight: bold;
  display:block;
  padding-bottom: 1rem;
}

.lg-text-input {
  width: 100%;
  padding: 1rem;
  border: 2px solid #000;
  display: block;
  box-sizing: border-box;
  font-size: 1rem;
}

.btn-wrapper {
  margin-bottom: 2rem;
}

.btn-menu {
  flex-basis: 32%;
}

.active {
  color: green;
}

ul {
  padding-inline-start: 0;
}

 ul li {
    list-style: none;
}
```

Now you should have a styled to-do list with an `<input>` and **Add** button that help you add new items to the list.

The next step is to refactor so you can do more with your list.
