var addQuotearr = [
  `“A friend is someone who knows all about you and still loves you.”
― Elbert Hubbard`,
  `I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.”
― Maya Angelou`,
  `“Friendship ... is born at the moment when one man says to another "What! You too? I thought that no one but myself . . .”
― C.S. Lewis, The Four Loves`,
  `If you tell the truth, you don't have to remember anything.”
― Mark Twain`,
  `“Dont walk in front of me… I may not follow
Dont walk behind me… I may not lead
Walk beside me… just be my friend”
― Albert Camus`,
];
var x = 15 ;
function addQuotefn() {
    do{ var randomIndex = Math.floor(Math.random() * addQuotearr.length);
    }while(randomIndex===x)
        
        document.getElementById("show").innerHTML = addQuotearr[randomIndex];
      x = randomIndex
}
