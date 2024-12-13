<script lang="ts">
    let screen = $state(3);
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
		<div class="w-full h-full p-5 flex flex-col space-y-2 relative">
            {#if screen === 0}
            <div class="text-2xl">General Settings</div>
            {/if}{#if screen === 1}
            <div class="text-2xl">Profile Settings</div>
            {/if}{#if screen === 2}
            <div class="text-2xl">Appearance Settings</div>
            <div class="text-lg font-bold text-gray-800 pt-4">Display Mode Settings</div>
            <hr>
            <label class="inline-flex items-center cursor-pointer">
                <input type="checkbox" value="" class="sr-only peer">
                <div class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-1 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                <span class="ms-3 text-sm font-medium text-gray-900 ">Dark Mode</span>
            </label>
            <label class="inline-flex items-center cursor-pointer">
                <input type="checkbox" value="" class="sr-only peer">
                <div class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-1 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                <span class="ms-3 text-sm font-medium text-gray-900 ">Reduced Motion</span>
            </label>
            <hr>
            <div class="text-lg font-bold text-gray-800 pt-4">Themes</div>
            <hr>
            <label class="inline-flex items-center cursor-pointer">
                <input type="checkbox" disabled value="" class="sr-only peer">
                <div class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-1 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-100 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                <span class="ms-3 text-sm font-medium text-gray-900 ">Custom Themes</span>
            </label>
  
  
            {/if}{#if screen === 3}
            <div class="text-xl">AI Integrations (Powered by HuggingFace)</div>
            <hr>
            <label class="inline-flex items-center cursor-pointer">
                <input type="checkbox" value="" class="sr-only peer">
                <div class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-1 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                <span class="ms-3 text-sm font-medium text-gray-900 ">AI Features</span>
            </label>
            <hr>
            <div class="text-lg font-bold text-gray-800 pt-4">API Key</div>
            <input type="text" name="API_KEY" placeholder="hf_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx" class="form-input"/>
            <hr>

            <div class="text-lg font-bold text-gray-800 pt-4">Model for AI Actions and Summary</div> 
            <input type="text" name="MAS" placeholder="eg: meta-llama/Llama-3.2-3B-Instruct" class="form-input"/>
            <hr>

            <div class="text-lg font-bold text-gray-800 pt-4">Model for AI Classification</div> 
            <input type="text" name="MC" placeholder="eg: meta-llama/Llama-3.2-3B-Instruct" class="form-input"/>
            <hr>

            <div class="text-lg font-bold text-gray-800 pt-4">Model for Question and Answering</div> 
            <input type="text" name="MQA" placeholder="eg: deepset/roberta-base-squad2" class="form-input"/>
            <hr>

            <div class="text-lg font-bold text-gray-800 pt-4">Additional context</div> 
            <input type="text" name="Context" placeholder="eg: Your name is task assistant" class="form-input"/>
            <hr>
            
        
            {/if}{#if screen === 4}
            <div class="text-2xl">Sharing Settings</div>
            {/if}
            <button class="bottom-40 w-[97%] group flex h-10 items-center justify-center rounded-md border border-gray-200 bg-gray-200 px-4 text-gray-950 hover:bg-gradient-to-b hover:from-gray-100 hover:via-gray-100 hover:to-gray-100 active:shadow-inner"><span class="block group-active:[transform:translate3d(0,1px,0)]">Save</span></button>
        </div>
	</div>
</div>
