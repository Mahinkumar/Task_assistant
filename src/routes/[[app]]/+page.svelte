<!--Dashboard page-->

<script lang="ts">
	import { Check, EllipsisHorizontal, Icon } from 'svelte-hero-icons';
	import autoAnimate from '@formkit/auto-animate';

	// Import all components
	import ChatClock from '$lib/components/dashboard/ChatClock.svelte';
	import NotesMini from '$lib/components/dashboard/notes_mini.svelte';
	import Flipcard from '$lib/components/dashboard/flipcard.svelte';
	import Memorycomp from '$lib/components/dashboard/memorycomp.svelte';
	import Taskitem from '$lib/components/dashboard/Taskitem.svelte';

	// Shared user data states
	let {data} = $props();
	import { cache_data, shared, sync, try_sync } from './shared.svelte';
	import { sync_state } from './shared.svelte';
	import datemap from '$lib/date';

	let all_data = $state(shared.all_data);
	let notes = $state(shared.notes);
	let flipCards = $state(shared.flipCards);
	let memcards = $state(shared.memcards);
	let todos = $state(shared.todos);
	let Overview_mode = $state(false);

	
	async function add(
		n: {
			Id: string| null;
			UserId: string;
			Type: string;
			SetDate: string;
			EndDate: string | null;
			CreatedDate: string;
			Title: string;
			Content: string | null;
			isCompleted: boolean | null;
		}[], type: string
	) {
		const d: Date = new Date();
		if (data.user){
		shared.count += 1
		n.push({
			Id: shared.count.toString(),
			UserId: data.user.id,
			Type: type,
			SetDate: d.toISOString(),
			EndDate: d.toISOString(),
			CreatedDate: d.toISOString(),
			Title: 'Test',
			Content: 'Test',
			isCompleted: false
		});
		if (type == "notes"){
			shared.notes.push({
			sno: 0,
			Id: shared.count.toString(),
			UserId: data.user.id,
			Type: type,
			SetDate: d.toISOString(),
			EndDate: d.toISOString(),
			CreatedDate: d.toISOString(),
			Title: 'Test',
			Content: 'Test',
			isCompleted: false
		})
		}if (type == "memcards"){
			shared.memcards.push({
			sno: 0,
			Id: shared.count.toString(),
			UserId: data.user.id,
			Type: type,
			SetDate: d.toISOString(),
			EndDate: d.toISOString(),
			CreatedDate: d.toISOString(),
			Title: 'Test',
			Content: 'Test',
			isCompleted: false
		})
		}if (type == "todos"){
			shared.todos.push({
			sno: 0,
			Id: shared.count.toString(),
			UserId: data.user.id,
			Type: type,
			SetDate: d.toISOString(),
			EndDate: d.toISOString(),
			CreatedDate: d.toISOString(),
			Title: 'Test',
			Content: 'Test',
			isCompleted: false
		})
		}if (type == "flipcards"){
			shared.flipCards.push({
			sno: 0,
			Id: shared.count.toString(),
			UserId: data.user.id,
			Type: type,
			SetDate: d.toISOString(),
			EndDate: d.toISOString(),
			CreatedDate: d.toISOString(),
			Title: 'Test',
			Content: 'Test',
			isCompleted: false
		})
		}
		}
		
		console.log("Added")
		sync_state.need_sync = true
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
						<Taskitem
							time_start={datemap(todo.CreatedDate).hm}
							time_end={datemap(todo.EndDate).hm}
							Title={todo.Title}
						/>
					{/each}
					<!-- <button onclick={sync} class="w-64 h-32 bg-green-500">Sync</button> -->
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
				<div class="flex text-black">
					<button onclick={()=> add(all_data,'notes')} class="w-1/4 h-8 bg-green-200">Add Notes</button>
					<button onclick={()=> add(all_data,'flipcards')} class="w-1/4 h-8 bg-violet-200">Add flipcards</button>
					<button onclick={()=> add(all_data,'todos')} class="w-1/4 h-8 bg-red-200">Add Todos</button>
					<button onclick={()=> add(all_data,'memcards')} class="w-1/4 h-8 bg-blue-200">Add Memory</button>
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
				<Flipcard
					name={flipCard.Title}
					details={flipCard.Content}
					date={datemap(flipCard.SetDate).fulldate}
				/>
			{/each}
			{#each memcards as memcard}
				<Memorycomp
					name={memcard.Title}
					details={memcard.Content}
					date={datemap(memcard.SetDate).fulldate}
				/>
			{/each}
		</div>
	</div>
</div>
