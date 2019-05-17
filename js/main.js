    'use strict';

    window.onload = function(){

    const addBtn = document.getElementById('add');
    const board = document.getElementById('board');
    let cardNum = 0;

    //create the 1st card
    addCard();

    addBtn.addEventListener('click', ()=>{
        addCard();
    });

    function createCard(){
        cardNum++;

        //create delete button
        const deleteBtn = document.createElement('button');
        deleteBtn.innerText = 'X';
        deleteBtn.classList.add('delete');

        deleteBtn.addEventListener('click', (event)=>{
            const targetId = event.target.parentElement.id;
            const targetCard = document.getElementById(targetId);
            targetCard.parentNode.removeChild(targetCard);
        });

        //create card
        let card = document.createElement('div');
        card.id = cardNum;
        card.classList.add('card');

        card.appendChild(deleteBtn);

        const cardTextarea = document.createElement('textarea');
        cardTextarea.classList.add('card_textarea');
        card.appendChild(cardTextarea);

        board.appendChild(card);
        return card;
    }

    function addCard(){
        const card = createCard();
        board.appendChild(card);
    }

};