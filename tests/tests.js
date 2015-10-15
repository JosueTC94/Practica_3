var expect = chai.expect;

describe("Test de prueba", function() {

    it("2.34C = 36.212F", function() {
      var t1 = new temperatura();
      t1.Valor = 2.34;
      t1.Tipo = "C";
      var result = (t1.Valor * 9/5)+32;
      expect(result).to.equal(36.212);
    });

});
