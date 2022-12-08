// Creating and exporting your own module

module.exports = (temp, product) => {
  let output = temp.replace(/{%PRODUCT_NAME%}/g, product.productName);
  output = output.replace(/{%PRODUCT_IMAGE%}/g, product.image);
  output = output.replace(/{%PLACE%}/g, product.from);
  output = output.replace(/{%NUTRIENTS%}/g, product.nutrients);
  output = output.replace(/{%QUANTITY%}/g, product.quantity);
  output = output.replace(/{%PRODUCT_PRICE%}/g, product.price);
  output = output.replace(/{%ID%}/g, product.id);
  output = output.replace(/{%PRODUCT_DESCRIPTION%}/g, product.description);
  output = product.organic
    ? output.replace(/{%NOT_ORGANIC%}/g, "")
    : output.replace(/{%NOT_ORGANIC%}/g, "not-organic");

  return output;
};
