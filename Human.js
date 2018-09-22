function Human(context,x,y,sz,color,hair)
{
    // these are it's properties
    this.size = sz || 0.5;
	this.propRotationSpeed = .3; //how fast the propellers will rotate

	// this is its state
	this.color = color;
	this.hair = hair;
    this.posX = x || 300;
    this.posY = y || 200;
    this.frontPropAngle = 0; //angle propellers start at
    this.context = context;
	this.velocityX = Math.random()*2 - 1;
	this.velocityY = Math.random()*2 - 1;
	this.heading = Math.atan2(this.velocityX, -this.velocityY); //negative y since positive y is down
}

Human.prototype.drawHead = function() {
    this.context.beginPath();
    this.context.fillStyle = "bisque"; // #ffe4c4
    this.context.arc(200, 50, 30, 0, Math.PI * 2, true); // draw circle for head
    this.context.fill();

    this.context.beginPath();
    this.context.strokeStyle = "red"; // color
    this.context.lineWidth = 3;
    this.context.arc(200, 50, 20, 0, Math.PI, false); // draw semicircle for smiling
    this.context.stroke();

    // eyes
    this.context.beginPath();
    this.context.fillStyle = this.color ; // color
    this.context.arc(190, 45, 3, 0, Math.PI * 2, true); // draw left eye
    this.context.fill();
    this.context.arc(210, 45, 3, 0, Math.PI * 2, true); // draw right eye
    this.context.fill();

};

Human.prototype.drawBody = function() {

    this.context.beginPath();
    this.context.moveTo(200, 80);
    this.context.lineTo(200, 180);
    this.context.strokeStyle = this.color;
    this.context.stroke();

    this.context.beginPath();
    this.context.strokeStyle = "gold";
    this.context.moveTo(200, 80);
    this.context.lineTo(150, 130);
    this.context.moveTo(200, 80);
    this.context.lineTo(250, 130);
    this.context.stroke();

    this.context.beginPath();
    this.context.strokeStyle = "orange";
    this.context.moveTo(200, 180);
    this.context.lineTo(150, 280);
    this.context.moveTo(200, 180);
    this.context.lineTo(250, 280);
    this.context.stroke();

    // broomstick
    this.context.beginPath();
    this.context.strokeStyle = "brown";
    this.context.moveTo(100, 280);
    this.context.lineTo(300, 280);
    this.context.stroke();

    // broom filaments
    this.context.beginPath();
    this.context.strokeStyle = "brown";
    this.context.moveTo(300, 280);
    this.context.lineTo(360, 290);
    this.context.moveTo(300, 280);
    this.context.lineTo(360, 300);
    this.context.moveTo(300, 280);
    this.context.lineTo(360, 260);
    this.context.moveTo(300, 280);
    this.context.lineTo(360, 270);
    this.context.moveTo(300, 280);
    this.context.lineTo(360, 280);
    this.context.stroke();

};

Human.prototype.draw = function() {
    this.context.save();
    this.context.translate(this.posX, this.posY);
//    this.context.rotate(this.heading);
    this.context.scale(this.size, this.size);

    this.context.fillStyle = "#A0C0A0";
    this.context.strokeStyle = "#003300";
    this.drawHead();
    this.drawBody();

    this.context.save();
    this.context.restore();

	this.context.restore();

}

Human.prototype.update = function() {
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