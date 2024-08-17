$(window).on('load', () => {
    // HTMLドキュメントの読み込みが完了したら
    console.log('loadイベントが発生しました');
});

$(function(){
    $(window).on('scroll', function() {
        // 画面をスクロールしたら
        console.log('scrollイベントが発生しました');
    });
});