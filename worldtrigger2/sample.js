
// Mikumo 配列:答え
var Mikumo = [1, 2, 7, 4, 5, 7, 6, 3];

// Osamu 配列を初期化：解答欄
var Osamu = [];

// 正解の数をカウントする変数
var correctAnswers = 0;

function updateOsamuArray(selectedOption) {
  switch (selectedOption) {
    case 'reigasto':
      Osamu.push(1);
      break;
    case 'sluster':
      Osamu.push(2);
      break;
    case 'bagworm':
      Osamu.push(3);
      break;
    case 'spider':
      Osamu.push(4);
      break;
    case 'asteroid':
      Osamu.push(5);
      break;
    case 'shield':
      Osamu.push(6);
      break;
    case 'freeTrigger':
      Osamu.push(7);
      break;
    default:
      // 何も選択されていない場合の処理を追加することもできます
      break;
  }
}

function checkAnswers() {
  // 正解を格納する配列
  var correctAnswersArray = [1, 2, 7, 4, 5, 7, 6, 3];

  // 正解数をリセット
  correctAnswers = 0;

  // 配列を比較して正解の数をカウント
  for (var i = 0; i < Osamu.length && i < correctAnswersArray.length; i++) {
    if (Osamu[i] === correctAnswersArray[i]) {
      correctAnswers++;
    }
  }

  var resultElement = document.getElementById('result');
  resultElement.innerHTML = "正解数: " + correctAnswers + "問";
}
