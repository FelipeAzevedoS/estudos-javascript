const question = document.querySelector('#question');
const ans1 = document.querySelector('#ans1');
const ans2 = document.querySelector('#ans2');
const ans3 = document.querySelector('#ans3');
const playAgain = document.querySelector('#playAgain');

let questCounter = 0;

const gameArray = [
    {quest: "What is the capital of Brazil?", option1: "Sao Paulo", option2: "Rio de Janeiro", option3: "Brasilia", answer: "Brasilia"},
    {quest: "Who is the most famous soccer player in Brazil?", option1: "Pele", option2: "Neymar", option3: "Ronaldinho", answer: "Pele"},
    {quest: "How many world cups has Brazil won?", option1: "3", option2: "4", option3: "5", answer: "5"},
    {quest: "Who discovered Brazil?", option1: "Pedro Alvares Cabral", option2: "Christopher Columbus", option3: "Willem Janszoon", answer: "Pedro Alvares Cabral"},
    {quest: "When did Brazil win its first World Cup?", option1: "1962", option2: "1958", option3: "1978", answer: "1958"}
];

function end() {
    question.classList.add('end');
    ans1.classList.add('end');
    ans2.classList.add('end');
    ans3.classList.add('end');
}

function play() {
    if (questCounter >= 5) {
        end();
        return
    }
    question.innerText = gameArray[questCounter].quest;
    ans1.innerText = gameArray[questCounter].option1;
    ans2.innerText = gameArray[questCounter].option2;
    ans3.innerText = gameArray[questCounter].option3;
    questCounter++;
};

play();

ans1.addEventListener('click', play);
ans2.addEventListener('click', play);
ans3.addEventListener('click', play);