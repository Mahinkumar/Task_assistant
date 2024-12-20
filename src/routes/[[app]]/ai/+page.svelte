<script lang="ts">
    let { data, form }: { data: PageData, form: ActionData } = $props();    
    import { HfInference } from "@huggingface/inference";
	import type { ActionData,PageData } from "./$types";
	function parseText(input: any) {
		if(!input){
			return ({commands: [],
				otherText:"" })
		}
		const commandPattern =
			/command>>\s*(Insert|Edit|Read)\s*\(\s*Title:\s*(.*?)\s*,\s*Content:\s*(.*?)\s*,\s*Type:\s*(notes|flipcards|todos|memories)\s*\)\s*<<command/g;

		let commands = [];
		let otherText = '';
		let lastIndex = 0;
		let match;

		while ((match = commandPattern.exec(input)) !== null) {
			otherText += input.slice(lastIndex, match.index).trim() + '\n';

			const command = match[1];
			const title = match[2].trim();
			const content = match[3].trim();
			const type = match[4];

			commands.push({
				command,
				title,
				content,
				type
			});

			lastIndex = commandPattern.lastIndex;
		}
		if (lastIndex < input.length) {
			otherText += input.slice(lastIndex).trim();
		}


		return {
			commands,
			otherText: otherText.trim() 
		};
	}

    let parsedResult = $state(parseText(form?.item.choices[0].message.content))
	let command = $derived(parsedResult.commands)
</script>

<div class="flex flex-col p-8 bg-white rounded-xl shadow-xl w-screen mx-auto">
    <div class="text-3xl font-extrabold p-5 text-center text-gray-900">
        AI Chat Page
    </div>
    
    <div class="bg-gray-50 p-6 rounded-lg shadow-sm border-l-4 border-blue-500 mt-6">
        <h3 class="text-2xl font-semibold text-gray-800 mb-4">AI Output</h3>
        <div class="text-lg text-gray-700 whitespace-pre-wrap break-words">
			{parsedResult.otherText}
        </div>
    </div>
	<div class="bg-gray-50 p-6 rounded-lg shadow-sm border-l-4 border-blue-500 mt-6">
        <h3 class="text-2xl font-semibold text-gray-800 mb-4">AI Commands executed</h3>
        <div class="text-lg text-gray-700 break-words">
			{#each command as todo}
				{todo.title} -> performed in ->
				{todo.type} <br>
			{/each}
			
        </div>
    </div>

    <form method="POST" class="space-y-6 mt-6">
        <label for="prompt" class="block text-lg font-medium text-gray-700">
            <span>Prompt</span>
            <textarea id="prompt" name="prompt" rows="4" class="mt-2 w-full p-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200" placeholder="Enter your prompt here..."></textarea>
        </label>
        <button type="submit" class="w-full py-3 mt-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 transition duration-200">
            Check AI
        </button>
    </form>
</div>




