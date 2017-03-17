/**
 * Created by sophia on 3/16/17.
 */
document.addEventListener("DOMContentLoaded", function () {
  const secretWord = 'denver';
  //establish empty array to house 6 letter attempts
  let attempts = [];
  let unicornCount = 0;

  window.addEventListener('keydown', function(e) {
    //push each new character to the back of the array
    attempts.push(e.key);
    //cut the last 6 letters from the array, then join them together into a word
    let submission = attempts.slice(-6).join('');
    //log submission to the screen for the user to see
    document.querySelector('.output').innerHTML = submission;
    //check if last six keys hit equal the secret word
    if (submission.toLowerCase().includes(secretWord.toLowerCase())) {
      if (unicornCount === 0) {
        document.querySelector('h3').style.display = 'none';
        document.querySelector('ol').style.display = 'none';
      }
      document.querySelector('h1').innerHTML = 'Keep typing the six letter <br/> word to collect more unicorns!';
      cornify_add();
      unicornCount++;
    }
  });

});