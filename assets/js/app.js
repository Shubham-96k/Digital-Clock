const cl = console.log;

let setzero = num => (num < 10) ? "0" + num : num;

function createclockk(){
const createclock = document.getElementById("createclock");
    let date = new Date();
    let hr = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    let session = "AM";

    session = hr < 12 ? "AM" : "PM"

    // let num = "0";
    // sec = sec < 10 ? num + sec : sec;
    // min = min < 10 ? num + min : min;
    // hr = hr < 10 ? num + hr : hr;
   
    hr = hr >= 12 ? hr - 12 : hr;

    if(hr == 0){
        hr = 12;
    }

    let result = `${setzero(hr)} : ${setzero(min)} : ${setzero(sec)} ${session}`;
	createclock.innerHTML = result;
    setTimeout(createclockk,1000);
}
createclockk()

// let digiclock = () => {
// 	const createclock = document.getElementById("createclock");
// 	let d = new Date();
// 	let hr = d.getHours();
// 	let min = d.getMinutes();
// 	let sec = d.getSeconds();
// 	let session = "AM";

// 	//if(hr >= 12){
// 	//	session = "PM"
// 	//} tradition of conditional statement

// 	if (hr > 12) {
// 		hr = hr - 12
// 	};// here it is formula for 12 hour format

// 	//if(hr >= 12){
// 	//	session = "AM"
// 	//}else{
// 	//	session = "PM"
// 	//} tradition of conditional statement

// 	//new way to write conditional statement 

// 	session = (hr >= 12) ? "AM" : "PM"

// 	let result = `${setzero(hr)} : ${setzero(min)} : ${setzero(sec)} ${session}`;
// 	createclock.innerHTML = result;

// 	setTimeout(digiclock, 1000);

// }


