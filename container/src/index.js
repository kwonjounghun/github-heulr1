// You can write your own logic here to determine the actual url
window.headerUrl = 'http://localhost:3002';
window.footerUrl = 'https://localhost:3003';

// Use dynamic import here to allow webpack to interface with module federation code
import('./bootstrap');