
function convertMs(milliseconds) {
    let seconds = Math.floor(milliseconds / 1000);
    let minutes = Math.floor(seconds / 60);
    let hours = Math.floor(minutes / 60);
  
    seconds = seconds % 60;
    minutes = minutes % 60;
    hours = hours % 24;
  
  //   console.log(`${hours>0?`${hours} hours`:"",minutes>0?`${minutes} minutes`:"",seconds?`${seconds} seconds`:""}`);
      if(hours===1 && minutes===0 && seconds===0){
          const ans = `${hours+" hour"}`
          return(ans);
      }
      if(hours>1){
          const ans = `${hours+" hours " + minutes+" minutes " + seconds+" seconds"}`
          return(ans);
      }
      if(minutes===1 && seconds===0){
          const ans = `${minutes+" minute"}`
          return ans;
      }  
      if(minutes>1 && seconds===0){
          const ans = `${minutes+" minutes"}`
          return ans;
      }  
      if(minutes>1){
          const ans = `${minutes+" minutes " + seconds+" seconds"}`
          return ans;
      }
      if(seconds===1){
          const ans = `${seconds+" second"}`
          return ans;
      }
      if(seconds>0){
          const ans = `${seconds+" seconds"}`
          return ans;
      }
  }
  
  
  module.exports = convertMs;