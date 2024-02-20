$('ul').on("click", "li", function () {
    $(this).toggleClass('completed');
})

$('ul').on("click", "span", function (event) {

    $(this).parent().fadeOut(500, function () {
        $(this).remove();
    })

    event.stopPropagation();
})

$('input').keypress(function (event) {

    if (event.which === 13) {

        var todo = $(this).val();
        $(this).val("");
        $('ul').append('<li><span><i class="fa-solid fa-trash"></i></span> ' + todo + "</li>");
    }
})