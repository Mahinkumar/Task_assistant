<script lang="ts">
	let display_workflow = $state('Workflow');
</script>

<div class="text-2xl p-8 pt-4 w-full h-screen flex flex-col items-start">
	<div class="text-2xl mb-4 flex items-center w-full justify-between">
		<h1 class="text-2xl font-semibold">Focus Page</h1>
		<div class="ml-8 ring-2 ring-gray-200 pl-2 pr-2 h-14 items-center justify-evenly flex">
			<button
				class="w-48 h-12 transition-all text-xl {!(display_workflow == 'Workflow')
					? 'bg-white'
					: 'bg-gray-300'}"
				onclick={() => {
					display_workflow = 'Workflow';
				}}>Workflow</button
			><button
				class="w-48 h-12 transition-all text-xl {!(display_workflow == 'Statistics')
					? 'bg-white'
					: 'bg-gray-300'}"
				onclick={() => {
					display_workflow = 'Statistics';
				}}>Statistics</button
			><button
            class="w-48 h-12 transition-all text-xl {!(display_workflow == '3')
                ? 'bg-white'
                : 'bg-gray-300'}"
            onclick={() => {
                display_workflow = '3';
            }}>Menu 3</button
        ><button
            class="w-48 h-12 transition-all text-xl {!(display_workflow == '4')
                ? 'bg-white'
                : 'bg-gray-300'}"
            onclick={() => {
                display_workflow = '4';
            }}>Menu  4</button
        ><button
        class="w-48 h-12 transition-all text-xl {!(display_workflow == '5')
            ? 'bg-white'
            : 'bg-gray-300'}"
        onclick={() => {
            display_workflow = '5';
        }}>Menu 5</button
        >
		</div>
	</div>
	{#if display_workflow == 'Workflow'}
		<div class="w-full h-full bg-gray-200 p-4">Workflow Menu</div>
	{/if}
	{#if display_workflow == 'Statistics'}
		<div class="w-full h-full bg-gray-200 p-4">Statistics Menu</div>
	{/if}
</div>
