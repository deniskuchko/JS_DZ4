function TravelBook(title,  isdatelstvo, ekzempliars,  kolStranic){
    this.title = title;
    this.isdatelstvo = isdatelstvo;
    this.ekzempliars = ekzempliars;
    this.kolStranic = kolStranic;
}

TravelBook.prototype.getGlavi = function(kolStranic){
    var num = kolStranic;
    var a = Math.ceil(num/25);
    return a;
}