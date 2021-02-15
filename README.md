# node-iir

Infinite Impulse Response (IIR) Filter for Node.js.

This is a ported version of [iir1](https://github.com/berndporr/iir1).

## Build

```
git submodule init
git submodule update

npm install
npm run build
```

After building, this can be used as a npm package.

## Usage

### Creating and applying a filter

```javascript
const iir = require('node-iir');

const filter = new iir.HighPass();
filter.setup(200, 10); // Sampling Frequency = 200Hz, Cutoff Frequency = 10Hz

const data = [3.4, -7, 4.2, 1, -11.8] // Example Data
const filteredData = data.map((d) => filter.filter(d));
```

### Supported filters

Only Butterworth filter (4th order) is supported.

1. HighPass Filter

```javascript
const highPassFilter = new iir.HighPass();
highPassFilter.setup(sampleFreqency, cutoffFrequency);
```

2. LowPass Filter

```javascript
const lowPassFilter = new iir.LowPass();
lowPassFilter.setup(sampleFreqency, cutoffFrequency);
```

3. BandStop Filter

```javascript
const bandStopFilter = new iir.BandStop();
bandStopFilter.setup(sampleFreqency, stopFrequency, widthFrequency);
```
