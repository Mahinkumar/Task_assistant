<!--Dashboard page-->

<script lang="ts">
	import { Check, EllipsisHorizontal, Icon } from 'svelte-hero-icons';
	import autoAnimate from '@formkit/auto-animate';

	// Import all components
	import ChatClock from '$lib/components/dashboard/ChatClock.svelte';
	import NotesMini from '$lib/components/dashboard/notes_mini.svelte';
	import Flipcard from '$lib/components/dashboard/flipcard.svelte';
	import Memorycomp from '$lib/components/dashboard/memorycomp.svelte';

	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();

	// We import all data as states and setup effects to update them on the database
	let notes = $state(data.notes);
	let flipCards = $state(data.flipcards);
	let memcards = $state(data.memcards);
	let todos = $state(data.todos);

	// UI States
	let Overview_mode = $state(false);

	// Date parsing function for all items
	function datemap(date: any){
		const date_item = new Date(date)

		const hours = date_item.getHours().toString().padStart(2, '0');
		const minutes =  date_item.getMinutes().toString().padStart(2, '0');
		const seconds = date_item.getSeconds().toString().padStart(2,'0');
		const month = date_item.getMonth().toString().padStart(2,'0');
		const day = date_item.getDate().toString().padStart(2,'0');
		const year = date_item.getFullYear().toString().padStart(2,'0');
		const fulldate = `${day}-${month}-${year}`;
		
		const hm = `${hours}:${minutes}`;
		return({hours,minutes,seconds,month,day,year,fulldate,hm})
	}

	
</script>

<div class="flex flex-col grow">
	<div class="flex grow max-h-96">
		<div
			class="flex flex-col h-96 p-4 border-r-2 border-b-2 border-neutral-300 lg:w-[28rem] w-full"
		>
			<h1 class="text-2xl mb-4 flex items-center">
				Today's Overview <div
					class="ml-8 ring-2 ring-gray-200 w-36 h-10 items-center justify-evenly flex"
				>
					<button
						class="w-16 h-8 transition-all text-xl {!Overview_mode ? 'bg-white' : 'bg-gray-300'}"
						aria-label="AI overview"
						onclick={() => {
							Overview_mode = !Overview_mode;
						}}>Ai</button
					><button
						class="w-16 h-8 transition-all text-xl {Overview_mode ? 'bg-white' : 'bg-gray-300'}"
						aria-label="Brief"
						onclick={() => {
							Overview_mode = !Overview_mode;
						}}>Brief</button
					>
				</div>
			</h1>
			{#if !Overview_mode && todos.length !== 0}
				<ul use:autoAnimate class="space-y-4 z-0">
					{#each todos as todo}
						<li
							class="text-black rounded-sm bg-gradient-to-br bg-neutral-200 flex lg:w-[26rem] h-20 items-center justify-between ring-gray-400/50 ring-2 p-4"
						>
							<div>
								<p class="lg:text-xl text-sm">{datemap(todo.CreatedDate).hm} - {datemap(todo.EndDate).hm}</p>
								<h2 class="font-semibold lg:text-xl text-sm">{todo.Title}</h2>
							</div>
							<div class="flex justify-end space-x-4">
								<button
									aria-label="Remove Item"
									class="hover:bg-gray-100 rounded-sm w-10 h-10 ring-neutral-400 ring-2 flex justify-center items-center"
									><Icon src={Check} class="size-7 stroke-black" /></button
								>
								<button
									aria-label="Item Settings"
									class="hover:bg-gray-100 rounded-sm w-10 h-10 flex justify-center items-center"
									><Icon src={EllipsisHorizontal} class="size-7 stroke-black" /></button
								>
							</div>
						</li>
					{/each}
				</ul>
			{:else if todos.length === 0 && !Overview_mode}<div
					class="text-lg flex justify-center items-center h-72 border-2 border-green-200 lg:w-[26rem] w-full"
				>
					You have completed all the <br /> tasks for the Day. Good Job!
				</div>
			{:else}
				<div
					class="text-2xl flex text-start justify-center items-center h-72 border-2 border-green-200 p-16 bg-gray-100 lg:w-[26rem] w-full"
				>
					✨ You've got a developer meeting at 11, lunch at the Emporium at 1, and exam prep at 3!
				</div>
			{/if}
		</div>
		<!--First Row with Assist UI-->
		<ChatClock />
	</div>
	<div class="bg-violet-100 flex flex-col grow h-screen p-5">
		<div class="text-2xl">Notes and Memories Board</div>
		<div class="grid lg:grid-cols-5 md:lg:grid-cols-4 justify-start p-2">
			{#each notes as note}
				<NotesMini name={note.Title} details={note.Content} date={datemap(note.SetDate).fulldate} />
			{/each}
			{#each flipCards as flipCard}
				<Flipcard name={flipCard.Title} details={flipCard.Content} date={datemap(flipCard.SetDate).fulldate} />
			{/each}
			{#each memcards as memcard}
				<Memorycomp name={memcard.Title} details={memcard.Content} date={datemap(memcard.SetDate).fulldate} />
			{/each}
		</div>
	</div>
</div>
