"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Stock = /** @class */ (function () {
    function Stock(price, name, id, rating, desc, categories) {
        this.price = price;
        this.name = name;
        this.id = id;
        this.rating = rating;
        this.desc = desc;
        this.categories = categories;
    }
    return Stock;
}());
exports.Stock = Stock;
var Messages = /** @class */ (function () {
    function Messages(contact, msg) {
        this.contact = contact;
        this.msg = msg;
    }
    return Messages;
}());
exports.Messages = Messages;
