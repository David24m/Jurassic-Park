var assert = require ("assert");
var Dinosaurs = require ("../dinosaurs");

describe ("Dinosaurs", function() {
  var dinosaur;

  beforeEach(function (){
    dinosaur = new Dinosaurs("Tyrannosaurus", 1);
  });

  it("has a type", function() {
    assert.strictEqual(dinosaur.type, "Tyrannosaurus");
  });

  it("has a number of offspring", function() {
    assert.strictEqual(dinosaur.offspring, 1);
  });



});
