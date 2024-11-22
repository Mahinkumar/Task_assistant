<script lang="ts">
    import { writable } from "svelte/store";
    import { onMount } from "svelte";

    let data = {'hello':'bye'};

    let count = writable([data]);

    onMount(async () => {
    const storedCount = sessionStorage.getItem("count");
    
    if (storedCount) {
        await count.update((value) => JSON.parse(storedCount));
    }
    
    count.subscribe((value) => {
        sessionStorage.setItem("count", JSON.stringify(value));
    });
    });
 </script>

  <div class="p-5 text-xl">
    <button on:click={() => count.update((n) => {n.push({'hello':'bye'}); return n})}>Increment</button>
    <val>{$count}</val>
    Home Page
  </div>