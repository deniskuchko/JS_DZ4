/* var deletes = document.querySelector('button');

function deletButton(){
    for(let button of deletes){
        button.addEventListener('click', function(){
            button.parentElement.remove();
            event.preventDefault();
        })
    }
} */


document.querySelector('#books').addEventListener('submit', function(event){
    var title = document.querySelector('#title').value;
    var author = document.querySelector('#author').value;
    var isdatelstvo = document.querySelector('#isdatelstvo').value;
    var year = document.querySelector('#year').value;
    var ekzempliars = document.querySelector('#ekzempliars').value;
    var idBook = document.querySelector('#idBook').value;
    var kolStranic = document.querySelector('#kolStranic').value;

    var book = new Book(title, author, isdatelstvo, year, ekzempliars, idBook, kolStranic);
    
    var viewBooks = new ViewBooks();

    if(title === '' || author === '' || isdatelstvo === '' || year === '' || ekzempliars === '' || idBook === '' || kolStranic === ''){
        viewBooks.getMessage('Введите все данные! Книга не добавлена!', 'error');
    } else{
        viewBooks.addBook(book);
        viewBooks.getMessage('Книга успешно добавлена!', 'ok');
        viewBooks.clear();
    }

    event.preventDefault();
    
});

document.querySelector('#TravelBook').addEventListener('submit', function(event){
    var title = document.querySelector('#title_TravelBook').value;
    var isdatelstvo = document.querySelector('#isdatelstvo_TravelBook').value;
    var ekzempliars = document.querySelector('#ekzempliars_TravelBook').value;
    var kolStranic = document.querySelector('#kolStranic_TravelBook').value;

    var travelBook = new TravelBook(title,  isdatelstvo,  ekzempliars,  kolStranic);
    var viewTravelBook = new ViewTravelBook();

    if(title === '' || isdatelstvo === '' || ekzempliars === '' || kolStranic === ''){
        viewTravelBook.getMessage('Введите все данные! Книга не добавлена!', 'error');
    } else{
        viewTravelBook.addTravelBook(travelBook);
        viewTravelBook.getMessage('Книга успешно добавлена!', 'ok');
        viewTravelBook.clear();
    }

    event.preventDefault();
    
});


document.querySelector('ol').onclick = function(e) {
    const btn = e.target.closest('.delete');
    if (!btn) {
      return;
    }
    
     btn.closest('ul').remove();
  }