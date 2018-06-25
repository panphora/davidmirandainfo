$(".form-group .form-label").on("click", function (event) {
  var $elem = $(event.currentTarget);
  var type = $elem.data("type");

  $elem.siblings("input,textarea").each(function (index, elem) {
    elem.focus();
  });

  $elem
    .closest("form")
    .addClass(type + "-is-focused");
});

$(".form-group input, .form-group textarea").on("focus", function (event) {
  var $elem = $(event.currentTarget);
  var type = $elem.data("type");

  $elem
    .closest("form")
    .addClass(type + "-is-focused");
});

$(".form-group input, .form-group textarea").on("blur", function (event) {
  var $elem = $(event.currentTarget);
  var type = $elem.data("type");

  if ($elem.val() === "") {
    $elem
      .closest("form")
      .removeClass(type + "-is-focused");
  }

});

$(".contact-form").on("submit", function (event) {
  var $form = $(event.currentTarget);
  var $submitButton = $form.find(".send-button");

  var message = $form.find(".form-textarea").val();
  var messageWithoutWhitespace = message.replace(/\s/g, "");

  if (messageWithoutWhitespace.length < 15) {
    event.preventDefault();
    var notyf = new Notyf();
    notyf.alert("Please write me a longer message before sending!");
  }

});


var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = decodeURIComponent(window.location.search.substring(1)),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : sParameterName[1];
        }
    }
};

var thankYouUrlParam = getUrlParameter("thankyou");
if (thankYouUrlParam && thankYouUrlParam === "1") {
  $(".contact-form").find(".contact-me-text").html("Thank you for contacting me!<br><br>٩(^ᴗ^)۶")
  $(".contact-form").find(".form-group, .button-container").hide()
}
















