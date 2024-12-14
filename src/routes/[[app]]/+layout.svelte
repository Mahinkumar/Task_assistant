<script lang="ts">
	import '../../app.css';
	import TopNav from '$lib/components/nav/TopNav.svelte';
	import SideNav from '$lib/components/nav/SideNav.svelte';
	import Toast from '$lib/components/features/Toast.svelte'
	import { shared, try_sync } from './shared.svelte';
	let { children, data } = $props();

	
	shared.all_data = data.all_data;

	
	function sync_loop() {
		setTimeout(async () => {
			await try_sync();
			sync_loop();
		}, 7000);
	};

	sync_loop();
</script>

<Toast />
<TopNav sync={data.sync} />
<div class="w-screen h-16"></div>
<div class="flex flex-grow">
	<SideNav />
	{@render children()}
</div>
