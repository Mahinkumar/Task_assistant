<script lang="ts">
	// @ts-nocheck
	import { marked } from 'marked';
	import { onMount } from 'svelte';
	import DOMPurify from 'dompurify';
	let markdown = $state('');
	let val = $state('');
	let Button = $state(0);
	$effect(() => (val = DOMPurify.sanitize(marked(markdown))));
</script>

<div class="flex flex-col w-full h-full">
	<div class="ml-1 ring-2 ring-gray-200 h-16 w-full items-center justify-evenly flex">
		<button
			class="w-48 h-12 transition-all text-xl {!(Button == 'Workflow')
				? 'bg-white'
				: 'bg-gray-300'}"
			onclick={() => {
				Button = 'Workflow';
			}}>Bold</button
		><button
			class="w-48 h-12 transition-all text-xl {!(Button == 'Statistics')
				? 'bg-white'
				: 'bg-gray-300'}"
			onclick={() => {
				Button = 'Statistics';
			}}>Code</button
		><button
			class="w-48 h-12 transition-all text-xl {!(Button == '3')
				? 'bg-white'
				: 'bg-gray-300'}"
			onclick={() => {
				Button = '3';
			}}>Table</button
		><button
			class="w-48 h-12 transition-all text-xl {!(Button == '4')
				? 'bg-white'
				: 'bg-gray-300'}"
			onclick={() => {
				Button = '4';
			}}>Ice Cream</button
		><button
			class="w-48 h-12 transition-all text-xl {!(Button == '5')
				? 'bg-white'
				: 'bg-gray-300'}"
			onclick={() => {
				Button = '5';
			}}>Not Ice Cream</button
		>
	</div>
	<div class="flex flex-grow m-5 h-screen">
		<textarea
			class="w-1/2 p-5 h-full border-0"
			bind:value={markdown}
			placeholder="Enter markdown here"
		></textarea>
		<div class="prose p-5 h-full">{@html val}</div>
	</div>
</div>

<!-- Convert the markdown to HTML and display it -->

<!-- Make it look (slightly) nicer ;) -->
