const logo = document.getElementById('star_rail_logo');
const asteroid = document.getElementById('img_asteroid');
const inner = document.getElementById('inner');

var startOffset = 0; // 开始计算的滚动偏移 
var endOffset = 1600;// 结束计算的滚动偏移

var startOffset2 = 100; // 开始计算的滚动偏移 aesteroid
var endOffset2 = 1600;// 结束计算的滚动偏移 aesteroid

if (isMobileDevice()) {
    startOffset =0 ; // 开始计算的滚动偏移 
    endOffset = 500;// 结束计算的滚动偏移

    startOffset2 =100; // 开始计算的滚动偏移 aesteroid
    endOffset2 = 800;// 结束计算的滚动偏移 aesteroid
}
//alert(endOffset)



const initialStyles = {
    width: 60,
    left: 50,
    top: 50,
    transformX: -50,
    transformY: -50
};

const finalStyles = {
    width: 15,
    left: 0,
    top: 2,
    transformX: 0,
    transformY: 0
};

const initialStyles2 = {
    top: 80,
    right: 120,
    width: 5,
};

const finalStyles2 = {
    top: 15,
    right: 7,
    width: 28,
};

inner.addEventListener('scroll', () => {
    const scrollTop = inner.scrollTop;
    console.log(scrollTop);

    // 计算滚动的进度 (0 - 1)
    const progress = Math.min(1, Math.max(0, (scrollTop - startOffset) / (endOffset - startOffset)));
    const progress2 = Math.min(1, Math.max(0, (scrollTop - startOffset2) / (endOffset2 - startOffset2)));// aesteroid

    console.log(progress);
    // 计算各个属性的新值
    const newWidth = initialStyles.width + (finalStyles.width - initialStyles.width) * progress;
    const newLeft = initialStyles.left + (finalStyles.left - initialStyles.left) * progress;
    const newTop = initialStyles.top + (finalStyles.top - initialStyles.top) * progress;
    const newTransformX = initialStyles.transformX + (finalStyles.transformX - initialStyles.transformX) * progress;
    const newTransformY = initialStyles.transformY + (finalStyles.transformY - initialStyles.transformY) * progress;

    const newWidth2 = initialStyles2.width + (finalStyles2.width - initialStyles2.width) * progress2;
    const newRight2 = initialStyles2.right + (finalStyles2.right - initialStyles2.right) * progress2;
    const newTop2 = initialStyles2.top + (finalStyles2.top - initialStyles2.top) * progress2;

    // 设置样式
    logo.style.width = `${newWidth}vw`;
    logo.style.left = `${newLeft}vw`;
    logo.style.top = `${newTop}vh`;
    logo.style.transform = `translate(${newTransformX}%, ${newTransformY}%)`;
    /*if (progress>=0.5){
        logo.style.zIndex=10;
    }
    if (progress<0.5){
        logo.style.zIndex=9999999;
    }*/

    asteroid.style.width = `${newWidth2}vw`;
    asteroid.style.right = `${newRight2}vw`;
    asteroid.style.top = `${newTop2}vh`;
});


window.onload = function () {
    //window.scrollbars.visible=false;
    changeFontSize();
    console.log(inner.scrollTop);
    if (window.scrollY == 0) {
        inner.style.overflow = 'hidden';
        document.getElementById("star_rail_logo").style.animation = "an1 2s ease-in-out";
        // document.getElementById("star_rail_logo").style.opacity = 1;
        console.log("an 1")
        setTimeout(function () {
            console.log("an width");
            document.getElementById("blank1").style.animation = "height 2s ease-in-out";
        }, 1500);
        setTimeout(function () {
            console.log("3");
            document.getElementById("blank1").style.opacity = 1;
            document.getElementById("blank1").style.height = "85vh";
            inner.style.overflow = '';
        }, 3500);
        document.getElementById("iframe1").innerHTML=`<iframe src="https://baike.baidu.com/item/%E6%B5%81%E8%90%A4" frameborder="0" tabindex="-1"></iframe>`
    }
};

function changeFontSize() {
    if (isMobileDevice()) {
        //alert("mobile");
        document.getElementById("t1").style.fontSize = "7vw";
        document.getElementById("t2").style.fontSize = "4vw";
        document.getElementById("t3").style.fontSize = "4vw";
        document.getElementById("t4").style.fontSize = "4vw";
        document.getElementById("t5").style.fontSize = "4vw";
        document.getElementById("t6").style.fontSize="4vw";
        document.getElementById("t7").style.fontSize="6.5vw";
        document.getElementById("t7").style.height="12vw";
        document.getElementById("t7").style.width="45vw";
        document.getElementById("t8").style.fontSize="5vw";
        document.getElementById("t9").style.fontSize = "4vw";
        document.getElementById("t10").style.fontSize = "5vw";
        document.getElementById("content").style.width="95%"
        document.getElementById("blank3").style.height = "200vw";
    } else {
        //alert("desktop");
        document.getElementById("t1").style.fontSize = "5vw";
        document.getElementById("t2").style.fontSize = "1.8vw";
        document.getElementById("t3").style.fontSize = "1.8vw";
        document.getElementById("t4").style.fontSize = "1.8vw";
        document.getElementById("t5").style.fontSize = "1.8vw";
        document.getElementById("t6").style.fontSize="1.8vw";
        document.getElementById("t7").style.fontSize="2.2vw";
        document.getElementById("t7").style.height="5vw";
        document.getElementById("t7").style.width="18vw";
        document.getElementById("t8").style.fontSize="1.8vw";
        document.getElementById("t10").style.fontSize = "1.8vw";
        document.getElementById("t9").style.fontSize = "1.8vw";
        document.getElementById("blank3").style.height = "100vw";
    }
}


const imgElement = document.getElementById('img_ying');
const animatedElement = document.getElementById('img_description1');
let timeout;

function moveElement() {
    animatedElement.style.top = '2vw';
}

function resetElement() {
    animatedElement.style.top = '-9vw';
}

imgElement.addEventListener('mouseenter', () => {
    moveElement();
    clearTimeout(timeout);
    timeout = setTimeout(resetElement, 4000);
});

imgElement.addEventListener('mouseleave', () => {
    clearTimeout(timeout);
    resetElement();
});












// JavaScript 键值对存储元素 ID 和内容字符串

const contentMap = {
    t1: "! ! ! 萤门 ! ! !",
    t2: "在此宗教中，你会领略到",
    t3: "门主与依德莉拉相媲美的容貌",
    t4: "门主如微风轻拂过大地的嗓音",
    t5: "门主那温暖过多具尸体的魅力",
    t6: "不管之前您是否听闻过流萤门主的光辉事迹，加入此教都不失为一种明智的选择！",
    t7: "流萤信徒入口",
    t8: "，加入我们！！！",
    t9: "门主基础信息",
    t10:"立即点击"
};

// 逐字填充函数
function fillTextGradually(element, content) {
    let index = 0;
    let tempString = '';

    const interval = setInterval(() => {
        if (index < content.length) {
            tempString += content[index];
            element.textContent = tempString;
            index++;
        } else {
            clearInterval(interval);
        }
    }, 100); // 每100ms填充一个字符
}

// 创建Intersection Observer
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1 // 当元素进入视口10%时触发
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const id = entry.target.id;
            if (contentMap[id]) {
                fillTextGradually(entry.target, contentMap[id]);
                observer.unobserve(entry.target); // 填充完成后停止观察
            }
        }
    });
}, observerOptions);

// 观察每个含有文字的元素
const textElements = document.querySelectorAll('.text-element');
textElements.forEach(element => {
    observer.observe(element);
});

function isMobileDevice() {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;
    const isMobile = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(userAgent);
    return isMobile;
}



