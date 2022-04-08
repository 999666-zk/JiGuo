$(function () {
  //初始样式
  $(".fu_title").children("div:first").children("a").css({
    color: "rgb(253, 84, 52)",
    borderBottom: "4px solid rgb(253, 84, 52)",
  });

  $(".lettle_fu_title").children("div:first").children("a").css({
    color: "rgb(253, 84, 52)",
    borderBottom: "4px solid rgb(253, 84, 52)",
  });
  //=================
  $(".fu_title")
    .children("div")
    .on("click", function () {
      //   console.log($(this).html());
      $(this).children("a").css({
        color: "rgb(253, 84, 52)",
        borderBottom: "4px solid rgb(253, 84, 52)",
      });
      $(this).siblings().children("a").css({
        color: "rgb(180, 175, 170)",
        borderBottom: "none",
      });
      // 判断
      if ($(this).children("a").text() == "大众试用") {
        $(".ajax_the_new").fadeIn("slow");
        $(".ajax_the_new").siblings(".ajax_box").fadeOut("slow");
        $(".ajax_the_new").attr("flag", "1");
        $(".ajax_the_hot").attr("flag", "0");

        // 加载更多
        $("#more_selection").children("img").attr("src", "../img/more.png");
        $("#more_selection")
          .children("span")
          .text("加载更多")
          .css("color", " rgb(255, 83, 51)");
        moreLoading(2, 0, "/useing/public", ajax_the_new);
      } else if ($(this).children("a").text() == "体验师专享") {
        $(".ajax_the_hot").fadeIn("slow");
        $(".ajax_the_hot").siblings(".ajax_box").fadeOut("slow");
        $(".ajax_the_hot").attr("flag", "1");
        $(".ajax_the_new").attr("flag", "0");

        // 加载更多
        $("#more_selection").children("img").attr("src", "../img/more.png");
        $("#more_selection")
          .children("span")
          .text("加载更多")
          .css("color", " rgb(255, 83, 51)");
        moreLoading(3, 2, "/useing/master", ajax_the_hot);
      }
      console.log($(".ajax_the_new").attr("flag"));
    });
  //------------------------------------------------

  if (
    $(".ajax_the_new").attr("flag") == 1 &&
    $(".ajax_the_hot").attr("flag") == 0
  ) {
    $(".lettle_fu_title")
      .children("div")
      .on("click", function () {
        //   console.log($(this).html());
        $(this).children("a").css({
          color: "rgb(253, 84, 52)",
          borderBottom: "4px solid rgb(253, 84, 52)",
        });
        $(this).siblings().children("a").css({
          color: "rgb(180, 175, 170)",
          borderBottom: "none",
        });
        // 判断
        if ($(this).children("a").text() == "全部") {
          // $(".ajax_the_new").fadeIn("slow");
          // $(".ajax_the_new").siblings(".ajax_box").fadeOut("slow");
          $(".ajax_the_new").children("arry_eight_box").fadeOut("slow");
          request("get", "/useing/public", "", success, error);
          function success(res) {
            rederHtml(res.slice(0, 12), ajax_the_new, "playNew");
          }
          // 加载更多
          $("#more_selection").children("img").attr("src", "../img/more.png");
          $("#more_selection")
            .children("span")
            .text("加载更多")
            .css("color", " rgb(255, 83, 51)");
          moreLoading(8, 0, "/useing/public", ajax_the_new);
        } else if ($(this).children("a").text() == "申请中") {
          // $(".ajax_the_hot").fadeIn("slow");
          // $(".ajax_the_hot").siblings(".ajax_box").fadeOut("slow");
          $(".ajax_the_new").children("arry_eight_box").fadeOut("slow");
          request("get", "/useing/public", "", success, error);
          function success(res) {
            rederHtml(res.slice(4, 12), ajax_the_new, "playNew");
          }
          // 加载更多
          $("#more_selection").children("img").attr("src", "../img/more.png");
          $("#more_selection")
            .children("span")
            .text("加载更多")
            .css("color", " rgb(255, 83, 51)");
          moreLoading(13, 4, "/useing/public", ajax_the_new);
        } else if ($(this).children("a").text() == "使用中") {
          // $(".ajax_the_hot").fadeIn("slow");
          // $(".ajax_the_hot").siblings(".ajax_box").fadeOut("slow");
          request("get", "/useing/master", "", success, error);

          $(".ajax_the_new").children("arry_eight_box").fadeOut("slow");
          request("get", "/useing/master", "", success, error);
          function success(res) {
            rederHtml(res.slice(8, 13), ajax_the_new, "playNew");
          }

          // 加载更多
          $("#more_selection").children("img").attr("src", "../img/more.png");
          $("#more_selection")
            .children("span")
            .text("加载更多")
            .css("color", " rgb(255, 83, 51)");
          moreLoading(12, 6, "/useing/master", ajax_the_new);
        } else if ($(this).children("a").text() == "已结束") {
          // $(".ajax_the_hot").fadeIn("slow");
          // $(".ajax_the_hot").siblings(".ajax_box").fadeOut("slow");
          request("get", "/useing/master", "", success, error);

          $(".ajax_the_new").children("arry_eight_box").fadeOut("slow");
          request("get", "/useing/master", "", success, error);
          function success(res) {
            rederHtml(res.slice(0, 8), ajax_the_new, "playNew");
          }

          // 加载更多
          $("#more_selection").children("img").attr("src", "../img/more.png");
          $("#more_selection")
            .children("span")
            .text("加载更多")
            .css("color", " rgb(255, 83, 51)");
          moreLoading(13, 10, "/useing/master", ajax_the_new);
        }
      });
  }

  if ($(".ajax_the_new").attr("flag") == 1) {
    $(".lettle_fu_title")
      .children("div")
      .on("click", function () {
        //   console.log($(this).html());
        $(this).children("a").css({
          color: "rgb(253, 84, 52)",
          borderBottom: "4px solid rgb(253, 84, 52)",
        });
        $(this).siblings().children("a").css({
          color: "rgb(180, 175, 170)",
          borderBottom: "none",
        });
        // 判断
        if ($(this).children("a").text() == "全部") {
          // $(".ajax_the_new").fadeIn("slow");
          // $(".ajax_the_new").siblings(".ajax_box").fadeOut("slow");
          $(".ajax_the_hot").children("arry_eight_box").fadeOut("slow");

          request("get", "/useing/public", "", successhot, errorhot);
          function successhot(res) {
            // console.log(res);
            rederHtml(res.slice(0, 16), ajax_the_hot, "playhot");
          }

          // 加载更多
          $("#more_selection").children("img").attr("src", "../img/more.png");
          $("#more_selection")
            .children("span")
            .text("加载更多")
            .css("color", " rgb(255, 83, 51)");
          moreLoading(8, 0, "/useing/public", ajax_the_hot);
        } else if ($(this).children("a").text() == "申请中") {
          // $(".ajax_the_hot").fadeIn("slow");
          // $(".ajax_the_hot").siblings(".ajax_box").fadeOut("slow");
          $(".ajax_the_hot").children("arry_eight_box").fadeOut("slow");
          request("get", "/useing/public", "", successhot, errorhot);
          function successhot(res) {
            rederHtml(res.slice(7, 13), ajax_the_hot, "playhot");
          }
          // 加载更多
          $("#more_selection").children("img").attr("src", "../img/more.png");
          $("#more_selection")
            .children("span")
            .text("加载更多")
            .css("color", " rgb(255, 83, 51)");
          moreLoading(13, 4, "/useing/public", ajax_the_hot);
        } else if ($(this).children("a").text() == "使用中") {
          // $(".ajax_the_hot").fadeIn("slow");
          // $(".ajax_the_hot").siblings(".ajax_box").fadeOut("slow");
          request("get", "/useing/master", "", successhot, errorhot);

          $(".ajax_the_hot").children("arry_eight_box").fadeOut("slow");
          request("get", "/useing/master", "", successhot, errorhot);
          function successhot(res) {
            rederHtml(res.slice(5, 13), ajax_the_hot, "playhot");
          }

          // 加载更多
          $("#more_selection").children("img").attr("src", "../img/more.png");
          $("#more_selection")
            .children("span")
            .text("加载更多")
            .css("color", " rgb(255, 83, 51)");
          moreLoading(12, 6, "/useing/master", ajax_the_hot);
        } else if ($(this).children("a").text() == "已结束") {
          // $(".ajax_the_hot").fadeIn("slow");
          // $(".ajax_the_hot").siblings(".ajax_box").fadeOut("slow");
          request("get", "/useing/master", "", successhot, errorhot);

          $(".ajax_the_hot").children("arry_eight_box").fadeOut("slow");
          request("get", "/useing/master", "", successhot, errorhot);
          function successhot(res) {
            rederHtml(res.slice(0, 3), ajax_the_hot, "playhot");
          }

          // 加载更多
          $("#more_selection").children("img").attr("src", "../img/more.png");
          $("#more_selection")
            .children("span")
            .text("加载更多")
            .css("color", " rgb(255, 83, 51)");
          moreLoading(13, 10, "/useing/master", ajax_the_hot);
        }
      });
  }
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
