function Update_Total_Price(){
    var data = $('.item-price')
    var total_price=0
    for(var i=0;i<data.length;i++){
        var price = $(data[i]).text()
        price = price.replace('đ','')
        price = price.replaceAll('.','')
        total_price+= parseInt(price)
    }
    $('#tmp-price').text(Replace_str(total_price.toString()))
    $('#total-price').text(Replace_str(total_price.toString()))
    
}
function Replace_str(total){
    var str_total = ''
    for (var i=total.length-1;i>=0;i--){
        if (i % 3 == 0 && i != 0){
            str_total = '.' + total[i] + str_total
        }
        else{
            str_total=total[i] + str_total
        }
    }
    str_total+= 'đ'
    return str_total 
}