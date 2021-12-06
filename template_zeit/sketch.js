//CLOCK LIBRABRY
//Clock Function by Christian Swinehart 


//var now = clock()

// numerical values for elements of current time
//now.hours // hour in 0–23 'military' time
//now.hour  // hour in 1–12 'am/pm' time
//now.min   // minute
//now.sec   // seconds
//now.ms    // milliseconds
//now.am    // true for hours 0-11
//now.pm    // true for hours 12-23
//
//// numerical values for elements of current date
//now.year    // the full 4-digit year
//now.month   // month number 1–12
//now.moon    // the fullness of the moon 0–1.0
//now.day     // the day 1–{28,29,30,31}
//now.weekday // the day of the week 1-7
//now.season  // the current season 1-4 (starting with spring)

// a string-based representation that can be used as an argument to clockStart
//now.timestamp // "2001/12/31 23:45:56"

// values between 0.0 and 1.0 measuring the current time's %-completion of various cycles
//now.progress.year
//now.progress.season
//now.progress.month
//now.progress.moon
//now.progress.week
//now.progress.day
//now.progress.halfday
//now.progress.hour
//now.progress.min
//now.progress.sec

// string versions of the date & time (in case you want to print it out)
//now.text.time    // "11:45:56 P.M."
//now.text.hour    // "11"
//now.text.hours   // "23"
//now.text.min     // "45"
//now.text.sec     // "56"
//now.text.ampm    // "P.M."
//now.text.date    // "31 Dec 2001"
//now.text.year    // "2001"
//now.text.season  // "Winter"
//now.text.month   // "December"
//now.text.mon     // "Dec"
//now.text.day     // "31"
//now.text.weekday // "Monday"

// canvas

let WIDTH = 800;
let HEIGHT = 600;

function setup() {
  createCanvas(WIDTH, HEIGHT);
}

function draw() {
  var now = clock()
  let strokeWEIGHT = 1;
  background('white');
  stroke(0, 0, 0); // farbe
  strokeWeight(strokeWEIGHT); 

  var h = now.hour // hour in 1–12 am/pm time
  var h1 = now.hours // hour in 0–23 time
  var m = now.min
  var s = now.sec
  
  // grid background
  for(let i = 0; i < 3; i++){
    for(let j = 0; j < 4; j++){

      rect(0 + (j*WIDTH/4), 0 + (i*WIDTH/4), WIDTH/4, WIDTH/4);
    }
  }
  

  push(); // Minutes 0-59
 
  for(let k = 0; k < m ; k++){
    let hl = 0;
    let WPosition = k*WIDTH/20;
    if(k > 19 && k < 40){
      hl = 1;
      WPosition -= WIDTH;
    }
    if(k > 39){
      hl = 2;
      WPosition -= WIDTH*2;
    }
    // blendMode(MULTIPLY);
    // fill(255,50,50) // color red
    stroke('rgba(255, 20, 0, 0)');
    fill('rgba(255, 20, 0, 0.7)'); // color red + transparency 0.5
    rect(WPosition, hl*WIDTH/4, WIDTH/20, WIDTH/7);
  }
 
  pop();


  push(); // Hours 0–23
  
  for(let k = 0; k < h; k++){
    let hl = 0;
    let WPosition = 0 + k*(WIDTH/20 * 5);
    
    if(k > 0 && k < 4){
      hl = 0;
    }
    if(k >= 4 && k < 8){
      hl = 1;
      WPosition -= WIDTH;
    }
    if(k >= 8 && k <= 12){
      hl = 2;
      WPosition -= WIDTH * 2;
    }

    
    if(h1 < 12){
      // blendMode(MULTIPLY);
      // fill(255,210,0) // color yellow
      noStroke();
      fill('rgba(255, 230, 0, 0.7)'); // color yellow + transparency 0.5
    }
    if(h1 >= 12 && h1 < 24){
      // blendMode(MULTIPLY);
      // fill(0,150,225) // color blue
      noStroke();
      fill('rgba(0, 0, 255, 0.7)'); // color blue + transparency 0.5
    }
    stroke(0, 0, 0); // farbe
    //strokeWeight(strokeWEIGHT*2);
    rect(WPosition , hl*WIDTH/4, (WIDTH/20) * 5, WIDTH/4);
  }

  pop();

  push(); // Seconds 0-59
 
  for(let k = 0; k < s ; k++){
    let hl = 0;
    let WPosition = k*WIDTH/20;
    if(k > 19 && k < 40){
      hl = 1;
      WPosition -= WIDTH;
    }
    if(k > 39){
      hl = 2;
      WPosition -= WIDTH*2;
    }
    // blendMode(MULTIPLY);
    // fill(255,50,50) // color red
    stroke('rgba(10, 10, 10, 0)');
    fill('rgba(10, 10, 10, 0.3)'); // color red + transparency 0.5
    rect(WPosition, hl*WIDTH/4, WIDTH/20, WIDTH/20);
  }
 
  pop();

  
}