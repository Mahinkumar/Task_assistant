<script lang="ts">
    import SideNavButton from "./SideNavButton.svelte";
    import { ArrowRightEndOnRectangle, Cog8Tooth, Icon } from "svelte-hero-icons";
    let extended = $state(false);
</script>


<div class="flex flex-col justify-start fixed h-full bg-black transition-all duration-700 {extended ? 'bg-green-500 w-16':'bg-blue-500 w-56'}">
    <SideNavButton open={extended} icon={Cog8Tooth}></SideNavButton>
    <SideNavButton open={extended} icon={Cog8Tooth}></SideNavButton>
    <SideNavButton open={extended} icon={Cog8Tooth}></SideNavButton>
    <SideNavButton open={extended} icon={Cog8Tooth}></SideNavButton>
    <SideNavButton open={extended} icon={Cog8Tooth}></SideNavButton>
    <button class="absolute bottom-16 bg-orange-500 h-16 transition-all duration-700 flex items-center justify-center {extended ? 'w-16': 'w-56'}" onclick={()=>extended = !extended}>
        <Icon src={ArrowRightEndOnRectangle} class="size-8 stroke-black"></Icon>
    </button>
</div>