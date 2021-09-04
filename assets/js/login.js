// Show Modal
$('.options-login').click(() => {
    $('.modal').fadeIn(() => {
        $('.modal').css('display', 'block');
    });
})

// Close Modal
$('.btn-close').click(() => {
    $('.modal').fadeOut(() => {
        $('.modal').css('display', 'none');
    });
})

$(window).click((e) => {
    if($(e.target).hasClass("modal")) {
        $('.modal').fadeOut(() => {
            $('.modal').css('display', 'none');
        });
    }
});

//Login
var users = {
    username: 'admin',
    password: 'admin'
}

function validate() {
    if($('.username').val() === users.username && $('.password').val() === users.password) {
        window.open("/assets/html/admin.html");
    } else {
        alert('Username or password not correct!');
    }
}

$('.btn-login').click(() => {
    validate();
})
