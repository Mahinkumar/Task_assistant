<script lang="ts">
	import { Check, EllipsisHorizontal, Icon } from "svelte-hero-icons";

    let prop = $props()
</script>


<li
	class="text-black rounded-sm bg-gradient-to-br bg-neutral-200 flex lg:w-[26rem] h-20 items-center justify-between ring-gray-400/50 ring-2 p-4"
>
	<div>
		<p class="lg:text-xl text-sm">{prop.time_start} - {prop.time_end}</p>
		<h2 class="font-semibold lg:text-xl text-sm">{prop.Title}</h2>
	</div>
	<div class="flex justify-end space-x-4">
		<button
			aria-label="Remove Item"
			class="hover:bg-gray-100 rounded-sm w-10 h-10 ring-neutral-400 ring-2 flex justify-center items-center"
			><Icon src={Check} class="size-7 stroke-black" /></button
		>
		<button
			aria-label="Item Settings"
			class="hover:bg-gray-100 rounded-sm w-10 h-10 flex justify-center items-center"
			><Icon src={EllipsisHorizontal} class="size-7 stroke-black" /></button
		>
	</div>
</li>
