# Nested Checkbox Component 
[![Nested Checkbox](/docs/demo-snap.gif)](https://customnestedcheckbox.netlify.app/)


● Component should act like a traditional form input element
```html 

<!-- Using HTML Labels with htmlFor for targeting inputs from text -->
<!-- Using Native Checkbox HTML Tag without adding additional complexity to Code  -->
<!-- Managed Custom Checbox Design Using ::before psuedo elements with minimum dependency code  -->

```


● Lightweight with no addtional Dependency

```js

 "dependencies": {
    "react": "^18.0.0",
    "react-dom": "^18.0.0"
  },

```

● Feel free to use any 3rd party libraries, as far as you are mindful about the size it adds to
the project.
● Each node can be nested to N levels
● Overflowing text wraps to next line adjusting the height
● Should emit necessary events
● Style Isolation
● Submission in the form of github repo, with example integrated.
● Checkbox to have intermediate state
● (Bonus) additional features
● (Bonus) small documentation in any form
  
- emit necessary events on Checkbox State Change 

```js
     // Firing Custom Event on Change
    const customChangeEvent = new Event('customChange');
    e.target.dispatchEvent(customChangeEvent);

```



-  Checkbox to have intermediate state
- Style Isolation
- (Bonus) small documentation in any form


