(function(){
    'use strict';

    const addBtn = document.getElementById('add');
    const board = document.getElementById('board');
    let cardNum = 1;

    function createCard(){
        let card = document.createElement('div');
        card.classList.add('card');

        let cardContent = '<button class="delete">X</button><textarea class="card_textarea"></textarea>';

        card.innerHTML = cardContent;
        board.appendChild(card);
    }

    addBtn.addEventListener('click', function(){
        createCard();
    });

    let deleteBtn = document.getElementsByClassName('delete');

    console.log(deleteBtn);

    for(let i = 0; i < deleteBtn.length; i++){
        let btn =  deleteBtn[i];

        let card = document.getElementsByClassName('card')[0];

        btn.addEventListener('click', function(){
            console.log(this.parentNode.parentNode.removeChild(card));
        });
    }

    
})();