function Snitch(context) {

    this.size = sz || 0.5;
	this.propRotationSpeed = .3; //how fast the propellers will rotate

	// this is its state
	this.color = color;
    this.posX = x || 300;
    this.posY = y || 200;
    this.frontPropAngle = 0; //angle propellers start at
    this.context = context;
	this.numProps = numProps || 4; //how many propellers
	this.velocityX = Math.random()*2 - 1;
	this.velocityY = Math.random()*2 - 1;
	this.heading = Math.atan2(this.velocityX, -this.velocityY); //negative y since positive y is down

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

    this.context.save();
    this.context.restore();

	this.context.restore();
}


Snitch.prototype.update = function() {
    this.frontPropAngle += this.propRotationSpeed;
	this.posX += this.velocityX;
	this.posY += this.velocityY;

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