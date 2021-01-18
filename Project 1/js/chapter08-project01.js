/* add loop and other code here ... in this simple exercise we are not
   going to concern ourselves with minimizing globals, etc */
var subTotal = 0;
for(var i=0; i<3; i++){
   outputCartRow(filenames[i], titles[i], quantities[i], prices[i], calculateTotal(prices[i], quantities[i]));
   subTotal += calculateTotal(prices[i], quantities[i]);
}
var taxes = 0.1 * subTotal;
var shipping = 0;
if (subTotal < 1000) {
   shipping = 40;
}
var grandTotal = subTotal + taxes + shipping;
window.onload = function() {
   document.getElementById("subtotal").innerHTML = subTotal.toFixed(2).toString();
   document.getElementById("taxes").innerHTML = taxes.toFixed(2).toString();
   document.getElementById("shipping").innerHTML = shipping.toFixed(2).toString();
   document.getElementById("grandtotal").innerHTML = grandTotal.toFixed(2).toString();
};