var assert = require ("assert");
var JurassicPark = require ("../jurassic_park");
var Dinosaurs = require ("../dinosaurs");

describe ("Jurassic Park", function() {
  var jurassicPark;
  var dinosaur1;
  var dinosaur2;
  var dinosaur3;

  beforeEach(function() {
    jurassicPark = new JurassicPark();
    dinosaur1 = new Dinosaurs("Tyrannosaurus", 1);
    dinosaur2 = new Dinosaurs("Velociraptor", 5);
    dinosaur3 = new Dinosaurs("Triceratops", 2);
  });

  it("enclosure starts empty", function() {
    assert.strictEqual(jurassicPark.enclosure.length, 0);
  });

  it("can add a dinosaur to the enclosure", function() {
    jurassicPark.add(dinosaur1);
    assert.strictEqual(jurassicPark.enclosure.length, 1);
  });

  it("can add multiple dinosaurs to the enclosure", function() {
    jurassicPark.add(dinosaur1);
    jurassicPark.add(dinosaur2);
    jurassicPark.add(dinosaur3);
    assert.strictEqual(jurassicPark.enclosure.length, 3);
  });


  it("can remove a particular dinosaur from enclosure", function() {
    jurassicPark.add(dinosaur1);
    jurassicPark.add(dinosaur2);
    jurassicPark.add(dinosaur3);
    jurassicPark.remove(dinosaur2.type);
    assert.strictEqual(jurassicPark.enclosure.length, 2);
  });

  it("can remove dinosaurs with more than two offspring", function() {
    jurassicPark.add(dinosaur1);
    jurassicPark.add(dinosaur2);
    jurassicPark.add(dinosaur3);
    jurassicPark.checkOffspring();
    assert.strictEqual(jurassicPark.enclosure.length, 2);
    assert.strictEqual(jurassicPark.largeEnclosure.length, 1);
  });

});
