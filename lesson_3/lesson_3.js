"user strict";

// задание 1
// let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// for (let i = 0; i < numbers.length; i++) {
// 	if (i == 0) {
// 		console.log(i + " - это ноль");
// 	} else if (i % 2 == 0) {
// 		console.log(i + " - четное число");
// 	} else if (i % 2 !== 0) {
// 		console.log(i + " - нечетное число");
// 	}
// }

// задание 2

// const post = {
// 	author: "John", //вывести этот текст 
// 	postId: 23,
// 	comments: [{
// 			userId: 10,
// 			userName: "Alex",
// 			text: "lorem ipsum",
// 			rating: {
// 				likes: 10,
// 				dislikes: 2 //вывести это число 
// 			}
// 		},
// 		{
// 			userId: 5, //вывести это число 
// 			userName: "Jane",
// 			text: "lorem ipsum 2", //вывести этот текст 
// 			rating: {
// 				likes: 3,
// 				dislikes: 1
// 			}
// 		},
// 	]
// };

// console.log(post.author);
// console.log(post.comments[0].rating.dislikes);
// console.log(post.comments[1].userId);
// console.log(post.comments[1].text);


//задание 3


// const products = [ 
// 	{ 
// 		id: 3, 
// 		price: 200, 
// 	}, 
// 	{ 
// 		id: 4, 
// 		price: 900, 
// 	}, 
// 	{ 
// 		id: 1, 
// 		price: 1000, 
// 	}, 
// ];

// let saleProducts = products 
// saleProducts.forEach(function(item){
// 	return item.price =  item.price - (item.price / 100 * 15);
	
// });

// console.log(saleProducts);








// задание 4

// const products = [ 
// 	{ 
// 		id: 3, 
// 		price: 127, 
// 		photos: [ "1.jpg", "2.jpg", ] 
// 	}, 
// 	{ 
// 		id: 5, 
// 		price: 499,
// 		photos: []
// 	}, 
// 	{ 
// 		id: 10, 
// 		price: 26, 
// 		photos: [ "3.jpg" ] 
// 	}, 
// 	{ 
// 		id: 8, 
// 		price: 78, 
// 	}, 
// ];

/**
 * решение посмотрел у вас.... не понимаю почему моя проверка выподает в ошибку...
 */

// let productsHavePhotos = products.filter(function(item){
// 	if( item.photos.length > 0 ){
// 		return  true;
// 	}else if (item.photos.length = 0){
// 		return false;
// 	}
// 	return false;
// });


// let productsHavePhotos = products.filter(item => "photos" in item && item.photos.length > 0);
// console.log(productsHavePhotos);

/**
 * сортировка по цене.
 */
// products.sort(function(a, b) {
// 	if (a.price > b.price) {
// 		return 1;
// 	}
// 	if (a.price < b.price) {
// 		return -1;
// 	}
// 	return 0;
// });

// console.log(products);


// задание 6

// let star = "*"
// console.log(star);
// function mountianStar() {
// 	for(let i = 0; i < 20; i++){
// 		star = star + "*";
// 		console.log(star);
// 	}
// }

// mountianStar();