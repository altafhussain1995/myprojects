 $(document).ready(function() {
               
              $('.h1alt').waypoint(function(direction){
                  if(direction=='down'){
                      $('.locationimg1').addClass('animated jackInTheBox');
                      
                      $('.locationaddress').addClass('animated flipInY');
                  }
                  
              }, {
        offset: '70%'
    });
            $('.orderform').waypoint(function(direction){
                  if(direction=='down'){
                      $('.orderform').addClass('animated bounceIn');
                      
                    
                  }
                  
              }, {
        offset: '70%'
    });
       $('.feedbackform').waypoint(function(direction){
                  if(direction=='down'){
                      $('.feedbackform').addClass('animated lightSpeedIn');
                      
                    
                  }
                  
              }, {
        offset: '70%'
    });
             
     $('.menuorder').click(function(){
         $('html , body ').animate( { scrollTop: $('.orderscroll').offset().top } ,1000);
     });
     
      $('.menulocation').click(function(){
         $('html , body ').animate( { scrollTop: $('.locationscroll').offset().top } ,1000);
     });
          
     $('.menufeedback').click(function(){
         $('html , body ').animate( { scrollTop: $('.feedback').offset().top } ,1000);
     });
         
     $('.menuhome').click(function(){
         $('html , body ').animate( { scrollTop: 0 } ,1000);
     });
         
 });