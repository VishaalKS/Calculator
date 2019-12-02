   var btn = document.querySelectorAll('.button');

   calc.demo.value = 0;



   Array.prototype.forEach.call(btn, function(btn) {
       btn.addEventListener('click', function() {

            // `e.currentTarget` or `this`
            var btnClicked = this.getAttribute('data-value');
            
            if(document.getElementById("demo").value==0){

            	document.getElementById("demo").value = btnClicked;

            }else{

            	document.getElementById("demo").value += btnClicked;
            }
        });
   });


   function myFunction(){
       if(calc.demo.value.includes("^")){
          var array = calc.demo.value.split("^");
          calc.demo.value=Math.pow(array[0],array[1])
      }else{
          calc.demo.value= eval(calc.demo.value);
      }
  }


  function clear(){
   calc.demo.value=0;
}

function sqr(){
   calc.demo.value = Math.pow(calc.demo.value,2);
}

function cube(){
   calc.demo.value = Math.pow(calc.demo.value,3);
}

function mathSin(){
   calc.demo.value = Math.sin(calc.demo.value);
}

function mathCos(){
   calc.demo.value = Math.cos(calc.demo.value);
}

function mathTan(){
   calc.demo.value = Math.tan(calc.demo.value);
}

function mathLog(){
   calc.demo.value = Math.log10(calc.demo.value);
}

function mathSqrt(){
    calc.demo.value = Math.sqrt(calc.demo.value);
}

function piVal(){
    
    if(calc.demo.value.includes(".")==false){

        if(calc.demo.value==0){
        calc.demo.value = 3.1428;
        }else{
        calc.demo.value += 3.1428;        
        }

    }else if(calc.demo.value.includes("+")){
        if(calc.demo.value==0){
        calc.demo.value = 3.1428;
        }else{
        calc.demo.value += 3.1428;        
        }
    }
    
}

function plusMin(){
    if(Math.sign(calc.demo.value)==+1){
        calc.demo.value = "-"+calc.demo.value;
    }else if(Math.sign(calc.demo.value)==-1){
        calc.demo.value = calc.demo.value.substring(1,calc.demo.value.length);
    }
}

var queue =[];



function pushStack(){

   if(Number.isNaN(+calc.demo.value)){
      alert("You can only save Numbers.");
  }else{

      if(queue.length>=10){
         queue.shift();
         queue.push(calc.demo.value);
     }else{
         queue.push(calc.demo.value);		
     }

     console.log(queue);
		// console.log(stack.pop());	
	}

}




function addMemory(){
	if(Number.isNaN(+calc.demo.value)){

	}else{

		var select = document.getElementById("select");

		var option = document.createElement("OPTION");

		var qlen = queue.length-1;

		var txt = document.createTextNode(queue[qlen]);

		option.appendChild(txt);

		option.setAttribute("value",queue[qlen]);

		select.insertBefore(option,select.lastChild);
	}
}

function del(){

	if(calc.demo.value==""){
		calc.demo.value= 0;
	}else if(calc.demo.value==0){
		calc.demo.value= 0;
	}else if(calc.demo.value.substring(0, calc.demo.value.length - 1)==0){
		calc.demo.value= 0;
	}else{
		calc.demo.value = calc.demo.value.substring(0, calc.demo.value.length - 1);
	}
}

document.getElementById("evaluate").addEventListener("click", myFunction);
document.getElementById("clear").addEventListener("click", clear);
document.getElementById("square").addEventListener("click", sqr);		
document.getElementById("cube").addEventListener("click", cube);		
document.getElementById("sin").addEventListener("click", mathSin);		
document.getElementById("cos").addEventListener("click", mathCos);		
document.getElementById("tan").addEventListener("click", mathTan);		
document.getElementById("log").addEventListener("click", mathLog );
document.getElementById("delete").addEventListener("click", del);
document.getElementById("mc").addEventListener('click',function(){
	pushStack();
	addMemory();
});
document.getElementById("sqrt").addEventListener("click", mathSqrt);
document.getElementById("pi").addEventListener("click", piVal);
document.getElementById("plusmin").addEventListener("click", plusMin);



var sel = document.getElementById("select");
function yas(){ 
	if(calc.demo.value==0){

		calc.demo.value = sel.value;
	}else{
		calc.demo.value += sel.value;
	}

	sel.value="";

}

sel.addEventListener("change", yas);




// ---------------------------------For Show-Hide---------------------------------------



var selScien = document.getElementById("scientific_div");
var selProg = document.getElementById("prog_div");
selProg.style.display="none";


function showScientific(){
    selScien.style.display="block";
    selProg.style.display="none";

}


function showProg(){
    selScien.style.display="none";
    selProg.style.display="block";

}

// ----------------------------------For the Programmer Mode---------------------------------------

var btn_prog = document.querySelectorAll('.button_prog');

Array.prototype.forEach.call(btn_prog, function(btn) {
    btn.addEventListener('click', function() {

            // `e.currentTarget` or `this`
            var btnClicked = this.getAttribute('data-value');

            if(document.getElementById("demo_main").value==0){

                document.getElementById("demo_main").value = btnClicked;
            }else{

             document.getElementById("demo_main").value += btnClicked;
         }


         hexFunc();
         binFunc();
         octFunc();
         decFunc();

     });
});


var hex  = calc_prog.demo_hex.value;
var dec  = calc_prog.demo_dec.value;
var oct  = calc_prog.demo_oct.value;
var bin  = calc_prog.demo_oct.value;
var main = calc_prog.demo_main.value;



function hexFunc(){
    var hex = +calc_prog.demo_main.value;

    if(calc_prog.demo_main.value>0){  
        calc_prog.demo_hex.value = hex.toString(16);
    }else{
        calc_prog.demo_hex.value="hex";
    }
}

function binFunc(){
    var bin = +calc_prog.demo_main.value;

    if(calc_prog.demo_main.value>0){  
     calc_prog.demo_bin.value = bin.toString(2);
 }else{
    calc_prog.demo_bin.value="bin";
}


}

function decFunc(){
    var dec = +calc_prog.demo_main.value;

    if(calc_prog.demo_main.value>0){  
        calc_prog.demo_dec.value = dec.toString();
    }else{
        calc_prog.demo_dec.value="dec";
    }     
}

function octFunc(){
    var oct = +calc_prog.demo_main.value;

    if(calc_prog.demo_main.value>0){  
        calc_prog.demo_oct.value = oct.toString(8);
    }else{
        calc_prog.demo_oct.value="oct";
    } 


}

function clear_prog(){
    calc_prog.demo_main.value=0;

    hexFunc();
    binFunc();
    octFunc();
    decFunc();
}



document.getElementById("evaluate_prog").addEventListener("click",myFunction);
document.getElementById("clear_prog").addEventListener("click",clear_prog);
document.getElementById("demo_main").addEventListener("keyup",function(){

    hexFunc();
    binFunc();
    octFunc();
    decFunc();

});



