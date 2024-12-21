<script lang="ts">
	import { enhance } from "$app/forms";
	import { Check, Trash2 } from "lucide-svelte";

    let data = $props();
</script>

<form class="pt-2" method="post" use:enhance>
    <div class=" h-full bg-slate-200 rounded-sm flex justify-center flex-col border-2 w-64 p-5 text-lg">
        <div class="">{data.hour_start} - {data.hour_end}</div>
        <div class="flex justify-between">
            <div>
                <div class="font-bold">{data.name}</div>
                <div>Difficulty: {data.difficulty}</div>
            </div>
            <button
			aria-label="Check Item"
            formaction="?/check"
			class="hover:bg-gray-100 rounded-sm w-10 h-10 ring-neutral-400 ring-2 flex justify-center items-center"
			><Check/></button
		>
        </div>
    </div>
</form>