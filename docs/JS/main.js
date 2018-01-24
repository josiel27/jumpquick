
var bt_play = document.getElementById('bt_play');
var bt_options = document.getElementById('bt_options');
var character = document.getElementById('character');
var svgMain = document.getElementById('svgMain');
var chooseChar = document.getElementById('chooseChar');
var bkgStart = document.getElementById('bkgStart');
var bkgPlaying = document.getElementById('bkgPlaying');
var clan = "orc";
let sizePass = 10;
let incMove = 0;



//hide the element
function hide(e) { 
    e.style.display = 'none'; 
}

//show the element
function show(e) { 
    e.style.display = 'block'; 
}

hide(character); //hide character
hide(chooseChar); //hide chooseChar
hide(bkgPlaying); //hide background playing

//initialize for choose character
function initialize() {
    hide(bt_options);
    show(chooseChar);
}

//function for start game 
function startGame(numCharChoose) {
    show(character);
    show(bkgPlaying); 
    hide(chooseChar);
    hide(bkgStart);
    if(numCharChoose >= 4){
        clan = "knight";
    }else{
        clan = "orc";
    }
    character.setAttribute('href', "characters/"+clan+numCharChoose+"/idle/IDLE_000.png");
    document.body.addEventListener('keydown', funcaoTecladoKeyDown);
}

//for move right
function moveRight() {
    incMove++;
    perso = getSVGMatrix(svgMain);
    perso.e += sizePass;
    if (incMove <= 25) {
        requestAnimationFrame(moveRight);
    }
}

//for move left
function moveLeft() {
    incMove++;
    perso = getSVGMatrix(svgMain);
    perso.e -= sizePass;
    if (incMove <= 25) {
        requestAnimationFrame(moveLeft);
    }
}

//for move up
function moveUp() {
    console.log(character)
    character.setAttribute('href', "characters/orc/jump/JUMP_004.png");
}



//get an array of the element
function getSVGMatrix(element) {
    element = element.getElementsByTagName('g')[0];
    let transform = element.transform.baseVal.getItem(0);
    let matrix = transform.matrix;
    return matrix;
};


//botton play
bt_play.addEventListener("click", function () {
    initialize();
})


function addEventChooseChar() {
    qtdChar = chooseChar.getElementsByTagName('img');
    for (var i = 1; i <= qtdChar.length; i++) {
        let numCharChoose = i; //character number
        document.getElementById('choose'+i).addEventListener("click", function () {
            startGame(numCharChoose);
        })
    }
}
addEventChooseChar();




funcaoTecladoKeyDown = function (event) {
    incMove = 0;
    switch (event.keyCode) {
        case 39: moveRight(); break;
        case 37: moveLeft(); break;
        case 38: moveUp('up'); break;
        case 40: moveTo('down'); break;
    }
}

