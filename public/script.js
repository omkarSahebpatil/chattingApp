let sendbtn=document.querySelector("button");
let clearAll=document.querySelector(".clearAll");
let inputText=document.querySelector("input");

// let nameId=prompt("enter name: ");

let msgBox=document.querySelector(".msg");

sendbtn.addEventListener("click", (e)=>{
    let data={
        name: nameId,
        message: inputText.value
    }

    if(inputText.value==""){
        alert("message required!!!");
    }
    else{
        socket.emit("createMsg", data)
    }
})

clearAll.addEventListener("click", (e)=>{
    msgBox.innerHTML="";
})

function createElement(data){
    let sendMsg=document.createElement("div");
    if(data.name==nameId){
        sendMsg.className="sendMsg";
    }
    else{
        sendMsg.className="recivedMsg";
    }

    if(data.name===null){
        nameId=prompt("Name required: ");
    }
    else if(data.name==nameId){
        sendMsg.innerText=`you : ${data.message}`
    }
    else{
        sendMsg.innerText=`${data.name} : ${data.message}`
    }
    msgBox.appendChild(sendMsg);
}

socket.on("createMsg", (data)=>{
    createElement(data);
})