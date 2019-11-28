Array.prototype.forEach.call(btn, function(btn) {
    	btn.addEventListener('click', function() {

            // `e.currentTarget` or `this`
            var btnClicked = this.getAttribute('data-value');
            
            if(document.getElementById("demo").value==0){

            	document.getElementById("demo").value += btnClicked;

            }

            // Check the length of input and split into array with two values.

            if(document.getElementById("demo").value.length==2){
            	console.log(calc.demo.value);
            	var splitVal = document.getElementById("demo").value.split("0");
            	var splitOne = splitVal[1];

            	console.log(splitVal);
            	console.log(splitOne);
            }

           	 

            // Condition applied , if the second value is" "/" or a "number".

            if(splitOne.includes("/")){
            	calc.demo.value = calc.demo.value.substring(0, calc.demo.value.length - 1);

            	document.getElementById("demo").value += btnClicked;


            }else if(Number.isInteger(+splitOne)){
            	calc.demo.value = calc.demo.value.substring(0, calc.demo.value.length - 1);
            	calc.demo.value = calc.demo.value.substring(0, calc.demo.value.length - 1);
            	document.getElementById("demo").value += btnClicked;

            }else{
            	document.getElementById("demo").value += btnClicked;
            }    

        });
    });