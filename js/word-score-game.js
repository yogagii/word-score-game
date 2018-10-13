var BAG_OF_LETTERS = [
		new Letter('_', 2, 0),
		new Letter('_', 2, 0),
		new Letter('A', 9, 1),
		new Letter('A', 9, 1),
		new Letter('A', 9, 1),
		new Letter('A', 9, 1),
		new Letter('A', 9, 1),
		new Letter('A', 9, 1),
		new Letter('A', 9, 1),
		new Letter('A', 9, 1),
		new Letter('A', 9, 1),
		new Letter('B', 2, 3),
		new Letter('B', 2, 3),
		new Letter('C', 2, 3),
		new Letter('C', 2, 3),
		new Letter('D', 4, 2),
		new Letter('D', 4, 2),
		new Letter('D', 4, 2),
		new Letter('D', 4, 2),
		new Letter('E', 12, 1),
		new Letter('E', 12, 1),
		new Letter('E', 12, 1),
		new Letter('E', 12, 1),
		new Letter('E', 12, 1),
		new Letter('E', 12, 1),
		new Letter('E', 12, 1),
		new Letter('E', 12, 1),
		new Letter('E', 12, 1),
		new Letter('E', 12, 1),
		new Letter('E', 12, 1),
		new Letter('E', 12, 1),
		new Letter('F', 2, 4),
		new Letter('F', 2, 4),
		new Letter('G', 3, 2),
		new Letter('G', 3, 2),
		new Letter('G', 3, 2),
		new Letter('H', 2, 4),
		new Letter('H', 2, 4),
		new Letter('I', 9, 1),
		new Letter('I', 9, 1),
		new Letter('I', 9, 1),
		new Letter('I', 9, 1),
		new Letter('I', 9, 1),
		new Letter('I', 9, 1),
		new Letter('I', 9, 1),
		new Letter('I', 9, 1),
		new Letter('I', 9, 1),
		new Letter('J', 1, 8),
		new Letter('K', 1, 5),
		new Letter('L', 4, 1),
		new Letter('L', 4, 1),
		new Letter('L', 4, 1),
		new Letter('L', 4, 1),
		new Letter('M', 2, 3),
		new Letter('M', 2, 3),
		new Letter('N', 6, 1),
		new Letter('N', 6, 1),
		new Letter('N', 6, 1),
		new Letter('N', 6, 1),
		new Letter('N', 6, 1),
		new Letter('N', 6, 1),
		new Letter('O', 8, 1),
		new Letter('O', 8, 1),
		new Letter('O', 8, 1),
		new Letter('O', 8, 1),
		new Letter('O', 8, 1),
		new Letter('O', 8, 1),
		new Letter('O', 8, 1),
		new Letter('O', 8, 1),
		new Letter('P', 2, 3),
		new Letter('P', 2, 3),
		new Letter('Q', 1, 10),
		new Letter('R', 6, 1),
		new Letter('R', 6, 1),
		new Letter('R', 6, 1),
		new Letter('R', 6, 1),
		new Letter('R', 6, 1),
		new Letter('R', 6, 1),
		new Letter('S', 4, 1),
		new Letter('S', 4, 1),
		new Letter('S', 4, 1),
		new Letter('S', 4, 1),
		new Letter('T', 6, 1),
		new Letter('T', 6, 1),
		new Letter('T', 6, 1),
		new Letter('T', 6, 1),
		new Letter('T', 6, 1),
		new Letter('T', 6, 1),
		new Letter('U', 4, 1),
		new Letter('U', 4, 1),
		new Letter('U', 4, 1),
		new Letter('U', 4, 1),
		new Letter('V', 2, 4),
		new Letter('V', 2, 4),
		new Letter('W', 2, 4),
		new Letter('W', 2, 4),
		new Letter('X', 1, 8),
		new Letter('Y', 2, 4),
		new Letter('Y', 2, 4),
		new Letter('Z', 1, 10),
];

var YOUR_HAND = new Array();
var SCORE = 0;
function startGame() {
	addNumbersFromBag();
	displayHand();
	
};



function addNumbersFromBag(){
	console.log("your hand has:" + YOUR_HAND.length);
	for(i=YOUR_HAND.length; i < 7; i++){
		var availableLetter = getAvailableLetter()
		if(availableLetter){
			YOUR_HAND[i] = availableLetter;
		}
	}
}


function displayHand(){
	console.log("your hand has:" + YOUR_HAND.length);
	if(YOUR_HAND.length>0){
		for (i = 0; i < YOUR_HAND.length; i++) {
			console.log("#letter-" + (i+1) +" set to " + YOUR_HAND[i].letter);
			$( "#letter-" + (i+1)).addClass("letter-" + YOUR_HAND[i].letter);
			$( "#points-" + (i+1)).addClass("points-" + YOUR_HAND[i].pointsWhenLettersUsed);
			$( "#letter-" + (i+1)).html(YOUR_HAND[i].letter);
			$( "#points-" + (i+1)).html(YOUR_HAND[i].pointsWhenLettersUsed);
		}
		for(ii=YOUR_HAND.length; ii < 7; ii++){
			var elem = $(".tile-piece")[ii]
			while(elem.hasChildNodes()) //当elem下还存在子节点时 循环继续
		    {
		        elem.removeChild(elem.firstChild);
		    }
		}
	}else{
		alert('Game Over! Your score: '+SCORE)
	}
}



function getAvailableLetter(){
	if(BAG_OF_LETTERS.length>0){
		var randomIndex = Math.floor(Math.random() * BAG_OF_LETTERS.length);
		var randomLetter = BAG_OF_LETTERS.splice(randomIndex, 1);
		console.log(randomLetter[0]);
		return randomLetter[0];
	}else{
		console.log('没')
		console.log(YOUR_HAND.length)
		return null
	}
	
}


function findWordToUse(){
 //TODO Your job starts here.
	//alert("Your code needs to go here");	
	var divb =  document.getElementById('buttonarea')
	var p = document.createElement('p')
	p.setAttribute('style','display: inline-block;margin:0px;color:red;')
	p.innerHTML = 'Loading...Please,wait.'
	divb.appendChild(p)
	
	setTimeout(()=> {
		console.log(YOUR_HAND)
		var letters = ''
		result = []
		results = []
		results2 = []
		var letterss = []
		YOUR_HAND.forEach(function(letter){
			letters+=letter.letter.toLowerCase()
		})
		if(letters.indexOf('_')!=-1){
			for(var j = 0;j<26;j++){
				var temp = letters
				temp = temp.replace('_',String.fromCharCode((97 + j)))
				if(temp.indexOf('_')!=-1){
					for(var jj = 0;jj<26;jj++){
						var tempp = temp
						tempp = tempp.replace('_',String.fromCharCode((97 + j)))
						letterss.push(tempp)
					}
				}else{
					letterss.push(temp)
				}
			}
		}else{
			letterss.push(letters)
		}
		console.log(letterss)
		for(var i = 0;i<letterss.length;i++){
			quanzuhe2(letterss[i])
		}
		results.forEach(function(m, i) {
			quanpailie(m, i)
		})
		
		result.forEach(function(r) {
			results2 = results2.concat(r)
		})
	
		console.log(results2)
		console.log(results2.length)
		var maxscore = 0
		var maxword = ''
		results2.forEach(function(n){
			if(isThisAWord(n)){
				//console.log(n)
				var tempscore = caculateScore(n)
				if(maxscore<tempscore){
					maxscore = tempscore
					maxword = n
				}
			}
		})
		if(maxscore==0){
			alert("You don't have any words to make, please click 'Retire the hand'")
			var divb = document.getElementById('buttonarea');
			for (var i = divb.children.length - 1; i >= 0 ; i--) {
				if (divb.children[i].nodeName == 'P') {
					divb.removeChild(divb.children[i]);
				}
			}
		}else{
			console.log(maxscore)
			console.log(maxword)
			var maxword2 = haveLettersForWord2(maxword)
			successfullyAddedWord(maxword)
		}
	}, 10);
	
}
function humanFindWordToUse(){
	
	 var humanFoundWord = $( "#human-word-input").val();
	 console.log("Checking human workd of:" + humanFoundWord);
	 if(isThisAWord(humanFoundWord)){
		 if(haveLettersForWord(humanFoundWord)){
			 successfullyAddedWord(humanFoundWord);
		 }else{
			 alert(humanFoundWord + " - Do not have the letters for this word");
		 }
	 }else{
		 alert(humanFoundWord + " is not a valid word.");
	 }
		
}


function successfullyAddedWord(foundWord){
	$( "#word-history-list").append("<li>" + foundWord + "</li>");
	clearClasses();
	takeOutUsedLetters();
	addNumbersFromBag();
	displayHand();
	$( "#human-word-input").val('');
	var divb = document.getElementById('buttonarea');
	for (var i = divb.children.length - 1; i >= 0 ; i--) {
		if (divb.children[i].nodeName == 'P') {
			divb.removeChild(divb.children[i]);
		}
	}
	
}

function addToScore(letterToAddToScore){
	SCORE = SCORE + letterToAddToScore.pointsWhenLettersUsed;
	console.log(letterToAddToScore.pointsWhenLettersUsed + "<-Points added for " + letterToAddToScore.letter);
	$( "#score-number").html(SCORE);
}


function takeOutUsedLetters(){
	
	for(ii=0; ii < YOUR_HAND.length; ii++){
		if(YOUR_HAND[ii].used){
			addToScore(YOUR_HAND[ii]);
			YOUR_HAND.splice(ii, 1);
			ii = ii-1;
		}else{
			console.log(YOUR_HAND[ii].letter + "<- Not Used");
		}
	}
}

function caculateScore(word){
	var s = 0
	for(i=0;i<word.length;i++){
		for(ii=0; ii<YOUR_HAND.length; ii++){
			if(YOUR_HAND[ii].letter.toLowerCase() == word.charAt(i)){
				s+=YOUR_HAND[ii].pointsWhenLettersUsed
				break
			}
		}
	}
	return s
}

function haveLettersForWord(aProposedWord){
	//You could code the _ logic could go in this function
	var wordAsArray = aProposedWord.toUpperCase().split("");
	for (i = 0; i < wordAsArray.length; i++) {
		var foundLetter = false;
		console.log(wordAsArray[i] + "<-For match");
		for(ii=0; ii<YOUR_HAND.length; ii++){
			console.log("              " + YOUR_HAND[ii].letter + "<-Checking");
			if(YOUR_HAND[ii].letter == wordAsArray [i]){
				if(!YOUR_HAND[ii].used && !foundLetter){
					console.log("     " + YOUR_HAND[ii].letter + "<-Found");
					YOUR_HAND[ii].used = true;
					foundLetter = true;
				}
			}
		}
		if(!foundLetter){
			resetHand();
			return false;
		}
	}
	return true;
}
function haveLettersForWord2(aProposedWord){
	//You could code the _ logic could go in this function
	var wordAsArray = aProposedWord.toUpperCase().split("");
	for (i = 0; i < wordAsArray.length; i++) {
		var foundLetter = false;
		console.log(wordAsArray[i] + "<-For match");
		for(ii=0; ii<YOUR_HAND.length; ii++){
			console.log("              " + YOUR_HAND[ii].letter + "<-Checking");
			if(YOUR_HAND[ii].letter == wordAsArray [i]){
				if(!YOUR_HAND[ii].used && !foundLetter){
					console.log("     " + YOUR_HAND[ii].letter + "<-Found");
					YOUR_HAND[ii].used = true;
					foundLetter = true;
				}
			}
		}
		if(!foundLetter){
			aProposedWord = aProposedWord.replace(wordAsArray[i],'_')
			for(ii=0; ii<YOUR_HAND.length; ii++){
				if(YOUR_HAND[ii].letter == '_'){
					if(!YOUR_HAND[ii].used && !foundLetter){
						YOUR_HAND[ii].used = true;
						foundLetter = true;
					}
				}
			}
			return aProposedWord;
		}
	}
	return aProposedWord;
}

function resetHand(){
	
	for(ii=0; ii<YOUR_HAND.length; ii++){
		YOUR_HAND[i].used = false;
	}
}

function isThisAWord(aProposedWord){
	  if (Word_List.isInList(aProposedWord)) {
	      return true;
	  }
	  return false;
}

function retireHand(){
	//Loose all the points in your hand
	clearClasses();
	YOUR_HAND = new Array();
	addNumbersFromBag();
	displayHand();
}
function clearClasses(){
	for(ii=0; ii < YOUR_HAND.length; ii++){
		$("#letter-" + (ii+1)).removeClass("letter-" + YOUR_HAND[ii].letter);
		$("#points-" + (ii+1)).removeClass("points-" + YOUR_HAND[ii].pointsWhenLettersUsed);
	}
}

$(document).ready(function() {
	startGame();
	
	$("#find-word-button").click(function() {
		findWordToUse();
	});
	$("#human-find-word-button").click(function() {
		humanFindWordToUse();
	});
	$("#retire-hand-button").click(function() {
		retireHand();
	});
	$('#human-word-input').keypress(function(event) {
		if (event.which == 13) {
			humanFindWordToUse();
		}
	});
});

var result = []
var results = []
var results2 = []

function insertLetter(ss, w) {
	var r = new Array();
	r.push(w.concat(ss));
	for(var i = 1; i < ss.length; i++) {
		r.push(((ss.slice(0, i)).concat(w)).concat(ss.slice(i)))
	}
	r.push(ss.concat(w))
	return r;
}

function quanpailie(s, k) {
	result[k] = []
	result[k][0] = s[0];
	for(var i = 1; i < s.length; i++) {
		var temparr = new Array()
		result[k].forEach(function(n) {
			temparr = temparr.concat(insertLetter(n, s[i]))
		})
		for(var j = 0; j < temparr.length; j++) {
			result[k][j] = temparr[j]
		}
	}
}

function quanzuhe2(s) {
	var arr2 = s.split('')
	var rtemp = []
	for(var xx = 1; xx <= arr2.length; xx++) {
		loop(arr2, 0, xx, xx)
	}
}

function loop(arr, start, n, x) {
	if(n) {
		for(var i = start; i <= arr.length - n; i++) {
			if(n == x) {
				rtemp = []
			}
			rtemp.push(i)
			loop(arr, ++start, n - 1, x)
			rtemp.pop()
		}
	} else {
		var stemp = ''
		rtemp.forEach(function(r) {
			stemp += arr[r]
		})
		results.push(stemp)
	}
}