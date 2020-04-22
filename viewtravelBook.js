function ViewTravelBook(){

};

ViewTravelBook.prototype.addTravelBook = function(type){
    /*'<li>'+type.title+'</li>'*/
    var listAll = document.querySelector('#list-books');
    var ulList = document.createElement('ul');

    ulList.innerHTML = '<li>'+type.title+'</li>'+
    '<li>'+type.isdatelstvo+'</li>'+
    '<li>'+type.ekzempliars+'</li>'+
    '<li>'+type.kolStranic+'</li>'+
    '<li><button class="delete">Удалить</button></li>';

    listAll.appendChild(ulList);
};

ViewTravelBook.prototype.getMessage = function(message, nameCl){
    var block = document.createElement('div');
    block.className = nameCl;
    block.innerHTML = message;

    var container = document.querySelector('.container');
    var form = document.querySelector('#TravelBook');

    container.insertBefore(block, form); /*добавление перед формой сообщения */
};

ViewBooks.prototype.clear = function(){
    document.querySelector('#title').value = '';
    document.querySelector('#isdatelstvo').value = '';
    document.querySelector('#ekzempliars').value = '';
    document.querySelector('#kolStranic').value = '';
};