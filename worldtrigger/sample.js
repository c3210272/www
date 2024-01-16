var correctAnswers = 0;

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

function checkAnswers() {
  // 各選択肢ごとに正誤をチェックし、正解なら correctAnswers を増やす
  if (document.getElementById('reigastoOption').checked) {
    correctAnswers++;
  }

  if (document.getElementById('slusterOption2').checked) {
    correctAnswers++;
  }

  if (document.getElementById('freeTriggerOption3').checked) {
    correctAnswers++;
  }

  if (document.getElementById('spiderOption4').checked) {
    correctAnswers++;
  }

  // 結果を表示
  var resultElement = document.getElementById('result');
  resultElement.innerHTML = correctAnswers + "問正解！";
  var answerElement = document.getElementById('answer');
    answerElement.innerHTML = "正解：レイガスト、スラスター、FREE TRIGGER、スパイダー";

}
