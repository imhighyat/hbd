$(document).ready(function(){
    setTimeout(function() {
        $(".cursor-button").show();
    }, 5000);
    
    $(".cursor-rows img").click(function() {
        let icon = $(this).attr("class");
        let path = "url(img/cursors/" + icon + ".png), auto";
        $("html").css("cursor", path);
        $("button").css("cursor", path);
        $("img").css("cursor", path);
        $("a").css("cursor", path);
     });

    
     $(".cursor-button").click(function(){
        $(".cursor").css("display", "none");
        $(".loading-mortys").css("display", "block");
        $('audio')[0].play();
        let count = 1;
        let mortys = ["morty2", "morty3", "morty4", "morty5", "morty6"];
        setInterval(function(){
            if(count < 6){
                let source = "img/mortys/" + mortys[count-1] + ".png";
                $(".morty-progress img").attr("src", source  );
                count++;
            }
            else{
                clearInterval();
                $(".loading-mortys button").css("display", "inline-block");
            }
        }, 1600);
     });


    $(".loading-mortys button").click(function(){
        $(".loading-mortys").css("display", "none");
        setTimeout(function() {
            $(".confetti button").show();
        }, 10000);
        $(".confetti").css("display", "block");
        $('audio')[1].play();
    });

    $(".confetti button").click(function(){
        $(".confetti").css("display", "none");
        setTimeout(function() {
            $(".infinite-timelines button").show();
        }, 10000);
        $(".intro").css("display", "none");
        $(".comics").css("display", "block");
        $('audio')[2].play();
    });

    $(".infinite-timelines button").click(function(){
        $(".infinite-timelines").css("display", "none");
        setTimeout(function() {
            $(".messages-collected button").show();
        }, 16000);
        $(".messages-collected").css("display", "block");
        $('audio')[3].play();
    });

    $(".messages-collected button").click(function(){
        $(".messages-collected").css("display", "none");
        setTimeout(function() {
            $(".megaseeds button").show();
        }, 4000);
        $(".megaseeds").css("display", "block");
        $('audio')[4].play();
    });

    $(".megaseeds button").click(function(){
        $(".megaseeds").css("display", "none");
        setTimeout(function() {
            $(".waba button").show();
        }, 7000);
        $(".waba").css("display", "block");
        $('audio')[5].play();
    });

    $(".waba button").click(function(){
        $(".waba").css("display", "none");
        $(".youtube iframe").attr("src", "https://www.youtube.com/embed/yPhvoEWfgIk?autoplay=1");
        setTimeout(function() {
            $(".youtube button").show();
        }, 10000);
        $(".youtube").css("display", "block");
    });

    // SHOW MAIN DASH - MESSAGES SHOW ON DEFAULT
    $(".youtube button").click(function(){
        $(".youtube iframe").attr("src", "https://www.youtube.com/embed/yPhvoEWfgIk");
        $(".youtube").css("display", "none");
        $("main").css("display", "block");
    });


    // MESSAGE CARDS FLIP TRIGGER
    $(".pocket-mortys").flip({
        axis: 'x',
        trigger: 'click'
    });

    // MESSAGES NAV LINK CLICK
    $(".nav-messages").click(function(){
        $(".messages-container").css("display", "block");
        $("html, body, .messages-container").animate({ scrollTop: 0 });
        $(".photos").css("display", "none");
        $(".game").css("display", "none");
        $(".movies").css("display", "none");
        $(".experiences").css("display", "none");
        $("nav a").css("color", "inherit");
        $(".nav-messages").css("color", "#de736b");
    });

    // PHOTOS NAV LINK CLICK
    $(".nav-photos").click(function(){
        $(".photos").css("display", "block");
        $("html, body, .photos").animate({ scrollTop: 0 });
        $(".messages-container").css("display", "none");
        $(".game").css("display", "none");
        $(".movies").css("display", "none");
        $(".experiences").css("display", "none");
        $("nav a").css("color", "inherit");
        $(".nav-photos").css("color", "#de736b");
    });

    // MOVIES NAV LINK CLICK
    $(".nav-movies").click(function(){
        $(".movies").css("display", "block");
        $("html, body, .movies").animate({ scrollTop: 0 });
        $(".messages-container").css("display", "none");
        $(".photos").css("display", "none");
        $(".game").css("display", "none");
        $(".experiences").css("display", "none");
        $("nav a").css("color", "inherit");
        $(".nav-movies").css("color", "#de736b");
    });

    

  });