<script lang="ts">
	import { Cloud, CloudDownload, CloudUpload, Server } from "lucide-svelte";
    import { sync_state } from "../../../routes/[[app]]/shared.svelte";
    import {fade} from "svelte/transition";
    let sync = $state(sync_state)
</script>

{#if sync_state.need_sync}
    <svg in:fade xmlns="http://www.w3.org/2000/svg" width="24" height="24" class="mr-4 ml-4" viewBox="0 -2 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path class="animate-bounce" d="M12 13v8"/><path class="-translate-y-1" d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"/><path class="animate-bounce" d="m8 17 4-4 4 4"/></svg>
{/if}


{#if !sync_state.need_sync}
    <svg in:fade xmlns="http://www.w3.org/2000/svg" width="24" height="24" class="mr-4 ml-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="8" x="2" y="2" rx="2" ry="2"/><rect width="20" height="8" x="2" y="14" rx="2" ry="2"/><line x1="6" x2="6.01" y1="6" y2="6"/><line x1="6" x2="6.01" y1="18" y2="18"/></svg>
{/if}


