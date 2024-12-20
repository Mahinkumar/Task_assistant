<script lang="ts">
    import { BookOpenText, BookText, Bot } from 'lucide-svelte';
	import PomodoroClock from './PomodoroClock.svelte';
    let clockmode = $state("Ai-Brief") 
</script>
<div class="h-96 w-full flex flex-col items-center">
    <div class="w-48 h-8 border-2 border-gray-500 flex rounded-b-lg justify-center items-center">
        <button aria-label="Work Mode" class="transition-all duratiion-700 h-8 w-10 hover:text-gray-800  flex items-center justify-center {clockmode == 'Work' ? 'text-black' : 'text-gray-400'}" onclick={()=>clockmode='Work'}><BookOpenText/></button>
        <button aria-label="Ai-Brief Mode" class="transition-all duratiion-700 h-8 w-10 hover:text-gray-800 flex items-center justify-center {clockmode == 'Ai-Brief' ? 'text-black' : 'text-gray-400'}" onclick={()=>clockmode='Ai-Brief'}><Bot /></button>
        <button aria-label="Switch Work/Rest Modes" class="transition-all duratiion-700 h-8 w-20 text-lg font-semibold" onclick={()=> clockmode = (clockmode == 'Ai-Brief' ? 'Work' : 'Ai-Brief')}>{clockmode}</button>
    </div>
    <div class="flex w-full items-center justify-evenly h-full">
        <PomodoroClock/>
        <div class="w-[50%] text-2xl h-full flex flex-col justify-center items-start space-y-16">
            <div class="font-semibold text-4xl">Start the Timer whenever you are ready.</div>
            <div>
                <div class="flex"><h1 class="font-bold">Current Task: &nbsp; </h1> Meet With Developers</div>
                <div class="flex"><h1 class="font-bold">Next Task: &nbsp; </h1> Break - 5 Minutes</div>
            </div>
        </div>
    </div>
</div>