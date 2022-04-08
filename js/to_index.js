window.onload = function () {
  //导航栏点击进行变色
  $(".nav_con")
    .children("li")
    .on("click", function () {
      $(this).children("a").css("color", "rgb(254, 83, 65)");
      $(this).siblings("li").children("a").css("color", "black");
    });

  var timer_min = null;
  timer_min = setInterval(function () {
    times_();
  }, 1000);
  //  获取time盒子
  var times_dom = document.getElementsByClassName("times")[0];
  var tag = true;
  function times_() {
    if (tag) {
      tag = false;
      var time_start = new Date().getTime();
      var time_end = new Date("5,1,2022,00:00:00").getTime(); //月日年
      var time_middle = time_end - time_start;
      timer = setInterval(function () {
        time_middle = time_middle - 1000;
        times_dom.innerHTML = time_big(time_middle);
        if (time_middle < 0) {
          clearInterval(timer);
        }
      }, 1000);
    }
  }
  times_();
  function time_big(time) {
    var days = parseInt(time / (24 * 60 * 60 * 1000));
    var hours = parseInt((time % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000 * 1));
    var minutes = parseInt((time % (1000 * 60 * 60)) / (1000 * 60));
    var back_time =
      days +
      "天 " +
      (hours < 10 ? "0" + hours : hours) +
      "小时 " +
      (minutes < 10 ? "0" + minutes : minutes) +
      "分钟 ";

    return back_time;
  }

  // 实现轮播图自动滚动效果
  var look_img = $(".inner_small_box");
  var scroll_box = document.getElementsByClassName("inner_big_box")[0];
  console.log(look_img.length);
  var timer = null,
    timer1 = null;
  var num = 0;
  var start = 0;
  var end = 0;
  // scroll_box.scrollLeft = imgs[0].offsetWidth;
  function automove() {
    timer = setInterval(function () {
      num++;
      if (num >= look_img.length) {
        num = 1;
        scroll_box.scrollLeft = 0;
      }

      start = scroll_box.scrollLeft;

      // console.log(start);
      end = 1420 * num;

      //把图片 切成指定的份数 来进行滚动
      move(start, end, 1);
    }, 6000);
  }
  automove();

  // console.log(end);

  function move(start, end, flag) {
    var step = 0; //初始的步数
    var maxstep = 100;
    var width_ = (end - start) / maxstep;
    timer1 = setInterval(function () {
      var maxstep = 100;
      step++;
      if (step >= maxstep) {
        step = 0;
        clearInterval(timer1);
      }
      if (flag == 1) {
        start += width_;
      } else {
        start -= width_;
      }
      scroll_box.scrollLeft = start;
    }, 10);
  }

  scroll_box.addEventListener("mouseenter", function () {
    clearInterval(timer);
  });
  scroll_box.addEventListener("mouseleave", function () {
    automove();
  });

  var row_left = document.getElementsByClassName("row_left")[0];
  var row_right = document.getElementsByClassName("row_right")[0];

  row_right.addEventListener("click", function () {
    clearInterval(timer);
    num++;
    if (num >= look_img.length) {
      num = 1;
      scroll_box.scrollLeft = 1420;
    }

    start = scroll_box.scrollLeft;

    // console.log(start);
    end = 1420 * num;

    //把图片 切成指定的份数 来进行滚动
    move(start, end, 1);
  });

  row_left.addEventListener("click", function () {
    clearInterval(timer);
    num--;
    if (num <= 0) {
      num = look_img.length - 2;
      scroll_box.scrollLeft = (look_img.length - 2) * 1420;
    }

    start = scroll_box.scrollLeft;

    // console.log(start);
    end = 1420 * (num + 1);

    //把图片 切成指定的份数 来进行滚动
    move(start, end, 0);
  });
  // 防止抖动
  document.addEventListener("visibilitychange", function () {
    console.log(this.visibilityState);
    if (this.visibilityState == "visible") {
      automove();
    }
    if (this.visibilityState == "hidden") {
      clearInterval(timer);
      clearInterval(timer1);
    }
  });

  // 返回顶部
  var back = document.getElementsByClassName("back")[0];
  var timer = null;
  window.onscroll = function () {
    if (document.documentElement.scrollTop >= 800) {
      back.style.display = "block";
    }
    if (document.documentElement.scrollTop < 800) {
      back.style.display = "none";
    }
  };
  back.onclick = function () {
    timer = setInterval(function () {
      var scroll_top = (document.documentElement.scrollTop -= 100);
      if (scroll_top <= 0) {
        clearInterval(timer);
      }
    }, 1);
  };
};
