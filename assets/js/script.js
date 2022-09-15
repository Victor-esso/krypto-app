$(document).ready(function(){


    // Call Options
    $('#call-options').click(function(){
       $('#options-page').animate({top:"0"},200)
    })

    // Close options
    $('#options-page').click(function(e){
        if($(this).attr("id") == e.target.id ){
            $(this).animate({top:"100%"},200)
        }
    })

    // Toggle Active
    $('.toggle-active').each(function(){
        $(this).click(function(){
            $(this).toggleClass('active');
        })
    })

    // Call Send
    $('#call-send').click(function(){
        $('#send-page').animate({left:"0"},200)
    })
    // Close Send
    $('.close-send').each(function(){
        $(this).click(function(e){
            $('#send-page').animate({left:"-100%"},200)
        })
    })
    

    
    
    
    
    
    
    
    
    
    });