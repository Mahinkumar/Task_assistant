<script lang="ts">
	import { onMount } from 'svelte';

	//Switch to false for the Boot up Sequence
	let showContent = true;

	if (showContent) {
		onMount(() => {
			setTimeout(() => {
				showContent = true;
			}, 1500);
		});
	}
</script>

<button
	disabled
	class="bg-gray-300 w-full h-full flex justify-center items-center rounded-lg"
	aria-label="Heads up Display Switcher"
>
	{#if !showContent}
		<div
			class="animate-pulse text-lg hud font-bold text-gray-700 opacity-100 transition-opacity duration-1000 ease-out"
		>
			Booting Up HUD...
		</div>
	{:else}
		<div
			class="bg-gray-300 w-full h-full flex justify-center items-center rounded-lg text-lg hud opacity-100 transition-opacity duration-1000 ease-in"
		>
			/-- Configure Heads up display --/
		</div>
	{/if}
</button>
