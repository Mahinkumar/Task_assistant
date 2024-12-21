<script lang="ts">
	import { enhance } from "$app/forms";
	import { Diff } from "lucide-svelte";
	import { fade } from "svelte/transition";
	import { shared } from "../shared.svelte";
	import Unsched from "$lib/components/tasks/Unsched.svelte";
	import datemap from "$lib/date";
	import Sched from "$lib/components/tasks/sched.svelte";

    let Difficulty = $state(0);
    let priority = $state(0);
    let fixed = $state(false);

    let {data }= $props();

    let today = new Date();
    let tomorrow = new Date(today.getDay()+1);

    function isToday(date: any) {
        let got_date = new Date(date);
        return got_date.toDateString() === new Date().toDateString();
    }

    function isTomorrow(date: any) {
        let got_date = new Date(date);
        const today = new Date();
        today.setDate(today.getDate() + 1);
        return got_date.toDateString() === today.toDateString();
    }

</script>

<div class="w-full h-screen bg-gray-100 flex z-0">
    <div class="w-16"></div>
    <form class="text-2xl p-5 w-[18%]" method="POST" use:enhance>
        <input type="hidden" name="user_id" value="{shared.user_id}"/>
        Add Tasks
        <h1 class="text-lg mt-4">Task Name</h1>
        <input type="text" class="form-input w-full mt-2" name="task_name" placeholder="Task Name"/>
        
        <div class="flex justify-evenly items-center mt-4">
            <h1 class="text-lg">Need to be scheduled</h1>
            <button class="bg-slate-400 w-6 h-6 flex items-center justify-center" type="button" onclick={()=>{fixed = !fixed}}>
                {#if fixed}
                    <div class="bg-black w-4 h-4"></div>
                {/if}
            </button>
            <input type="hidden" value={!fixed} name="is_fixed"/>
        </div>
        
        {#if !fixed}
        <div in:fade>
        <h1 class="text-lg mt-4">Start and End Time</h1>
        <input type="datetime-local" name="start" class="w-full mt-2"/>
        <input type="datetime-local" name="end" class="w-full mt-2"/>
        </div>
        {/if}

        <h1 class="text-lg mt-4">Difficulty</h1>
        <div class="ring-2 ring-gray-200 pl-1 pr-1 mt-2 h-10 items-center justify-evenly flex">
			<button type="button"
				class="w-48 h-8 transition-all text-lg {!(Difficulty == 0)
					? 'bg-white'
					: 'bg-gray-300'}"
				onclick={() => {
					Difficulty = 0;
				}}>0</button
			><button type="button"
				class="w-48 h-8 transition-all text-lg {!(Difficulty == 1)
					? 'bg-white'
					: 'bg-gray-300'}"
				onclick={() => {
					Difficulty = 1;
				}}>1</button
			><button type="button"
            class="w-48 h-8 transition-all text-lg {!(Difficulty == 2)
                ? 'bg-white'
                : 'bg-gray-300'}"
            onclick={() => {
                Difficulty = 2;
            }}>2</button
        ><button type="button"
            class="w-48 h-8 transition-all text-lg {!(Difficulty == 3)
                ? 'bg-white'
                : 'bg-gray-300'}"
            onclick={() => {
                Difficulty = 3;
            }}>3</button
        ><button type="button"
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
			<button type="button"
				class="w-48 h-8 transition-all text-lg {!(priority == 0)
					? 'bg-white'
					: 'bg-gray-300'}"
				onclick={() => {
					priority = 0;
				}}>0</button
			><button type="button"
				class="w-48 h-8 transition-all text-lg {!(priority == 1)
					? 'bg-white'
					: 'bg-gray-300'}"
				onclick={() => {
					priority = 1;
				}}>1</button
			><button type="button"
            class="w-48 h-8 transition-all text-lg {!(priority == 2)
                ? 'bg-white'
                : 'bg-gray-300'}"
            onclick={() => {
                priority = 2;
            }}>2</button
        ><button type="button"
            class="w-48 h-8 transition-all text-lg {!(priority == 3)
                ? 'bg-white'
                : 'bg-gray-300'}"
            onclick={() => {
                priority = 3;
            }}>3</button
        ><button
        type="button"
        class="w-48 h-8 transition-all text-lg {!(priority == 4)
            ? 'bg-white'
            : 'bg-gray-300'}"
        onclick={() => {
            priority = 4;
        }}>4</button
        >
		</div>
        <input type="hidden" value={priority} name="priority"/>
        <button class="w-full mt-10 h-8 transition-all text-lg bg-gray-300" formaction="?/add">Add Task +</button>
    </form>
    
    <div class="w-[80%] h-screen">
        <form class="h-[10%] p-1 border-2" method="post">
            <input type="hidden" value={shared.user_id} name="user_id"/>
            <button class="w-[33%] mt-1 h-12 transition-all text-lg bg-gray-300" formaction="?/sched">Schedule All</button>
            <button class="w-[33%] mt-1 h-12 transition-all text-lg bg-gray-300" formaction="?/rand">Randomize</button>
            <button class="w-[33%] mt-1 h-12 transition-all text-lg bg-gray-300" formaction="?/sched">Reverse Schedule</button>
        </form>
        <div class="h-[90%] flex">
            <div class="text-2xl p-5 w-[25%] border-2 flex flex-col justify-start overflow-y-auto">
                <div class="font-bold">Task Stack</div>
                {#each data.tasks as task}
                    {#if !task.scheduled}
                   <Unsched name={task.name} difficulty={task.difficulty} priority={task.priority}/>
                   {/if}
                {/each}
            </div>
            <div class="text-2xl p-5 w-[25%] border-2 flex flex-col justify-start overflow-y-auto">
                <div class="font-bold">Today</div>
                {#each data.tasks as task}
                    {#if task.scheduled && (isToday(task.StartDate))}
                   <Sched name={task.name} difficulty={task.difficulty} hour_start={datemap(task.StartDate).hmx} hour_end={datemap(task.EndDate).hm}/>
                   {/if}
                {/each}
            </div>
            <div class="text-2xl p-5 w-[25%] border-2 flex flex-col justify-start overflow-y-auto">
                <div class="font-bold">Tommorow</div>
                {#each data.tasks as task}
                    {#if task.scheduled && (isTomorrow(task.StartDate))}
                    <Sched name={task.name} difficulty={task.difficulty} hour_start={datemap(task.StartDate).hmx} hour_end={datemap(task.EndDate).hm}/>
                   {/if}
                {/each}
            </div>
            <div class="text-2xl p-5 w-[25%] border-2 flex flex-col justify-start overflow-y-auto">
                <div class="font-bold">Later</div>
                {#each data.tasks as task}
                    {#if task.scheduled && (!isTomorrow(task.StartDate)) && (!isToday(task.StartDate))}
                    <Sched name={task.name} difficulty={task.difficulty} hour_start={datemap(task.StartDate).hmx} hour_end={datemap(task.EndDate).hm}/>
                   {/if}
                {/each}
            </div>
        </div>
        
    </div>
    
</div>
