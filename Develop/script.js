let question = {
    questionTitle: 'what is my name?',
    options: ['Nicole','Sara','Pauline','Jessica'],
    correctAnswer: 0 
};

function showQuestion(q) {
    var titleDiv = document.getElementById('questionTitle');
    titleDiv.textContent = q.questionTitle;

    let opts = document.querySelectorAll('.options');
    opts.forEach(function(element,index) {
        element.textContent = q.options[index];
    });
}

showQuestion(question);