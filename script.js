async function loadFileContent() {
  try {
    const response = await fetch('tamper-monkey.js');
    const content = await response.text();
    const codeDiv = document.querySelector('.code');
    codeDiv.textContent = content;
    console.log('ファイルを動的に読み込みました');
  } catch (error) {
    console.error('ファイル読み込みエラー:', error);
    const codeDiv = document.querySelector('.code');
    codeDiv.textContent = 'ファイルの読み込みに失敗しました';
  }
}

document.addEventListener('DOMContentLoaded', loadFileContent);


function handleDestroy() {
  if (confirm("本当に本番環境を破壊しますか？")) {
    document.body.style.background = "#ff0000";
    setTimeout(() => {
      document.body.style.background = "#f5f5f5";
    }, 2000);
  }
}

function copyCode(btn) {
  const codeDiv = btn.parentElement.querySelector(".code");
  const text = codeDiv.innerText;
  navigator.clipboard.writeText(text);
  btn.textContent = "コピー済";
  setTimeout(() => {
    btn.textContent = "コピー";
  }, 1500);
}
