$(function () {
  $('.menu__burger').click(function () {
    $(this).toggleClass('active')
    $('.menu__list').toggleClass('active')
  })
  $(function () {
    $('.menu__link').click(function () {
      $('.menu__list').toggleClass('active')
      $('.menu__burger').removeClass('active')
    })
  })

  var mixer = mixitup('.works__images');

  $(document).ready(function () {
    $(".menu a, .header__link, .logo").on("click", function (event) {
      event.preventDefault();
      var id = $(this).attr('href'),
        top = $(id).offset().top;
      $('body,html').animate({ scrollTop: top }, 1300);
    });
  });
})





