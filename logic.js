/**
 * Created by sophia on 3/16/17.
 */
document.addEventListener("DOMContentLoaded", function () {
  const secretWord = 'denver';
  //establish empty array to house 6 letter attempts
  let attempts = [];
  let unicornCount = 0;

  window.addEventListener('keydown', function(e) {
    attempts.push(e.key);
    let submission = attempts.slice(-6).join('');
    document.querySelector('.output').innerHTML = submission;
    if (submission.toLowerCase().includes(secretWord.toLowerCase())) {
      console.log(unicornCount);
      if (unicornCount === 0) {
        document.querySelector('h3').style.display = 'none';
        document.querySelector('ol').style.display = 'none';
      }
      document.querySelector('h1').innerHTML = 'Keep typing the six letter word to collect more unicorns!';
      cornify_add();
      unicornCount++;
    }
  });

});