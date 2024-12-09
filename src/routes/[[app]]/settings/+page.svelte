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
		<div class="w-full h-full p-5 flex flex-col space-y-2">
            {#if screen === 0}
            <div class="text-2xl">General Settings</div>
            {/if}{#if screen === 1}
            <div class="text-2xl">Profile Settings</div>
            {/if}{#if screen === 2}
            <div class="text-2xl">Appearance Settings</div>
            {/if}{#if screen === 3}
            <div class="text-xl">AI Integrations</div>
            <hr>
            <div class="text-lg font-bold text-gray-800 pt-4">API Key</div>
            <input type="text" name="API_KEY" placeholder="API_Key" class="form-input"/>
            <hr>
            <div class="text-lg font-bold text-gray-800 pt-4">API Provider</div>
            <div class="grid grid-cols-2">
                <div class="text-md text-gray-800">Open AI</div>
                <input type="radio" class="form-radio" name="API_TYPE" placeholder="API_Key" value="OpenAI"/>
                <div class="text-md text-gray-800">Antrhopic</div>
                <input type="radio" name="API_TYPE" placeholder="API_Key" class="form-radio" value="Anthropic"/>
                <div class="text-md text-gray-800">Hugging Face</div>
                <input type="radio" name="API_TYPE" placeholder="API_Key" class="form-radio" value="HuggingFace"/>
                <div class="text-md text-gray-800">Other</div>
                <input type="radio" name="API_TYPE" placeholder="API_Key" class="form-radio" value="Other"/>
            </div>
            <hr>
            <div class="text-lg font-bold text-gray-800 pt-4">API URL</div> 
            <input type="text" name="API_URL" placeholder="API_URL" class="form-input"/>
            <hr>
            <button class="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md border border-neutral-200 bg-transparent px-6 font-medium text-neutral-600 transition-all duration-100 [box-shadow:5px_5px_rgb(82_82_82)] active:translate-x-[3px] active:translate-y-[3px] active:[box-shadow:0px_0px_rgb(82_82_82)]">Save Configuration</button>
            {/if}{#if screen === 4}
            <div class="text-2xl">Sharing Settings</div>
            {/if}
        </div>
	</div>
</div>
