<script lang="ts">
	let data = $props();
	let is_flipped = $state(true);

	import { CloudLightning, Zap } from 'lucide-svelte';
    import {fade} from 'svelte/transition'
</script>

<button
	class="bg-blue-300 p-4 rounded-lg shadow-md m-4 w-64 h-64 transform transition-all duration-700 flex flex-col justify-center items-center {is_flipped
		? ''
		: 'rotate-y-180 rotate-x-180'}"
	onclick={() => (is_flipped = !is_flipped)}
    aria-label={data.name + data.details}
>
	{#if is_flipped}
		<div in:fade={{duration:1000}} out:fade={{duration:100}} class="font-bold text-xl mb-2">{data.name}</div>
        <div in:fade={{duration:1000}} out:fade={{duration:100}} class="text-lg mb-2 flex justify-center items-center space-y-2"><Zap  class="mr-2"/> Flash Card</div>
	{/if}
	{#if !is_flipped}
		<p in:fade={{duration:1000}} out:fade={{duration:100}} class="text-md rotate-180 mb-4">{data.details}</p>
		<div in:fade={{duration:1000}} out:fade={{duration:100}} class="text-lg rotate-180">{data.date}</div>
	{/if}
</button>
