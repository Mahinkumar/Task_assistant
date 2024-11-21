<script lang="ts">
	import '../app.css';
	import TopNav from '$lib/components/TopNav.svelte';
	import SideNav from '$lib/components/SideNav.svelte';
	let { children } = $props();
</script>

<TopNav/>
<div class='w-screen h-16'></div>
<div class="flex h-screen w-screen">
	<SideNav/>
	{@render children()}
</div>

