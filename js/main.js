$(document).ready(function() {
    var $textbox = $("#incdec input");

    $("#up").click(function() {
        var value = parseInt($textbox.val(), 10);
        $(this).parent().find('input').val(value + 1);
    });

    $("#down").click(function() {
        var value = parseInt($textbox.val(), 10);

        if (value > 0) {
            $(this).parent().find('input').val(value - 1);

        }
    });

    var modButton = $('.my-pay-modal');
    var payModal = $('.payment')
    modButton.click(function(){
        payModal.fadeIn(300)
    });
    $('.close-button').click(function(){
        payModal.fadeOut()
    })
});