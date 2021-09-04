// Remove Product
$('.btn-remove').click(function() {
    var d = confirm("Are you sure to remove?");
    if(d == true) {
        $(this).parent().parent().parent().remove();
    } 
})

// Add
// Edit

//Filter
$("#inputSearch").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $("#tableBody tr").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
    });
});

// Sorting table
var productArr = [
    {'name': 'Coco', 'categories': 'Chanel', 'price': 200000, 'quantity': 8},
    {'name': 'Dior', 'categories': 'Dior', 'price': 250000, 'quantity': 12},
    {'name': 'Gucci', 'categories': 'Gucci', 'price': 180000, 'quantity': 9},
    {'name': 'LV', 'categories': 'LV', 'price': 280000, 'quantity': 2},
    {'name': 'Dolce', 'categories': 'Dolce', 'price': 160000, 'quantity': 7},
]


function buildTable(arr) {
    var table = $('#tableBody');
    var data = '';
    table.html('');
    for(var i = 0;i < arr.length; i++) {
        var row = `<tr><td>${arr[i].name}</td>
            <td>${arr[i].categories}</td>
            <td>${arr[i].price}</td>
            <td>${arr[i].quantity}</td></tr>`;
        data += row;
    }
    table.html(data);
}
buildTable(productArr);
$('th').click(function() {
    console.log(productArr);

    var column = $(this).data('column');
    var order = $(this).data('order');

    if(order == 'desc'){
        $(this).data('order', "asc");
        productArr = productArr.sort((a,b) => a[column] > b[column] ? 1 : -1)
    } else {
        $(this).data('order', "desc");
        productArr = productArr.sort((a,b) => a[column] < b[column] ? 1 : -1)
    }
    buildTable(productArr);
})




// cPrev = -1; 

// function sortBy(c) {
//     rows = document.getElementById("sortable").rows.length; 
//     columns = document.getElementById("sortable").rows[0].cells.length;
//     arrTable = [...Array(rows)].map(e => Array(columns)); 

//     for (ro=0; ro<rows; ro++) { 
//         for (co=0; co<columns; co++) {
//             arrTable[ro][co] = document.getElementById("sortable").rows[ro].cells[co].innerHTML;
//         }
//     }

//     th = arrTable.shift();
    
//     if (c !== cPrev) { 
//         arrTable.sort(
//             function (a, b) {
//                 if (a[c] === b[c]) {
//                     return 0;
//                 } else {
//                     return (a[c] < b[c]) ? -1 : 1;
//                 }
//             }
//         );
//     } else { 
//         arrTable.reverse();
//     }
    
//     cPrev = c;
//     arrTable.unshift(th); 

//     for (ro=0; ro<rows; ro++) {
//         for (co=0; co<columns; co++) {
//             document.getElementById("sortable").rows[ro].cells[co].innerHTML = arrTable[ro][co];
//         }
//     }
// }

