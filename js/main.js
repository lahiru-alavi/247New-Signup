$(function () {
  var $page = jQuery.url.attr("file");
  $("ul.navbar-nav li a").each(function () {
    var $href = $(this).attr("href");
    if ($href == $page || $href == "") {
      $(this).addClass("active");
    } else {
      $(this).removeClass("active");
    }
  });
});
