<script>
    export let name = "";
    export let details = "";
    export let date = "";
  </script>
  
  <div class="bg-violet-300 p-4 rounded-lg shadow-md m-4 w-64 h-64">
    <div class="font-bold text-xl mb-2">{name}</div>
    <p class="text-sm text-gray-700 mb-4">{details}</p>
    <div class="text-xs text-gray-500">{date}</div>
  </div>
  