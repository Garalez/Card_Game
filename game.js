/* eslint-disable max-len */
'use strict';
const questions = document.querySelector('.task__text');
const gameTitle = document.querySelector('.game__title');
const cardsItems = document.querySelectorAll('.game__items');
const cardsList = document.querySelector('.game__list');
const cardText = document.querySelectorAll('.game__items-text');
// const playerChoose = document.querySelectorAll('.answer__item');
const playerChooseGameCard = document.querySelector('.answer__list');
const button = document.querySelector('.next-round');
const questionsArr = 'Когда я, создавал свою, первую многопользовательскую игру, я написал код так, что игрок мог стрелять тогда, когда отправлялос, сообщение о стрельбе, которое со стороны, клиента было связано с, нажатием кнопки мыши, Умелый игрок мог, воспользоваться этим, вставив строчку на JavaScript, очень похожую на ту, что упоминалась выше, чтобы заполучить почти, неограниченную скорость стрельбы.';
const str = 'Когда я, создавал свою, первую многопользовательскую игру, я написал код так, что игрок мог стрелять тогда, когда отправлялос, сообщение о стрельбе, которое со стороны, клиента было связано с, нажатием кнопки мыши, Умелый игрок мог, воспользоваться этим, вставив строчку на JavaScript, очень похожую на ту, что упоминалась выше, чтобы заполучить почти, неограниченную скорость стрельбы.';
// const rndDrop = Math.floor(Math.random() * 5);
const goodToGo = str.split(' ').sort(() => 0.5 - Math.random());
const questionsToGo = questionsArr.split(' ').sort(() => 0.5 - Math.random());
const createCard = document.createElement('li');
const createText = document.createElement('div');
createText.classList.add('game__items-text');
createCard.classList.add('game__items');

cardText.forEach((n, i) => {
  n.textContent = goodToGo[i];
});

const iterator = array => {
  let index = 0;
  return () => {
    const value = array[index];
    if (index < array.length) {
      index++;
    } else {
      alert('Карты или вопросы закончились)');
    }
    return value;
  };
};
const questionsText = iterator(questionsToGo);
const answersText = iterator(goodToGo);

cardsList.addEventListener('click', e => {
  const target = e.target;
  if (target.closest('.game__items')) {
    playerChooseGameCard.append(target.closest('.game__items'));
    cardsList.classList.add('disabled-game_list');
    gameTitle.style.display = 'none';
  }
});

const swapCards = () => {
  createText.textContent = answersText();
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
};


button.addEventListener('click', () => {
  swapCards();
});
