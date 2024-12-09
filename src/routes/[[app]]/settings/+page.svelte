<script lang="ts">
    let screen = $state(0);
</script>


<div class="flex flex-col w-full h-full">
	<div class="text-2xl p-5">Settings Page</div>
    <hr>
	<div class="w-full h-screen flex">
		<div class="w-64 h-full space-y-2 flex flex-col justify-start items-center p-2">
            <button onclick={()=>screen=0} class="w-48 h-10 rounded-md hover:bg-gray-200 ring-1 ring-gray-200">General</button>
            <button onclick={()=>screen=1} class="w-48 h-10 rounded-md hover:bg-gray-200 ring-1 ring-gray-200">Profile</button>
            <button onclick={()=>screen=2} class="w-48 h-10 rounded-md hover:bg-gray-200 ring-1 ring-gray-200">Appearance</button>
            <button onclick={()=>screen=3} class="w-48 h-10 rounded-md hover:bg-gray-200 ring-1 ring-gray-200">Integrations</button>
            <button onclick={()=>screen=4} class="w-48 h-10 rounded-md hover:bg-gray-200 ring-1 ring-gray-200">Sharing</button>
        </div>
		<div class="w-full h-full p-5">
            {#if screen === 0}
            <div class="text-2xl">General Settings</div>
            {/if}{#if screen === 1}
            <div class="text-2xl">Profile Settings</div>
            {/if}{#if screen === 2}
            <div class="text-2xl">Appearance Settings</div>
            {/if}{#if screen === 3}
            <div class="text-2xl">Integration Settings</div>
            {/if}{#if screen === 4}
            <div class="text-2xl">Sharing Settings</div>
            {/if}
        </div>
	</div>
</div>
