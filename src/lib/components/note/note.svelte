<script lang="ts">
	// @ts-nocheck
	import { goto } from '$app/navigation';
	import { ChevronRight, Ellipsis, GalleryThumbnails, Pencil, Trash2 } from 'lucide-svelte';
	import { fade } from 'svelte/transition';
	import { marked } from 'marked';
	import DOMPurify from "isomorphic-dompurify";
	let data = $props();

	let show_settings = $state(false);
	let is_selected = $state(false);
	if (!data.sno) {
		data.sno = 0;
	}


	let val = DOMPurify.sanitize(marked(data.details));
</script>

<form
	class="w-72 h-72 bg-slate-200 p-5 relative {is_selected ? 'ring-2 ring-red-700' : ''}"
	method="post"
	ondblclick={() => {
		is_selected = !is_selected;
	}}
>
	<div class="font-bold text-xl mb-2">{data.name}</div>
	<p class="text-sm mb-4 prose prose-sm prose-headings:mb-2 prose-headings:m-0 overflow-y-auto h-36">{@html val}</p>
	<div class="text-xs">{data.date}</div>
	<div class="flex space-x-2 absolute right-4 bottom-8 transtion-all duration-700">
		<button
			class="hover:bg-gray-100 rounded-sm w-10 h-10 ring-neutral-300 ring-2 flex justify-center items-center"
			type="button"
			onclick={() => {
				show_settings = !show_settings;
			}}
			>{#if show_settings}
				<ChevronRight />
			{:else}
				<Ellipsis />
			{/if}</button
		>
		{#if show_settings}
			<button
				in:fade
				class="hover:bg-gray-100 rounded-sm w-10 h-10 ring-neutral-300 ring-2 flex justify-center items-center"
				type="button"
				onclick={() => {
					goto('/notes/view/' + data.sno.toString());
				}}><GalleryThumbnails /></button
			>
			<button
				in:fade
				class="hover:bg-gray-100 rounded-sm w-10 h-10 ring-neutral-300 ring-2 flex justify-center items-center"
				formaction="?/delete"><Trash2 /></button
			>
			<button
				in:fade
				class="hover:bg-gray-100 rounded-sm w-10 h-10 ring-neutral-300 ring-2 flex justify-center items-center"
				type="button"
				onclick={() => {
					goto('/notes/edit/' + data.sno.toString());
				}}><Pencil /></button
			>
		{/if}
	</div>
</form>
