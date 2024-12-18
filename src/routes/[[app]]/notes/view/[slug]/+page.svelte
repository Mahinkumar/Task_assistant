<script lang="ts">
	// @ts-nocheck
	import { marked } from 'marked';
	import { onMount } from 'svelte';
	import DOMPurify from "isomorphic-dompurify";
	import Notestoolbar from '$lib/components/features/Notestoolbar.svelte';
	import { enhance } from '$app/forms';

	
	$effect(() => (val = DOMPurify.sanitize(marked(markdown))));
	let { data, form }: { data: PageData, form: ActionData } = $props();

	let markdown = $state(data.content);
	let val = $state("");
	let Button = $state(0);

	import {
		Bell,
		Bold,
		BookDownIcon,
		Calendar,
		Code,
		Heading1,
		Heading2,
		Heading3,
		Italic,
		LucideFullscreen,
		NotebookPenIcon,
		PencilIcon,
		SaveIcon,
		SquareCheckBigIcon,
		Strikethrough,
		Table
	} from 'lucide-svelte';
	import { getElementById } from '@melt-ui/svelte/internal/helpers';
	import { goto } from '$app/navigation';

	const checkbox = () => {markdown += '- [ ] '};
	const bold = () => {markdown += '**Bold Text** '}

	const h1 = () => { markdown += '# ' };
	const h2 = () => { markdown += '## ' };
	const h3 = () => { markdown += '### ' };

	const italics = () => { markdown += '*Italic Text*' };

	const strikethrough = () => { 
		return async ({ result }) => {
			markdown += '~~Strikethrough Text~~' }
	};

	const code = () => { markdown += '`Code`' };

	let old: string;

	const table = () => {
	markdown += '| Column 1 | Column 2 |\n';
	markdown += '|-----------|-----------|\n';
	};

	
</script>

<div class="flex flex-col w-full h-full pl-2 pr-2 ml-3 mr-3 bg-white">
	<div
		class="flex justify-evenly min-w-max items-center gap-4 rounded-lg m-2 ml-0 mr-3 py-3 text-neutral-700 shadow-sm"
	>
		<div class="flex w-1/3">
			<input
				class="nowrap flex-shrink-0 form-textarea w-full border-gray-400 pl-5 active:bored-gray-400 font-bold text-xl"
				type="text"
				placeholder="Note_Name"
				name="note_name"
				value={data.title}
				required
			/>
			<input
				type="hidden"
				value={data.user.id}
                name="user_id"
			/>
			<input
				type="hidden"
				value={data.sno}
                name="sno"
			/>
		</div>
		<div class="flex w-2/3 justify-evenly items-center space-x-4">
			<button class="ml-auto rounded-md bg-white py-1 font-medium text-lg" onclick={()=>{goto("/notes/edit/"+data.sno)}} formaction="?/edit"><PencilIcon /></button>
			<button class="ml-auto rounded-md bg-white py-1 font-medium text-lg" type="button"><BookDownIcon /></button>
        </div>
	</div>

	<div class="flex justify-stretch h-screen">
		<div class="w-[100%] p-5 h-full border-2 border-gray-400">
			<div class="prose max-w-fit prose-headings:mb-2 prose-headings:m-0">{@html val}</div>
		</div>
	</div>
</div>

<style lang="postcss">
</style>
