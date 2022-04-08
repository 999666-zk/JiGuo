$(function () {
  $(".fu_title").children("div:first").children("a").css({
    color: "rgb(253, 84, 52)",
    borderBottom: "4px solid rgb(253, 84, 52)",
  });

  $(".fu_title")
    .children("div")
    .on("click", function () {
      //   console.log($(this).html());
      $(this).children("a").css({
        color: "rgb(253, 84, 52)",
        borderBottom: "4px solid rgb(253, 84, 52)",
      });

      // 判断
      if ($(this).children("a").text() == "最新") {
        $(".ajax_the_new").fadeIn("slow");
        $(".ajax_the_new").siblings(".ajax_box").fadeOut("slow");
        request("get", "/play/new", "", success, error);
        // 加载更多
        $("#more_selection").children("img").attr("src", "../img/more.png");
        $("#more_selection")
          .children("span")
          .text("加载更多")
          .css("color", " rgb(255, 83, 51)");
        moreLoading(2, 0, "/play/new", ajax_the_new);
      } else if ($(this).children("a").text() == "最热") {
        $(".ajax_the_hot").fadeIn("slow");
        $(".ajax_the_hot").siblings(".ajax_box").fadeOut("slow");
        request("get", "/play/hot", "", successhot, errorhot);

        // 加载更多
        $("#more_selection").children("img").attr("src", "../img/more.png");
        $("#more_selection")
          .children("span")
          .text("加载更多")
          .css("color", " rgb(255, 83, 51)");
        moreLoading(3, 2, "/play/hot", ajax_the_hot);
      }
      $(this).siblings().children("a").css({
        color: "rgb(180, 175, 170)",
        borderBottom: "none",
      });
    });
});

function moreLoading(start, nums, path, dom) {
  $("#more_selection").children("img").attr("src", "../img/more.png");
  $("#more_selection")
    .children("span")
    .text("加载更多")
    .css("color", " rgb(255, 83, 51)");

  var num = start;
  $("#more_selection").on("click", function () {
    $(this).children("img").attr("src", "../img/loading-icon.gif");
    num++;
    var timer_more = null,
      timer_img = null;
    timer_more = setTimeout(function () {
      request("get", path, "", success, error);
      function success(res) {
        // console.log(res.slice(0, 2));
        if (num <= res.length) {
          if (dom == ajax_the_pinpai) {
            rederHtml_model2(res.slice(nums, num), dom);
          } else {
            rederHtml(res.slice(nums, num), dom);
          }
        } else {
          if (dom == ajax_the_pinpai) {
            rederHtml_model2(res.slice(nums, res.length), dom);
            $("#more_selection")
              .children("span")
              .text("已经底了！")
              .css("color", "gray");
            $("#more_selection").children("img").attr("src", "");
          } else {
            rederHtml(res.slice(nums, res.length), dom);
            $("#more_selection")
              .children("span")
              .text("已经底了！")
              .css("color", "gray");
            $("#more_selection").children("img").attr("src", "");
          }
        }
      }
    }, 1000);
    timer_img = setTimeout(function () {
      $("#more_selection").children("img").attr("src", "../img/more.png");
    }, 1000);
  });
}
