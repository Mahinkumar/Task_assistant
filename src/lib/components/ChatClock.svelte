<script lang="ts">
    import { BookOpenText, BookText } from 'lucide-svelte';
    let clockmode = $state("Work") 
</script>
<div class="h-96 w-full flex flex-col items-center">
    <div class="w-48 h-8 border-2 border-gray-500 flex rounded-b-lg justify-center items-center">
        <button class="h-8 w-10 hover:text-gray-800  flex items-center justify-center {clockmode == 'Work' ? 'text-black' : 'text-gray-500'}" onclick={()=>clockmode='Work'}><BookOpenText/></button>
        <button class="h-8 w-10  hover:text-gray-800 flex items-center justify-center {clockmode == 'Rest' ? 'text-black' : 'text-gray-500'}" onclick={()=>clockmode='Rest'}><BookText/></button>
        <button class="h-8 w-20 text-lg font-semibold">{clockmode}</button>
    </div>
</div>