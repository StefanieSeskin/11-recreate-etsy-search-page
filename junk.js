let products = items.results;
let titles = products.map(function (item) {
  return item.title;
});
// "title"
// "price"