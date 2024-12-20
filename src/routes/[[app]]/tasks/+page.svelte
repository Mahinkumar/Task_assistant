<script lang="ts">
	import { Diff } from "lucide-svelte";

    let Difficulty = $state(0);
    let priority = $state(0);

</script>

<div class="w-full h-screen bg-gray-100 flex z-0">
    <div class="text-2xl p-5 w-[20%]">
        Add Tasks
        <h1 class="text-lg mt-4">Task Name</h1>
        <input type="text" class="form-input w-full mt-2" placeholder="Task Name"/>
        
        <h1 class="text-lg mt-4">Start and End Time</h1>
        <input type="datetime-local" class="w-full mt-2"/>
        <input type="datetime-local" class="w-full mt-2"/>

        <h1 class="text-lg mt-4">Difficulty</h1>
        <div class="ring-2 ring-gray-200 pl-1 pr-1 mt-2 h-10 items-center justify-evenly flex">
			<button
				class="w-48 h-8 transition-all text-lg {!(Difficulty == 0)
					? 'bg-white'
					: 'bg-gray-300'}"
				onclick={() => {
					Difficulty = 0;
				}}>0</button
			><button
				class="w-48 h-8 transition-all text-lg {!(Difficulty == 1)
					? 'bg-white'
					: 'bg-gray-300'}"
				onclick={() => {
					Difficulty = 1;
				}}>1</button
			><button
            class="w-48 h-8 transition-all text-lg {!(Difficulty == 2)
                ? 'bg-white'
                : 'bg-gray-300'}"
            onclick={() => {
                Difficulty = 2;
            }}>2</button
        ><button
            class="w-48 h-8 transition-all text-lg {!(Difficulty == 3)
                ? 'bg-white'
                : 'bg-gray-300'}"
            onclick={() => {
                Difficulty = 3;
            }}>3</button
        ><button
        class="w-48 h-8 transition-all text-lg {!(Difficulty == 4)
            ? 'bg-white'
            : 'bg-gray-300'}"
        onclick={() => {
            Difficulty = 4;
        }}>4</button
        >
		</div>
        <input type="hidden" value={Difficulty} name="difficulty"/>
        <h1 class="text-lg mt-4">Priority</h1>
        <div class="ring-2 ring-gray-200 pl-1 pr-1 mt-2 h-10 items-center justify-evenly flex">
			<button
				class="w-48 h-8 transition-all text-lg {!(priority == 0)
					? 'bg-white'
					: 'bg-gray-300'}"
				onclick={() => {
					priority = 0;
				}}>0</button
			><button
				class="w-48 h-8 transition-all text-lg {!(priority == 1)
					? 'bg-white'
					: 'bg-gray-300'}"
				onclick={() => {
					priority = 1;
				}}>1</button
			><button
            class="w-48 h-8 transition-all text-lg {!(priority == 2)
                ? 'bg-white'
                : 'bg-gray-300'}"
            onclick={() => {
                priority = 2;
            }}>2</button
        ><button
            class="w-48 h-8 transition-all text-lg {!(priority == 3)
                ? 'bg-white'
                : 'bg-gray-300'}"
            onclick={() => {
                priority = 3;
            }}>3</button
        ><button
        class="w-48 h-8 transition-all text-lg {!(priority == 4)
            ? 'bg-white'
            : 'bg-gray-300'}"
        onclick={() => {
            priority = 4;
        }}>4</button
        >
		</div>
        <input type="hidden" value={priority} name="priority"/>
        <button class="w-full mt-10 h-8 transition-all text-lg bg-gray-300">Add Task +</button>
    </div>
    
    <div class="w-[80%] h-screen">
        <div class="h-[10%] p-1 border-2">
            <button class="w-[33%] mt-1 h-12 transition-all text-lg bg-gray-300">Schedule All</button>
            <button class="w-[33%] mt-1 h-12 transition-all text-lg bg-gray-300">Randomize</button>
            <button class="w-[33%] mt-1 h-12 transition-all text-lg bg-gray-300">Reschedule All</button>
        </div>
        <div class="h-[90%] flex">
            <div class="text-2xl p-5 w-[25%] border-2 relative">Task Stack</div>
            <div class="text-2xl p-5 w-[25%] border-2">Today</div>
            <div class="text-2xl p-5 w-[25%] border-2">Tommorow</div>
            <div class="text-2xl p-5 w-[25%] border-2">Later</div>
        </div>
        
    </div>
    
</div>
