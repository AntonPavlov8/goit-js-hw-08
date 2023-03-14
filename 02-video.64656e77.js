!function(){var e=document.querySelector("iframe"),t=new Vimeo.Player(e);t.setCurrentTime(localStorage.getItem("time")),t.on("timeupdate",_.throttle((function(e){localStorage.setItem("time",e.seconds),console.log(e)}),1e3))}();
//# sourceMappingURL=02-video.64656e77.js.map
