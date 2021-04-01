"user strict";

// задание 1.1 es5
// function Product(name, price) {
// 	this.name = name;
// 	this.price = price;
// }

// Product.prototype.make25PercentDiscount = function() {
// 	this.price = this.price - (this.price/100 * 25);
// }

// let products = [
// 	 new Product("Phone", 1000),
// 	 new Product("Phone 2",  6000),
// 	 new Product("Phone 3",  5000),
// 	 new Product("Phone 4",  3542),
// ]

// for (let product of products) {
// 	product.make25PercentDiscount();
// }

// console.log(products);



// задание 1.1 es6
// class Product {
// 	constructor(name, price) {
// 		this.name = name;
// 		this.price = price;
// 	}
// 	make25PercentDiscount() {
// 		this.price = this.price - (this.price/100 * 25);
// 	}

// }

// let products = [
// 	new Product("Phone", 1000),
// 	new Product("Phone 2",  6000),
// 	new Product("Phone 3",  5000),
// 	new Product("Phone 4",  3542),
// ]

// for (let product of products) {
//  product.make25PercentDiscount();
// }

// console.log(products);


// задание 1.2 es5

// function Post(autor, text, date) {
// 	this.autor = autor;
// 	this.text = text;
// 	this.date = date;
// }

// Post.prototype.edit = function () {
// 	this.text = prompt('Введите сообщение');
// }

// let posts = [
// 	new Post("mikhail", "", "23.10.1988"),
// 	new Post("Сергей", "", "23.10.1988"),
// ]

// for (let post of posts) {
// 	post.edit();
// }

// console.log(posts);


// function AttachedPost(autor, text, date, highlighted) {
// 	Post.call(this, autor, text, date);
// 	this.highlighted = false;
// }

// AttachedPost.prototype = Object.create(Post.prototype);
// AttachedPost.prototype.constructor = AttachedPost;

// AttachedPost.prototype.makeTextHighlighted = function () {
// 	this.highlighted = true;

// }
// let AttachedPost1 = new AttachedPost("Mikhail2", "", "23.10.1988")
// AttachedPost1.edit();
// AttachedPost1.makeTextHighlighted();

//задание 1.2 es6

// class Post {
// 	constructor(autor, text, date) {
// 		this.autor = autor;
// 		this.text = text;
// 		this.date = date;
// 	}
// 	edit() {
// 		this.text = prompt('Введите сообщение');
// 	}
// }

// let posts = [
// 	new Post("mikhail", "", "23.10.1988"),
// 	new Post("Сергей", "", "23.10.1988"),
// ]

// for (let post of posts) {
// 	post.edit();
// }

// console.log(posts);

// class AttachedPost extends Post {
// 	constructor(autor, text, date, highlighted) {
// 		super(autor, text, date);
// 		this.highlighted = false;
// 	}
// 	makeTextHighlighted() {
// 		this.highlighted = true;
// 	}
// }

// let AttachedPost1 = new AttachedPost("Mikhail2", "", "23.10.1988")
// AttachedPost1.edit();
// AttachedPost1.makeTextHighlighted();