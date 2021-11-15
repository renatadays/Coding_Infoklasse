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

  var h = now.hours
  var h1 = now.am // true for hours 0-11
  var h2 = now.pm // true for hours 12-23
  var m = now.min
  var s = now.sec
  
  // grid background
  for(let i = 0; i < 3; i++){
    for(let j = 0; j < 4; j++){

      rect(0 + (j * WIDTH/4), 0 + (i * WIDTH/4),WIDTH/4, WIDTH/4);
    }
  }
  


  push(); // Hours 0-11
  
  for(let k = 0; k < h1 ; k++){
    let hl = 0;
    let WPosition = 0 +k * WIDTH/20;
    if(k > 19 && k <= 39){
      hl = 1;
      WPosition -= WIDTH;
    }
    if(k > 39){
      hl = 2;
      WPosition -= WIDTH*2;
    }
    fill('rgba(255, 255, 0, 0.5)'); // color yellow + transparency 0.5
    stroke(0, 0, 0); // farbe
    strokeWeight(strokeWEIGHT*2);
    rect(WPosition , hl * WIDTH/4, WIDTH/20, WIDTH/4);
  }

  pop();


  push(); // Hours 12-23
  
  for(let k = 0; k < h2 ; k++){
    let hl = 0;
    let WPosition = 0 +k * WIDTH/20;
    if(k > 19 && k <= 39){
      hl = 1;
      WPosition -= WIDTH;
    }
    if(k > 39){
      hl = 2;
      WPosition -= WIDTH*2;
    }
    fill('rgba(0, 0, 255, 0.5)'); // color blue + transparency 0.5
    rect(WPosition , hl * WIDTH/4, WIDTH/20, WIDTH/4);
  }

  pop();



  push(); // Minutes
  
  for(let k = 0; k < m ; k++){
    let hl = 0;
    let WPosition = 0 +k * WIDTH/20;
    if(k > 19 && k <= 39){
      hl = 1;
      WPosition -= WIDTH;
    }
    if(k > 39){
      hl = 2;
      WPosition -= WIDTH*2;
    }
    fill('rgba(255, 0, 0, 0.5)'); // color red + transparency 0.5
    rect(WPosition , hl * WIDTH/4, WIDTH/20, WIDTH/4);

    
  }

  pop();



  // fill(255,255,255); //rectangle 1
  // stroke(0, 0, 0);
  // strokeWeight(1):
  // rect(1,1,200,200);

  // fill(255,255,255); //rectangle 2
  // stroke(0, 0, 0);
  // strokeWeight(1);
  // rect(200,1,200,200);

  // fill(255,255,255); //rectangle 3
  // stroke(0, 0, 0);
  // strokeWeight(1);
  // rect(400,1,200,200);

  // fill(255,255,255); //rectangle 4
  // stroke(0, 0, 0);
  // strokeWeight(1);
  // rect(600,1,200,200);

  // fill(255,255,255); //rectangle 5
  // stroke(0, 0, 0);
  // strokeWeight(1);
  // rect(1,200,200,200);

  // fill(255,255,255); //rectangle 6
  // stroke(0, 0, 0);
  // strokeWeight(1);
  // rect(200,200,200,200);

  // fill(255,255,255); //rectangle 7
  // stroke(0, 0, 0);
  // strokeWeight(1);
  // rect(400,200,200,200);

  // fill(255,255,255); //rectangle 8
  // stroke(0, 0, 0);
  // strokeWeight(1);
  // rect(600,200,200,200);

  // fill(255,255,255); //rectangle 9
  // stroke(0, 0, 0);
  // strokeWeight(1);
  // rect(1,400,200,200);

  // fill(255,255,255); //rectangle 10
  // stroke(0, 0, 0);
  // strokeWeight(1);
  // rect(200,400,200,200);

  // fill(255,255,255); //rectangle 11
  // stroke(0, 0, 0);
  // strokeWeight(1);
  // rect(400,400,200,200);

  // fill(255,255,255); //rectangle 12
  // stroke(0, 0, 0);
  // strokeWeight(1);
  // rect(600,400,200,200);

  // console.log(h)


}