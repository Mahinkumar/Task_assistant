<script lang="ts">
    import { goto } from '$app/navigation'
	import { Icon } from "svelte-hero-icons";
    
    let el = $props();
    
</script>

<button aria-label="{el.text}" onclick={()=>goto(el.url)} class="hover:bg-neutral-200 h-14 transition-all duration-700 flex items-center justify-evenly {el.open ? 'w-14 pr-2': 'w-48 pr-4'}">
    <div class="transition-all text-start font-medium text-lg {!el.open ? 'w-36 opacity-100 duration-700 pl-4':'w-0 opacity-0 duration-500'} ">{el.text}</div>
    <Icon src={el.icon} class="size-7 stroke-black {el.class}"></Icon>
    
</button>