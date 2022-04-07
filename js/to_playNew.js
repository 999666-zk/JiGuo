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
      } else if ($(this).children("a").text() == "最热") {
        $(".ajax_the_hot").fadeIn("slow");
        $(".ajax_the_hot").siblings(".ajax_box").fadeOut("slow");
        request("get", "/play/hot", "", successhot, errorhot);
      } else if ($(this).children("a").text() == "品牌") {
        $(".ajax_the_pinpai").fadeIn("slow");
        $(".ajax_the_pinpai").siblings(".ajax_box").fadeOut("slow");
        request("get", "/play/category", "", successpin, errorpin);
      }
      $(this).siblings().children("a").css({
        color: "rgb(180, 175, 170)",
        borderBottom: "none",
      });
    });

  // hover 图片使其动画效果
  $(".playNew_top_box")
    .children("img")
    .hover(function () {
      $(".playNew_top_box")
        .children("img")
        .animate(
          {
            opacity: "0.3",
          },
          "slow"
        )
        .animate(
          {
            opacity: "1",
          },
          "slow"
        );
    });
});
