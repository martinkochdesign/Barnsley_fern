//Barnsley Fern
var x=0;
var y=0;
var counter = 0;

function setup() {
    createCanvas(600,800);
    background(0);
}

function draw() {
        
//        fill(255);
//        textSize(32);
//        text("N = "+counter,10, 30);
    
            strokeWeight(2); 
            
            for (var i = 0; i<100;i++){
                
            stroke(map(y,0,9.9983,0,255),map(x,-2.1820,2.6558,0,255),(x,-2.1820,2.6558,0,255));    
            point(map(x,-2.1820,2.6558,0, width),map(y,0,9.9983, height, 0));
                
            var n= random(1);
            if(n<0.1){
            // function 1
                var x_new =0;
                var y_new = 0.16 * y;
            } else if (n<0.86){
            // function 2
                var x_new =0.85*x+0.04*y;
                var y_new = -0.04 * x + 0.85 * y + 1.6;
            } else if (n<0.93){
            // function 3
                var x_new =0.2*x-0.26*y;
                var y_new = 0.23 * x + 0.22 * y + 1.6;
            } else {
            // function 4
                var x_new =-0.15*x+0.28*y;
                var y_new = 0.26 * x + 0.24 * y + 0.44;   
            }
    
            x = x_new;
            y = y_new;
            }
    counter += 1;
    if (counter >= 2000){
    noStroke();
    fill(255, 255, 255);
    textSize(10);
    text("M. A. Koch, PhD. 2020", width-115, height-8);
    noLoop();
    }
    }