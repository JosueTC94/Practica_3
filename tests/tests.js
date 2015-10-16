var expect = chai.expect;

describe("Test de prueba", function() {

    it("7C = 44.60F", function() {
      var t1 = new temperatura();
      t1.set_valor(7);
      t1.set_tipo("C");
      var result = t1.Cambio_aF();
      expect(result).to.equal(44.60);
    });

});
