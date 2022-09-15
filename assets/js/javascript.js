$(document).ready(function(){


//height equal width
$('.height-equal-width').each(function(){
    $(this).css('height',$(this).css('width'));
})

$('[height-percentage-width]').each(function(){

    let w = numberOnly($(this).css('width'))*1;
    console.log(w);
    let percent = numberOnly($(this).attr('height-percentage-width'));
    
    if(percent.trim() != '' && percent != 0 && percent >0){
        let newWidth = ((percent / 100) * w);
        
        $(this).css('height',newWidth + 'px');
    }
    

});












});