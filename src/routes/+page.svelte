<script lang="ts">
	import { onMount } from 'svelte';
	import { Check, EllipsisHorizontal, Icon } from 'svelte-hero-icons';
	import { writable } from 'svelte/store';
	import autoAnimate from '@formkit/auto-animate';
	
	import ChatClock from '$lib/components/ChatClock.svelte';

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
			<h1 class="text-2xl mb-4">
				Today's Overview <button
					class="rounded-md ml-4 w-16 h-8 transition-all ring-2 ring-gray-200 {!Overview_mode
						? 'bg-white'
						: 'bg-gray-200'}"
					onclick={() => {
						Overview_mode = !Overview_mode;
					}}>Ai</button
				>
			</h1>
			{#if !Overview_mode && $todos.length !== 0}
				<ul use:autoAnimate class="space-y-4 z-0">
					{#each $todos as todo}
						<div
							class="text-black rounded-sm bg-gradient-to-br bg-neutral-200 flex lg:w-[26rem] h-20 items-center justify-between ring-gray-400/50 ring-2 p-4"
						>
							<div>
								<p class="lg:text-xl text-sm">{todo.StartTime} - {todo.EndTime}</p>
								<h2 class="font-semibold lg:text-xl text-sm">{todo.Task}</h2>
							</div>
							<div class="flex justify-end space-x-4">
								<button
									onclick={() => removeTodo(todo)}
									class="hover:bg-gray-100 rounded-sm w-10 h-10 ring-neutral-400 ring-2 flex justify-center items-center"
									><Icon src={Check} class="size-7 stroke-black" /></button
								>
								<button
									class="hover:bg-gray-100 rounded-sm w-10 h-10 flex justify-center items-center"
									><Icon src={EllipsisHorizontal} class="size-7 stroke-black" /></button
								>
							</div>
						</div>
					{/each}
				</ul>
			{:else if $todos.length === 0 && !Overview_mode}<div
					class="text-lg flex justify-center items-center h-72 border-2 border-green-200 lg:w-[26rem] w-full"
				>
					You have completed all the <br /> tasks for the Day. Good Job!
				</div>
			{:else}
				<div
					class="text-xl flex justify-center items-center h-72 border-2 border-green-200 p-8 bg-gray-100 lg:w-[26rem] w-full"
				>
					✨ Today's schedule looks busy with three important tasks lined up: Meetings with
					developers from 11:00 AM to 12:00 PM, lunch at the Emporium from 1:00 PM to 2:00 PM, and
					exam preparation phase 1 scheduled for 3:00 PM to 4:00 PM.
				</div>
			{/if}
		</div>
		<!--First Row with Assist UI-->
		<ChatClock/>
	</div>
	<div class="bg-violet-800 flex grow">
		<div class="">2</div>
	</div>
</div>
