const resizer = require('./index');

const versions = [{
  suffix: '_large',
  width: 1800,
  quality: 60,
}, {
  suffix: '_medium',
  height: 600,
  contrast: 0.06,
}, {
  suffix: '_small',
  height: 250,
}];

const setup = {
  all: {
    brightness: 0,
    path: './test/images/results/',
    normalize: true,
    quality: 80,
    contrast: 0.045,
  },
  versions,
};

(async () => {
  await resizer('./test/images/rzym.jpg', setup);
})();