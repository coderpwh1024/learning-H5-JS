/**
 * Created by coderpwh on 2018/3/1.
 */
window.onload = function () {
    // 容器对象
    var box = document.getElementById('container');
    // 获得图片NodeList对象集合
    var imgs = box.getElementsByTagName('img');
    //单张图片的宽度
    var imgWidth = imgs[0].offsetWidth;
    // 设置掩藏门体漏出的宽度
    var exposeWidth = 160;
    // 设置容器的总宽度
    var boxWidth = imgWidth + (imgs.length - 1) * exposeWidth;
    box.style.width = boxWidth + 'px';

    // 设置每道门的初始位置
    function setImgsPos() {
        for (var i = 1, len = imgs.length; i < len; i++) {
            imgs[i].style.left = imgWidth + exposeWidth * (i - 1) + 'px';
        }
    }

    setImgsPos();
    // 计算每道门打开时应移动的距离
    var translate = imgWidth - exposeWidth;
    // 为每道门绑定事件
    for (var i = 0, len = imgs.length; i < len; i++) {
        // 使用立即调用的函数表答式,为了获取不同的i值
        (function (i) {
            imgs[i].onmouseover = function () {
              // 先将每道门复位
                setImgsPos();
                // 打开门
                for(var j=1;j<=i;j++){
                    imgs[j].style.left = parseInt(imgs[j].style.left,10)-translate+'px';
                }
            }
        })(i);
    }


}


