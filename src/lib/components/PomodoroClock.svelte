<script lang="ts">
	import { onMount } from 'svelte';
	import { Icon, Minus } from 'svelte-hero-icons';
	let minutes = $state(25);
	let seconds = $state(0);
	let deg = $state(90); // Degree for the rotation
	let deg_sec = $state(90);
	let isWorking = $state(true);
	let interval: any;
	let isIdle = $state(false);
	let isStarted = $state(false);
	let remainingTimeInSeconds = $state(60) ;
	function startTimer() {
		if (isStarted) return;
		isStarted = true;
		const totalTimeInSeconds = minutes * 60 + seconds;
		const startTime = totalTimeInSeconds;

		interval = setInterval(() => {
			if (seconds === 0 && minutes === 0) {
				clearInterval(interval);
				isWorking = !isWorking;
				isIdle = !isWorking;
				resetTimer();
				startTimer();
			} else {
				if (seconds === 0) {
					minutes--;
					seconds = 59;
				} else {
					seconds--;
				}
			}
			if (deg == 360) deg = 0;
			if (deg_sec==360) deg_sec = 0; 

			console.log("Deg: ", deg ," | Deg_Sec: ",deg_sec)
			// Calculate the remaining time in seconds and update the rotation angle
			remainingTimeInSeconds = minutes * 60 + seconds;
			deg_sec = (90+(seconds / 60) * 360) % 360;
			deg = (90+(remainingTimeInSeconds / startTime) * 360) % 360; // Rotate based on the percentage of time remaining
		}, 1000);
	}

	function pauseTimer() {
		clearInterval(interval);
		isStarted = false;
	}

	function resetTimer() {
		minutes = isWorking ? 25 : 5; // 25 min work, 5 min break
		deg = 90;
		deg_sec = 90;
		seconds = 0;
	}

	onMount(() => {
		resetTimer();
	});
</script>

<div class="flex flex-col justify-center items-center">
	<div
		class={`z-2 flex justify-center items-center w-56 h-56 rounded-full 
    ${isIdle ? 'animate-fadeOut bg-gray-300' : 'animate-tickIn bg-gray-500'} 
    transition-all relative`}
	>	
		<!---->
		<div
			class="absolute w-[70%] h-[70%] bg-white/5 {remainingTimeInSeconds < 60 ? 'animate-ping':''} rounded-full text-start flex justify-start items-center text-white font-black"
		>
		</div>
			
		<div
			class="absolute w-full h-full rounded-full text-start flex justify-start items-center text-white font-black rotate-90"
			style="transform: rotate({deg}deg); transition: transform 2s ease-out;"
		>
			<Icon src={Minus} class="size-8"/>
		</div>
		<div
			class="absolute w-full h-full rounded-full text-start flex justify-start items-center text-green-400 font-black rotate-90"
			style="transform: rotate({deg_sec}deg); transition: transform 0.05s ease-out;"
		>
			<Icon src={Minus} class="size-8"/>
		</div>
		<span class="text-white text-5xl items-center justify-center flex font-bold font-serif">
			{minutes < 10 ? '0' : ''}{minutes}:{seconds < 10 ? '0' : ''}{seconds}
		</span>
	</div>

	<div class="mt-4 flex justify-center space-x-4">
		<button
			onclick={startTimer}
			class="px-4 py-2 bg-gray-200 text-black rounded-lg hover:bg-gray-400 disabled:opacity-50"
			disabled={isStarted}
		>
			Start
		</button>
		<button
			onclick={pauseTimer}
			class="px-4 py-2 bg-gray-200 text-black rounded-lg hover:bg-gray-400 disabled:opacity-50"
			disabled={!isStarted}
		>
			Pause
		</button>
		<button
			onclick={resetTimer}
			class="px-4 py-2 bg-gray-200 text-black rounded-lg hover:bg-gray-400"
		>
			Reset
		</button>
	</div>
</div>

<style>
	@keyframes fadeOut {
		0% {
			opacity: 1;
			transform: scale(1);
		}
		100% {
			opacity: 0.5;
			transform: scale(1.1);
		}
	}

	@keyframes tickIn {
		0% {
			opacity: 0.8;
			transform: scale(0.8);
		}
		100% {
			opacity: 1;
			transform: scale(1);
		}
	}
</style>
