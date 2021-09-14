'use strict';
function addCartTable() {
    /**
     Функция, создающая базовый конструкт таблицы для корзины
     */
    return `<table class="cartTable hidden">
               <thead>
                  <th>Название товара</th>
                  <th>Цена за шт.</th>
                  <th>Количество</th>
                  <th>Стоимость</th>
               </thead>
               <tbody class="tableContent"></tbody>
               <tfoot class="tableFooter">
                <tr><td colspan="4">Итоговая стоимость товаров: $0</td></tr>
               </tfoot>
             </table>`
}

//Добавляем таблицу корзины на страницу
document.querySelector('.header').insertAdjacentHTML('afterend', addCartTable());
