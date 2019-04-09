(function($) {

    // Open-close category (mobile)

    function mediaSize() {
        /* Set the matchMedia */
        if (window.matchMedia('(min-width: 804px)').matches) {
            $('.products_section .category ul').css({'height': 'auto'});
        } else {
            $('.products_section .category ul').css({'height':'0', 'overflow': 'hidden'});
        }
        var check_category = 0;
        $('.category').click(function() {

            if(check_category==0){
                $('.products_section .category ul').css({'height':'200px', 'visibility': 'visible','transition': '1s'});
                check_category++;
            }
            else{
                $('.products_section .category ul').css({'height':'0', 'overflow': 'hidden'});
                check_category=0;
            }

        })
    };

    mediaSize();
    window.addEventListener('resize', mediaSize, false);

    // Open-close search field

    var open_search_field = 0;
    $('.search_field i.fa-search').click(function() {
        if(open_search_field == 0){
            $('.search_field input').css({'width':'200px', 'visibility': 'visible','transition': '0.8s', 'padding-left': '10px'});
            open_search_field++;
        }
        else {
            $('.search_field input').css({'width':'0', 'visibility': 'hidden','transition': '0.8s', 'padding': '0'});
            open_search_field=0;
        }

    });

    // Open-close search field (mobile)

    function mediaSize1() {

        if (window.matchMedia('(max-width: 990px)').matches) {
            var open_search_mobile = 0;
            $('.search_field i.fa-search').click(function() {
                if(open_search_mobile == 0){
                    $('.search_field input').css({'width':'170px', 'visibility': 'visible','transition': '0.8s', 'padding-left': '10px'});
                    $('.search_field i.fa-search').css({'margin-bottom': '33px','transition': '0.2s'})
                    open_search_mobile++;
                }
                else {
                    $('.search_field input').css({'width':'0', 'visibility': 'hidden','transition': '0.3s', 'padding': '0'});
                    $('.search_field button').css({'margin-bottom': '0','transition': '1.8s'})
                    open_search_mobile=0;
                }
            })
        }
        if (window.matchMedia('(max-width: 450px)').matches) {
            var open_search_mobile2 = 0;
            $('.search_field i.fa-search').click(function() {
                if(open_search_mobile2 == 0){
                    $('.search_field input').css({'width':'127px', 'visibility': 'visible','transition': '0.8s', 'padding-left': '10px'});
                    $('.search_field i.fa-search').css({'margin-bottom': '33px','transition': '0.2s'})
                    open_search_mobile2++;
                }
                else {
                    $('.search_field input').css({'width':'0', 'visibility': 'hidden','transition': '0.3s', 'padding': '0'});
                    $('.search_field i.fa-search').css({'margin-bottom': '0','transition': '1.8s'})
                    open_search_mobile2=0;
                }
            })
        }
    };

    mediaSize1();
    window.addEventListener('resize', mediaSize1, false);


})(jQuery);