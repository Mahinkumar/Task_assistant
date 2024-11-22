<script lang="ts">
    import SideNavButton from "./SideNavButton.svelte";
    import { ArrowRightEndOnRectangle, ClipboardDocumentCheck, Cog8Tooth, Icon, PencilSquare, RectangleGroup, RectangleStack } from "svelte-hero-icons";
    let closed = $state(true);
</script>


<div class="flex flex-col justify-start fixed h-full transition-all duration-700 border-r-2 border-gray-200 {closed ? 'w-16':'w-56'}" >
    <SideNavButton open={closed} icon={RectangleGroup} class="" url="/" text="Dashboard"></SideNavButton>
    <SideNavButton open={closed} icon={ClipboardDocumentCheck} class="" url="/tasks" text="Dashboard"></SideNavButton>
    <SideNavButton open={closed} icon={PencilSquare} class="" url="/notes" text="Dashboard"></SideNavButton>
    <SideNavButton open={closed} icon={RectangleStack} class="" url="/memories" text="Dashboard"></SideNavButton>
    <button class="absolute bottom-16 h-16 transition-all duration-700 flex items-center justify-center {closed ? 'w-16': 'w-56'}" onclick={()=>closed = !closed}>
        <Icon src={ArrowRightEndOnRectangle} class="size-8 stroke-black"></Icon>
    </button>
</div>
<div class="h-screen transition-all duration-700  {!closed ? 'w-56' : 'w-16'}"></div>