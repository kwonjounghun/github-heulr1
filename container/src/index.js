// You can write your own logic here to determine the actual url
window.headerUrl = 'http://localhost:3002';
window.footerUrl = 'http://localhost:3003';
window.app1Url = 'http://localhost:3004';
window.app2Url = 'http://localhost:3005';

// Use dynamic import here to allow webpack to interface with module federation code
import('./bootstrap');
