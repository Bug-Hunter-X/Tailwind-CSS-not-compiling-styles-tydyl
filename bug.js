```javascript
// tailwind.config.js
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [],
}
```
```html
<!-- index.html -->
<div class="bg-red-500 p-4">
  <p>This is some text.</p>
</div>
```