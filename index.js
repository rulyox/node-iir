const iir = require('bindings')('node_iir');

exports.HighPass = iir.HighPass;
exports.LowPass = iir.LowPass;
exports.BandStop = iir.BandStop;
