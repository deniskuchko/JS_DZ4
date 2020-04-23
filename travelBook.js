function TravelBook(title,  isdatelstvo, ekzempliars,  kolStranic){
    this.title = title;
    this.isdatelstvo = isdatelstvo;
    this.ekzempliars = ekzempliars;
    this.kolStranic = kolStranic;
}

TravelBook.prototype.getGlavi = function(kolStranic){
    return Math.ceil(+this.kolStranic/5);
}