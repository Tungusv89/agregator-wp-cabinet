jQuery(document).ready(function () {
  $('.js-select').select2();

  $('.js-select.checkbox').select2({
    dropdownParent: $('#checkbox_modal'),
    closeOnSelect: false,
  });

  $('.foto img').click(function (e) {
    e.preventDefault();
    $('.foto .replace_avatar').css('display', 'block');
  });

  $('.input_file .button').click(function (e) {
    e.preventDefault();
    $(this).parent($('.input_file')).find('input').click();
  });

  $('.input_file input').on('change', function (e) {
    const file = this.files[0];

    if (file) {
      if (
        $(this).parents('.input_block').find($('.preview img')).length == 0 ||
        $(this).parents('.input_block').hasClass('multiple')
      ) {
        $(this)
          .parents()
          .eq(1)
          .find('.preview')
          .append($('<div class="img"><div class="cancel"></div><img src="" alt=""></div>'));
        $(this).parents().eq(1).find('.preview').css('display', 'flex');
        console.log($(this).parents().eq(1).find($('.img:last-child img')));
        $(this)
          .parents()
          .eq(1)
          .find($('.img:last-child img'))
          .attr('src', URL.createObjectURL(file));
      } else {
        $(this)
          .parents()
          .eq(1)
          .find($('.img:last-child img'))
          .attr('src', URL.createObjectURL(file));
      }

      $('.preview .cancel').click(function (e) {
        if ($(this).parents('.preview').children().length > 1) {
          $(this).parents('.img').remove();
        } else {
          $(this).parents('.preview').remove();
        }
      });
    }
  });

  if ($(document).width() < 860) {
    $('.menu .active .toggle').click(() => {
      if (!$('.menu ul').find('.active').hasClass('open')) {
        $('.menu ul').find('.active').addClass('open');
      } else {
        $('.menu ul').find('.active').removeClass('open');
      }

      $('.menu ul').find('li:not(.active)').toggle(200);
    });
  }

  const $row1 = $('.service_item').clone();
  // const $row2 = $('.row2').clone();
  // const $row3 = $('.row3').clone();
  $('.add_service').click(function (e) {
    $('.delete_services').css('display', 'block');
    $('.add_service').before($row1.clone());
    // $('.add_service').before($row2.clone());
    // $('.add_service').before($row3.clone());
  });

  $('.delete_services').click(function (e) {
    $('.service_item').remove();
    $(this).css('display', 'none');
  });

  $('.close').click(function (e) {
    $(this).parent($('.popup')).css('display', 'none');
  });

  $('.row3 .delete').click(function (e) {
    e.preventDefault();
    $('.popup-delete').css('display', 'flex');
  });

  $('.card_data .close').click(function (e) {
    e.preventDefault();
    $(this).parent($('.card_data')).remove();
  });
});
