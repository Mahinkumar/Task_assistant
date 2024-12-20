<script lang="ts">
	import { Trash2 } from "lucide-svelte";
	import { Check, Icon } from "svelte-hero-icons";

    let data = $props();
</script>

<form class="p-5" method="post">
    <div class=" h-full bg-slate-200 rounded-sm flex justify-center flex-col border-2 w-56 p-5 text-lg">
        <div class="font-bold">{data.name}</div>
        <div class="flex justify-between">
            <div>
                <div>Difficulty: {data.difficulty}</div>
                <div>Priority: {data.priority}</div>
            </div>
            <button
			aria-label="Remove Item"
            formaction="?/delete"
			class="hover:bg-gray-100 rounded-sm w-10 h-10 ring-neutral-400 ring-2 flex justify-center items-center"
			><Trash2 /></button
		>
        </div>
    </div>
</form>