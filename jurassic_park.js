var JurassicPark = function() {
  this.enclosure = [];
  this.largeEnclosure = []
};

JurassicPark.prototype.add = function (dinosaur) {
  this.enclosure.push(dinosaur);
};

JurassicPark.prototype.remove = function (dinosaurType) {
  for( var dino of this.enclosure) {
    if(dino.type === dinosaurType) {
      var index = this.enclosure.indexOf(dino);
      this.enclosure.splice(index, 1);
    };
  };
};

JurassicPark.prototype.checkOffspring = function () {
  for( var dino of this.enclosure) {
    if(dino.offspring > 2) {
      this.enclosure.splice(dino, 1);
      this.largeEnclosure.push(dino);
    };
  };
};




module.exports = JurassicPark;
