export   function getTime(){
    setInterval(displayTime, 1000);
  }

const currentTime = document.querySelector("[data-current-time]");

function displayTime() {

    const now = new Date();
  
 
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
  
    
    const formattedHours = padZero(hours);
    const formattedMinutes = padZero(minutes);
    const formattedSeconds = padZero(seconds);
  

    const timeString = `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
    currentTime.textContent = timeString;
   
  
  }
  
  // Helper function to add leading zeros to single-digit numbers
  function padZero(number) {
    return number < 10 ? `0${number}` : `${number}`;
  }
  

  