$(function() {
    // id属性がchange-colorの要素がクリックされたら文字色を変化
    $('#change-color').on('click', function() {
        $('#target').css('color', 'red');
    });
    // id属性がchange-textの要素がクリックされたら文字内容を変化
    $('#change-text').on('click', function() {
        $('#target').text('Hello!');
    });
    // id属性がfade-outの要素がクリックされたらフェードインで文字を非表示
    $('#fade-out').on('click', function() {
        $('#target').fadeOut();
    });
    // id属性がfade-inの要素がクリックされたらフェードインで文字を表示
    $('#fade-in').on('click', function() {
        $('#target').fadeIn();
    });
})