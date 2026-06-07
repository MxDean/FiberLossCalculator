function calculate(){

let distance =
parseFloat(
document.getElementById("distance").value
) || 0;

let attenuation =
parseFloat(
document.getElementById("attenuation").value
) || 0;

let connector =
parseFloat(
document.getElementById("connector").value
) || 0;

let splice =
parseFloat(
document.getElementById("splice").value
) || 0;

let margin =
parseFloat(
document.getElementById("margin").value
) || 0;

let fiberLoss =
distance * attenuation;

let connectorLoss =
connector * 0.3;

let spliceLoss =
splice * 0.1;

let totalLoss =
fiberLoss +
connectorLoss +
spliceLoss +
margin;

document.getElementById(
"distanceKPI"
).innerHTML =
distance + " km";

document.getElementById(
"lossKPI"
).innerHTML =
totalLoss.toFixed(2) + " dB";

document.getElementById(
"marginKPI"
).innerHTML =
margin + " dB";

document.getElementById(
"fiberLoss"
).innerHTML =
"Fiber Loss : " +
fiberLoss.toFixed(2) + " dB";

document.getElementById(
"connectorLoss"
).innerHTML =
"Connector Loss : " +
connectorLoss.toFixed(2) + " dB";

document.getElementById(
"spliceLoss"
).innerHTML =
"Splice Loss : " +
spliceLoss.toFixed(2) + " dB";

document.getElementById(
"totalLoss"
).innerHTML =
"Total Loss : " +
totalLoss.toFixed(2) + " dB";

if(totalLoss <= 20){

document.getElementById(
"statusKPI"
).innerHTML =
"PASS";

document.getElementById(
"statusKPI"
).className =
"pass";

}
else{

document.getElementById(
"statusKPI"
).innerHTML =
"FAIL";

document.getElementById(
"statusKPI"
).className =
"fail";

}

}

setInterval(()=>{

const now =
new Date();

document.getElementById(
"clock"
).innerHTML =
now.toLocaleString();

},1000);

const canvas =
document.getElementById("matrix");

const ctx =
canvas.getContext("2d");

canvas.width =
window.innerWidth;

canvas.height =
window.innerHeight;

const letters =
"010101101001101010101";

const fontSize = 14;

const columns =
canvas.width/fontSize;

const drops=[];

for(let i=0;i<columns;i++)
drops[i]=1;

function draw(){

ctx.fillStyle=
"rgba(0,0,0,0.05)";

ctx.fillRect(
0,
0,
canvas.width,
canvas.height
);

ctx.fillStyle=
"#00ff41";

ctx.font=
fontSize+"px monospace";

for(let i=0;i<drops.length;i++){

const text=
letters[
Math.floor(
Math.random()*
letters.length
)
];

ctx.fillText(
text,
i*fontSize,
drops[i]*fontSize
);

if(
drops[i]*fontSize>
canvas.height &&
Math.random()>0.975
)
drops[i]=0;

drops[i]++;

}

}

setInterval(draw,35);
