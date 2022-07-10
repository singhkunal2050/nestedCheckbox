[![Netlify Status](https://api.netlify.com/api/v1/badges/fb428de5-5c36-45b8-8db2-48de813e4614/deploy-status)](https://app.netlify.com/sites/customnestedcheckbox/deploys)
# Nested Checkbox Component 
[![Nested Checkbox](/docs/demo-snap.gif)](https://customnestedcheckbox.netlify.app/)


- Component should act like a traditional form input element
```html 

<!-- Using HTML Labels with htmlFor for targeting inputs from text -->
<!-- Using Native Checkbox HTML Tag without adding additional complexity to Code  -->
<!-- Managed Custom Checbox Design Using ::before psuedo elements with minimum dependency code  -->

```


- Lightweight with no addtional Dependency

```js

 "dependencies": {
    "react": "^18.0.0",
    "react-dom": "^18.0.0"
  },

```

- Each node can be nested to N levels

- emits necessary events

```js
     // Firing Custom Event on Change
    const customChangeEvent = new Event('customChange');
    e.target.dispatchEvent(customChangeEvent);

```



- Checkbox with intermediate state
```css

input[data-intermediate="true"]::before {
  box-shadow: inset 1em 1em #ff9901;
}

```
- Memoize for rendering optimization

