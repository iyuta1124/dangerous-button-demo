function handleDestroy() {
  if (confirm("🚨 本当に本番環境を破壊しますか？")) {
    document.body.style.background = "#ff0000";
    setTimeout(() => {
      document.body.style.background = "#f5f5f5";
    }, 2000);
  }
}

function copyCode(btn) {
  // .codeクラスの要素を取得
  const codeDiv = btn.parentElement.querySelector(".code");
  const text = codeDiv.innerText;
  navigator.clipboard.writeText(text);
  btn.textContent = "コピー済み！";
  setTimeout(() => {
    btn.textContent = "コピー";
  }, 1500);
}

console.log("🛡️ デモページ読み込み完了");
console.log("💡 Tampermonkeyスクリプトを試してみてください！"); 