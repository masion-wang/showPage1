//专门支持index.html页面所有功能
//当页面自动加载完后
window.onload = function () {
  $(window).scroll(function () {
    // window 距离浏览器的距离
    var scrollTop = $(this).scrollTop()
    // 木匾元素距离浏览器的距离
    var target = ($('#logo1').offset().top) / 2
    // var target2 = (($('#logo2').offset().top) / 4) * 3

    console.log("1", scrollTop, target)
    // 当winodw距离窗口距离大于目标高度时候
    if (scrollTop >= target) {
      $("#son11").removeClass().addClass("son1-1 animated bounceInLeft");
      $("#son11Img").removeClass().addClass("son1-1-img animated bounceInLeft");
      $("#son12").removeClass().addClass("son1-2 animated bounceInRight");
      $("#son12Img").removeClass().addClass("son1-2-img animated bounceInRight");
      $("#son13").removeClass().addClass("son1-3 animated bounceInLeft");
      $("#son13Img").removeClass().addClass("son1-3-img animated bounceInLeft");
      $("#son14").removeClass().addClass("son1-4 animated bounceInRight");
      $("#son14Img").removeClass().addClass("son1-4-img animated bounceInRight");
    }
  });
};
(function () {
  // window 距离浏览器的距离
  $(window).scroll(() => {
    var scrollTop = $(this).scrollTop()
    var target2 = (($('#logo2').offset().top) / 4) * 3
    console.log('2', scrollTop, target2)
    if (scrollTop > target2) {
      $("#af1").slide({
        affect: 1,
        time: 3000,
        speed: 400,
        dot_text: false,
      });

      console.log('11', $(".dot"))
      var ool = $(".dot")
      var row = $('.row')
      console.log(row)
      var divline = $('div .line')
      var ws = $('div .ws')
      $.fn.slide = function (options) {
        var defaults = {
          affect: 1, //1：上下滚动; 2:幕布式; 3:左右滚动；4：淡入淡出
          time: 3000, //间隔时间
          speed: 500, //动画快慢
          dot_text: true, //按钮上有无序列号
        };
      
        var opts = $.extend(defaults, options);

        var $this = $(this);
        // var ool = $("<div class='dot'><p></p></div>");
        var $box = $this.find("ul");
        // var ool =  $this.find("div");

        // console.log(ool)
        var $li = $box.find("li");
        var timer = null;
        var num = 0;

        // $this.append(ool);
        $box.find("li").each(function (i) {
          // ool.find("p").append($("<b></b>"));
          if (opts.dot_text) {
            ool.find("b").eq(i).html(i + 1)
          }
        })
        switch (opts.affect) {
          case 1:
            break;
          case 2:
            $box.find("li").css("display", "none");
            break;
          case 3:
            $box.css({
              "width": $li.eq(0).width() * $li.length
            });
            $li.css("float", "left");
            break;
          case 4:
            $box.find("li").css("display", "none");
            break;
        }
        $box.find("li").eq(0).show(0);
        divline.mouseenter(function () {
          num = $(this).index();
          run();
        })
        timer = setInterval(auto, opts.time);

        function auto() {
          num < $box.find("li").length - 1 ? num++ : num = 0;
          run();
        }

        function run() {
          divline.siblings().find("b").removeClass("cur")
          divline.siblings().find("span").removeClass("addFont")
          ws.siblings().removeClass().addClass('ws')
          ws.eq(num).addClass("show animated bounceInRight")
          divline.find("b").eq(num).addClass("cur")
          divline.find("span").eq(num).addClass("addFont")
          switch (opts.affect) {
            case 1:
              $box.stop(true, false).animate({
                "top": -700 * num
              }, opts.speed);
              break;
          }
        }

        row.mouseenter(function () {
          console.log("暂停", timer)
          clearInterval(timer);

        })
        row.mouseleave(function () {
          timer = setInterval(auto, opts.time);

          console.log("开始", timer)
        })
      }

    }

  });
})()