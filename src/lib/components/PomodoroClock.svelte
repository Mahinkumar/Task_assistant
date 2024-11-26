<script lang="ts">
	import { onMount } from 'svelte';
	let minutes = $state(25);
	let seconds = $state(0);
	let isWorking = $state(true);
	let interval: any;
	let isIdle = $state(false);
	let isStarted = $state(false);

	function startTimer() {
		if (isStarted) return;
		isStarted = true;
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
		}, 1000);
	}

	function pauseTimer() {
		clearInterval(interval);
		isStarted = false;
	}

	function resetTimer() {
		minutes = isWorking ? 25 : 5; // 25 min work, 5 min break
		seconds = 0;
	}

	onMount(() => {
		resetTimer();
	});
</script>

<div class="flex flex-col justify-center items-center">
	<div
		class={`flex justify-center items-center w-56 h-56 rounded-full 
    ${isIdle ? 'animate-fadeOut bg-gray-300' : 'animate-tickIn bg-gray-500'} 
    transition-all`}
	>
		<span class="text-white text-4xl font-bold">
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
			class="px-4 py-2 bg-gray-200 text-blackrounded-lg hover:bg-gray-400 disabled:opacity-50"
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
