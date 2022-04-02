// ==UserScript==
// @name         Silksong Place
// @namespace    https://www.reddit.com/r/HollowKnight/
// @version      0.1
// @description  try to take over r/place!
// @author       OnyX_#4977
// @match        https://hot-potato.reddit.com/embed*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=reddit.com
// @grant        none
// ==/UserScript==

let displaying=true;
let maxx=false;

if (window.top !== window.self) {
    window.addEventListener('load', () => {
            document.getElementsByTagName("mona-lisa-embed")[0].shadowRoot.children[0].getElementsByTagName("mona-lisa-camera")[0].shadowRoot.children[0].children[0].children[0].appendChild(
        (function () {
            const div = document.createElement("div");
            div.style = "height:3550px; width:4400px; position: absolute; left: 0; right:0; top: 0; bottom:0; transform: translateX(11350px) translateY(17350px);     background-size: cover;" +
    "background-image: url('https://cdn.discordapp.com/attachments/959559823089860638/959588823602458644/unknown.png'); opacity: 0.5;";
            const button = document.createElement("button");
            button.innerHTML = "Disable/Enable";
            button.style.position = "left: 0; right:0; top: 0; bottom:0; position: relative"
            button.addEventListener('click', function(e) {
                if (displaying) {
                    div.style.visibility = "hidden";
                } else {
                    div.style.visibility = "visible";
                }
                displaying = !displaying;
            });
            const button2 = document.createElement("button");
            button2.innerHTML = "Max/NonMax opacity";
            button2.style.position = "left: 0; right:0; top: 0; bottom:0; position: relative"
            button2.addEventListener('click', function(e) {
                if (!maxx) {
                    div.style.opacity = "1";
                } else {
                    div.style.opacity = "0.5";
                }
                maxx = !maxx;
            });
            document.body.insertBefore(button,document.body.childNodes[0]);
            document.body.insertBefore(button2,document.body.childNodes[0]);
            return div;
        })())

    }, false);
}
