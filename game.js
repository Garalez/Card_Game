/* eslint-disable max-len */
'use strict';
const questions = document.querySelector('.task__text');
const gameTitle = document.querySelector('.game__title');
// const cardsItems = document.querySelectorAll('.game__items');
const cardsList = document.querySelector('.game__list');
const cardText = document.querySelectorAll('.game__items-text');
// const playerChoose = document.querySelectorAll('.answer__item');
const playerChooseGameCard = document.querySelector('.answer__list');
const button = document.querySelector('.next-round');
const questionsArr = '1,2,3,4,5,6,7,8,9,10';
const str = '1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,19,20';
// const rndDrop = Math.floor(Math.random() * 5);
const goodToGo = str.split(',').sort(() => 0.5 - Math.random());
const questionsToGo = questionsArr.split(',').sort(() => 0.5 - Math.random());
const createCard = document.createElement('li');
const createText = document.createElement('div');
createText.classList.add('game__items-text');
createCard.classList.add('game__items');


const iterator = array => {
  let index = 0;
  return () => {
    const value = array[index];
    if (index < array.length) {
      index++;
    }
    return value;
  };
};

const cardPull = () => {
  cardText.forEach((n, i) => {
    n.textContent = goodToGo[i];
    goodToGo.splice(i, 1);
  });

  cardsList.addEventListener('click', e => {
    const target = e.target;
    if (target.closest('.game__items')) {
      playerChooseGameCard.append(target.closest('.game__items'));
      cardsList.classList.add('disabled-game_list');
      gameTitle.style.display = 'none';
    }
    if (cardsList.hasChildNodes()) {
      button.classList.remove('display-none');
    }
  });

  return goodToGo;
};

const restOfArray = cardPull();

const questionsText = iterator(questionsToGo);
const what = iterator(restOfArray);
questions.textContent = questionsText();

const swapCards = () => {
  createText.textContent = what();
  const createli = document.createElement('li');
  const createDiv = document.createElement('div');
  cardsList.append(createli);
  createli.append(createDiv);
  createDiv.append(createText.textContent);
  createDiv.classList.add('game__items-text');
  createli.classList.add('game__items');

  while (playerChooseGameCard.firstChild) { // Удаление карт использованных
    playerChooseGameCard.removeChild(playerChooseGameCard.firstChild);
  }

  questions.textContent = questionsText(); // изменение вопроса по клику
  cardsList.classList.remove('disabled-game_list');
  gameTitle.style.display = 'block';
  button.classList.add('display-none');
};


button.addEventListener('click', () => {
  swapCards();
});
