<script lang="ts">
    import SideNavButton from "./SideNavButton.svelte";
    import { ArrowRightEndOnRectangle, Cog8Tooth, Icon } from "svelte-hero-icons";
    let closed = $state(true);
</script>


<div class="flex flex-col justify-start fixed h-full bg-black transition-all duration-700 {closed ? 'bg-green-500 w-16':'bg-blue-500 w-56'}">
    <SideNavButton open={closed} icon={Cog8Tooth} class="bg-black" url="/"></SideNavButton>
    <SideNavButton open={closed} icon={Cog8Tooth} class="bg-black"></SideNavButton>
    <SideNavButton open={closed} icon={Cog8Tooth} class="bg-black"></SideNavButton>
    <SideNavButton open={closed} icon={Cog8Tooth} class="bg-black"></SideNavButton>
    <SideNavButton open={closed} icon={Cog8Tooth} class="bg-black"></SideNavButton>
    <SideNavButton open={closed} icon={Cog8Tooth} class="bg-black"></SideNavButton>
    <button class="absolute bottom-16 bg-orange-500 h-16 transition-all duration-700 flex items-center justify-center {closed ? 'w-16': 'w-56'}" onclick={()=>closed = !closed}>
        <Icon src={ArrowRightEndOnRectangle} class="size-8 stroke-black"></Icon>
    </button>
</div>
<div class="h-screen transition-all duration-1000  {!closed ? 'w-56' : 'w-16'}"></div>