function Book(title, author, isdatelstvo, year, ekzempliars, idBook, kolStranic){
    this.title = title;
    this.author = author;
    this.isdatelstvo = isdatelstvo;
    this.year = year;
    this.ekzempliars = ekzempliars;
    this.idBook = idBook;
    this.kolStranic = kolStranic;

}

Book.prototype.getGlavi = function(){
    return Math.ceil(+this.kolStranic/25);
    
}

function TravelBook(){
    Book.call(this, title, isdatelstvo, ekzempliars, kolStranic);
}

TravelBook.prototype = Object.create (Book.prototype);

/*var book = new Book('Title1', 'Маяковский', 1928);

book.title;*/