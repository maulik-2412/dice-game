function rolldice(){
    var x=Math.floor(Math.random()*6+1);
    var y=Math.floor(Math.random()*6+1);
    switch (x) {
        case 1: document.querySelectorAll(".dice")[0].setAttribute("src","images/Dice-1-b.svg");
                
            break;
        case 2: document.querySelectorAll(".dice")[0].setAttribute("src","images/Dice-2-b.svg");
            break;
        case 3: document.querySelectorAll(".dice")[0].setAttribute("src","images/Dice-3-b.svg");
            break;
        case 4: document.querySelectorAll(".dice")[0].setAttribute("src","images/Dice-4-b.svg");
            break;
        case 5: document.querySelectorAll(".dice")[0].setAttribute("src","images/Dice-5-b.svg");
            break;
        case 6: document.querySelectorAll(".dice")[0].setAttribute("src","images/Dice-6-b.svg");    
            break;
        default:
            break;
    }

    switch (y) {
        case 1: document.querySelectorAll(".dice")[1].setAttribute("src","images/Dice-1-b.svg");
            
            break;
        case 2: document.querySelectorAll(".dice")[1].setAttribute("src","images/Dice-2-b.svg");
            break;
        case 3: document.querySelectorAll(".dice")[1].setAttribute("src","images/Dice-3-b.svg");
            break;
        case 4: document.querySelectorAll(".dice")[1].setAttribute("src","images/Dice-4-b.svg");
            break;
        case 5: document.querySelectorAll(".dice")[1].setAttribute("src","images/Dice-5-b.svg");
            break;
        case 6: document.querySelectorAll(".dice")[1].setAttribute("src","images/Dice-6-b.svg");    
            break;
        default:
            break;
    }
    
    
    if(x>y){
        document.querySelector("h1").textContent=document.querySelectorAll("h4")[0].textContent +" Wins";
    }
    else if(y>x){
        document.querySelector("h1").textContent=document.querySelectorAll("h4")[1].textContent+ " Wins";
    }
    else{
        document.querySelector("h1").textContent="Draw";
    }

}