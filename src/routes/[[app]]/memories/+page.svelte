<script>
	import NotesMini from '$lib/components/dashboard/notes_mini.svelte';
	import Note from '$lib/components/note/note.svelte';
	import datemap from '$lib/date';
	import { Plus } from 'lucide-svelte';
	import { get_type_data, shared } from '../shared.svelte';
	import { goto } from '$app/navigation';
	import Memory from '$lib/components/memory/Memory.svelte';
	let notes = $derived(get_type_data(shared.all_data, 'memcards'));
</script>

<div class="text-2xl p-5 flex flex-col w-full">
	<div class="flex items-center space-x-4 p-2 pb-8 pl-0">
		<div>Memories Page</div>
		<button class="hover:bg-gray-100 rounded-sm w-10 h-10 ring-neutral-300 ring-2 flex justify-center items-center" onclick={()=>{goto("/notes/new")}}><Plus/></button>
	</div>
	
	<div class="grid grid-cols-5 gap-4">
		{#each notes as note}
				<Memory 
					name={note.Title}
				 	details={note.Content} 
					date={datemap(note.SetDate).fulldate}
					sno={note.sno}
				/>
		{/each}
	</div>
</div>
