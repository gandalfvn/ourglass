var Particle = function(game, settings, position) {
  this.c = game.c;
  for (var i in settings) {
    this[i] = settings[i];
  }
  this.size = {x:10, y:10};
  this.color = "#099";
};


Particle.prototype = {
  collision: function() {
    this.center.y -= 20;
    if (this.angle === 30){
      this.angle = 0;
    } else {
      this.angle = 30;
    }
  },

  update: function(timeSinceLastTick){
    if (this.center.y === 0) { this.center.y++; }
    else {
      this.center.y += this.center.y * .01;
    }
    this.center.y++;
  },

  draw: function(ctx) {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.center.x - this.size.x / 2,
      this.center.y - this.size.y / 2,
      this.size.x,
      this.size.y
    );
  }

};
