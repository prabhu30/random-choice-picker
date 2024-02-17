const choicesContainer = document.querySelector('.choices');
const textarea = document.querySelector('textarea');

textarea.focus();

textarea.addEventListener('keyup', (event) => {
    createChoices(event.target.value);
    if (event.key == 'Enter') {
        randomSelectChoice();
    }
});

const createChoices = function(inputChoices) {

    const choices = inputChoices.split(",").map(choice => choice.trim()).filter(choice => choice !== '');

    choicesContainer.innerHTML = '';
    
    choices.forEach(choice => {
        const choiceElement = document.createElement('span');
        choiceElement.classList.add('choice');
        choiceElement.innerText = choice;
        choicesContainer.appendChild(choiceElement);
    });
}

const randomSelectChoice = function() {
    const numOfTimes = 30;

    textarea.value = '';
    textarea.blur();

    const interval = setInterval(() => {
        const randomChoice = pickAChoice();

        highlightChoice(randomChoice);

        setTimeout(() => {
            unHighlightChoice(randomChoice);
        }, 100)
    }, 100);

    setTimeout(() => {
        clearInterval(interval);

        setTimeout(() => {
            const randomChoice = pickAChoice();
            highlightChoice(randomChoice);
        }, 100)
    }, numOfTimes * 100);
}

const pickAChoice = function() {
    const choices = document.querySelectorAll('.choice');
    return choices[Math.floor(Math.random() * choices.length)]
}

const highlightChoice = function(choiceElement) {
    choiceElement.classList.add('highlight');
}

const unHighlightChoice = function(choiceElement) {
    choiceElement.classList.remove('highlight');
}