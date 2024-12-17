<script lang="ts">
	import { goto } from "$app/navigation";
	import { Pencil, Trash2 } from "lucide-svelte";

    export let name: String | null = "";
    export let details: String | null = "";
    export let date: String | null | Date = "";
    export let sno: number | undefined;

    if (!sno){sno = 0};


</script>
  

<form class="w-72 h-72 bg-slate-200 p-5 relative" method="post">
    <div class="font-bold text-xl mb-2">{name}</div>
    <p class="text-sm mb-4">{details}</p>
    <div class="text-xs">{date}</div>
    <div class="flex space-x-2 absolute right-4 bottom-8">
    <button class="hover:bg-gray-100 rounded-sm w-10 h-10 ring-neutral-300 ring-2 flex justify-center items-center" formaction="?/delete"><Trash2/></button>
    <button class="hover:bg-gray-100 rounded-sm w-10 h-10 ring-neutral-300 ring-2 flex justify-center items-center" type="button" onclick={()=>{goto("/notes/edit/"+sno.toString())}}><Pencil/></button>
    </div>
</form>