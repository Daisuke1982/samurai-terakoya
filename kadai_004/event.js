// $(window).on('load', function(){
//   console.log('loadイベントが発生しました');
// });

// $(window).on('scroll', function(){
//   console.log('scrollイベントが発生しました');
// });

$(window).on({
  'load': () => {
    console.log('loadイベントが発生しました');
  }, 
  'scroll': () => {
    console.log('scrollイベントが発生しました');
  }, 
});