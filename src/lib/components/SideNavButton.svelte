<script lang="ts">
    import { goto } from '$app/navigation'
	import { Icon } from "svelte-hero-icons";
    
    let el = $props();
    
</script>

<button onclick={()=>goto(el.url)} class="bg-orange-500 h-16 transition-all duration-700 flex items-center justify-evenly {el.open ? 'w-16': 'w-56'}">
    <Icon src={el.icon} class="size-8 stroke-black {el.class}"></Icon>
    <div class="p-2 bg-black {!el.open ? 'w-36':'w-0 hidden'}"></div>
</button>