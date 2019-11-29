 




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

// ---------------------------------For the Programmer Mode---------------------------------------



	document.getElementById("evaluate_prog").addEventListener("click", myFunction);

	





