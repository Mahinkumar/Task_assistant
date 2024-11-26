<script lang="ts">
    import { BookOpenText, BookText } from 'lucide-svelte';
    let clockmode = $state("Work") 
</script>
<div class="h-96 w-full flex flex-col items-center">
    <div class="w-48 h-8 border-2 border-gray-500 flex rounded-b-lg justify-center items-center">
        <button class="transition-all duratiion-700 h-8 w-10 hover:text-gray-800  flex items-center justify-center {clockmode == 'Work' ? 'text-black' : 'text-gray-400'}" onclick={()=>clockmode='Work'}><BookOpenText/></button>
        <button class="transition-all duratiion-700 h-8 w-10 hover:text-gray-800 flex items-center justify-center {clockmode == 'Rest' ? 'text-black' : 'text-gray-400'}" onclick={()=>clockmode='Rest'}><BookText/></button>
        <button class="transition-all duratiion-700 h-8 w-20 text-lg font-semibold" onclick={()=> clockmode = (clockmode == 'Rest' ? 'Work' : 'Rest')}>{clockmode}</button>
    </div>
</div>