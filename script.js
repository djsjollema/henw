window.addEventListener("load",function(){ 
	var canvas = document.getElementById("canvas");
    var context = canvas.getContext('2d');
    
    
    
    var P = new Point(200,200,20,"red");
    var Q = new Point(700,100,20,"green");
    var R = new Point(400,400,20,"blue");
    
    var v = new Vector(Q.x-P.x,Q.y-P.y);
    console.log(v);
    v.normalize();
    console.log(v);
    
    P.draw(context);
    Q.draw(context);
    R.draw(context);
    
    function animate(){
        R.x = v.dx;
        R.y = v.dy;
        v.dy += v.dy;
        v.dx += v.dx;
        v.normalize();
    }
    
    setInterval(animate,10)
    
    
    
})
