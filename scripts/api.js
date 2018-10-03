'use strict';

const api = (function(){
  const BASE_URL = 'https://thinkful-list-api.herokuapp.com/allisterlogan';
  function getItems(callback){
    //callback('api module works!');
    
    $.getJSON(`${BASE_URL}/items`, callback);
  }

  function createItem(name, callback) {
    let newItem = JSON.stringify({
      name
    });
    $.ajax({
      url: `${BASE_URL}/items`,
      method: 'POST',
      contentType: 'application/JSON',
      data: newItem,
      success: callback
    });
  }

  function updateItem(id, updateData, callback){
    let updateItem = JSON.stringify(updateData);
    $.ajax({
      url: `${BASE_URL}/items/${id}`,
      method: 'PATCH',
      contentType: 'application/json',
      data: updateItem,
      success: callback
    });
  }

  return{
    getItems,
    createItem,
    updateItem
  };
}());
