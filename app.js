$(".thanks-box").hide();
$("input").focusin(function () {
  $(this).css("background-color", "#deddeb");
});

$("input").focusout(function () {
  $(this).css("background-color", "#ffffff");
});

$(".subscribe-btn").click(check_validity);

$(".dismiss-btn").click(function () {
  $(".main-container ").show();
  $(".thanks-box").hide();
});
$(".email-validity").hide();
//check
function check_validity() {
  var email = $("#myInput").val();

  if (
    email.includes("@") &&
    email.includes(".") &&
    email.indexOf("@") < email.indexOf(".") &&
    email.indexOf("@") > 0 &&
    email.indexOf(".") > 0 &&
    email.indexOf("@") < email.length - 4 &&
    email.indexOf(".") < email.length - 1 &&
    email.indexOf(".") - email.indexOf("@") > 1 &&
    !email.includes(" ")
  ) {
    $(".main-container ").hide();
    $(".email-validity").hide();
    $(".thanks-box").show();
    $(".the-email").html("<b>" + email + "</b>");
    if (window.matchMedia("(max-width: 767px)").matches) {
      $(".thanks-box").css("height", "100%");
      $(".thanks-box").css("width", "100%");
      $(".thanks-box").css("left", "0");
      $(".thanks-box").css("top", "10px");
    }
  } else {
    $(".email-validity").show();
    $("input").css("background-color", "#ffe8e6");

    $("input").css("color", "#de6a6e");
    $("input").click().css("color", "#000000");
  }
}

//media size check
