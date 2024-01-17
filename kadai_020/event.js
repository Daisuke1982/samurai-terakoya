const btn = document.getElementById('btn');

// HTML要素がクリックされたときにイベント処理を実行する
btn.addEventListener('click', () => {
  console.log('ボタンをクリックしました！');

  // htmlのidはシングルクォーテーションで囲むこと'text'みたいに
  var word = document.getElementById('text'); 
  word.innerHTML = "<h2 id='text;'>ボタンをクリックしました！！</h2>";
});
