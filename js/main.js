$(document).ready(function () {
  var $textbox = $("#incdec input");

  $("#up").click(function () {
    var value = parseInt($textbox.val(), 10);
    $(this)
      .parent()
      .find("input")
      .val(value + 1);
  });

  $("#down").click(function () {
    var value = parseInt($textbox.val(), 10);

    if (value > 0) {
      $(this)
        .parent()
        .find("input")
        .val(value - 1);
    }
  });

  var modButton = $(".my-pay-modal");
  var payModal = $(".payment");
  modButton.click(function () {
    payModal.fadeIn(300);
  });
  $(".close-button").click(function () {
    payModal.fadeOut();
  });

  $(".search-trig").click(function () {
    $(".main-search-form").toggleClass("move-form");
  });
  $(".hide-form").click(function () {
    $(".main-search-form").toggleClass("move-form");
  });

  //sweet alert on adding a product to the cart successfully 

  $("#success-alert").hide();
  $("#myWish").click(function showAlert() {
    $("#success-alert")
      .fadeTo(2000, 500)
      .slideUp(500, function () {
        $("#success-alert").slideUp(500);
      });
  });
});
