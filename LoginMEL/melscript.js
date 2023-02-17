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
        var enter_meeting = document.querySelector("#btn_start");
        var button_share = document.querySelector("#btnshare");
        var button_whiteboard = document.querySelector("#btnwb");
        
        // If we found the button, click on it.
        if (enter_meeting) {
         document.querySelector('dd').style.display = 'none';
        
          if (button_share) {
            button_share.click();            
          }  
        } 
        
        if (button_whiteboard) {
          max_attempts = 0;
          button_whiteboard.click();
          clearInterval(timer);
        }
        console.log("loading!!!");         
      } 
    }  
          
};

