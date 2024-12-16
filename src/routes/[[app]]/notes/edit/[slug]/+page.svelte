<script lang="ts">
	// @ts-nocheck
	import { marked } from 'marked';
	import { onMount } from 'svelte';
	import DOMPurify from 'dompurify';
	import Notestoolbar from '$lib/components/features/Notestoolbar.svelte';
	let markdown = $state('');
	let val = $state('');
	let Button = $state(0);
	$effect(() => (val = DOMPurify.sanitize(marked(markdown))));
</script>

<div class="flex flex-col w-full h-full pl-2 pr-2 ml-3 mr-3">
	<Notestoolbar/>
	<div class="flex justify-stretch h-screen">
		<textarea
			class="p-5 w-[50%] h-full border-2 border-gray-400 focus:border-violet-100"
			bind:value={markdown}
			placeholder="Enter your notes here. Markdown is supported !"
		></textarea>
		<div class="w-[50%] p-5 h-full border-2 border-l-0 border-gray-400 ">
			<div class="prose max-w-fit">{@html val}</div>
		</div>
	</div>
</div>

