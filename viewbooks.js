function ViewBooks(){

};

ViewBooks.prototype.addBook = function(type){
    /*'<li>'+type.title+'</li>'*/
    var listAll = document.querySelector('#list-books');
    var ulList = document.createElement('ul');

    ulList.innerHTML = '<li>'+type.title+'</li>'+
    '<li>'+type.author+'</li>'+
    '<li>'+type.isdatelstvo+'</li>'+
    '<li>'+type.year+'</li>'+
    '<li>'+type.ekzempliars+'</li>'+
    '<li>'+type.idBook+'</li>'+
    '<li>'+type.kolStranic+" Всего глав: "+type.getGlavi()+'</li>'+
    '<li><button class="delete">Удалить</button></li>';

    listAll.appendChild(ulList);
    
};

ViewBooks.prototype.getMessage = function(message, nameCl){
    var block = document.createElement('div');
    block.className = nameCl;
    block.innerHTML = message;

    var container = document.querySelector('.container');
    var form = document.querySelector('.container_Forms');

    container.insertBefore(block, form); /*добавление перед формой сообщения */
};

ViewBooks.prototype.clear = function(){
    document.querySelector('#title').value = '';
    document.querySelector('#author').value = '';
    document.querySelector('#isdatelstvo').value = '';
    document.querySelector('#year').value = '';
    document.querySelector('#ekzempliars').value = '';
    document.querySelector('#idBook').value = '';
    document.querySelector('#kolStranic').value = '';
};
