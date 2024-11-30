<script lang="ts">
	import type { ActionData } from './$types';

	let { form }: { form: ActionData } = $props();
</script>

<div class="flex flex-col items-center justify-center w-screen h-screen">
	<div class="flex flex-col items-center justify-center w-96 h-80">
		<h1 class="text-3xl mb-4 font-bold">Login/Register</h1>

		<form
			method="post"
			action="?/login"
			class="flex flex-col w-full p-8 bg-white shadow-md rounded-lg"
		>
			<label class="block text-gray-700 mb-2">
				Username
				<input
					type="text"
					name="username"
					class="w-full px-4 py-2 border border-gray-400 focus:outline-none focus:border-indigo-500"
				/>
			</label>
			<label class="block text-gray-700 mb-2">
				Password
				<input
					type="password"
					name="password"
					class="w-full px-4 py-2 border border-gray-400 focus:outline-none focus:border-indigo-500"
				/>
			</label>
			<button
				class="hover:bg-gray-100 rounded-sm ring-neutral-800 ring-1 mt-16 font-bold py-2 w-full mb-4">Login</button
			>
			<button
				formaction="?/register" 
				class="hover:bg-gray-100 rounded-sm ring-neutral-800 ring-1 font-bold py-2 w-full">Register</button
			>
		</form>
		{form?.message ?? ''}
		<p class="text-red-500 mb-4">{form?.message ?? ''}</p>
	</div>
</div>
