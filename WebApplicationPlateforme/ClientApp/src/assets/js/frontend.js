
    
    // Regiser Page
    $('.tabs .reg-btn').click(function () {
        $('.reg').fadeIn(300).siblings().fadeOut(300);
        $('.reg-btn a').addClass('active');
        $('.terms-btn a').removeClass('active');
    });
    $('.tabs .terms-btn').click(function () {
        $('.terms').fadeIn(300).siblings().fadeOut(300);
        $('.terms-btn a').addClass('active');
        $('.reg-btn a').removeClass('active');
    });

    //Users Page - Table Search

    $(".search").keyup(function () {
        var searchTerm = $(".search").val();
        var listItem = $('.results tbody').children('tr');
        var searchSplit = searchTerm.replace(/ /g, "'):containsi('");

        $.extend($.expr[':'], {
            'containsi': function (elem, i, match, array) {
                return (elem.textContent || elem.innerText || '').toLowerCase().indexOf((match[3] || "").toLowerCase()) >= 0;
            }
        });

        $(".results tbody tr").not(":containsi('" + searchSplit + "')").each(function (e) {
            $(this).attr('visible', 'false');
        });

        $(".results tbody tr:containsi('" + searchSplit + "')").each(function (e) {
            $(this).attr('visible', 'true');
        });

        var jobCount = $('.results tbody tr[visible="true"]').length;
        $('.counter').text(jobCount + ' item');

        if (jobCount == '0') {
            $('.no-result').show();
        } else {
            $('.no-result').hide();
        }
    });
        
;
