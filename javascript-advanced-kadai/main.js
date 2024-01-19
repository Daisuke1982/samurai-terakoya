// 変数の初期化
let untyped = '';
let typed = '';
let score = 0;

// 必要なHTML要素の取得
const untypedfield = document.getElementById('untyped');
const typedfield = document.getElementById('typed');
const wrap = document.getElementById('wrap');
const start = document.getElementById('start');
const count = document.getElementById('count');
// 追加 s
const myscore = document.getElementById('myscore');
// 追加 g


const textLists = [
  'Hello World',
  'This is my App',
  'How are you?',
  'love yourself.',
  'I walk slowly',
  'different degrees.',
  'Creativity is fun.',
  'Data beats emotions.',
  'the big picture.',
  'Done is better than perfect.',
  'To define is to limit.',
  'Big egos have little ears.',
  'Stay foolish to stay sane.',
  'My life is my message.',
  'Think rich, look poor.'
];
 
 
 // ランダムなテキストを表示
 const createText = () => {
  // 正タイプした文字列をクリア
  typed = '';
  typedfield.textContent = typed;

  // ランダムな数値を作成
  let i = Math.floor(Math.random()*textLists.length)
  untyped = textLists[i];
  untypedfield.textContent = untyped;
 };
 
 // キー入力の判定
 const keyPress = e => {
  console.log(e.key);
  // 誤タイプの場合
  if(e.key !== untyped.substring(0,1)){
    wrap.classList.add('mistyped');
    // 100ms後に背景色を元に戻す
    setTimeout(() => {
    wrap.classList.remove('mistyped');
    }, 100);
    return;
  }
  // 正タイプの場合
  // スコアのインクリメント
  score++;
  // 追加 s
  myscore.textContent = score;
  // 追加 g
  wrap.classList.remove('mistyped');
  typed += untyped.substring(0,1);
  untyped = untyped.substring(1);
  typedfield.textContent = typed;
  untypedfield.textContent = untyped;

  // テキストがなくなったら新しいテキストを表示
  if(untyped === '') {
    createText();
  }
 };
 
 // タイピングスキルのランクを判定
 const rankCheck = score => {
  // return `${score}文字打てました!`;
  // テキストを格納する変数を作る
  let text = '';

  // スコアに応じて異なるメッセージを変数textに格納する
  if(score < 100) {
    text = `あなたのランクはCです。\nBランクまであと${100 - score}文字です。`;
  } else if(score < 200) {
    text = `あなたのランクはBです。\nAランクまであと${200 - score}文字です。`;    
  } else if(score < 300) {
    text = `あなたのランクはAです。\nSランクまであと${300 - score}文字です。`;    
  } else if(score >= 300) {
    text = `あなたのランクはSです。\nおめでとうございます!`;    
  }
   // 生成したメッセージと一緒に文字列を返す
  return `${score}文字打てました!\n${text}\n【OK】リトライ / 【キャンセル】終了`;
 };
 
 // ゲームを終了
 const gameOver = id => {
  clearInterval(id);
  const result = confirm(rankCheck(score));

  // OKボタンをクリックされたらリロードする
  if(result == true) {
    window.location.reload();
  }
  console.log('ゲーム終了!');
 };
 
 // カウントダウンタイマー
 const timer = () => {
   // タイマー部分のHTML要素（p要素）を取得する
   let time = count.textContent;

   const id = setInterval(() => {
    // カウントダウンする
    time--;
    count.textContent = time;

    //  カウントが0になったらタイマーを停止する
    if(time <=0) {
      gameOver(id);
    }
   },1000);
 };

// ゲームスタート時の処理
start.addEventListener('click', () => {
  // カウントダウンタイマーを開始する
  timer();

  // ランダムなテキストを表示
  createText();

  // 「スタート」ボタンを非表示にする
  start.style.display = 'none';  

  // キーボードのイベント処理
  document.addEventListener('keypress', keyPress);

});

untypedfield.textContent = 'スタートボタンで開始';