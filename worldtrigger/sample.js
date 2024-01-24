var correctMainAnswers = 0;
var correctSubAnswers = 0;

function showOptions(id) {
  // すべての選択肢を非表示にする
  var allOptions = document.querySelectorAll('.trigger-options');
  for (var i = 0; i < allOptions.length; i++) {
    allOptions[i].style.display = 'none';
  }

  // すべての長方形からクラスを削除する
  var allRectangles = document.querySelectorAll('.rectangle');
  for (var i = 0; i < allRectangles.length; i++) {
    allRectangles[i].classList.remove('selected');
  }

  // 選択された長方形に対応する選択肢を表示する
  var selectedOptions = document.getElementById(id);
  if (selectedOptions) {
    selectedOptions.style.display = 'block';
  }

  // 選択された長方形のクラスを追加して色を変更する
  var selectedRectangle = document.querySelector('.' + id);
  if (selectedRectangle) {
    selectedRectangle.classList.add('selected');
  }
}

function checkMainAnswers() {
  // メイントリガーの正解をチェックし、正解なら correctMainAnswers を増やす
  if (document.getElementById('reigastoOption').checked) {
    correctMainAnswers++;
  }

  if (document.getElementById('slusterOption2').checked) {
    correctMainAnswers++;
  }

  if (document.getElementById('freeTriggerOption3').checked) {
    correctMainAnswers++;
  }

  if (document.getElementById('spiderOption4').checked) {
    correctMainAnswers++;
  }
}

function checkSubAnswers() {
  // サブトリガーの正解をチェックし、正解なら correctSubAnswers を増やす
  if (document.getElementById('option1').checked) {
    correctSubAnswers++;
  }

  if (document.getElementById('option2_2').checked) {
    correctSubAnswers++;
  }

  if (document.getElementById('option3_3').checked) {
    correctSubAnswers++;
  }

  if (document.getElementById('option4_4').checked) {
    correctSubAnswers++;
  }
}

function checkAnswers() {
  // メイントリガーの正解をチェック
  checkMainAnswers();

  // サブトリガーの正解をチェック
  checkSubAnswers();

  // メイントリガーとサブトリガーの正解数を表示
  var resultElement = document.getElementById('result');
  resultElement.innerHTML = "メイントリガー: " + correctMainAnswers + "問正解<br>サブトリガー: " + correctSubAnswers + "問正解";
}

// 「もう一度挑戦！」ボタンが押されたときの処理
function resetQuiz() {
  // ラジオボタンの選択を解除
  clearRadioSelection();

  // ボタンの表記を元に戻す
  document.getElementById("checkAnswerButton").innerText = "答えを見る";

  // ボタンのクリックイベントを再設定
  document.getElementById("checkAnswerButton").onclick = checkAnswers;
}

// ボタンとラジオボタンの状態を更新する関数
function updateButtonAndRadio() {
  // 「もう一度挑戦！」ボタンに変更
  document.getElementById("checkAnswerButton").innerText = "もう一度挑戦！";

  // ボタンのクリックイベントを変更
  document.getElementById("checkAnswerButton").onclick = resetQuiz;
}

// ラジオボタンの選択を解除する関数
function clearRadioSelection() {
  var radioButtons = document.querySelectorAll('input[type="radio"]');
  radioButtons.forEach(function (radio) {
    radio.checked = false;
  });
}
/*function checkAnswers() {
  // 各選択肢ごとに正誤をチェックし、正解なら correctAnswers を増やす
  
  //Answer(1):レイガスト,Answer(2):スラスター,Answer(3):フリートリガー,Answer(4):スパイダー,
  //Answer(5):アステロイド,Answer(6):シールド,Answer(7):バッグワーム
  //ドロップダウンメニューにする
  if (document.getElementById('reigasto').checked) {
    correctAnswers++;
  }

  if (document.getElementById('sluster').checked) {
    correctAnswers++;
  }

  if (document.getElementById('freeTrigger').checked) {
    correctAnswers++;
  }

  if (document.getElementById('spider').checked) {
    correctAnswers++;
  }
  
  if (document.getElementById('asteroid').checked) {
    correctAnswers++;
  }
  if (document.getElementById('shield').checked) {
    correctAnswers++;
  }
  if (document.getElementById('bagwarm').checked) {
    correctAnswers++;
  }*/