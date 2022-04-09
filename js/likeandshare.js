window.onload = function () {
  var like = document.getElementsByClassName("like")[0];
  like.addEventListener("click", function () {
    if (like.getAttribute("flat") != 1) {
      like.className = "click_like";
      lover.innerText = lover.innerText - 0 + 1;
      like.setAttribute("flat", 1);
    } else {
      like.className = "like";
      lover.innerText = lover.innerText - 0 - 1;
      like.setAttribute("flat", 0);
    }
  });

  var share = document.getElementsByClassName("share")[0];
  share.addEventListener("click", function () {
    if (share.getAttribute("flat") != 1) {
      share.className = "click_share";
      share.setAttribute("flat", 1);
      $(".row").fadeIn("slow");
      //   if () {
      //     share_num.innerText = share.innerText - 0 + 1;
      //   } else {
      //     share_num.innerText = share.innerText;
      //   }
    } else {
      share.className = "share";
      share.setAttribute("flat", 0);
      $(".row").fadeOut("slow");
    }
  });
  var nums_ico_click = 0;
  function icon_lis() {
    $(".social-share-icon").on("click", function () {
      nums_ico_click += 1;
      console.log(nums_ico_click);
    });
  }
};
