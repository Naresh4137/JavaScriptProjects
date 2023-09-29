const addBtn=document.getElementById('btn');
let count=0;
addBtn.addEventListener('click',function(){
    const description=document.getElementById('description').value;
    const amount=parseFloat(document.getElementById('amount').value);
    if(description.length==0 ) {
        alert("please provide input");
    }
    else if(isNaN(amount)){
      alert("please provide amount");
    }
    else{
        count+=amount;
        document.getElementById('total').innerHTML=`<b>${count.toFixed(2)}<b>`;
        document.getElementById('items').innerHTML+=`${description}:${amount.toFixed(2)}<br>`; 
            
        document.getElementById('description').value="";
        document.getElementById('amount').value="";
        
    }

})