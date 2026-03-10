function sendMessage(){

const input=document.getElementById("userInput");
const chatbox=document.getElementById("chatbox");

const userText=input.value.toLowerCase();

if(input.value==="") return;

chatbox.innerHTML+=`<div class="message user">${input.value}</div>`;

let reply="";

if(userText.includes("leak")){

reply="Hidden pipeline leaks are a major issue in hotels. Most pipes are behind walls so problems often appear only when pressure drops.";

}

else if(userText.includes("water")){

reply="Water infrastructure supports guest rooms, kitchens, laundry and pools. Any disruption can immediately affect guest experience.";

}

else if(userText.includes("ai")){

reply="If AI could detect leaks early and automatically shut valves it would save water and reduce emergency maintenance.";

}

else if(userText.includes("problem")){

reply="The most stressful situation is plumbing failure during peak guest hours when many rooms are using water.";

}

else{

reply="My main responsibility is ensuring uninterrupted water supply and preventing infrastructure failures.";

}

chatbox.innerHTML+=`<div class="message bot">Rahul is typing...</div>`;

setTimeout(()=>{

chatbox.lastChild.innerHTML=reply;

chatbox.scrollTop=chatbox.scrollHeight;

},1000);

input.value="";

}

function ask(question){

document.getElementById("userInput").value=question;

sendMessage();

}

const buttons=document.querySelectorAll(".acc-btn");

buttons.forEach(btn=>{

btn.addEventListener("click",()=>{

const content=btn.nextElementSibling;

content.style.display=

content.style.display==="block"?"none":"block";

});

});
