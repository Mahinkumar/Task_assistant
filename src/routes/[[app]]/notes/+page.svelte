<script lang="ts">
	import NotesMini from '$lib/components/dashboard/notes_mini.svelte';
	import datemap from '$lib/date';
	import { get_type_data, shared } from '../shared.svelte';
	let notes = $derived(get_type_data(shared.all_data, 'notes'));
</script>

<div class="text-2xl p-5 flex flex-col">
	Notes Page
	<a href="/notes/new" class="text-lg underline text-blue-700 grid grid-cols-3">Create a New Note</a>
	{#each notes as note}
		<NotesMini name={note.Title} details={note.Content} date={datemap(note.SetDate).fulldate} />
	{/each}
	
</div>
