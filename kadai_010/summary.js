$(function () {
  $('#change-color').on('click', function() {
    $('#target').css('color','red');
    });

  $('#change-text').on('click', function() {
    $('#target').text('気合いだ！');
    });
  

  $('#fade-out').on('click', function() {
    // フェードアウトする
    $('#target').fadeOut();
    });
 
    $('#fade-in').on('click', function() {
    // フェードインする
    $('#target').fadeIn();
  });
});