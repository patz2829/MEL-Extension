//wait for DOM ready...
window.onload=function(){
    // Every 1000 ms, run try_click()


    var timer = setInterval(try_click, 1000);
    // Stop trying after 10 attempts.
    var max_attempts = 10;

    
    function try_click() {
      max_attempts -= 1;
      if (max_attempts > 0) {  
        
        // Find the button.
       // var enter_meeting = document.querySelector("#btn_start");
        var button_share = document.querySelector("#btnshare");
        var button_whiteboard = document.querySelector("#btnwb");

/*
       // If we found the button, click on it.
        if (enter_meeting) {
            //console.log("Clicking  Enter Meeting");
            enter_meeting.click();

            if (button_share) {
              //console.log("Clicking  Button Share");
              button_share.click();            
            }    
          } 

*/      if (button_share) {
            //console.log("Clicking  Button Share");
            button_share.click();            
                  
            if (button_whiteboard) {

              max_attempts = 0;
              //console.log("Clicking  Button Whiteboard");
              button_whiteboard.click();
              clearInterval(timer);
            }
       }  

        
      } 
    }       
};

