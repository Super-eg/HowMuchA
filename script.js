const show = document.getElementById("show");
const isRight = document.getElementById("isRight");
const scoreShow = document.getElementById("scoreShow");
const comboShow = document.getElementById("combo");
const otherLetter = [ "B", "C", "D", "E" ];
var score = 0;
var combo = 0;

const say = ( sayNum ) => {
	if ( sayNum ) { 
		judge( strings, sayNum, answerNum );
		[ strings, answerNum ] = makeAns();
		show.innerText = strings.join(" ");
  } else {
  	show.innerText = strings.join(" ") ;
  }
}

const judge = ( text, say, ans ) => {
	if ( say === ans ) {
			isRight.innerText = "CORRECT";
			score++
			if ( score > 0 ) { combo++ }
	} else {
			isRight.innerText = `The correct answer is ${ ans }`;
			score--
			combo = 0;
	}
	combo > 1 ? comboShow.innerText = `Combo x ${combo} !!!`: comboShow.innerText = "";
	scoreShow.innerText = score;
}

const resetScore = () => {
	score = 0;
	combo = 0;
	scoreShow.innerText = score;
	isRight.innerText = "Reset Score......";
	comboShow.innerText = "";
}

const makeAns = () => {
	confusedArray = [];
	manyA = getA();
	answerNum = manyA.pop();
	other = getOther( answerNum );
	allStrings = manyA.concat( other );
	for ( let i=0 ; i<7 ; i++ ) {
		random = Math.floor( Math.random() * allStrings.length );
		confusedArray.push( allStrings.splice( random, 1 )[0] );
	}
	return [ confusedArray, answerNum ];
}

const getA = () => {
	howManyA = Math.floor( Math.random() * 3 + 1 );
	switch( howManyA ) {
		case 1: 
			return[ "A" , 1 ];
		case 2:
			return[ "A", "A" , 2 ];
		case 3:
			return[ "A", "A", "A" , 3];
	}
}

const getOther = ( num ) => {
	otherThing = [];
	otherNum = 7 - num;
	for ( ; otherNum>0 ; otherNum-- ) {
		whichOther = Math.floor( Math.random() * 4 );
		otherThing.push( otherLetter[ whichOther ] );
	}
	return otherThing;
}

//default
var [strings, ansNum] = makeAns();
say(0);