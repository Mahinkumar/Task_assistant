<script lang="ts">
	import { Icon } from "svelte-hero-icons";
    let el = $props();
</script>

<button class="bg-orange-500 h-16 transition-all duration-700 flex items-center justify-center {el.open ? 'w-16': 'w-56'}">
    <Icon src={el.icon} class="size-8 stroke-black"></Icon>
</button>