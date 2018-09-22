function Snitch(context) {

    this.size = 0.5
    this.pX = 300;
    this.pY = 200;
    this.context = context;
	this.velX = Math.random()*5 - 1;
	this.velY = Math.random()*5 - 1;
	this.angle = Math.atan2(this.velX, -this.velY);
    this.humans = [];
    this.humans.push(new Human(context,0,0,0.8,"green"));
    this.humans.push(new Human(context,640,480,0.8,"red"));

}

Snitch.prototype.drawSnitch = function() {
    var img=document.getElementById("img");
    this.context.drawImage(img,10,10);
}

Snitch.prototype.draw = function() {
    this.context.save();
    this.context.translate(this.pX, this.pY);
    this.context.rotate(this.angle);
    this.context.scale(this.size, this.size);
    this.context.fillStyle = "#A0C0A0";
    this.context.strokeStyle = "#003300";
    this.drawSnitch();
    this.humans[0].draw(this.angle);
    this.humans[1].draw(this.angle);
    this.context.save();
    this.context.restore();
	this.context.restore();
}


Snitch.prototype.update = function() {

	this.pX += this.velX;
	this.pY += this.velY;
	this.humans.forEach(function(c) { c.update(); })

	if (this.pX < 0)
	{
		this.pX = 10;
		this.velX *= -1;
	}
	if (this.pX > this.context.canvas.clientWidth)
	{
		this.pX = this.context.canvas.clientWidth;
		this.velX *= -1;
	}
	if (this.pY < 0)
	{
		this.pY = 10;
		this.velY *= -1;
	}
	if (this.pY > this.context.canvas.clientHeight)
	{
		this.pY = this.context.canvas.clientHeight;
		this.velY *= -1;
	}
	this.angle = Math.atan2(this.velX, -this.velY);

}