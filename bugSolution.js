```javascript
// Ensure your tailwind.config.js includes all the necessary files
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [],
}

// Run the build process for tailwind
npm run build // or yarn build
```
```html
<!-- index.html -->
<div class="bg-red-500 p-4">
  <p>This is some text.</p>
</div>
```