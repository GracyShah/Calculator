const ip=document.getElementById("ip");

function appendToip(input){
    ip.value += input;
}

function AclearIp(){
    ip.value = "";
}

function calculate(){
    try{
        ip.value = eval(ip.value);
    }
    catch(error){
        ip.value="Error!"
    }
}

let deleteBtn=document.querySelector("#de");

deleteBtn.addEventListener("click",()=>{
    ip.value = ip.value.toString().slice(0,-1);
});