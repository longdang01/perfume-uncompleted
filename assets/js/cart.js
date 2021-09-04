function Update_Total_Price(){
    var data = $('.item-price')
    var total=0
    for (var i=0;i<data.length;i++){
        var price = $(data[i]).text()
        var parent = $(data[i]).parent().parent()
        var amount = parent.find('.txt-quality').val()
        price = price.replaceAll('.','')
        total+=parseInt(price) * parseInt(amount)
    }
    var total_price = total.toString()
    var str_total = ''
    for (var i=total_price.length-1;i>=0;i--){
        if (i % 3 == 0 && i != 0)
            str_total = '.' + total_price[i] + str_total
        else    
            str_total= total_price[i] + str_total
    }
    $('#tmp-price').text(str_total)
    $('#total-price').text(str_total)
}

$(document).ready(function(){
    Update_Total_Price()
    $('.btn-plus').click(function(){
        var parent = $(this).parent()
        $(parent).find('.txt-quality').val(parseInt($(parent).find('.txt-quality').val())+1)
        Update_Total_Price()
    })
    $('.btn-sub').click(function(){
        var parent = $(this).parent()
        $(parent).find('.txt-quality').val(parseInt($(parent).find('.txt-quality').val())-1)
        Update_Total_Price()
    })
})