
// ---------------------------------For Standard-Calculator---------------------------------------

var btn_stand = document.querySelectorAll('.button_stand');

Array.prototype.forEach.call(btn_stand, function(btn) {
   btn.addEventListener('click', function() {

            // `e.currentTarget` or `this`
            var btnClicked = this.getAttribute('data-value');
            
            if(document.getElementById("demo_stand").value==0){

                document.getElementById("demo_stand").value = btnClicked;

            }else{

                document.getElementById("demo_stand").value += btnClicked;
            }
        });
});


var queue_stand = [];

function mc_stand(){

   if(Number.isNaN(+calc_stand.demo_stand.value)){
      alert("You can only save Numbers.");
  }else{

      if(queue_stand.length>=10){
         queue_stand.shift();
         queue_stand.push(calc_stand.demo_stand.value);
     }else{
         queue_stand.push(calc_stand.demo_stand.value);       
     }

     console.log(queue_stand);
        // console.log(stack.pop());    
    }

}

var sel_stand = document.getElementById("select_stand");
function select_stand(){ 
    if(calc_stand.demo_stand.value==0){

        calc_stand.demo_stand.value = sel_stand.value;
    }else{
        calc_stand.demo_stand.value += sel_stand.value;
    }

    sel_stand.value="";

}

sel_stand.addEventListener("change", select_stand);


function addMemory_stand(){
    if(Number.isNaN(+calc_stand.demo_stand.value)){

    }else{

        var select_stand = document.getElementById("select_stand");

        var option_stand = document.createElement("OPTION");

        var qlen_stand = queue_stand.length-1;

        var txt_stand = document.createTextNode(queue_stand[qlen_stand]);

        option_stand.appendChild(txt_stand);

        option_stand.setAttribute("value",queue_stand[qlen_stand]);

        select_stand.insertBefore(option_stand,select_stand.lastChild);
    }
}



function clear_stand (){

    calc_stand.demo_stand.value=0;
}

function sqrt_stand(){
    calc_stand.demo_stand.value = Math.sqrt(calc_stand.demo_stand.value);
}

function square_stand(){
    calc_stand.demo_stand.value =  Math.pow(calc_stand.demo_stand.value,2);
}

function evaluate_stand(){

    calc_stand.demo_stand.value = eval(calc_stand.demo_stand.value);

}

function delete_stand(){

   if(calc_stand.demo_stand.value==""){
    calc_stand.demo_stand.value= 0;
}else if(calc_stand.demo_stand.value==0){
    calc_stand.demo_stand.value= 0;
}else if(calc_stand.demo_stand.value.substring(0, calc_stand.demo_stand.value.length - 1)==0){
    calc_stand.demo_stand.value= 0;
}else{
    calc_stand.demo_stand.value = calc_stand.demo_stand.value.substring(0, calc_stand.demo_stand.value.length - 1);
}
}

function plusMin_stand(){
    if(Math.sign(calc_stand.demo_stand.value)==+1){
        calc_stand.demo_stand.value = "-"+calc_stand.demo_stand.value;
    }else if(Math.sign(calc_stand.demo_stand.value)==-1){
        calc_stand.demo_stand.value = calc_stand.demo_stand.value.substring(1,calc_stand.demo_stand.value.length);
    }
}


document.getElementById("clear_stand").addEventListener("click",clear_stand);
document.getElementById("sqrt_stand").addEventListener("click",sqrt_stand);
document.getElementById("square_stand").addEventListener("click",square_stand);
document.getElementById("mc_stand").addEventListener("click",function(){
    mc_stand();
    addMemory_stand();
});
document.getElementById("delete_stand").addEventListener("click",delete_stand);
document.getElementById("plusmin_stand").addEventListener("click",plusMin_stand);
document.getElementById("evaluate_stand").addEventListener("click",evaluate_stand);





// ---------------------------------For Scientific-Calculator---------------------------------------


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

function factorial(){

    var fact = 1;
    var num = calc.demo.value;
    for(i=1;i<=num;i++){
        fact = fact * i;
    }
    calc.demo.value = fact;
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


function exp(){
    calc.demo.value = Math.exp(calc.demo.value);
}

function tenRaise(){

    var test = calc.demo.value; // display value
    var arr = test.split(""); // split the value in Array
    var x =arr.indexOf("x");    // index of x (multiplication) 
    var first = arr.slice("0",x);   // Number before x
    var afterX = arr.slice("x");    // Everything after x
    var last = arr.slice(x);    // array of x
    var power =last.slice("3"); // Number with raise to power

    calc.demo.value= first*Math.pow("10",power);

}

document.getElementById("evaluate").addEventListener("click", function(){
    if(calc.demo.value.includes("x")){     
        tenRaise();
    }else{
        myFunction();      
    }
});

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
document.getElementById("fact").addEventListener("click", factorial);
document.getElementById("exp").addEventListener("click", exp);




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
var selStand = document.getElementById("stand_div");
selProg.style.display="none";
selScien.style.display="none";


function showScientific(){
    selScien.style.display="block";
    selProg.style.display="none";
    selStand.style.display="none";

}


function showProg(){
    selScien.style.display="none";
    selStand.style.display="none";
    selProg.style.display="block";

}


function showStand(){
    selScien.style.display="none";
    selStand.style.display="block";
    selProg.style.display="none";

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

function delete_prog(){

   if(calc_prog.demo_main.value==""){
    calc_prog.demo_main.value= 0;
}else if(calc_prog.demo_main.value==0){
    calc_prog.demo_main.value= 0;
}else if(calc_prog.demo_main.value.substring(0, calc_prog.demo_main.value.length - 1)==0){
    calc_prog.demo_main.value= 0;
}else{
    calc_prog.demo_main.value = calc_prog.demo_main.value.substring(0, calc_prog.demo_main.value.length - 1);
}


hexFunc();
binFunc();
octFunc();
decFunc();

}

function plusMin_prog(){


    hexFunc();
    binFunc();
    octFunc();
    decFunc();

    if(Math.sign(calc_prog.demo_main.value)==+1){
        calc_prog.demo_main.value = "-"+calc_prog.demo_main.value;
        calc_prog.demo_hex.value = "-"+calc_prog.demo_hex.value;
        calc_prog.demo_bin.value = "-"+calc_prog.demo_bin.value;
        calc_prog.demo_dec.value = "-"+calc_prog.demo_dec.value;
        calc_prog.demo_oct.value = "-"+calc_prog.demo_oct.value;
    }else if(Math.sign(calc_prog.demo_main.value)==-1){

        calc_prog.demo_main.value = calc_prog.demo_main.value.substring(1,calc_prog.demo_main.value.length);
        hexFunc();
        binFunc();
        octFunc();
        decFunc();
    }

}

function clear_prog(){
    calc_prog.demo_main.value=0;

    hexFunc();
    binFunc();
    octFunc();
    decFunc();
}

function mathSqrt_prog(){
    calc_prog.demo_main.value = Math.sqrt(calc_prog.demo_main.value);
    hexFunc();
    binFunc();
    octFunc();
    decFunc();
}

function factorial_prog(){

    var fact = 1;
    var num = calc_prog.demo_main.value;
    for(i=1;i<=num;i++){
        fact = fact * i;
    }
    calc_prog.demo_main.value = fact;
    hexFunc();
    binFunc();
    octFunc();
    decFunc();
}


// Functions for Bitwise calculation

    // Function for - OR (|) Function 

    function bitwiseOr(){

        var main_value = calc_prog.demo_main.value;
        var split_value = main_value.split("|");

        calc_prog.demo_main.value ="0b"+parseInt(split_value[0]).toString(2)|"0b"+parseInt(split_value[1]).toString(2);

        hexFunc();
        binFunc();
        octFunc();
        decFunc();

    }

    // Function for - AND (&) Function 


    function bitwiseAnd(){

        var main_value = calc_prog.demo_main.value;
        var split_value = main_value.split("&");

        calc_prog.demo_main.value ="0b"+parseInt(split_value[0]).toString(2)&"0b"+parseInt(split_value[1]).toString(2);

        hexFunc();
        binFunc();
        octFunc();
        decFunc();

    }

    // Function for - XOR (^) Function 


    function bitwiseXor(){

        var main_value = calc_prog.demo_main.value;
        var split_value = main_value.split("^");

        calc_prog.demo_main.value ="0b"+parseInt(split_value[0]).toString(2)^"0b"+parseInt(split_value[1]).toString(2);

        hexFunc();
        binFunc();
        octFunc();
        decFunc();

    }

    // Function for - NOT (~) Function 


    function bitwiseNot(){

        var main_value = calc_prog.demo_main.value;
        var split_value = main_value.split("~");

        calc_prog.demo_main.value = ~parseInt(split_value[1]);

        hexFunc();
        binFunc();
        octFunc();
        decFunc();

    }

// For the Evaluating the Bitwise Calculations

document.getElementById("evaluate_prog").addEventListener("click",function(){
    myFunction();
    if(calc_prog.demo_main.value.includes("|")){
        bitwiseOr();           
    }else if(calc_prog.demo_main.value.includes("&")){
        bitwiseAnd();
    }else if(calc_prog.demo_main.value.includes("^")){
        bitwiseXor();
    }else if(calc_prog.demo_main.value.includes("~")){
        bitwiseNot();
    }
});

document.getElementById("clear_prog").addEventListener("click",clear_prog);
document.getElementById("demo_main").addEventListener("keyup",function(){
    hexFunc();
    binFunc();
    octFunc();
    decFunc();
});

document.getElementById("demo_hex").addEventListener("keyup",function(){
    hexFunc();
    binFunc();
    octFunc();
    decFunc();
});


document.getElementById("sqrt_prog").addEventListener("click",mathSqrt_prog);
document.getElementById("fact_prog").addEventListener("click",factorial_prog);
document.getElementById("delete_prog").addEventListener("click",delete_prog);
document.getElementById("plusMinus_prog").addEventListener("click",plusMin_prog);












