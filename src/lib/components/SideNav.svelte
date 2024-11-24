<script lang="ts">
    import SideNavButton from "./SideNavButton.svelte";
    import { ArrowRightEndOnRectangle, ClipboardDocumentCheck, Cog8Tooth, Icon, PencilSquare, RectangleGroup, RectangleStack } from "svelte-hero-icons";
    let closed = $state(true);
</script>


<div class="flex flex-col justify-start fixed h-full transition-all duration-700 border-r-2 border-gray-200 {closed ? 'w-16':'w-56'}" >
    <SideNavButton open={closed} icon={RectangleGroup} class="" url="/" text="Dashboard"></SideNavButton>
    <SideNavButton open={closed} icon={ClipboardDocumentCheck} class="" url="/tasks" text="Tasks"></SideNavButton>
    <SideNavButton open={closed} icon={PencilSquare} class="" url="/notes" text="Notes"></SideNavButton>
    <SideNavButton open={closed} icon={RectangleStack} class="" url="/memories" text="Memories"></SideNavButton>
    <button onclick={()=>closed = !closed} class="absolute bottom-16 hover:bg-neutral-200 h-16 transition-all duration-700 flex items-center justify-evenly {closed ? 'w-16 pr-2': 'w-56'}">
        <div class="transition-all text-lg {!closed ? 'w-36 opacity-100 duration-700 pl-4 text-start':'w-0 opacity-0 duration-500'} ">Hide&nbsp;Menu</div>
        <Icon src={ArrowRightEndOnRectangle} class="size-8 stroke-black {!closed ? 'rotate-180' : 'rotate-0'}"></Icon>
    </button>
</div>
<div class="h-screen transition-all duration-700  {!closed ? 'w-56' : 'w-16'}"></div>