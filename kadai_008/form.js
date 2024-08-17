$(function() {
    // class属性がbtnの要素がクリックされたら
    $('.btn').on('click', function() {
        // テキストボックスに「クリックしました！」と表示する
        $('.text-box').val('クリックしました！');
    });
});