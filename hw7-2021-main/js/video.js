var video = document.querySelector('#player1')

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	// display autoplay
	video.autoplay = false;
	video.loop = false;

	
	console.log("Autoplay is set to " + video.autoplay)
	console.log("Autoplay is set to " + video.loop)

});

document.querySelector('#play').addEventListener("click", function(){
	console.log("Play video")
	document.querySelector('#volume').innerHTML = video.volume * 100 + "%"
	video.play()
	

});
document.querySelector('#pause').addEventListener("click", function(){
	console.log("Pause video")
	
	video.pause()
	

});
document.querySelector('#slower').addEventListener("click", function(){
	console.log("Slow Video Down")
	video.playbackRate *= .9;
	
	console.log("Speed is " + video.playbackRate)
	

});
document.querySelector('#faster').addEventListener("click", function(){
	console.log("Speed Video Up")
	video.playbackRate /= .9;
	
	console.log("Speed is " + video.playbackRate)
	

});
document.querySelector('#skip').addEventListener("click", function(){
	console.log("Skip Ahead")
	video.currentTime += 10
	if (video.currentTime >= video.duration){
		video.currentTime = 0	
	}
		

	
	console.log("Video Current Time is " + video.currentTime)
	

});
document.querySelector('#mute').addEventListener("click", function(){
	console.log("Mute Video")
	if(video.muted == true){
		console.log("Unmute")
		video.muted = false
		this.innerHTML = "Mute"
	}
	else{
		console.log("Mute")
		video.muted = true
		this.innerHTML = "Unmute"

	}


	
	
	
	

});
document.querySelector('#slider').addEventListener("click", function(){
	video.volume = this.value / 100
	// console.log("Update Volume")
	document.querySelector("#volume").innerHTML = video.volume * 100 + "%"
	console.log("Current volume is", video.volume*100 + '%')
	
	
	

});
document.querySelector('#vintage').addEventListener("click", function(){
	document.querySelector("video").classList.add("oldSchool") 
	console.log("Video style is Old School")
});
document.querySelector('#orig').addEventListener("click", function(){
	document.querySelector("video").classList.remove("oldSchool") 
	console.log("Video style is Original")
});

// document.querySelector("#play").addEventListener("click", function() {
// 	console.log("Play Video");
// });

