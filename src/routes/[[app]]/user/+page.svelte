<script lang="ts">
	import { enhance } from '$app/forms';
	import type { PageServerData } from './$types';

	let { data }: { data: PageServerData } = $props();
</script>

<div class="flex flex-col w-full h-full">
	<div class="text-2xl p-5">User Page</div>
	<div class="flex flex-col p-5">
		<h1 class="text-xl">Hi, {data.user.username}!</h1>
		<p class="text-xl">Your user ID is {data.user.id}.</p>
		<form method="post" action="?/logout" use:enhance>
			<button class="mt-4 hover:bg-gray-100 rounded-sm w-36 h-10 ring-neutral-300 ring-2 lg:flex hidden justify-evenly items-center">Sign out</button>
		</form>
	</div>
</div>
