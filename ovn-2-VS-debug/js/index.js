const getFirstNumber = () => {
    let number = document.querySelectorAll('input')[0].value;
    return number;
}
const getSecondNumber = () => {
    let number = document.querySelectorAll('input')[1].value;
    return number;
};

const sum = () => {
    let firstNumber = parseInt(getFirstNumber());
    let secondNumber = parseInt(getSecondNumbe());
    let sum = firstNumber + secondNumber;
    // console.log(typeof(sum));
    return sum;
};

const showSum = () => {
    let elem = document.querySelectorAll('p')[2];
    elem.innerHTML = getFirstNumber() + ' + ' + getSecondNumber() + ' = ' + sum();
};

document.querySelector('button').addEventListener('click', () => {
    showSum();
});