/**
 * Created by bunkak on 5/18/16.
 */


//================================================================
function MegaMan(game, spritesheet) {
    //spriteSheet, frameWidth, frameHeight, sheetWidth,
    //frameDuration, frames, loop, scale) {
    //sheetWidth: number of sprites per row.
    this.animation = new Animation(spritesheet, 100, 43, 9, 0.05, 9, true, 2.0);

    //Passive animations: blinking
    // this.stillAnimation = new Animation(ASSET_MANAGER.getAsset("./img/MegaSheet.gif"),
    //         4, 56, 35, 41, 0.2, 6, true, false);

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
















































