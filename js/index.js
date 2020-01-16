$(function () {
    $('#ham').click(function () {
        if ($('#ham').hasClass('open')) {
            $('#ham').removeClass('open')
            $('#active-wrap').fadeOut()
            $('#ham__first').css('transform', 'rotate(0)').css('top', '0px')
            $('#ham__second').css('display', 'block')
            $('#ham__third').css('transform', 'rotate(0)')
        } else {
            $('#ham').addClass('open')
            $('#active-wrap').fadeIn()
            $('#ham').css('z-index', '20')
            $('#ham__first').css('transform', 'rotate(45deg)').css('top', '10px')
            $('#ham__second').css('display', 'none')
            $('#ham__third').css('transform', 'rotate(-45deg)')
        }
    })
})