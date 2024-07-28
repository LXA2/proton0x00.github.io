document.addEventListener("DOMContentLoaded", function() {
    const data = {
        t2: "在此宗教中，你会领略到",
        t3: "门主与依德莉拉相媲美的容貌",
        t4: "门主如微风轻拂过大地的嗓音",
        t5: "门主那温暖过多具尸体的魅力",
        t6: "不管之前您是否听闻过流萤门主的光辉事迹，加入此教都不失为一种明智的选择！立即点击“",
        t7: "流萤信徒入口",
        t8: "”，加入我们！"
    };

    function displayContent() {
        const ids = Object.keys(data);
        function displayText(id, content) {
            return new Promise((resolve) => {
                const element = document.getElementById(id);
                if (element) {
                    let index = 0;
                    const interval = setInterval(() => {
                        element.innerText += content.charAt(index);
                        index++;
                        if (index >= content.length) {
                            clearInterval(interval);
                            resolve();
                        }
                    }, 100);
                } else {
                    resolve();
                }
            });
        }
        (async function displayAll() {
            for (const id of ids) {
                await displayText(id, data[id]);
            }
        })();
    }

    displayContent();
});