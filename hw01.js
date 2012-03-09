/* insert your code here */
function Point (x, y){
  this.x = x;
	this.y = y;
	this.getDistance = function(p2){
		var primoMembro = Math.pow((p2.x - this.x),2);
		var secondoMembro = Math.pow((p2.y - this.y),2);
		var result = Math.sqrt (primoMembro + secondoMembro);
		return result;
	}
}

function Triangle (p1, p2, p3){
	this.p1 = p1;
	this.p2 = p2;
	this.p3 = p3;
	var lato1 = p1.getDistance(p2);
	var lato2 = p2.getDistance(p3);
	var lato3 = p3.getDistance(p1);
	this.getPerimeter = function(){
		return (lato1 + lato2 + lato3);
	}
	this.getArea = function(){
		var semiP = this.getPerimeter() / 2;
		console.log('Semip ='+ semiP);
        var area = Math.sqrt (semiP * (semiP - lato1) * (semiP - lato2) * (semiP - lato3));
        return area;
	}

}

p1 = new Point(x1, y1);
p2 = new Point(x2, y2);
p3 = new Point(x3, y3);

d = p1.getDistance(p2);

t = new Triangle(p1, p2, p3);

p = t.getPerimeter();
a = t.getArea();

