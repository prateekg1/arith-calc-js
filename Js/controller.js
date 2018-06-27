window.addEventListener("DOMContentLoaded",start);
function start(){
    events();
}
function events(){
    document.querySelector("#clearall").addEventListener("click",remove);
    var buttons=document.querySelectorAll(".math");
    if(buttons){
        buttons.forEach(button=>button.addEventListener("click",calculate));
    }
} 
const convert=val=>isNaN(Number(val))?0:Number(val);

function calculate(){
    var first=convert(document.querySelector("#first").value);
    var second= convert(document.querySelector("#second").value);
    operations.set(first,second);
    var op=this.getAttribute("data-operations");
    var result=operations[op]();
    print(result);
    
}
const print=(result)=>document.querySelector("#result").innerHTML=result;
function remove(){
    var clear=document.querySelectorAll("input[type='text']"); 
    clear.forEach(cl=>cl.value="");
    document.querySelector("#result").innerHTML=" ";
}

