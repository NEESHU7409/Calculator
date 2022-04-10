window.addEventListener("load", bindEvents);

function bindEvents(){
    let buttons=document.getElementsByTagName("button");
    console.log(buttons.length);
    for(let i=0;i<buttons.length;i++){
        buttons[i].addEventListener("click",actionfun);
    }
}
function actionfun(){
    console.log(this.innerText);
    if(this.innerText.length==0){
       document.getElementById("val").innerText=this.innerText;
    }
    else if(this.innerText=='='){
      try{
        let res= eval(document.getElementById('val').innerText);
       document.getElementById('val').innerText=res;
        }
        catch{
            document.getElementById('val').innerText='Error';
        }

    }
    else if(this.innerText=='CE'){
        document.getElementById('val').innerText='';
    }
    else{
        let r=document.getElementById("val").innerText;
        document.getElementById("val").innerText=r+this.innerText;
    }
    
}

