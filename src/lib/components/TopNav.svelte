<script lang="ts">
	import { Cog6Tooth, Icon, CalendarDays, Map, User, Bell, BellSlash } from 'svelte-hero-icons';
	let mute = $state(false);

	import { addToast } from '$lib/components/Toast.svelte';
	import Datecomp from './Datecomp.svelte';
	import { goto } from '$app/navigation';

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
</script>

<div class="bg-white fixed w-screen h-16 flex border-b-2 border-neutral-200 z-20">
	<div
		class="lg:w-[15%] w-[70%] flex justify-start pl-5 items-center text-2xl font-semibold text-black"
	>
		Task Assistant
	</div>
	<div class="lg:w-[15%] lg:flex hidden justify-center items-center text-xl text-black">
		<Datecomp/>
	</div>
	<div class="lg:w-[40%] p-3 lg:flex hidden justify-center items-center">
		<div class="bg-gray-300 w-full h-full flex justify-center items-center rounded-lg text-lg hud">/&nbsp;--Heads up Menu--&nbsp;/</div>
	</div>
	<div class="lg:w-[30%] w-[70%] flex justify-evenly items-center">
		<button
			class="hover:bg-gray-100 rounded-sm w-10 h-10 ring-neutral-300 ring-2 flex justify-center items-center"
			onclick={()=>goto("/settings")}
			aria-label="Settings"
			><Icon src={Cog6Tooth} class="size-7 stroke-black" /></button
		>
		<button
			class="hover:bg-gray-100 rounded-sm w-10 h-10 ring-neutral-300 ring-2 flex justify-center items-center"
			onclick={()=>goto("/calendar")}
			aria-label="Calendar"
			><Icon src={CalendarDays} class="size-7 stroke-black" /></button
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
			onclick={()=>goto("/timeline")}
			aria-label="Timeline"
		>
			<h2 class="text-xl text-black">Timeline</h2>
			<Icon src={Map} class="size-7 stroke-black" />
		</button>
		<button
			aria-label="User Menu"
			class="hover:bg-gray-100 rounded-sm w-10 h-10 ring-neutral-300 ring-2 flex justify-center items-center"
			onclick={()=>goto("/user")}
			><Icon src={User} class="size-7 stroke-black" /></button
		>
	</div>
</div>
