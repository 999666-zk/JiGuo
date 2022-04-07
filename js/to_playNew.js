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
        $(".ajax_the_new").css("display", "block");
        $(".ajax_the_new").siblings(".ajax_box").css("display", "none");
      } else if ($(this).children("a").text() == "最热") {
        $(".ajax_the_hot").css("display", "block");
        $(".ajax_the_hot").siblings(".ajax_box").css("display", "none");
      } else if ($(this).children("a").text() == "品牌") {
        $(".ajax_the_pinpai").css("display", "block");
        $(".ajax_the_pinpai").siblings(".ajax_box").css("display", "none");
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
