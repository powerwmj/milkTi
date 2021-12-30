$('.wrap').prepend('<header></header>')
.append('<footer></footer>');

$('header').load('inc.html header .hinner', navi);
$('footer').load('inc.html footer .f_w');

function navi(){
    if(localStorage.pageNum){
    $('header li').eq(localStorage.pageNum).find('a').addClass('on');
    }
    if(Number(localStorage.pageNum) >= 0 ){
        $('header').addClass('sub');
    }
    $('header h1 a').on('click', function(e){
        e.preventDefault();
        localStorage.pageNum = null;
        location.href = $(this).attr('href');
        
    })
    $('header li').on('click', function(e){
        localStorage.removeItem('pageNum');
        e.preventDefault();
        
        localStorage.pageNum = $(this).index();
        location.href = $(this).find('a').attr('href');
        
    })
}