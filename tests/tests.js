var assert = chai.assert;

suite('temperatura1', function() {
    test('32F = 0.000C', function() {
        dato = "32F";
        conversor();
        assert.deepEqual(converted.innerHTML, "0.000º C");
    });
    test('45C = 113.000 Farenheit', function() {
        dato = "45C";
        conversor();
        assert.deepEqual(converted.innerHTML, "113.000º F");
    });
    test('5X = error', function() {
        dato = "5X";
        conversor();
        assert.match(converted.innerHTML, /ERROR/);
    });
    test('-77C = -106.600 Farenheit', function() {
        dato = "-77C";
        conversor();
        assert.deepEqual(converted.innerHTML, "-106.600º F");
    });
    test('47F != 9.000C', function()
    {
	dato = "47F";
	conversor();
	assert.notEqual(converted.innerHTML, "9.000º F");
    });
    test('85C < 190.000 Farenheit',function()
    {
	dato = "85C";
	conversor();
	assert.isBelow(converted.innerHTML, "190.000º F");
    });
    test('150F > 60.000C', function()
    {
	dato = "150F";
	conversor();
	assert.isAbove(converted.innerHTML, "60.000º C");
    });
    test('150e4F = 833315.556 C', function() {
        dato = "150e4F";
        conversor();
        assert.deepEqual(converted.innerHTML, "833315.556º C");
   });
});
