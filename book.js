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
    var num = +'kolStranic';
    var a = Math.ceil(num/25);
    return a;
}


/*var book = new Book('Title1', 'Маяковский', 1928);

book.title;*/