let elem = [];

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

elem[19] = document.getElementById("totals");

//assigning totals for par 4
elem[19].children[1].innerHTML = 72;

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

//assign a function to the - button
elem[1].children[4].children[1].onclick 
  = function(){sub1(elem[1]);};
elem[2].children[4].children[1].onclick 
  = function(){sub1(elem[2]);};
elem[3].children[4].children[1].onclick 
  = function(){sub1(elem[3]);};
elem[4].children[4].children[1].onclick 
  = function(){sub1(elem[4]);};
elem[5].children[4].children[1].onclick 
  = function(){sub1(elem[5]);};
elem[6].children[4].children[1].onclick 
  = function(){sub1(elem[6]);};
elem[7].children[4].children[1].onclick 
  = function(){sub1(elem[7]);};
elem[8].children[4].children[1].onclick 
  = function(){sub1(elem[8]);};
elem[9].children[4].children[1].onclick 
  = function(){sub1(elem[9]);};
elem[10].children[4].children[1].onclick 
  = function(){sub1(elem[10]);};
elem[11].children[4].children[1].onclick 
  = function(){sub1(elem[11]);};
elem[12].children[4].children[1].onclick 
  = function(){sub1(elem[12]);};
elem[13].children[4].children[1].onclick 
  = function(){sub1(elem[13]);};
elem[14].children[4].children[1].onclick 
  = function(){sub1(elem[14]);};
elem[15].children[4].children[1].onclick 
  = function(){sub1(elem[15]);};
elem[16].children[4].children[1].onclick 
  = function(){sub1(elem[16]);};
elem[17].children[4].children[1].onclick 
  = function(){sub1(elem[17]);};
elem[18].children[4].children[1].onclick 
  = function(){sub1(elem[18]);};

// assign a function to the C (clear) button
elem[1].children[4].children[2].onclick 
  = function(){c1(elem[1]);};
elem[2].children[4].children[2].onclick 
  = function(){c1(elem[2]);};
elem[3].children[4].children[2].onclick 
  = function(){c1(elem[3]);};
elem[4].children[4].children[2].onclick 
  = function(){c1(elem[4]);};
elem[5].children[4].children[2].onclick 
  = function(){c1(elem[5]);};
elem[6].children[4].children[2].onclick 
  = function(){c1(elem[6]);};
elem[7].children[4].children[2].onclick 
  = function(){c1(elem[7]);};
elem[8].children[4].children[2].onclick 
  = function(){c1(elem[8]);};
elem[9].children[4].children[2].onclick 
  = function(){c1(elem[9]);};
elem[10].children[4].children[2].onclick 
  = function(){c1(elem[10]);};
elem[11].children[4].children[2].onclick 
  = function(){c1(elem[11]);};
elem[12].children[4].children[2].onclick 
  = function(){c1(elem[12]);};
elem[13].children[4].children[2].onclick 
  = function(){c1(elem[13]);};
elem[14].children[4].children[2].onclick 
  = function(){c1(elem[14]);};
elem[15].children[4].children[2].onclick 
  = function(){c1(elem[15]);};
elem[16].children[4].children[2].onclick 
  = function(){c1(elem[16]);};
elem[17].children[4].children[2].onclick 
  = function(){c1(elem[17]);};
elem[18].children[4].children[2].onclick 
  = function(){c1(elem[18]);};

// create add function
function add(){
 addScore();
  addOver();
}

//create totals
function addScore (){
  
    for(let i = 1; i < 19; i++){
    if(elem[i].children[2].innerHTML == "-"){
      elem[i].children[2].innerHTML = 0;
    }
  }
  elem[19].children[2].innerHTML = 
   
Number(elem[1].children[2].innerHTML) +                             
Number(elem[2].children[2].innerHTML) +
Number(elem[3].children[2].innerHTML) +
Number(elem[4].children[2].innerHTML) +
Number(elem[5].children[2].innerHTML) +
Number(elem[6].children[2].innerHTML) +
Number(elem[7].children[2].innerHTML) +
Number(elem[8].children[2].innerHTML) +
Number(elem[9].children[2].innerHTML) +
Number(elem[10].children[2].innerHTML) +
Number(elem[11].children[2].innerHTML) +
Number(elem[12].children[2].innerHTML) +
Number(elem[13].children[2].innerHTML) +
Number(elem[14].children[2].innerHTML) +
Number(elem[15].children[2].innerHTML) +
Number(elem[16].children[2].innerHTML) +
Number(elem[17].children[2].innerHTML) +
Number(elem[18].children[2].innerHTML);
}


// creating an "add1" function
function add1 (elem) {
  if(elem.children[2].innerHTML == "-") 
    elem.children[2].innerHTML = "1";
  else {
    let currentScore = elem.children[2].innerHTML;
    currentScore = Number.parseInt(currentScore);
    elem.children[2].innerHTML = currentScore + 1;
  }
  if(elem.children[2].innerHTML == "-")
    elem.children[3].innerHTML = "-";
  else {
    let currentScore = elem.children[2].innerHTML;
    let par = elem.children[1].innerHTML;
    currentScore = Number.parseInt(currentScore);
    par = Number.parseInt(par);
    elem.children[3].innerHTML = currentScore - par;
  }
}

// creating a "sub1" function
function sub1 (elem) {
  if(elem.children[2].innerHTML == "1"||elem.children[2].innerHTML == "-") 
    elem.children[2].innerHTML = "-";
  else {
    let currentScore = elem.children[2].innerHTML;
    currentScore = Number.parseInt(currentScore);
    elem.children[2].innerHTML = currentScore - 1;
  }
  if(elem.children[2].innerHTML == "-")
    elem.children[3].innerHTML = "-";
  else {
    let currentScore = elem.children[2].innerHTML;
    let par = elem.children[1].innerHTML;
    currentScore = Number.parseInt(currentScore);
    par = Number.parseInt(par);
    elem.children[3].innerHTML = currentScore - par;
  }
}

function c1 (elem) {
  elem.children[2].innerHTML = "-";
  elem.children[3].innerHTML = "-";
}

