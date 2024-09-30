$(document).ready(function(){
    $('.more_info').click(function(){
        if($('.info_wrap').hasClass('on') == true){
            $('.info_wrap').removeClass('on');
            $('.info_wrap').slideUp();
            $('.pop_wrap').css('height', '139vh')
        } else{
            $('.info_wrap').addClass('on');
            $('.info_wrap').slideDown();
            $('.pop_wrap').css('height', '164vh')
        }
        // $('.info_wrap').slideToggle();
        // $('.pop_wrap').css('height', '164vh')
    })

    //전화번호 포커스 자동이동
    $('#phone1').keyup(function(){
        if($(this).val().length == 3){
            $('#phone2').focus();
        }
    })
    $('#phone2').keyup(function(){
        if($(this).val().length == 4){
            $('#phone3').focus();
        }
    })

    // 모두 동의합니다
    $('#all_agree').change(function(){
        $('.agree_ck').prop('checked', $(this).prop('checked'))
    })

    $('.agree_ck').change(function(){
        if($('.agree_ck:checked').length == 3){
            $('#all_agree').prop('checked', true)
        } else{
            $('#all_agree').prop('checked', false)
        }
    })

})

// submit function
function submit() {
    if(!$('#name').val().trim()) {
        alert('이름을 입력해 주세요.');
        $('#name').focus();
        return false;
    }

    if(!$('#phone1').val().trim()) {
        alert('전화번호를 입력해 주세요.');
        $('#phone1').focus();
        return false;
    }

    if(!$('#phone2').val().trim()) {
        alert('전화번호를 입력해 주세요.');
        $('#phone2').focus();
        return false;
    }

    if(!$('#phone3').val().trim()) {
        alert('전화번호를 입력해 주세요.');
        $('#phone3').focus();
        return false;
    }

    if($('#agree1').prop('checked') == false) {
        alert('개인정보 활용에 동의해주세요.');
        $('#agree2').focus();
        return false;
    }

    if($('#agree2').prop('checked') == false) {
        alert('예약 문자 발송에 동의해주세요.');
        $('#agree2').focus();
        return false;
    }

    confirm("신청하시겠습니까?")
    alert("신청이 완료되었습니다.")
}