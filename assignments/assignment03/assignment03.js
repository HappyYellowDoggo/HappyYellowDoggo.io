//author:nathan foess Program: Assignment 03 JS Contact: Nlfoess@svsu.edu

let elem = [];
// assign the entire table row for hole 1 to a variable, elem

//give each table row a index
elem[1] = document.getElementById("1");
elem[2] = document.getElementById("2");
elem[3] = document.getElementById("3");
elem[4] = document.getElementById("4");
elem[5] = document.getElementById("5");
elem[6] = document.getElementById("6");
elem[7] = document.getElementById("7");
elem[8] = document.getElementById("8");
elem[9] = document.getElementById("9");
elem[10] = document.getElementById("10");
elem[11] = document.getElementById("11");
elem[12] = document.getElementById("12");
elem[13] = document.getElementById("13");
elem[14] = document.getElementById("14");
elem[15] = document.getElementById("15");
elem[16] = document.getElementById("16");
elem[17] = document.getElementById("17");
elem[18] = document.getElementById("18");



//give each add button a index
elem[19] = document.getElementById("btn1");
elem[20] = document.getElementById("btn2");
elem[21] = document.getElementById("btn3");
elem[22] = document.getElementById("btn4");
elem[23] = document.getElementById("btn5");
elem[24] = document.getElementById("btn6");
elem[25] = document.getElementById("btn7");
elem[26] = document.getElementById("btn8");
elem[27] = document.getElementById("btn9");
elem[28] = document.getElementById("btn10");
elem[29] = document.getElementById("btn11");
elem[30] = document.getElementById("btn12");
elem[31] = document.getElementById("btn13");
elem[32] = document.getElementById("btn14");
elem[33] = document.getElementById("btn15");
elem[34] = document.getElementById("btn16");
elem[35] = document.getElementById("btn17");
elem[36] = document.getElementById("btn18");



//give each over button an index
elem[37]
= document.getElementById("over1")
elem[38]
= document.getElementById("over2")
elem[39]
= document.getElementById("over3")
elem[40]
= document.getElementById("over4")
elem[41]
= document.getElementById("over5")
elem[42]
= document.getElementById("over6")
elem[43]
= document.getElementById("over7")
elem[44]
= document.getElementById("over8")
elem[45]
= document.getElementById("over9")
elem[46]
= document.getElementById("over10")
elem[47]
= document.getElementById("over11")
elem[48]
= document.getElementById("over12")
elem[49]
= document.getElementById("over13")
elem[50]
= document.getElementById("over14")
elem[51]
= document.getElementById("over15")
elem[52]
= document.getElementById("over16")
elem[53]
= document.getElementById("over17")
elem[54]
= document.getElementById("over18")


//give the totals row an index
elem[55] = document.getElementById("totals")


//give the scores button an index
elem[56] = document.getElementById("finalScores")


//give all clear buttons an index
elem[57] = document.getElementById("c1")
elem[58] = document.getElementById("c2")
elem[59] = document.getElementById("c3")
elem[60] = document.getElementById("c4")
elem[61] = document.getElementById("c5")
elem[62] = document.getElementById("c6")
elem[63] = document.getElementById("c7")
elem[64] = document.getElementById("c8")
elem[65] = document.getElementById("c9")
elem[66] = document.getElementById("c10")
elem[67] = document.getElementById("c11")
elem[68] = document.getElementById("c12")
elem[69] = document.getElementById("c13")
elem[70] = document.getElementById("c14")
elem[71] = document.getElementById("c15")
elem[72] = document.getElementById("c16")
elem[73] = document.getElementById("c17")
elem[74] = document.getElementById("c18")
elem[75] = document.getElementById("c19")



// display the number of children (all td elements)
// console.log(elem.children.length);
// display the content of the + button, which is the first child of the fifth element
// console.log(elem.children[4].children[0]); 

// assign a function to the + button
elem[1].children[4].children[0].onclick 
  = function(){add1(elem[1]);};
elem[2].children[4].children[0].onclick 
  = function(){add1(elem[2]);};
elem[3].children[4].children[0].onclick 
  = function(){add1(elem[3]);};
elem[4].children[4].children[0].onclick 
  = function(){add1(elem[4]);};
elem[5].children[4].children[0].onclick 
  = function(){add1(elem[5]);};
elem[6].children[4].children[0].onclick 
  = function(){add1(elem[6]);};
elem[7].children[4].children[0].onclick 
  = function(){add1(elem[7]);};
elem[8].children[4].children[0].onclick 
  = function(){add1(elem[8]);};
elem[9].children[4].children[0].onclick 
  = function(){add1(elem[9]);};
elem[10].children[4].children[0].onclick 
  = function(){add1(elem[10]);};
elem[11].children[4].children[0].onclick 
  = function(){add1(elem[11]);};
elem[12].children[4].children[0].onclick 
  = function(){add1(elem[12]);};
elem[13].children[4].children[0].onclick 
  = function(){add1(elem[13]);};
elem[14].children[4].children[0].onclick 
  = function(){add1(elem[14]);};
elem[15].children[4].children[0].onclick 
  = function(){add1(elem[15]);};
elem[16].children[4].children[0].onclick 
  = function(){add1(elem[16]);};
elem[17].children[4].children[0].onclick 
  = function(){add1(elem[17]);};
elem[18].children[4].children[0].onclick 
  = function(){add1(elem[18]);};






//assign a function to the - buttons
elem[19].onclick = function(){sub1(elem[1]);};
elem[20].onclick = function(){sub1(elem[2]);};
elem[21].onclick = function(){sub1(elem[3]);};
elem[22].onclick = function(){sub1(elem[4]);};
elem[23].onclick = function(){sub1(elem[5]);};
elem[24].onclick = function(){sub1(elem[6]);};
elem[25].onclick = function(){sub1(elem[7]);};
elem[26].onclick = function(){sub1(elem[8]);};
elem[27].onclick = function(){sub1(elem[9]);};
elem[28].onclick = function(){sub1(elem[10]);};
elem[29].onclick = function(){sub1(elem[11]);};
elem[30].onclick = function(){sub1(elem[12]);};
elem[31].onclick = function(){sub1(elem[13]);};
elem[32].onclick = function(){sub1(elem[14]);};
elem[33].onclick = function(){sub1(elem[15]);};
elem[34].onclick = function(){sub1(elem[16]);};
elem[35].onclick = function(){sub1(elem[17]);};
elem[36].onclick = function(){sub1(elem[18]);};


//assign a function to over buttons
elem[37].onclick = function(){over(elem[1]);};
elem[38].onclick = function(){over(elem[2]);};
elem[39].onclick = function(){over(elem[3]);};
elem[40].onclick = function(){over(elem[4]);};
elem[41].onclick = function(){over(elem[5]);};
elem[42].onclick = function(){over(elem[6]);};
elem[43].onclick = function(){over(elem[7]);};
elem[44].onclick = function(){over(elem[8]);};
elem[45].onclick = function(){over(elem[9]);};
elem[46].onclick = function(){over(elem[10]);};
elem[47].onclick = function(){over(elem[11]);};
elem[48].onclick = function(){over(elem[12]);};
elem[49].onclick = function(){over(elem[13]);};
elem[50].onclick = function(){over(elem[14]);};
elem[51].onclick = function(){over(elem[15]);};
elem[52].onclick = function(){over(elem[16]);};
elem[53].onclick = function(){over(elem[17]);};
elem[54].onclick = function(){over(elem[18]);};

// add up all par 4's
elem[55].children[1].innerHTML = 18 * 4;
// assign function to add up final scores
elem[56].onclick = function() {add()};

//assign a function to clear buttons
elem[57].onclick = function() {clear(elem[1])};
elem[58].onclick = function() {clear(elem[2])};
elem[59].onclick = function() {clear(elem[3])};
elem[60].onclick = function() {clear(elem[4])};
elem[61].onclick = function() {clear(elem[5])};
elem[62].onclick = function() {clear(elem[6])};
elem[63].onclick = function() {clear(elem[7])};
elem[64].onclick = function() {clear(elem[8])};
elem[65].onclick = function() {clear(elem[9])};
elem[66].onclick = function() {clear(elem[10])};
elem[67].onclick = function() {clear(elem[11])};
elem[68].onclick = function() {clear(elem[12])};
elem[69].onclick = function() {clear(elem[13])};
elem[70].onclick = function() {clear(elem[14])};
elem[71].onclick = function() {clear(elem[15])};
elem[72].onclick = function() {clear(elem[16])};
elem[73].onclick = function() {clear(elem[17])};
elem[74].onclick = function() {clear(elem[18])};


//assign a function to clear entire scorecard
elem[75].onclick = function() {clearAll()};
  


// create an "add1" function
function add1 (elem) {
  if(elem.children[2].innerHTML == "-") 
    elem.children[2].innerHTML = "1";
  else {
    let currentScore = elem.children[2].innerHTML;
    currentScore = Number.parseInt(currentScore);
    elem.children[2].innerHTML = currentScore + 1;
  }
}

//create sub1
function sub1 (elem) {
  if(elem.children[2].innerHTML == "-") 
    elem.children[2].innerHTML = "-1";
  else {
    let currentScore = elem.children[2].innerHTML;
    currentScore = Number.parseInt(currentScore);
    elem.children[2].innerHTML = currentScore - 1;
  }
}
//create over
function over (elem){
  if(elem.children[2].innerHTML != "-"){
    elem.children[3].innerHTML = elem.children[2].innerHTML - elem.children[1].innerHTML;
  }else{
    elem.children[3] = "-";
  }
}

//create add
function add(){
  
    addScore();
    addOver();
}
//create addScore
function addScore (){
  
    for(let i = 1; i < 19; i++){
    if(elem[i].children[2].innerHTML == "-"){
      elem[i].children[2].innerHTML = 0;
    }
  }
  elem[55].children[2].innerHTML = 
   
Number(elem[1].children[2].innerHTML) +                             
Number(elem[2].children[2].innerHTML)+
Number(elem[3].children[2].innerHTML)+
Number(elem[4].children[2].innerHTML)+
Number(elem[5].children[2].innerHTML)+
Number(elem[6].children[2].innerHTML)+
Number(elem[7].children[2].innerHTML)+
Number(elem[8].children[2].innerHTML)+
Number(elem[9].children[2].innerHTML)+
Number(elem[10].children[2].innerHTML)+
Number(elem[11].children[2].innerHTML)+
Number(elem[12].children[2].innerHTML)+
Number(elem[13].children[2].innerHTML)+
Number(elem[14].children[2].innerHTML)+
Number(elem[15].children[2].innerHTML)+
Number(elem[16].children[2].innerHTML)+
Number(elem[17].children[2].innerHTML)+
Number(elem[18].children[2].innerHTML);
}


function addOver (){
  
   for(let i = 1; i < 19; i++){
    if(elem[i].children[3].innerHTML == "-"){
      elem[i].children[3].innerHTML = 0;
    }
  }
  elem[55].children[3].innerHTML = 
   
Number(elem[1].children[3].innerHTML) +                             
Number(elem[2].children[3].innerHTML)+
Number(elem[3].children[3].innerHTML)+
Number(elem[4].children[3].innerHTML)+
Number(elem[5].children[3].innerHTML)+
Number(elem[6].children[3].innerHTML)+
Number(elem[7].children[3].innerHTML)+
Number(elem[8].children[3].innerHTML)+
Number(elem[9].children[3].innerHTML)+
Number(elem[10].children[3].innerHTML)+
Number(elem[11].children[3].innerHTML)+
Number(elem[12].children[3].innerHTML)+
Number(elem[13].children[3].innerHTML)+
Number(elem[14].children[3].innerHTML)+
Number(elem[15].children[3].innerHTML)+
Number(elem[16].children[3].innerHTML)+
Number(elem[17].children[3].innerHTML)+
Number(elem[18].children[3].innerHTML);
}

function clear(elem){
  elem.children[2].innerHTML = "-"
  elem.children[3].innerHTML = "-"
}

function clearAll(){
for(i =1; i < 19; i++){
  elem[i].children[2].innerHTML = "-"
  elem[i].children[3].innerHTML = "-"
  elem[55].children[2].innerHTML = "-"
  elem[55].children[3].innerHTML = "-"
}
}
