const secHand = document.querySelector(".sec");
const minHand = document.querySelector(".min");
const hourHand = document.querySelector(".hour");

function createDials() {
	const innerFace = document.querySelector(".inner-face");
	for (let i = 0; i < 60; i++) {
		innerFace.innerHTML += `<span class="dial-${i} dial"></span>`;
	}
	const dials = document.querySelectorAll(".dial");

	dials.forEach((dial, index) => {
		dial.style.transform = `rotate(${6 * index}deg)`;
	});
}

function runClock() {
	setInterval(() => {
		const date = new Date();
		const sec = date.getSeconds();
		const min = date.getMinutes();
		const hours = Number(date.getHours() % 12);

		const secHandRotation = 6 * sec - 90;
		const minHandRotation = 6 * min + sec * 0.1 - 90;
		const hourHandRotation = 30 * hours + 0.5 * min + (1 / 12) * sec - 90;
		secHand.style.rotate = `${secHandRotation}deg`;
		minHand.style.rotate = `${minHandRotation}deg`;
		hourHand.style.rotate = `${hourHandRotation}deg`;
	}, 1000);
}

createDials();
runClock();

// live demo at : https://codepen.io/PankajPanday/pen/KKEpWdJ
