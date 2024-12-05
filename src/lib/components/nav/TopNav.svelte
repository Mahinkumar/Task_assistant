<script lang="ts">
	import { Cog6Tooth, Icon, CalendarDays, Map, User, Bell, BellSlash } from 'svelte-hero-icons';
	import { addToast } from '$lib/components/features/Toast.svelte';
	import Datecomp from '../dashboard/Datecomp.svelte';
	import { goto } from '$app/navigation';
	import HeadsUpDisplay from '../features/HeadsUpDisplay.svelte';
	import { Cloud, CloudAlert, CloudOff, CloudUpload, RefreshCw, RefreshCwOff } from 'lucide-svelte';
	import { createTooltip, melt } from '@melt-ui/svelte';
	import { fade } from 'svelte/transition';

	let prop = $props();
	let mute = $state(false);

	function create() {
		addToast({
			data: {
				title: 'Notification Helper',
				description: mute
					? 'Muted Notifications Indefinitely. You will not recieve any alerts.'
					: 'Unmuted All Notifications. You will Recieve alerts for all notifications now.',
				color: 'green'
			}
		});
	}

	const {
		elements: { trigger, content, arrow },
		states: { open }
	} = createTooltip({
		positioning: {
			placement: 'top'
		},
		openDelay: 0,
		closeDelay: 0,
		closeOnPointerDown: false,
		forceVisible: true
	});
</script>

<div class="bg-white fixed w-screen h-16 flex border-b-2 border-neutral-200 z-20">
	<div
		class="lg:w-[12%] w-[70%] flex justify-start pl-5 items-center text-2xl font-semibold text-black"
	>
		Task Assistant
	</div>
	<div class="lg:w-[18%] lg:flex hidden justify-between items-center text-xl text-black">
		<Datecomp />
		<button use:melt={$trigger}>
			{#if !prop.sync}
				<CloudOff class="mr-4 ml-4" />
			{/if}
			{#if prop.sync}
				<CloudUpload class="mr-4 ml-4" />
			{/if}
		</button>
		{#if $open}
			<div
				use:melt={$content}
				transition:fade={{ duration: 100 }}
				class=" z-30 rounded-lg bg-white shadow"
			>
				<div use:melt={$arrow}></div>
				{#if !prop.sync}
					<p class="px-4 py-1 border-2 border-gray-200">Not Syncing, Login to sync</p>
				{/if}
				{#if prop.sync}
					<p class="px-4 py-1 border-2 border-gray-200">Syncing to cloud</p>
				{/if}
			</div>
		{/if}
	</div>
	<div class="lg:w-[40%] p-3 lg:flex hidden justify-center items-center">
		<HeadsUpDisplay />
	</div>
	<div class="lg:w-[30%] w-[70%] flex justify-evenly items-center">
		<button
			class="hover:bg-gray-100 rounded-sm w-10 h-10 ring-neutral-300 ring-2 flex justify-center items-center"
			onclick={() => goto('/settings')}
			aria-label="Settings"><Icon src={Cog6Tooth} class="size-7 stroke-black" /></button
		>
		<button
			class="hover:bg-gray-100 rounded-sm w-10 h-10 ring-neutral-300 ring-2 flex justify-center items-center"
			onclick={() => goto('/calendar')}
			aria-label="Calendar"><Icon src={CalendarDays} class="size-7 stroke-black" /></button
		>
		<button
			onclick={() => {
				mute = !mute;
				create();
			}}
			aria-label="Mute / Unmute"
			class="hover:bg-gray-100 rounded-sm w-10 h-10 ring-neutral-300 ring-2 lg:flex hidden justify-center items-center"
			>{#if !mute}
				<Icon src={Bell} class="size-7 stroke-black" />
			{:else}
				<Icon src={BellSlash} class="size-7 stroke-black" />{/if}</button
		>
		<button
			class="hover:bg-gray-100 rounded-sm w-36 h-10 ring-neutral-300 ring-2 lg:flex hidden justify-evenly items-center"
			onclick={() => goto('/timeline')}
			aria-label="Timeline"
		>
			<h2 class="text-xl text-black">Timeline</h2>
			<Icon src={Map} class="size-7 stroke-black" />
		</button>
		<button
			aria-label="User Menu"
			class="hover:bg-gray-100 rounded-sm w-10 h-10 ring-neutral-300 ring-2 flex justify-center items-center"
			onclick={() => goto('/user')}><Icon src={User} class="size-7 stroke-black" /></button
		>
	</div>
</div>
