// Do not change the object
const counter = {
	currentCount : 0,
	tick(){
		this.currentCount++;
		console.log(this.currentCount);
	}
}

// fix the problem in countdown function
function countdown(times) {
	const delay = 1000;
    setTimeout(()=>{
        while(times){
            counter.tick();
            times--;
        }
    },delay);
	
}

countdown(3);