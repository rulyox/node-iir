const iir = require('../index');

describe('Filters', () => {

	it('HighPass Test', () => {
		const highPassFilter = new iir.HighPass();
		highPassFilter.setup(200, 0.5);
		expect(highPassFilter.filter(0)).toBeDefined();
	});

	it('LowPass Test', () => {
		const lowPassFilter = new iir.LowPass();
		lowPassFilter.setup(200, 50);
		expect(lowPassFilter.filter(0)).toBeDefined();
	});

	it('BandStop Test', () => {
		const bandStopFilter = new iir.BandStop();
		bandStopFilter.setup(200, 10, 1);
		expect(bandStopFilter.filter(0)).toBeDefined();
	});

});
