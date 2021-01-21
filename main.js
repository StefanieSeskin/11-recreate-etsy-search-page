let products = items.results;
let titles = products.map(function (item) {
  return `<div class = "products">
    <div><img class = "product-image" src="${item.Images[0].url_fullxfull}"></div>

    <div class = "shop-name">${item.Shop.shop_name}</div>
    <div class = "stars">(${item.views})</div>
    <div class ="item-price">${item.price}</div>
  </div>`;
});
document.querySelector("#grid").innerHTML = titles.join("");

// const productHTML = products.map((item) => {
//     return `
//     <div class=“product-item”>
//     <img src=“${item.Images[0].url_fullxfull}”>
//     <h2>${item.title}</h2>
//     <strong>${item.price}</strong>
//     </div>`

/* <div class = "item-name">${item.title}</div> */
