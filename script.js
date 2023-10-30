document.getElementById('PBtn').addEventListener('click', function() {
    proceed();
});


document.getElementById('submitBtn').addEventListener('click', function() {
    checkAnswer();
});

function proceed(){

    var question = document.getElementById('question');
    var card = document.getElementById('text-card');
    question.style.display = 'block';
    card.style.display = 'none';


}

function checkAnswer() {
    var answer = document.getElementById('answer').value.toLowerCase();
    var angryGif = document.getElementById('angryGif');
    var kissGif = document.getElementById('kissGif');

    if (answer === 'school dress') {
        document.getElementById('question').style.display = 'none';
        document.getElementById('audioPlayer').style.display = 'block';
        kissGif.style.display = 'block';
        angryGif.style.display = 'none';
    } else {
        alert('Go back to our past..and think');
        angryGif.style.display = 'block';
        
    }
}
