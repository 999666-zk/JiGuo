window.onload = function () {
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
};
