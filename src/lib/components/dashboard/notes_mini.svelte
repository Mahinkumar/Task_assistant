<script lang="ts">
    export let name: String | null = "";
    export let details: String | null = "";
    export let date: String | null | Date = "";
  </script>
  
  <div class="bg-violet-300 p-4 rounded-lg shadow-md m-4 w-64 h-64">
    <div class="font-bold text-xl mb-2">{name}</div>
    <p class="text-sm mb-4">{details}</p>
    <div class="text-xs">{date}</div>
  </div>
  