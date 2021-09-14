'use strict';

let cartTable = document.querySelector('.cartTable');
let cartIcon = document.querySelector('.cartIconWrap');
let cartIconSpan = cartIcon.querySelector('span');
let tableContent = document.querySelector('.tableContent');
let tableFooter = document.querySelector('.tableFooter');
let items = document.querySelectorAll('div.featuredImgWrap');
let productsInCart = []

class ProductInCart {
    /**
     * Класс-конструктор для товара
     * @param id {Number} id товара
     * @param name {String} название товара
     * @param price {Number} стоимость товара
     */
    constructor(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.count = 1;
        this.fullPrice = this.price
    }

    changeFullPrice() {
        this.fullPrice = this.price * this.count;
    }
}

//Добавляем функцию-обработчик на клик по карточке товара
for (let i = 0; i < items.length; i++) {
    let itemButton = items[i];
    itemButton.addEventListener('click', function (event) {
        let currentItem = event.currentTarget.parentNode;
        let name = currentItem.querySelector('.featuredName').innerText.trim();
        let price = currentItem.querySelector('.featuredPrice').innerText.trim();
        price = Number(price.replace('$', ''));
        let flag = false;
        for (let product of productsInCart) {
            //Проверяем есть ли уже в корзине такие товары
            if (product.id == i) {
                product.count++;
                product.changeFullPrice();
                flag = true;
                let cartString = document.getElementById(product.id);
                if (cartString) {
                    cartString.innerHTML = getProductMarkUp(product);
                }
                break;
            }
        }
        if (!flag) {
            productsInCart.push(new ProductInCart(i, name, price));
            tableContent.insertAdjacentHTML('beforeend', makeMarkUp(productsInCart[productsInCart.length-1]));
        }
        tableFooter.innerHTML = getTableFooter();
        cartIconSpan.innerText = Number(cartIconSpan.innerText) + 1;
    })
}

cartIcon.addEventListener('click', function (event) {
    cartTable.classList.toggle('hidden');
});


function makeMarkUp(product) {
    /**
     * Функция, формирующая теги <tr> и <td> для товара
     */
    return `<tr id="${product.id}" class="productInfo">` + getProductMarkUp(product) + '</tr>'
}

function getProductMarkUp(product) {
    /**
     * Фукнция, формирущуя теги <td> для товара
     */
    return `<td>${product.name}</td>
            <td>$${product.price.toFixed(2)}</td>
            <td>${product.count}</td>
            <td>$${product.fullPrice.toFixed(2)}</td>`
}

function getCartFullPrice() {
    /**
     * Функция, фозвращающая стоимость всех товаров в корзине
     */
    let fullPrice = 0;
    for (let product of productsInCart) {
        fullPrice += product.fullPrice;
    }
    return fullPrice
}

function getTableFooter() {
    /**
     * Функция, формирующая футер таблицы корзины
     */
    return `<tr><td style="text-align: right" colspan="4">Итоговая стоимость товаров: $${getCartFullPrice()}</td></tr>`
}