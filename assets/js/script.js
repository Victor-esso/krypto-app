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


    // ToggleAmount
    $('#amount-trigger').click(function(){
        //$('#amount-input').val('');
        $('#amount-input').focus();
    })
    function updateAmountToSend (){
        amtVal = $('#amount-input').val().trim() == "" ? 0 : $('#amount-input').val();
        $('#amount-trigger').html('US$'+amtVal);  
    }
    $('#amount-input').keyup(function(e){
        updateAmountToSend();
    });
    $('#amount-input').focus(function(){
        updateAmountToSend();
        $('#amt-options').css({display:'none'}) ;
    });
    $('#amount-input').blur(function(){
        $('#amt-options').css({display:'flex'}) ;
    });


    $("#amount-input").keypress(function(event){
        //console.log(event); 
        keyPressed = String.fromCharCode(event.which);
        if(keyPressed == '.'){
            
            
            setTimeout(()=>{
                amtVal = $('#amount-trigger').text()+'.';
                count = amtVal.match(/\./g);
                console.log(count.length);
                if(count.length == 1){
                    $('#amount-trigger').text($('#amount-trigger').text()+'.');
                }
            },1000);
            
        }
        
    });

    $('#amount-input').keydown(function(e){
        if(e.originalEvent.keyCode == 8){
            iniVal = $('#amount-input').val();
            dotPos = iniVal.indexOf(".");
            if((iniVal.length - dotPos) == 2 && dotPos > 0){
                setTimeout(()=>{
                    $('#amount-trigger').text($('#amount-trigger').text()+'.');
                },80);
            }

        }
    });
    
    
    $('[call]').each(function(){
        $(this).click(function(){
            $('#'+$(this).attr('call')).animate(JSON.parse($(this).attr('call-style')),200)
        })
    })

    $('[close]').each(function(){
        $(this).click(function(e){
            $('#'+$(this).attr('close')).animate(JSON.parse($(this).attr('close-style')),200)
        })
    })
    

    $('.call-process').each(function(){
        $(this).click(function(){
            proPage = $('#process-page');
            proPage.animate({left:"0"},200);
            proEl = proPage.find('[processing]');
            sucEl = proPage.find('[success]');
            console.log(proEl);
            proEl.each(function(){
                $(this).removeClass('d-none');
            })
            setTimeout(function(){
                proEl.each(function(){
                    $(this).addClass('d-none');
                })
                sucEl.each(function(){
                    $(this).removeClass('d-none');
                })
            },4000)
        })
        
    })
    
    $('.close-all-start-over').each(function(){
        $(this).click(function(){
            $('#options-page').css({top:"100%"});
            $('#send-page').css({left:"-100%"});
            $('#amount-page').css({left:"-100%"});
            $('#summary-page').css({bottom:"100%"});
            proPage = $('#process-page');
            proPage.animate({left:"-100%"},200,'swing',function(){
                proEl = proPage.find('[processing]');
                sucEl = proPage.find('[success]');
                proEl.each(function(){
                    $(this).addClass('d-none');
                })
                sucEl.each(function(){
                    $(this).addClass('d-none');
                })
            });
            
            
        })
    })
    
    
    
    });