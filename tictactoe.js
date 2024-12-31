let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector(".reset");
let Hide = document.querySelector(".hide");


let turn_O = true;

const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turn_O){
            box.innerText = "O";
            turn_O = false;
        }
        else{
        box.innerText = "X";
        turn_O = true;
        }
        box.disabled = true;

        checkWinner();
    });
});

resetbtn.addEventListener("click",()=>{
    Hide.innerText = "";
    boxes.forEach((box)=>{
        box.innerText = "";
        box.disabled =false;
    });
    document.body.style.backgroundColor = "#dd8888";
});

const printValue = ()=>{
    if(turn_O){
        Hide.innerText = `Winner is X`;
    }
    else{
        Hide.innerText = `Winner is O`;
    }
    
}
const checkWinner = () =>{
    for(pattern of winPatterns){
        
        let box1 = boxes[pattern[0]].innerText;
        let box2 = boxes[pattern[1]].innerText;
        let box3 = boxes[pattern[2]].innerText;

        if(box1 != "" || box2 != "" || box3 != ""){
            if(box1 === box2 && box2 === box3){
                    printValue();
                    boxes.forEach((box) =>{
                    box.innerText = "Game\nOver"
                    Hide.classList.remove("hide");
                 })

                 document.body.style.backgroundColor = "black"
                 document.body.style.color = "dd8888"
            }
        }
        
    }
};





