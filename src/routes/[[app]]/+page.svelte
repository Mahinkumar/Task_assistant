<script lang="ts">
	import { onMount } from 'svelte';
	import { Check, EllipsisHorizontal, Icon } from 'svelte-hero-icons';
	import { writable } from 'svelte/store';
	import autoAnimate from '@formkit/auto-animate';

	import ChatClock from '$lib/components/dashboard/ChatClock.svelte';

	onMount(() => {
		const storedtodos = localStorage.getItem('todos');
		const todos = writable(storedtodos);

		todos.subscribe((value) => {
			if (value) localStorage.setItem('todos', value.toString());
		});
	});

	let StartTododate = '';
	let EndTododate = '';
	let newTodoText = '';

	import NotesMini from '$lib/components/dashboard/notes_mini.svelte';
	import Flipcard from '$lib/components/dashboard/flipcard.svelte';
	import Memorycomp from '$lib/components/dashboard/memorycomp.svelte';

	let notes = [
		{ name: 'Buy Groceries', details: 'Milk, eggs, bread, etc.', date: '2024-11-29' },
		{ name: 'Meeting with Bob', details: 'Discuss project deadlines', date: '2024-11-30' },
		{ name: 'Doctor Appointment', details: 'Annual checkup', date: '2024-12-01' },
		{
			name: 'Call Someone',
			details: 'Catch up with Someone about the meet.',
			date: '2024-12-02'
		},
		{
			name: 'Prepare Presentation',
			details: "Finish slides for Monday's presentation on Q4 performance.",
			date: '2024-12-03'
		},
		{
			name: 'Buy Flight Tickets',
			details: 'Book flight for the business trip next week.',
			date: '2024-12-04'
		}
	];

	let flipCards = [
		{
			name: 'Design Review',
			details: 'Review project designs for next phase.',
			date: '2024-12-02'
		},
		{
			name: 'Team Meeting',
			details: 'Discuss sprint goals and tasks for TaskAssistant.',
			date: '2024-12-03'
		},
		{
			name: 'Code Review',
			details: 'Review pull requests for upcoming release.',
			date: '2024-12-04'
		}
	];

	let memcards = [
		{
			name: 'The Project Idea',
			details: 'An Open source Task Assistant',
			date: '2024-12-02'
		},
	];

	let Overview_mode = $state(false);
	let todos = writable([
		{ Task: 'Meet With Developers', completed: false, StartTime: '11:00', EndTime: '12:00' },
		{ Task: 'Lunch at the Emporium', completed: false, StartTime: '13:00', EndTime: '14:00' },
		{ Task: 'Exam Preparation - Phase 1', completed: false, StartTime: '15:00', EndTime: '16:00' }
	]);

	function addTodo() {
		if (newTodoText !== '') {
			todos.update((list) => [
				...list,
				{ Task: newTodoText, completed: false, StartTime: StartTododate, EndTime: EndTododate }
			]);
			newTodoText = '';
		}
	}

	function toggleTodo(todo: any) {
		todos.update((list) =>
			list.map((item) => (item === todo ? { ...todo, completed: !todo.completed } : item))
		);
	}

	function removeTodo(todo: any) {
		todos.update((list) => list.filter((item) => item !== todo));
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
			{#if !Overview_mode && $todos.length !== 0}
				<ul use:autoAnimate class="space-y-4 z-0">
					{#each $todos as todo}
						<li
							class="text-black rounded-sm bg-gradient-to-br bg-neutral-200 flex lg:w-[26rem] h-20 items-center justify-between ring-gray-400/50 ring-2 p-4"
						>
							<div>
								<p class="lg:text-xl text-sm">{todo.StartTime} - {todo.EndTime}</p>
								<h2 class="font-semibold lg:text-xl text-sm">{todo.Task}</h2>
							</div>
							<div class="flex justify-end space-x-4">
								<button
									onclick={() => removeTodo(todo)}
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
			{:else if $todos.length === 0 && !Overview_mode}<div
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
				<NotesMini name={note.name} details={note.details} date={note.date} />
			{/each}
			{#each flipCards as flipCard}
				<Flipcard name={flipCard.name} details={flipCard.details} date={flipCard.date} />
			{/each}
			{#each memcards as memcard}
				<Memorycomp name={memcard.name} details={memcard.details} date={memcard.date} />
			{/each}
		</div>
	</div>
</div>
