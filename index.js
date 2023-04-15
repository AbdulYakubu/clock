function showTime() {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    let time = hours + ':' + minutes + ':' + seconds + ' ' + ampm;
    document.getElementById('clock').innerText = time;
    setTimeout(showTime, 1000);
  }
  
  showTime();

  //function showTime(){
    //let date = new Date();
    //let hours = date.getHours();
    //let minutes = date.getMinutes()
    //let seconds = date.getSeconds()
    //am_pm = "AM";

    //if (hours > 12){
        //hours -= 12
       // am_pm = "PM"
    //}

    //if (hours == 0){
        //hours = 12
        //am_pm = "AM"
    //}
    //hours = hours < 10 ? "0" + hours : hours;
    //minutes = minutes < 10 ? "0" + minutes : minutes;
    //seconds = seconds < 10 ? "0" + seconds : seconds;

    //let currentTime = hours + ":" 
            //+ minutes + ":" + seconds + am_pm;
  
    //document.getElementById("clock").innerHTML = currentTime;
  //}
  

//showTime();