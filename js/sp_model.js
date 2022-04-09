$(function () {
  //bander出现动画
  $(".right_text").animate(
    {
      width: "310px",
      height: "274px",
    },
    "slow"
  );

  function blink(AjaxDom) {
    var opacity = 1;
    var timer = null;
    timer = setInterval(function () {
      if (opacity <= 0) {
        opacity = 1;
      }
      opacity -= 0.1;
      AjaxDom.fadeTo(10, opacity);
    }, 1000);
  }

  // 导航栏选择

  // console.log(window.location.href);
  let arrHttp = window.location.href;
  var urlStr = location.pathname.match("[^/]+(?!.*/)")[0];
  // console.log(urlStr);
  var index_where = urlStr.split(".");
  // console.log(index_where[0]);

  // 导航栏hover
  $(".nav_con li a").hover(
    function () {
      $(this).css("color", "rgb(250, 144, 127)");
      $(this).parent("li").siblings().children("a").css("color", "black");
    },
    function () {
      $(this).css("color", "black");
      witch_s(index_where[0]);
    }
  );

  function witch_s(flage) {
    switch (flage) {
      case "index":
        index.style.color = "#ff5333";
        break;
      case "play":
        play.style.color = "#ff5333";
        break;
      case "guid":
        guid.style.color = "#ff5333";
        break;
      case "help":
        help.style.color = "#ff5333";
        break;
      case "test":
        help.style.color = "#ff5333";
        break;
      case "report":
        report.style.color = "#ff5333";
        break;
      case "hot":
        report.style.color = "#ff5333";
        break;
      default:
      // code block
    }
  }
  witch_s(index_where[0]);
});
