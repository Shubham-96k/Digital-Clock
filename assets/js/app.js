const cl = console.log;

let setzero = num => (num < 10) ? "0" + num : num;

let digiclock = () => {
	const createclock = document.getElementById("createclock");
	let d = new Date();
	let hr = d.getHours();
	let min = d.getMinutes();
	let sec = d.getSeconds();
	let session = "AM";

	//if(hr >= 12){
	//	session = "PM"
	//} tradition of conditional statement

	if (hr > 12) {
		hr = hr - 12
	};// here it is formula for 12 hour format

	//if(hr >= 12){
	//	session = "AM"
	//}else{
	//	session = "PM"
	//} tradition of conditional statement

	//new way to write conditional statement 

	session = (hr >= 12) ? "AM" : "PM"

	let result = `${setzero(hr)} : ${setzero(min)} : ${setzero(sec)} ${session}`;
	createclock.innerHTML = result;

	setTimeout(digiclock, 1000);

}

digiclock();