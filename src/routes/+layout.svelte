<script lang="ts">
	import '../app.css';
	import TopNav from '$lib/components/nav/TopNav.svelte';
	import SideNav from '$lib/components/nav/SideNav.svelte';
	import Toast from '$lib/components/features/Toast.svelte'
	let { children } = $props();
</script>

<Toast/>
<TopNav/>
<div class='w-screen h-16'></div>
<div class="flex flex-grow">
	<SideNav/>
	{@render children()}
</div>

