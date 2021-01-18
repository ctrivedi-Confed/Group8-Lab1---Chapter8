/* define functions here */


function calculateTotal(price, quantity) {
    return price * quantity;
}

function outputCartRow(file, title, quantity, price, total) {
    document.write('<tr>' +
                        '<td><img src="' + file + '"></td>' +
                        '<td>' + title + '</td>' +
                        '<td>' + quantity + '</td>' +
                        '<td>$' + price.toFixed(2) + '</td>' +
                        '<td>$' + total.toFixed(2) + '</td>' +
                    '</tr>')
}
