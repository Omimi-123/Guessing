const input = document.querySelector('.inpute')
const button = document.querySelector('.button')
const AttemptLeft = document.getElementById('Attempt_left')
const Notice = document.getElementById('notification')




const minNum = 1;
const maxNum = 100;
let targetNum = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;   //this generate a randon number between 1 and 100
let attempt = 0;
let max_attempt = 2;

console.log(targetNum)

button.addEventListener('click', (e) => {
    e.preventDefault();

    const inputNum = parseInt(input.value)

    if (isNaN(inputNum) || inputNum < minNum || inputNum > maxNum) {
        Notice.textContent = 'please enter a number between ' + minNum + ' and ' + maxNum
        return;
    }
    attempt++;

    if (inputNum == targetNum) {
        Notice.textContent = 'Congratulation you got the right answer';
        button.disabled = true;
    } else if (attempt == max_attempt) {
        Notice.textContent = 'You have finished your attempt';
        button.disabled = true
    } else if (inputNum < targetNum) {
        Notice.textContent = 'The number is too low';
    } else {
        Notice.textContent = 'The number is too High';

    }

    let atml = max_attempt - attempt
    AttemptLeft.innerHTML = "ATTEMPT LEFT: " + atml

    input.value = '';

})


