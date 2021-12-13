var items = document.getElementsByClassName("item");//图片
var points = document.getElementsByClassName("point");//点
var goPreBtn = document.getElementById("goPre");
var goNextBtn = document.getElementById("goNext");

// index表示第几张图片在展示，
// 第index张图片有active这个类名
// 第几个点
var index = 0;
// 定时器图片跳转参数
var time = 0;

// 登陆注册按钮点击后执行跳转事件
function login() {
    // 跳转到登录注册的页面
    window.location.href = '../Werewolf/index5.html';
}

//点击后执行跳转事件
function jz() {
    // 跳转到简介的页面
    window.location.href = '../Werewolf/index2.html';
}
function kp() {
    // 跳转到卡牌的页面
    window.location.href = '../Werewolf/index3.html';
}
function gg() {
    // 跳转到公告的页面
    window.location.href = '../Werewolf/index7.html';
}

//已经在当前页面弹窗
function yz() {
    alert('已经在当前页面');
}


var clearActive = function () {
    for (var i = 0; i < items.length; i++) {
        items[i].className = "item";
    }
    for (var i = 0; i < points.length; i++) {
        points[i].className = "point";
    }
}
var goIndex = function () {
    clearActive();
    items[index].className = "item active";
    points[index].className = "point active";
}
var goNex = function () {
    if (index < 4) {
        index++;
    } else {
        index = 0;
    }
    goIndex();
}
var goPre = function () {
    if (index == 0) {
        index = 4;
    } else {
        index--;
    }
    goIndex();
}
// 点击执行goNex
goNextBtn.addEventListener("click", function () {
    time = 0;
    goNex();
})
// 点击执行goPre
goPreBtn.addEventListener("click", function () {
    time = 0;
    goPre();
})

for (var i = 0; i < points.length; i++) {
    points[i].addEventListener("click", function () {
        var pointIndex = this.getAttribute("data-index");
        index = pointIndex;
        goIndex();
        time = 0;
    })
}

setInterval(function () {
    time++;
    if (time == 25) {
        goNex();
        time = 0;
    }
}, 125)