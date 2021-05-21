// inspired by https://exercism.io/tracks/javascript/exercises/etl/solutions/91f99a3cca9548cebe5975d7ebca6a85

const input = require("readline-sync");

const oldPointStructure = {
  1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
  2: ['D', 'G'],
  3: ['B', 'C', 'M', 'P'],
  4: ['F', 'H', 'V', 'W', 'Y'],
  5: ['K'],
  8: ['J', 'X'],
  10: ['Q', 'Z']
};

function oldScrabbleScorer(word) {
	 word = word.toUpperCase;
	let letterPoints = "";
 
	for (let i = 0; i < word.length; i++) {
 
	  for (const pointValue in oldPointStructure) {
 
		 if (oldPointStructure[pointValue].includes(word[i])) {
			letterPoints += `Points for '${word[i]}': ${pointValue}\n`
		 }
 
	  }
	}
	return letterPoints;
 }

// your job is to finish writing these functions and variables that we've named //
// don't change the names or your program won't work as expected. //

function initialPrompt() {
   console.clear();
   let word = input.question("Let's play some scrabble!\n Enter a word to score: ")
  //  console.log("Let's play some scrabble!\n Enter a word to score: ")
    // console.log(oldScrabbleScorer(word));
     return word;
};
  
// let simpleScore;
// this is declaring the simpleScore function

 function simpleScore(word) {
   //this is the function body
    word = word.toUppercase();
   let score = 0;
   for (let i = 0; i < word.length; i++){
     score++;
   }
   return score;
// the return statement is the output.
 }
  //simpleScore("word");
// this is called invoking the function
function vowelBonusScore(word) {
  let score = 0
  let vowelsArray = ["A", "E", "I", "O", "U"];
   word = word.toUpperCase();
    for (let i = 0; i < word.length; i++){
      if (vowelsArray.includes(word[i])) {
        score = score + 3;
      } else {
        score = score + 1
      }  
      }
     return score;
    }
  

  
   

let scrabbleScore;

const scoringAlgorithms = [
  {
    name: "Simple Score",
  description: "Each letter is worth 1 point",
  scoringFunction: simpleScore
  },
  {
    name: "Bonus Vowels",
  description: "Vowel within the word is worth 3 points, and each consonant is worth 1 point.",
  scoringFunction: vowelBonusScore
  },
  {
    name: "Scrabble",
  description: "The traditional scoring algorithm.",
  scoringFunction: oldScrabbleScorer
  }
  ];



function scorerPrompt(word) {
  
  scoringSystem = input.question("Which scoring algorithm would you like to use?\n \n 0 - Simple: One point per character\n 1 - Vowel Bonus: Vowels are worth 3 points\n 2 - Scrabble: Uses scrabble point system\n Enter 0, 1, or 2: ");
   if (scoringSystem == 0) {
      console.log("Algorithm name: ", scoringAlgorithms[0].name);
      console.log("Results: ", scoringAlgorithms[0].scoringFunction(word));
    } else if  
      (scoringSystem == 1) {
        console.log("Algorithm name: ", scoringAlgorithms[1].name);
      console.log("Results: ", scoringAlgorithms[1].scoringFunction(word));
       } else if  
      (scoringSystem == 2) {
        console.log("Algorithm name: ", scoringAlgorithms[2].name);
      console.log("Results: ", scoringAlgorithms[2].scoringFunction(word)); 

      } 
      return scoringSystem;
   };

  


function transform(oldPointStructure) {
  let newPoints = {};
  // oldPointStructure = oldPointStructure.toLowerCase();

  for (let scoringAlgorithms in oldPointStructure) {
    // console.log(scoringAlgorithms);
    // console.log(oldPointStructure[scoringAlgorithms]);
    let newPointStructure = oldPointStructure[scoringAlgorithms];
    for (let i = 0; i < newPointStructure.length; i++){
      // console.log(i);
    newPoints[newPointStructure[i]]= scoringAlgorithms;  
    }

  }
  return newPoints;
};

// transform();






let newPointStructure = transform(oldPointStructure);
  



function runProgram() {
  let word = initialPrompt();
    
   console.log(scorerPrompt(word));

  //  simpleScore("word");
  //  vowelBonusScore("wordplay")
  //  console.log(vowelBonusScore("wordplay"));
  //  console.log(scoringAlgorithms);
  //  console.log(input.question("Which scoring algorithm would you like to use?\n \n 0 - Simple: One point per character\n 1 - Vowel Bonus: Vowels are worth 3 points\n 2 - Scrabble: Uses scrabble point system\n Enter 0, 1, or 2: "));

}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
   initialPrompt: initialPrompt,
   transform: transform,
   oldPointStructure: oldPointStructure,
   simpleScore: simpleScore,
   vowelBonusScore: vowelBonusScore,
   scrabbleScore: scrabbleScore,
   scoringAlgorithms: scoringAlgorithms,
   newPointStructure: newPointStructure,
	runProgram: runProgram,
	scorerPrompt: scorerPrompt
};

