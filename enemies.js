/**
 * Created by bunkak on 5/18/16.
 */

//================================================================
// blue guy
function MushroomDude(game, spritesheet) {
    //spriteSheet, frameWidth, frameHeight, sheetWidth,
        //frameDuration, frames, loop, scale) {
    this.animation = new Animation(spritesheet, 50, 39, 6, 0.15, 6, true, 2.0);
    this.x = 0;
    this.y = 0;
    this.speed = 100;
    this.game = game;
    this.ctx = game.ctx;
}

MushroomDude.prototype.draw = function () {
    this.animation.drawFrame(this.game.clockTick, this.ctx, this.x, this.y);
}

MushroomDude.prototype.update = function () {
    if (this.animation.elapsedTime < this.animation.totalTime * 8 / 14)
        this.x += this.game.clockTick * this.speed;
    if (this.x > 800) this.x = -230;
}



//================================================================
//silver guy
// inheritance
function Cheetah(game, spritesheet) {
    //spriteSheet, frameWidth, frameHeight, sheetWidth,
        //frameDuration, frames, loop, scale) {
        //sheetWidth: number of sprites per row.
    this.animation = new Animation(spritesheet, 100, 43, 9, 0.05, 9, true, 2.0);
    this.speed = 50;
    this.ctx = game.ctx;
    Entity.call(this, game, 0, 100);
}

Cheetah.prototype = new Entity();
Cheetah.prototype.constructor = Cheetah;

Cheetah.prototype.update = function () {
    this.x += this.game.clockTick * this.speed;
    if (this.x > 800) this.x = -230;
    Entity.prototype.update.call(this);
}

Cheetah.prototype.draw = function () {
    this.animation.drawFrame(this.game.clockTick, this.ctx, this.x, this.y);
    Entity.prototype.draw.call(this);
}


//================================================================
// inheritance
function Guy(game, spritesheet) {
    this.animation = new Animation(spritesheet, 50, 39, 6, 0.15, 6, true, 2.0);
    this.speed = 100;
    this.ctx = game.ctx;
    Entity.call(this, game, 800, 450);
}

Guy.prototype = new Entity();
Guy.prototype.constructor = Guy;

Guy.prototype.update = function () {
    //this.x -= this.game.clockTick * this.speed;
    //if (this.x < 0) this.x = 900;
    //Entity.prototype.update.call(this);
    if (this.animation.elapsedTime < this.animation.totalTime * 8 / 14)
        this.x -= this.game.clockTick * this.speed;
    if (this.x > 0) this.x = 900;
    Entity.prototype.update.call(this);
}

Guy.prototype.draw = function () {
    this.animation.drawFrame(this.game.clockTick, this.ctx, this.x, this.y);
    Entity.prototype.draw.call(this);
}