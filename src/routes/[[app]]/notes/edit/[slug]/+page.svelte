<script lang="ts">
	// @ts-nocheck
	import { marked } from 'marked';
	import { onMount } from 'svelte';
	import DOMPurify from 'dompurify';
	import Notestoolbar from '$lib/components/features/Notestoolbar.svelte';
	import { enhance } from '$app/forms';

	
	$effect(() => (val = DOMPurify.sanitize(marked(markdown))));
	let { data, form }: { data: PageData, form: ActionData } = $props();

	let markdown = $state("");
	let val = $state('');
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
		SaveIcon,
		SquareCheckBigIcon,
		Strikethrough,
		Table
	} from 'lucide-svelte';
	import { getElementById } from '@melt-ui/svelte/internal/helpers';

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

<form class="flex flex-col w-full h-full pl-2 pr-2 ml-3 mr-3 bg-white" method="POST" 
	use:enhance>
	<div
		class="flex justify-evenly min-w-max items-center gap-4 rounded-lg m-2 ml-0 mr-3 py-3 text-neutral-700 shadow-sm"
	>
		<div class="flex w-1/3">
			<input
				class="nowrap flex-shrink-0 form-textarea w-full border-gray-400 pl-5 active:bored-gray-400 font-bold text-xl"
				type="text"
				placeholder="Note_Name"
				name="note_name"
				value={data.name}
				required
			/>
			<input
				type="hidden"
				value={data.user.id}
                name="user_id"
			/>
		</div>
		<div class="flex w-2/3 justify-evenly items-center space-x-4">
			<button class="ml-auto rounded-md bg-white py-1 font-medium text-lg" onclick={()=>{old=markdown}} formaction="?/edit"><SaveIcon /></button>
			<button class="ml-auto rounded-md bg-white py-1 font-medium text-lg" type="button"><BookDownIcon /></button>
			<div class="separator"></div>
			<div class="flex items-center gap-1">
				<button class="item" aria-label="bold" type="button" onclick={bold}>
					<Bold />
				</button>
				<button class="item" aria-label="italic" type="button" onclick={italics}>
					<Italic />
				</button>
				<button class="item" aria-label="strikethrough" type="button" onclick={strikethrough}>
					<Strikethrough />
				</button>
			</div>
			<div class="separator"></div>
			<div class="flex items-center gap-1">
				<button class="item" aria-label="Add H1 Title" type="button" onclick={h1}>
					<Heading1 />
				</button>
				<button class="item" aria-label="Add H2 Title" type="button" onclick={h2}>
					<Heading2 />
				</button>
				<button class="item" aria-label="Add H3 Title" type="button" onclick={h3}>
					<Heading3 />
				</button>
			</div>
			<div class="separator"></div>
			<div class="flex items-center gap-1">
				<button class="item" aria-label="Add Table" type="button" onclick={table}>
					<Table />
				</button>
				<button class="item" aria-label="Add Code" type="button" onclick={code}>
					<Code />
				</button>
				<button class="item" aria-label="Add CheckBox" type="button" onclick={checkbox}>
					<SquareCheckBigIcon />
				</button>
			</div>
			<div class="separator"></div>
			<a href="/#" class="link nowrap flex-shrink-0"> Edited 2 hours ago </a>
			<input type="date" name="date_of_note" class="form-input ml-auto rounded-md bg-white px-3 font-medium text-lg w-42"/>
			<div class="separator"></div>
			<div class="flex items-center gap-2">
				<button class="item" aria-label="align center" type="button">
					<NotebookPenIcon />
				</button>
				<button class="item" type="button" aria-label="align-right" onclick={()=>{getElementById('form')?.requestFullscreen()}}>
					<LucideFullscreen />
				</button>
			</div>
		</div>
	</div>

	<div class="flex justify-stretch h-screen">
		<textarea
			class="p-5 w-[50%] h-full border-2 border-gray-400 focus:border-violet-100"
			bind:value={markdown}
			name="content"
			placeholder="Enter your notes here. Markdown is supported !"
		></textarea>
		<div class="w-[50%] p-5 h-full border-2 border-l-0 border-gray-400">
			<div class="prose max-w-fit">{@html val}</div>
		</div>
	</div>
</form>

<style lang="postcss">
	.item {
		padding: theme('spacing.1');
		border-radius: theme('borderRadius.md');

		&:focus {
			@apply ring-2;
		}
	}

	.separator {
		width: 1px;
		background-color: theme('colors.neutral.300');
		align-self: stretch;
	}
</style>
