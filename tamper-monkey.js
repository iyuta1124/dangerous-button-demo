// ==UserScript==
// @name         本番環境破壊ボタン制御スクリプト
// @namespace    http://tampermonkey.net/
// @version      2025-07-18
// @description  本番環境破壊なボタンの表示/非表示を制御します
// @author       You
// @match        https://iyuta1124.github.io/dangerous-button-demo/
// @icon         https://www.google.com/s2/favicons?sz=64&domain=github.io
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    const style = document.createElement('style');
    style.textContent = `
        .tampermonkey-control {
            position: fixed;
            top: 20px;
            right: 20px;
            z-index: 9999;
            background: #007bff;
            color: white;
            border: none;
            padding: 12px 20px;
            font-size: 14px;
            font-weight: bold;
            border-radius: 8px;
            cursor: pointer;
        }
        .tampermonkey-control:hover {
            background:  #0056b3
        }
    `;
    document.head.appendChild(style);

    let isHidden = false;

    const controlButton = document.createElement('button');
    controlButton.className = 'tampermonkey-control';
    controlButton.textContent = '本番環境破壊ボタンを隠す';
    function toggleDangerousButtons() {
        const dangerousButtons = document.querySelectorAll('button');
        
        dangerousButtons.forEach(button => {
            if ( button.classList.contains('destroy-button')) {
                if (isHidden) {
                    button.style.display = '';
                } else {
                    button.style.display = 'none';
                }
            }
        });
        
        isHidden = !isHidden;
        controlButton.textContent = isHidden ? '本番環境破壊ボタンを表示' : '本番環境破壊ボタンを隠す';
    }

    controlButton.addEventListener('click', toggleDangerousButtons);
    
    document.body.appendChild(controlButton);
    
})();