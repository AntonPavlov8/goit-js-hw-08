const e=document.querySelector("iframe"),t=new Vimeo.Player(e);t.setCurrentTime(localStorage.getItem("time")),t.on("timeupdate",_.throttle((function(e){localStorage.setItem("time",e.seconds),console.log(e)}),1e3));
//# sourceMappingURL=02-video.66e9b1c2.js.map
