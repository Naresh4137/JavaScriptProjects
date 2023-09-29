const startbtn=document.getElementById('start');
const pausebtn=document.getElementById('pause');
const resetbtn=document.getElementById('reset');

var time;
var countdown;
var myinterval;
startbtn.addEventListener("click", function () { 
    time = document.getElementById('input').value * 60;
    if(time==""){
        alert('please provide Time')
    }
    else if(isNaN(time))
    {
        alert('provide input in numbers')
    }
    else{
        countdown = document.getElementById('timer');
        myinterval=setInterval(output,1000)
        
    }
})
pausebtn.addEventListener("click",function (){
    clearInterval(myinterval)
})
pausebtn.addEventListener("dblclick",function(){
    myinterval=setInterval(output,1000)
})
resetbtn.addEventListener("click",function(){
    clearInterval(myinterval)
    document.getElementById('input').value="";
    document.getElementById('timer').innerHTML="00:00:00"

})
function output() {
    let hours = Math.floor(time/3600);
    let minutes = Math.floor((time%3600)/60);
    let seconds = Math.floor(time % 60);

    function addzero(unit){
        return ("0"+unit).length>2 ? unit : "0"+unit;
    }
    countdown.innerHTML = `${addzero(hours)}:${addzero(minutes)}:${addzero(seconds)}`;
    if(hours!=0 || minutes!=0 || seconds!=0){
        time--;                
    }           
}