<script lang="ts">
	import { onMount } from 'svelte';
	import { Check, EllipsisHorizontal, Icon } from 'svelte-hero-icons';
  import { writable } from 'svelte/store';
  import autoAnimate from '@formkit/auto-animate';

  onMount(() => {
    const storedtodos = localStorage.getItem("todos");
    const todos = writable(storedtodos);

    todos.subscribe((value) => {
      if(value)
        localStorage.setItem("todos", value.toString());
    });
  });

  let StartTododate = '';
  let EndTododate = '';
  let newTodoText = '';
  let todos = writable([
    { Task: 'Meet With Developers', completed: false, StartTime: '11:00', EndTime: '12:00'},
    { Task: 'Lunch at the Emporium', completed: false, StartTime: '13:00', EndTime: '14:00'},
    { Task: 'Exam Preparation - Phase 1', completed: false, StartTime: '15:00', EndTime: '16:00'}
  ]);

  

  function addTodo() {
    if (newTodoText !== '') {
      todos.update((list) => [...list, { Task: newTodoText, completed: false , StartTime: StartTododate, EndTime: EndTododate}]);
      newTodoText = '';
    }
  }

  function toggleTodo(todo: any) {
    todos.update((list) => list.map((item) => item === todo ? { ...todo, completed: !todo.completed } : item));
  }

  function removeTodo(todo: any) {
    todos.update((list) => list.filter((item) => item !== todo));
  }
</script>

<div class="flex flex-col p-4 ">
  <h1 class="text-3xl mb-4">Todays Overview</h1>
  <ul use:autoAnimate  class="space-y-4">
    {#each $todos as todo}
      <div class="text-black rounded-sm bg-gradient-to-br from-neutral-50 via-neutral-50 to-blue-400 flex lg:w-[26rem] w-80 h-20 items-center justify-between ring-blue-200/50 ring-2 p-4">
        <div>
          <p class="lg:text-xl text-sm">{todo.StartTime} - {todo.EndTime}</p>
          <h2 class="font-semibold lg:text-xl text-sm">{todo.Task}</h2>
        </div>
        <div class="flex justify-end space-x-4">
          <button onclick={() => removeTodo(todo)} class="hover:bg-gray-100 rounded-sm w-10 h-10 ring-neutral-400 ring-2 flex justify-center items-center"><Icon src={Check} class="size-7 stroke-black" /></button>
          <button class="hover:bg-gray-100 rounded-sm w-10 h-10 flex justify-center items-center"><Icon src={EllipsisHorizontal} class="size-7 stroke-black" /></button>
        </div>
      </div>
      
    {/each}
  </ul>
  <form class="flex justify-center items-center mb-4 mt-4" onsubmit={addTodo}>
    <input type="text" class="px-4 py-2 rounded-md focus:outline-none mr-2 w-36" placeholder="Add +" bind:value={newTodoText} />
    <input type="time" class="form-input px-4 py-2 rounded-md focus:outline-none mr-2" bind:value={StartTododate} />
    <input type="time" class="form-input px-4 py-2 rounded-md focus:outline-none mr-2" bind:value={EndTododate} />
    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="submit">+</button>
  </form>
</div>
