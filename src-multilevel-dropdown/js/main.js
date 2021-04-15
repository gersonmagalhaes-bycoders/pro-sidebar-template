jQuery(function ($) {

    // Dropdown menu
    $(".sidebar-dropdown > a").click(function () {
        $(".sidebar-submenu").slideUp(200);
        if ($(this).parent().hasClass("active")) {
            $(".sidebar-dropdown").removeClass("active");
            $(this).parent().removeClass("active");
        } else {
            $(".sidebar-dropdown").removeClass("active");
            $(this).next(".sidebar-submenu").slideDown(200);
            $(this).parent().addClass("active");
        }

    });
    
    

    //toggle sidebar
    $("#toggle-sidebar").click(function () {
        $(".page-wrapper").toggleClass("toggled");
    });
     
    //Pin sidebar
    $("#pin-sidebar").click(function () {
        if ($(".page-wrapper").hasClass("pinned")) {
            // unpin sidebar when hovered
            $(".page-wrapper").removeClass("pinned");
            $("#sidebar").unbind( "hover");
        } else {
            $(".page-wrapper").addClass("pinned");
            $("#sidebar").hover(
                function () {
                    console.log("mouseenter");
                    $(".page-wrapper").addClass("sidebar-hovered");
                },
                function () {
                    console.log("mouseout");
                    $(".page-wrapper").removeClass("sidebar-hovered");
                }
            )

        }
    });


    //toggle sidebar overlay
    $("#overlay").click(function () {
        $(".page-wrapper").toggleClass("toggled");
    });

    //switch between themes 
    var themes = "default-theme legacy-theme chiller-theme ice-theme cool-theme light-theme";
    $('[data-theme]').click(function () {
        $('[data-theme]').removeClass("selected");
        $(this).addClass("selected");
        $('.page-wrapper').removeClass(themes);
        $('.page-wrapper').addClass($(this).attr('data-theme'));
    });

    // switch between background images
    var bgs = "bg1 bg2 bg3 bg4";
    $('[data-bg]').click(function () {
        $('[data-bg]').removeClass("selected");
        $(this).addClass("selected");
        $('.page-wrapper').removeClass(bgs);
        $('.page-wrapper').addClass($(this).attr('data-bg'));
    });

    // toggle background image
    $("#toggle-bg").change(function (e) {
        e.preventDefault();
        $('.page-wrapper').toggleClass("sidebar-bg");
    });

    // toggle border radius
    $("#toggle-border-radius").change(function (e) {
        e.preventDefault();
        $('.page-wrapper').toggleClass("border-radius-on");
    });

    //custom scroll bar is only used on desktop
    if (!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        $(".sidebar-content").mCustomScrollbar({
            axis: "y",
            autoHideScrollbar: true,
            scrollInertia: 400,
            mouseWheel:{
  				enable:true,
				scrollAmount: 120
			}
        });
        $(".sidebar-content").addClass("desktop");
    }
    
    
    // Gerson 
    // Dropdown menu
    $(".sidebar-dropdown1 > a").click(function () {
        $(".sidebar-submenu2").slideUp(200);
        if ($(this).parent().hasClass("active")) {
            $(".sidebar-dropdown1").removeClass("active");
            $(this).parent().removeClass("active");
        } else {
            $(".sidebar-dropdown1").removeClass("active");
            $(this).next(".sidebar-submenu2").slideDown(200);
            $(this).parent().addClass("active");
        }

    });
    
     $(".sidebar-dropdown2 > a").click(function () {
        $(".sidebar-submenu3").slideUp(200);
        if ($(this).parent().hasClass("active")) {
            $(".sidebar-dropdown2").removeClass("active");
            $(this).parent().removeClass("active");
        } else {
            $(".sidebar-dropdown2").removeClass("active");
            $(this).next(".sidebar-submenu3").slideDown(200);
            $(this).parent().addClass("active");
        }

    });   
    
     $(".sidebar-dropdown3 > a").click(function () {
        $(".sidebar-submenu4").slideUp(200);
        if ($(this).parent().hasClass("active")) {
            $(".sidebar-dropdown3").removeClass("active");
            $(this).parent().removeClass("active");
        } else {
            $(".sidebar-dropdown3").removeClass("active");
            $(this).next(".sidebar-submenu4").slideDown(200);
            $(this).parent().addClass("active");
        }

    });  
    
     $(".sidebar-dropdown4 > a").click(function () {
        $(".sidebar-submenu5").slideUp(200);
        if ($(this).parent().hasClass("active")) {
            $(".sidebar-dropdown4").removeClass("active");
            $(this).parent().removeClass("active");
        } else {
            $(".sidebar-dropdown4").removeClass("active");
            $(this).next(".sidebar-submenu5").slideDown(200);
            $(this).parent().addClass("active");
        }

    }); 
    
     $(".sidebar-dropdown5 > a").click(function () {
        $(".sidebar-submenu6").slideUp(200);
        if ($(this).parent().hasClass("active")) {
            $(".sidebar-dropdown5").removeClass("active");
            $(this).parent().removeClass("active");
        } else {
            $(".sidebar-dropdown5").removeClass("active");
            $(this).next(".sidebar-submenu6").slideDown(200);
            $(this).parent().addClass("active");
        }

    });    
    
    
     $(".sidebar-dropdown6 > a").click(function () {
        $(".sidebar-submenu7").slideUp(200);
        if ($(this).parent().hasClass("active")) {
            $(".sidebar-dropdown6").removeClass("active");
            $(this).parent().removeClass("active");
        } else {
            $(".sidebar-dropdown6").removeClass("active");
            $(this).next(".sidebar-submenu7").slideDown(200);
            $(this).parent().addClass("active");
        }

    });    
    
     $(".sidebar-dropdown7 > a").click(function () {
        $(".sidebar-submenu8").slideUp(200);
        if ($(this).parent().hasClass("active")) {
            $(".sidebar-dropdown7").removeClass("active");
            $(this).parent().removeClass("active");
        } else {
            $(".sidebar-dropdown7").removeClass("active");
            $(this).next(".sidebar-submenu8").slideDown(200);
            $(this).parent().addClass("active");
        }

    }); 
    
     $(".sidebar-dropdown8 > a").click(function () {
        $(".sidebar-submenu9").slideUp(200);
        if ($(this).parent().hasClass("active")) {
            $(".sidebar-dropdown9").removeClass("active");
            $(this).parent().removeClass("active");
        } else {
            $(".sidebar-dropdown9").removeClass("active");
            $(this).next(".sidebar-submenu9").slideDown(200);
            $(this).parent().addClass("active");
        }

    }); 
      
});