
$(document).ready(function(){

    $(".btn-one").click(function(){
        $('.btn-one').addClass("change-btn");
        $('.btn-two').removeClass("change-btn");
        $('.arabic_promo').removeClass("d-none");
        $('.english_promo').addClass('d-none');
        $('.m_english_promo').addClass('d-none');
        $('.m_arabic_promo').removeClass('d-none');
        $('.m_english_coun').addClass('d-none');
        $('.m_arabic_coun').removeClass('d-none');
        $('.english_link').addClass('d-none');
        $('.arabic_link').removeClass('d-none');
    });

    $(".btn-two").click(function(){
        $('.btn-two').addClass("change-btn");
        $('.btn-one').removeClass("change-btn");
        $('.arabic_promo').addClass("d-none");
        $('.english_promo').removeClass('d-none');
        $('.m_english_promo').removeClass('d-none');
        $('.m_arabic_promo').addClass('d-none');
        $('.m_english_coun').removeClass('d-none');
        $('.m_arabic_coun').addClass('d-none');
    });

  
});
  