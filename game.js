/* eslint-disable max-len */
'use strict';
const questions = document.querySelector('.task__text');
const cardsItems = document.querySelectorAll('.game__items');
// const cardsList = document.querySelectorAll('.game__list');
const cardText = document.querySelectorAll('.game__items-text');
const playerChoose = document.querySelectorAll('.answer__item');
const playerChooseGameCard = document.querySelector('.answer__list');
const button = document.querySelector('.next-round');
const questionsArr = 'Когда я, создавал свою, первую многопользовательскую игру, я написал код так, что игрок мог стрелять тогда, когда отправлялос, сообщение о стрельбе, которое со стороны, клиента было связано с, нажатием кнопки мыши, Умелый игрок мог, воспользоваться этим, вставив строчку на JavaScript, очень похожую на ту, что упоминалась выше, чтобы заполучить почти, неограниченную скорость стрельбы.';
const str = 'Когда я, создавал свою, первую многопользовательскую игру, я написал код так, что игрок мог стрелять тогда, когда отправлялос, сообщение о стрельбе, которое со стороны, клиента было связано с, нажатием кнопки мыши, Умелый игрок мог, воспользоваться этим, вставив строчку на JavaScript, очень похожую на ту, что упоминалась выше, чтобы заполучить почти, неограниченную скорость стрельбы.';
const rndDrop = Math.floor(Math.random() * 5);
const goodToGo = str.split(' ').sort(() => 0.5 - Math.random());
const questionsToGo = questionsArr.split(' ').sort(() => 0.5 - Math.random());
const createCard = document.createElement('li');
const createText = document.createElement('div');
const text = document.createTextNode(goodToGo[10]);
createText.classList.add('game__items-text');
createCard.classList.add('game__items');
createText.append(text);

cardText.forEach((n, i) => {
  n.textContent = goodToGo[i];
});

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
const questionsItems = iterator(questionsToGo);

cardsItems[0].addEventListener('click', () => {
  playerChoose[rndDrop].replaceWith(cardsItems[0]);
});
cardsItems[1].addEventListener('click', () => {
  playerChoose[rndDrop].replaceWith(cardsItems[1]);
});
cardsItems[2].addEventListener('click', () => {
  playerChoose[rndDrop].replaceWith(cardsItems[2]);
});
cardsItems[3].addEventListener('click', () => {
  playerChoose[rndDrop].replaceWith(cardsItems[3]);
});
cardsItems[4].addEventListener('click', () => {
  playerChoose[rndDrop].replaceWith(cardsItems[4]);
});
cardsItems[5].addEventListener('click', () => {
  playerChoose[rndDrop].replaceWith(cardsItems[5]);
});
cardsItems[6].addEventListener('click', () => {
  playerChoose[rndDrop].replaceWith(cardsItems[6]);
});
cardsItems[7].addEventListener('click', () => {
  playerChoose[rndDrop].replaceWith(cardsItems[7]);
});
cardsItems[8].addEventListener('click', () => {
  playerChoose[rndDrop].replaceWith(cardsItems[8]);
});
cardsItems[9].addEventListener('click', () => {
  playerChoose[rndDrop].replaceWith(cardsItems[9]);
});

const swapCards = () => {
  cardsItems[9].after(createCard);
  createCard.append(createText);
  while (playerChooseGameCard.firstChild) {
    playerChooseGameCard.removeChild(playerChooseGameCard.firstChild);
  }
  questions.replaceWith(questionsItems());
};


button.addEventListener('click', () => {
  swapCards();
});
