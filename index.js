var randomno1=Math.floor(Math.random()*6+1);
var randomdice="dice"+randomno1+".png";
var randomimage="images/"+randomdice;
var image1 = document.querySelectorAll("img") [0];
image1.setAttribute("src",randomimage);
var randomno2=Math.floor(Math.random()*6+1);
var randomdice2="dice"+randomno2+".png";
var randomimage2="images/"+randomdice2;
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src",randomimage2);
if(randomno1>randomno2)
{
    document.querySelector("h1").innerHTML ="🚩 Player 1 win 🚩";
}
else if(randomno2>randomno1)
{
    document.querySelector("h1").innerHTML="🚩 Player 2 win 🚩";
}
else{
    document.querySelector("h1").innerHTML="🏳️ DRAW 🏳️";
}
