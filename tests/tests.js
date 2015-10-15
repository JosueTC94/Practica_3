var expect = chai.expect;

describe("__ TEST BDD __", function() {

    it("2.34C = 36.212F", function() {
      var t1 = new temperatura();
      t1.set_valor(2.34);
      t1.set_tipo("C");
      var result = t1.Cambio_aF();
      expect(result).to.equal(36.212);
    });

});
