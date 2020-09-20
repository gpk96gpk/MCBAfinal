// JavaScript Document

var chevron0 = document.getElementById("chevron0");
$("#serviceTitle0").click(function(){
	
	$("#serviceDescription0").toggleClass("show");
	$("#chevron0").toggleClass("chevronDirection");
	
});

$("#serviceTitle1").click(function(){
	$("#serviceDescription1").toggleClass("show");
	$("#chevron1").toggleClass("chevronDirection");
});

$("#serviceTitle2").click(function(){
	$("#serviceDescription2").toggleClass("show");
	$("#chevron2").toggleClass("chevronDirection");
});

$("#serviceTitle3").click(function(){
	$("#serviceDescription3").toggleClass("show");
	$("#chevron3").toggleClass("chevronDirection");
});

$("#serviceTitle4").click(function(){
	$("#serviceDescription4").toggleClass("show");
	$("#chevron4").toggleClass("chevronDirection");
});

$("#serviceTitle5").click(function(){
	$("#serviceDescription5").toggleClass("show");
	$("#chevron5").toggleClass("chevronDirection");
});

$("#serviceTitle6").click(function(){
	$("#serviceDescription6").toggleClass("show");
	$("#chevron6").toggleClass("chevronDirection");
});
















var carousel0 = document.getElementById("carousel0");
var carousel1 = document.getElementById("carousel1");
var carousel2 = document.getElementById("carousel2");
var pagination0 = document.querySelector(".pagination0");
var pagination1 = document.querySelector(".pagination1");
var pagination2 = document.querySelector(".pagination2");
let z=1;


$(".leftPurpleArrow").click(function(){
		console.log(z);
	if (z<4) {
		if (z===1) {
			z=4;
			pagination0.style.opacity = 0.4;
			pagination1.style.opacity = 0.4;
			pagination2.style.opacity = 1;
			carousel0.style.transition = "all 2s";
			carousel0.style.opacity = 0;
			carousel1.style.transition = "all 2s";
			carousel1.style.opacity = 0;
			carousel2.style.transition = "all 2s";
			carousel2.style.opacity = 1;
			
		}
		if (z===2) {
			pagination0.style.opacity = 1;
			pagination1.style.opacity = 0.4;
			pagination2.style.opacity = 0.4;
			carousel0.style.transition = "all 2s";
			carousel0.style.opacity = 1;
			carousel1.style.transition = "all 2s";
			carousel1.style.opacity = 0;
			carousel2.style.transition = "all 2s";
			carousel2.style.opacity = 0;
			
		}
		if (z===3) {
			pagination0.style.opacity = 0.4;
			pagination1.style.opacity = 1;
			pagination2.style.opacity = 0.4;
			carousel0.style.transition = "all 2s";
			carousel0.style.opacity = 0;
			carousel1.style.transition = "all 2s";
			carousel1.style.opacity = 1;
			carousel2.style.transition = "all 2s";
			carousel2.style.opacity = 0;
			
		}
	}
	z--;
});




$(".rightPurpleArrow").click(function(){
		console.log(z);

	if (z<4) {
		
		if (z===1) {
			pagination0.style.opacity = 0.4;
			pagination1.style.opacity = 1;
			pagination2.style.opacity = 0.4;
			carousel0.style.transition = "all 2s";
			carousel0.style.opacity = 0;
			carousel1.style.transition = "all 2s";
			carousel1.style.opacity = 1;
			carousel2.style.transition = "all 2s";
			carousel2.style.opacity = 0;
		}
		if (z===2) {
			pagination0.style.opacity = 0.4;
			pagination1.style.opacity = 0.4;
			pagination2.style.opacity = 1;
			carousel0.style.transition = "all 2s";
			carousel0.style.opacity = 0;
			carousel1.style.transition = "all 2s";
			carousel1.style.opacity = 0;
			carousel2.style.transition = "all 2s";
			carousel2.style.opacity = 1;
			
		}
		if (z==3) {
			pagination0.style.opacity = 1;
			pagination1.style.opacity = 0.4;
			pagination2.style.opacity = 0.4;
			carousel0.style.transition = "all 2s";
			carousel0.style.opacity = 1;
			carousel1.style.transition = "all 2s";
			carousel1.style.opacity = 0;
			carousel2.style.transition = "all 2s";
			carousel2.style.opacity = 0;
			z=0;
		}
	}
	z++
	
}); 




function getDocumentWidth() {
  return Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
};

function getDocumentHeight() {
 let bodyHeight = document.body.scrollHeight;
  return Math.max(document.documentElement.clientHeight,window.scrollMaxY,document.body.scrollHeight || 0); 
};

var canvas = document.getElementById('dotCanvas');
var context = canvas.getContext('2d');

var vw = getDocumentWidth(),
    vh = getDocumentHeight();


let resizeTimeout;

window.addEventListener('resize', onResize, false);

function onResize() {
    // If there was an existing redraw timeout, then cancel it
    if (resizeTimeout) {
      clearTimeout(resizeTimeout);
    }
    // Redraw in 100ms
    resizeTimeout = setTimeout(resizeCanvas, 15);
  }

function resizeCanvas() {
  console.log('resize');
  vw = getDocumentWidth();
  vh = document.body.scrollHeight;
  canvas.width = vw;
  canvas.height = document.body.scrollHeight;
  drawDots();
  
}
resizeCanvas();






var canvas2 = document.getElementById('blackDotCanvas');
var context2 = canvas2.getContext('2d');

var vw = getDocumentWidth(),
    vh = getDocumentHeight();

// resize the canvas to fill the browser window
let resizeTimeout2;

window.addEventListener('resize', onResize2, false);

function onResize2() {
    // If there was an existing redraw timeout, then cancel it
    if (resizeTimeout2) {
      clearTimeout(resizeTimeout2);
    }
    // Redraw in 100ms
    resizeTimeout2 = setTimeout(resizeCanvas2, 15);
  }

function resizeCanvas2() {
  console.log('resize');
  vw = getDocumentWidth();
  vh = document.body.scrollHeight;
  canvas2.width = vw;
  canvas2.height = document.body.scrollHeight;
  drawDots2();
  
}
resizeCanvas2();


// dots
function drawDots() {
  var r = .5,
      cw = 40,
      ch = 40;
  
  for (var x = 20; x < vw; x+=cw) {
    var domRectArray = [];
    var divArray = [];
    let divName;
    var divNumber = 0;
    
    for (var y = -20; y < canvas.height; y+=ch) {
        //context.fillStyle = '#000000';   
        //context.fillRect(x-r/2,y-r/2,r,r);
        //context.moveTo(x,y);  
        //context.arc(x-r/2, y-r/2, r, 0, 2 * Math.PI, false);
      let divArrayLength = divArray.length;
      for (var n = 0; n <= divNumber; n++){
        let divName = document.getElementById('div'+n);
        divArray[n] = divName;
        domRectArray[n] = divName.getBoundingClientRect(); 
      };
        for (let i = 0; i < divArrayLength; i++){
          let divCoordsLeft = domRectArray[i].left + document.documentElement.scrollLeft;
          let divCoordsRight = domRectArray[i].right + document.documentElement.scrollLeft;
          let divCoordsTop = domRectArray[i].top + document.documentElement.scrollTop;
          let divCoordsBottom = domRectArray[i].bottom + document.documentElement.scrollTop;
          
          //console.log(divCoordsTop);
          //console.log(y);
          
          /*else {
            context.beginPath();
            context.moveTo(x,y);  
            //context.arc(x-r/2, y-r/2, r, 0, 2 * Math.PI, false);
            context.arc(x, y, r, 0, 2 * Math.PI, false);
            context.strokeStyle = '#000000';
            context.fillStyle = '#000000';
            context.stroke();
            context.fill();
            context.closePath();

          }; */
          
          
          if(divCoordsLeft <= x+3 && x-3 <= divCoordsRight && divCoordsTop <= y && divCoordsBottom >= y){
            context.beginPath();
            context.moveTo(x,y);  
            context.arc(x-r/2, y-r/2, r, 0, 2 * Math.PI, false);
            context.strokeStyle = '#ffffff';
            context.fillStyle = '#ffffff';
            context.stroke();
            context.fill();
            context.closePath();

          };
            
        };
      
        

      
      }
  }
}

//drawDots2

function drawDots2() {
  var r = .5,
      cw = 40,
      ch = 40;
  
  for (var x = 20; x < vw; x+=cw) {
    var domRectArray = [];
    var divArray = [];
    let divName;
    var divNumber = 0;
    
    for (var y = -20; y < canvas2.height; y+=ch) {
        //context.fillStyle = '#000000';   
        //context.fillRect(x-r/2,y-r/2,r,r);
        //context.moveTo(x,y);  
        //context.arc(x-r/2, y-r/2, r, 0, 2 * Math.PI, false);
      let divArrayLength = divArray.length;
      for (var n = 0; n <= divNumber; n++){
        let divName = document.getElementById('div'+n);
        divArray[n] = divName;
        domRectArray[n] = divName.getBoundingClientRect(); 
      };
        for (let i = 0; i < divArrayLength; i++){
          let divCoordsLeft = domRectArray[i].left + document.documentElement.scrollLeft;
          let divCoordsRight = domRectArray[i].right + document.documentElement.scrollLeft;
          let divCoordsTop = domRectArray[i].top + document.documentElement.scrollTop;
          let divCoordsBottom = domRectArray[i].bottom + document.documentElement.scrollTop;
          
          //console.log(divCoordsTop);
          //console.log(y);
          
          
          if(divCoordsLeft <= x+3 && x-3 <= divCoordsRight && divCoordsTop <= y && divCoordsBottom >= y){

          }
            else{
            context2.beginPath();
            context2.moveTo(x,y);  
           
            context2.arc(x, y, r, 0, 2 * Math.PI, false);
            context2.strokeStyle = '#C3188A40';
            context2.fillStyle = '#C3188A40';
            context2.stroke();
            context2.fill();
            context2.closePath();
            };
        };
      
        

      
      }
  }
}


