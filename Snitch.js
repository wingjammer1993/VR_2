function Snitch(context, humans) {

    this.humans = humans
    this.size = 0.5
    this.posX = 300;
    this.posY = 200;
    this.context = context;
	this.velocityX = Math.random()*2 - 1;
	this.velocityY = Math.random()*2 - 1;
	this.heading = Math.atan2(this.velocityX, -this.velocityY);
}

Snitch.prototype.drawSnitch = function() {
    var img=document.getElementById("img");
    this.context.drawImage(img,10,10);
}

Snitch.prototype.draw = function() {
    this.context.save();

    this.context.translate(this.posX, this.posY);
    this.context.rotate(this.heading);
    this.context.scale(this.size, this.size);

    this.context.fillStyle = "#A0C0A0";
    this.context.strokeStyle = "#003300";
    this.drawSnitch();
    this.humans.forEach(function(c) { c.draw(); })
    this.context.save();
    this.context.restore();

	this.context.restore();
}


Snitch.prototype.update = function() {

	this.posX += this.velocityX;
	this.posY += this.velocityY;
	this.humans.forEach(function(c) { c.update(); })

	if (this.posX < 0)
	{
		this.posX = 0;
		this.velocityX *= -1;
	}
	if (this.posX > this.context.canvas.clientWidth)
	{
		this.posX = this.context.canvas.clientWidth;
		this.velocityX *= -1;
	}
	if (this.posY < 0)
	{
		this.posY = 0;
		this.velocityY *= -1;
	}
	if (this.posY > this.context.canvas.clientHeight)
	{
		this.posY = this.context.canvas.clientHeight;
		this.velocityY *= -1;
	}
	this.heading = Math.atan2(this.velocityX, -this.velocityY);
}