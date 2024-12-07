<script lang="ts">
	import { ArrowBigRight, ArrowRight } from 'lucide-svelte';
	import { fade, fly, scale, slide } from 'svelte/transition';
	import '../../app.css';
	import { redirect } from '@sveltejs/kit';
	import { goto } from '$app/navigation';
	//let data = $props();
	let data = { cookies: true };
	let page = $state(0);
</script>

{#if data.cookies}
	<div class="w-screen h-screen bg-white flex justify-center items-center">
		{#if page == 0}
			<div
                in:fade
				class="w-[80%] h-[80%] bg-gray-200 rounded-md flex flex-col justify-center pl-16 space-y-4"
			>
				<div class="text-6xl font-bold">Welcome to Task Assistant</div>
				<div class="text-4xl pb-12">Your personal productivity tool</div>
				<button
					onclick={() => (page += 1)}
					class="ml-8 text-xl font-bold w-[40%] group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md bg-neutral-950 px-6 text-neutral-200 transition hover:scale-110"
					><span class="flex justify-center items-center"
						>Let's Get started <ArrowRight class="ml-4" /></span
					>
					<div
						class="absolute inset-0 flex h-full w-full justify-center [transform:skew(-12deg)_translateX(-100%)] group-hover:duration-1000 group-hover:[transform:skew(-12deg)_translateX(100%)]"
					>
						<div class="relative h-full w-8 bg-white/20"></div>
					</div></button
				>
			</div>
		{/if}
		{#if page == 1}
			<div
                in:fade
				class="w-[80%] h-[80%] bg-gray-200 rounded-md flex flex-col justify-center pl-16 space-y-4"
			>
				<div class="text-6xl font-bold">What's Your Name</div>
				<input type="text" class="text-4xl w-[80%] bg-gray-200 border-none h-12 p-8 pl-1" />
				<div class="h-16"></div>
				<button
					onclick={() => (page += 1)}
					class="ml-8 text-xl font-bold w-[40%] group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md bg-neutral-950 px-6 text-neutral-200 transition hover:scale-110"
					><span class="flex justify-center items-center"
						>Next
						<ArrowRight class="ml-4" />
					</span>
					<div
						class="absolute inset-0 flex h-full w-full justify-center [transform:skew(-12deg)_translateX(-100%)] group-hover:duration-1000 group-hover:[transform:skew(-12deg)_translateX(100%)]"
					>
						<div class="relative h-full w-8 bg-white/20"></div>
					</div></button
				>
			</div>
		{/if}
		{#if page == 2}
			<div
                in:fade
				class="w-[80%] h-[80%] bg-gray-200 rounded-md flex flex-col justify-center pl-16 space-y-4"
			>
				<div class="text-6xl font-bold">Question 2</div>
				<input type="text" class="text-4xl w-[80%] bg-gray-200 border-none h-12 p-8 pl-1" />
				<div class="h-16"></div>
				<button
					onclick={() => (page += 1)}
					class="ml-8 text-xl font-bold w-[40%] group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md bg-neutral-950 px-6 text-neutral-200 transition hover:scale-110"
					><span class="flex justify-center items-center"
						>Next
						<ArrowRight class="ml-4" />
					</span>
					<div
						class="absolute inset-0 flex h-full w-full justify-center [transform:skew(-12deg)_translateX(-100%)] group-hover:duration-1000 group-hover:[transform:skew(-12deg)_translateX(100%)]"
					>
						<div class="relative h-full w-8 bg-white/20"></div>
					</div></button
				>
			</div>
		{/if}
		{#if page == 3}
			<div
                in:fade
				class="w-[80%] h-[80%] bg-gray-200 rounded-md flex flex-col justify-center pl-16 space-y-4"
			>
				<div class="text-6xl font-bold">Question 3</div>
				<input type="text" class="text-4xl w-[80%] bg-gray-200 border-none h-12 p-8 pl-1" />
				<div class="h-16"></div>
				<button
					onclick={() => (page += 1)}
					class="ml-8 text-xl font-bold w-[40%] group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md bg-neutral-950 px-6 text-neutral-200 transition hover:scale-110"
					><span class="flex justify-center items-center"
						>Next
						<ArrowRight class="ml-4" />
					</span>
					<div
						class="absolute inset-0 flex h-full w-full justify-center [transform:skew(-12deg)_translateX(-100%)] group-hover:duration-1000 group-hover:[transform:skew(-12deg)_translateX(100%)]"
					>
						<div class="relative h-full w-8 bg-white/20"></div>
					</div></button
				>
			</div>
		{/if}
		{#if page == 4}
			<div
                in:fade
				class="w-[80%] h-[80%] bg-gray-200 rounded-md flex flex-col justify-center pl-16 space-y-4"
			>
				<div class="text-6xl font-bold">Question 4</div>
				<input type="text" class="text-4xl w-[80%] bg-gray-200 border-none h-12 p-8 pl-1" />
				<div class="h-16"></div>
				<button
					onclick={() => goto('/')}
					class="ml-8 text-xl font-bold w-[40%] group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md bg-neutral-950 px-6 text-neutral-200 transition hover:scale-110"
					><span class="flex justify-center items-center"
						>Next
						<ArrowRight class="ml-4" />
					</span>
					<div
						class="absolute inset-0 flex h-full w-full justify-center [transform:skew(-12deg)_translateX(-100%)] group-hover:duration-1000 group-hover:[transform:skew(-12deg)_translateX(100%)]"
					>
						<div class="relative h-full w-8 bg-white/20"></div>
					</div></button
				>
			</div>
		{/if}
	</div>
{/if}
