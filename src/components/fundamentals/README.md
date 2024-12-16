# Basic Tailwind CSS fundamentals
## Introduction
Tailwind CSS is a first-utility CSS framework, which works by scanning all your HTML, JavaScript/TypeScript and template files looking for *classnames*, generating the corresponding styles and then writing them to a static CSS file.

It's main purpose is allow the dev to write CSS using utility class, instead of writing CSS for every class. In practical therms, we go from this:

```html
<div class="element"></div>
```

```css
/* The Box Model layers */
.element {
  content: "This is the actual content";    /* The innermost layer - your text or nested elements */
  padding: 20px;                           /* Space between content and border */
  border: 1px solid black;                 /* The border around the padding */
  margin: 10px;                            /* Space outside the border */
}
```

To this:

```html
<div className="p-5 border m-2">
  <!-- This div has padding (p-5), a border, and margin (m-2) -->
  Content
</div>
```

