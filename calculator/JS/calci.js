function displayValue(val){
 document.getElementById("display").value=document.getElementById("display").value + val;
}

function cleardisplay(){
 document.getElementById("display").value="";
}

function calculate(){
    var input=document.getElementById("display").value;
    var result=eval(input);
    document.getElementById("display").value=result;
}