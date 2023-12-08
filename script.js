let box =document.querySelectorAll(".box");
let resetBtn=document.querySelector("#reset-btn");
let newgame=document.querySelector("#new-btn");
let msgContainer =document.querySelector(".msg-container");
let msg =document.querySelector(".msg");
let turnO=true ;
let count=0;// playerX, playerO
const winPatterns = [    
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
  ];

const resetGame=()=>{
    turnO = true
    EnableBox()
    msgContainer.classList.add("hide");
    count=0
}
box.forEach((el)=>{
    el.addEventListener("click",()=>{
        if(turnO){
          el.innerText="o";
           el.style.color="#5158BB"
            turnO=false
        }else{
           el.innerText="x"
           el.style.color="#29524A"
            turnO=true
        }
          el.disabled=true;
          count++
          let iswinner=checkWinner();
          if(count===9 && !iswinner){
            gameDraw()
          }
    })
});
let gameDraw = ()=>{
    msg.innerText="game was drow";
    msgContainer.classList.remove("hide");
}

const disabledBox= ()=>{
    for(let boxs of box){
        boxs.disabled=true
    }
};
const EnableBox= ()=>{
    for(let boxs of box){
        boxs.disabled=false;
        boxs.innerText="";
    }
};


const showWinner =(winner)=>{
                msg.innerText=`congratulation ,winner is ${winner}`;
                msgContainer.classList.remove("hide");
                disabledBox()
                count=0;
};

const checkWinner =()=>{
    for(let pattern of winPatterns){
     
        
            let posVal1=box[pattern[0]].innerText;
            let posVal2=box[pattern[1]].innerText;
            let posVal3=box[pattern[2]].innerText;
            if(posVal1 != "" && posVal2 !="" &&  posVal3 != ""){
                if(posVal1 ===posVal2 && posVal2 === posVal3){ 
                           showWinner(posVal1)
                }
            }
    }
}
resetBtn.addEventListener("click",resetGame)
newgame.addEventListener("click",resetGame)












































