let boxes=document.querySelectorAll(".box")
let turn_of_O=false;
let m=document.querySelector("#msg");
let msgContainer=document.querySelector(".msgContainer");
let ResetBtn=document.querySelector("#Reset");
let New=document.querySelector("#NewBtn");
 countOfClick=0;
const winning_pattern=[
    [0,1,2],[0,4,8],[0,3,6],[1,4,7],[2,4,6],[2,5,8],[3,4,5],[6,7,8]
]

const resetBtn=()=>{
    turn_of_O=false;
    enableBoxes();
    msgContainer.classList.add("hide");
}

boxes.forEach((box) => {
    box.addEventListener("click",()=>{
        console.log("box was clicked")
        if(turn_of_O===true){
            box.innerText="o";
            turn_of_O=false;
        }else{
            box.innerText='x';
            turn_of_O=true;
        }
        countOfClick++;
        box.disabled=true;
        let w=checkWinner();
        if(countOfClick===9 && !w)
             checkDraw();
    })
})
const checkDraw=()=>{
    if(countOfClick===9){
    m.innerText="Draw";
    msgContainer.classList.remove("hide");
    enableBox();
}

}

const enableBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";

    }
}

const disableBox=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}

const showWinner=(winner)=>{
    m.innerText=`Congratulation winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBox();
}

const checkWinner=()=>{
      for(let pattern of winning_pattern){
       
        let pos1=boxes[pattern[0]].innerText;
        let pos2=boxes[pattern[1]].innerText;
        let pos3=boxes[pattern[2]].innerText;
        if(pos1!=""&&pos2!=""&&pos3!=""){
            if(pos1===pos2&&pos2===pos3){
               
                
                showWinner(pos1);
                return true;
            }
        }

      }
      return false;
}
New.addEventListener("click",resetBtn);
ResetBtn.addEventListener("click",resetBtn); 

