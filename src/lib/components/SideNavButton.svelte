<script lang="ts">
    import { goto } from '$app/navigation'
	import { Icon } from "svelte-hero-icons";
    
    let el = $props();
    
</script>

<button onclick={()=>goto(el.url)} class="hover:bg-neutral-200 h-16 transition-all duration-700 flex items-center justify-evenly {el.open ? 'w-16 pr-2': 'w-56'}">
    <div class="transition-all text-lg {!el.open ? 'w-36 opacity-100 duration-700 pl-4 text-start':'w-0 opacity-0 duration-500'} ">{el.text}</div>
    <Icon src={el.icon} class="size-8 stroke-black {el.class}"></Icon>
</button>