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
  event.preventDefault();
  var $form = $(event.currentTarget);

  var data = {};
  $form.find("[name]").each(function (index, elem) {
    var $elem = $(elem);
    data[$elem.attr("name")] = $elem.val();
  });

  $.ajax({
      url: "https://formspree.io/xyygzapx", 
      method: "POST",
      data: data,
      dataType: "json",
      success: function (resp) {
        $form.find(".contact-me-text").html("Thank you for contacting me!<br><br>٩(^ᴗ^)۶")
        $form.find(".form-group, .button-container").hide()
      }
  });
});



















