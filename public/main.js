var config = {
	timers: [
		{
			msg: "Time until Shagaluf: ",
			date: new Date(2022, 7, 5, 9)
		}
	],
	timerChoice: 0
}

document.querySelector("#msg").textContent = config.timers[config.timerChoice].msg

function paddy(num, padlen, padchar) {
    var pad_char = typeof padchar !== 'undefined' ? padchar : '0';
    var pad = new Array(1 + padlen).join(pad_char);
    return (pad + num).slice(-pad.length);
}

function doDate () {
	let now = new Date()
	let until = config.timers[config.timerChoice].date - now
	let days = Math.floor(until / (1000 * 60 * 60 * 24))
	if (days < 1) {document.querySelector("#date").style.color = "#FF0000"}
	let hours = Math.floor((until % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
	let minutes = Math.floor((until % (1000 * 60 * 60)) / (1000 * 60))
	let seconds = Math.floor((until % (1000 * 60)) / 1000)
	document.querySelector("#date").textContent = `
		${days}d ${paddy(hours, 2)}h ${paddy(minutes, 2)}m ${paddy(seconds, 2)}s
	`
}
doDate()
setInterval(doDate, 1000)
