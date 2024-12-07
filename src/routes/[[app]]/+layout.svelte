<script lang="ts">
	import '../../app.css';
	import TopNav from '$lib/components/nav/TopNav.svelte';
	import SideNav from '$lib/components/nav/SideNav.svelte';
	import Toast from '$lib/components/features/Toast.svelte'
	import { shared, try_sync } from './shared.svelte';
	let { children, data } = $props();

	setInterval(try_sync, 3000)
	
	shared.notes = data.notes;
	shared.flipCards = data.flipcards;
	shared.memcards = data.memcards;
	shared.todos = data.todos;
</script>

<Toast/>
<TopNav sync={data.sync}/>
<div class='w-screen h-16'></div>
<div class="flex flex-grow">
	<SideNav/>
	{@render children()}
</div>

