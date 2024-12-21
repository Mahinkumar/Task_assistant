<!--Dashboard page-->

<script lang="ts">
	import autoAnimate from '@formkit/auto-animate';
	import { get_type_data, shared } from './shared.svelte';
	import datemap from '$lib/date';
	let { data,forms  }:{data: any, forms: ActionData }  = $props();

	// Import all components
	import ChatClock from '$lib/components/dashboard/ChatClock.svelte';
	import NotesMini from '$lib/components/dashboard/notes_mini.svelte';
	import Memorycomp from '$lib/components/dashboard/memorycomp.svelte';
	import Taskitem from '$lib/components/dashboard/Taskitem.svelte';
	import type { ActionData } from './$types';

	// Shared user data states
	shared.all_data = data.all_data;
	

	let notes = $derived(get_type_data(shared.all_data,"notes"))
	let memcards = $derived(get_type_data(shared.all_data,"memcards"));
	let todos = data.tasks;
	let disp_todos = data.tasks.slice(0,3);
</script>

<div class="flex flex-col grow">
	<div class="flex grow max-h-96">
		<div
			class="flex flex-col h-96 p-4 border-r-2 border-b-2 border-neutral-300 lg:w-[28rem] w-full"
		>
			<h1 class="text-2xl mb-4 flex items-center">
				Today's Overview 
			</h1>
			{#if todos.length !== 0}
				<ul use:autoAnimate class="space-y-4 z-0">
					{#each disp_todos as todo}
						<Taskitem
							time_start={datemap(todo.StartDate).hm}
							time_end={datemap(todo.EndDate).hm}
							Title={todo.name}
						/>
					{/each}
					<!-- <button onclick={sync} class="w-64 h-32 bg-green-500">Sync</button> -->
				</ul>
			{:else}<div
					class="text-lg flex justify-center items-center h-72 border-2 border-green-200 lg:w-[26rem] w-full"
				>
					You have completed all the <br /> tasks for the Day. Good Job!
				</div>
				{/if}
		</div>
		<!--First Row with Assist UI-->
		<ChatClock forms={forms}/>
	</div>
	<div class="bg-violet-100 flex flex-col grow h-screen p-5">
		<div class="text-2xl">Notes and Memories Board</div>
		<div class="grid lg:grid-cols-5 md:lg:grid-cols-4 justify-start p-2">
			{#each notes as note}
				<NotesMini 
					name={note.Title}
				 	details={note.Content} 
					date={datemap(note.SetDate).fulldate}
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
