$(document).ready(function(){
    $('ul.dias li a:first').addClass('active');
    $('main article').hide();
    $('main article:first').show();

    $('ul.dias li a').click(function(){
        $('ul.dias li a').removeClass('active');
        $(this).addClass('active');
        $('main article').hide();

        var activeTab = $(this).attr('href');
        $(activeTab).show();
        return false;
    });
});