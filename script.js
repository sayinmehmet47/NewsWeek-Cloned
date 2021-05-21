var open=0;
var mySidebar=document.getElementById("mySidebar")
function myFunction(){
    if(open===0){
         mySidebar.style.width = "250px";
           return open=1;
        
    }
    if(open===1){
        mySidebar.style.width = "0px";
        return open=0;
    }

}

