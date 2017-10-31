# Simple Timer
simple-timer is a basic, easy-to-use timer for your projects.

# Installation

Install your timer via npm

```bash
npm install -g @gilbert2017/simple-timer
```

or you can also call the timer in a script tag:

```bash
<script src="https://cdn.rawgit.com/GilTorch/simple-timer/master/simple-timer-client/js/index_production.js"></script>
```
# Example
After installation, you can then call your timer like so:
```bash
var timer=new Timer();
timer.setMiliseconds(5000);
timer.start();
var ouput=document.getElementById("timer-output");//output can be a paragraph htmlelement
timer.setVue(ouput);
```

# License
[MIT](https://codepen.io/BlessedCamper/full/JOdWEL/)


[npm-image]: https://img.shields.io/npm/v/live-xxx.svg
[npm-url]: https://npmjs.org/package/live-xxx
[travis-image]: https://img.shields.io/travis/live-js/live-xxx/master.svg
[travis-url]: https://travis-ci.org/live-js/live-xxx
[coveralls-image]: https://img.shields.io/coveralls/live-js/live-xxx/master.svg
[coveralls-url]: https://coveralls.io/r/live-js/live-xxx?branch=master

