/* global shoppingList, store, Item, api */
'use strict';
$(document).ready(function() {
  shoppingList.bindEventListeners();
  shoppingList.render();
  api.getItems((items) => {
    console.log('items:', items);
    items.forEach((item) => store.addItem(item));
    shoppingList.render();
  });
});

// api.getItems((items) => {
//   const item = items[0];

//   api.updateItem(item.id, { name: 'foobar' }, () => {
//     console.log('updated!');
//   });
// });


/* tests
store.items.push(Item.create('apples'));

api.getItems(function(data) {
  console.log(data);
});

console.log(api.BASE_URL);

api.createItem('pears', (newItem) => {
  api.getItems((items) => {
    console.log(items);
  });
}); 
*/