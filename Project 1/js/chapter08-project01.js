/* add loop and other code here ... in this simple exercise we are not
   going to concern ourselves with minimizing globals, etc */
   
for(var i=0; i<3; i++){
   outputCartRow(filenames[i], titles[i], quantities[i], prices[i], calculateTotal(prices[i], quantities[i]));
}