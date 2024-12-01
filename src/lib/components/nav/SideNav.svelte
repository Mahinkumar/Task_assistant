<script lang="ts">
	import { goto } from "$app/navigation";
	import { Compass } from "lucide-svelte";
    import SideNavButton from "./SideNavButton.svelte";
    import { ArrowRightEndOnRectangle, ClipboardDocumentCheck, Icon, PencilSquare, RectangleGroup, RectangleStack } from "svelte-hero-icons";
    let closed = $state(true);
</script>


<div class="flex flex-col justify-start fixed h-full transition-all duration-700 border-r-2 border-gray-200 {closed ? 'w-14':'w-48'}" >
    <SideNavButton open={closed} icon={RectangleGroup} class="" url="/" text="Dashboard"></SideNavButton>
    <SideNavButton open={closed} icon={ClipboardDocumentCheck} class="" url="/tasks" text="Tasks"></SideNavButton>
    <SideNavButton open={closed} icon={PencilSquare} class="" url="/notes" text="Notes"></SideNavButton>
    <SideNavButton open={closed} icon={RectangleStack} class="" url="/memories" text="Memories"></SideNavButton>
    <button onclick={()=>goto("/focus")} aria-label="Focus Page" class="hover:bg-neutral-200 h-14 transition-all duration-700 flex items-center justify-evenly {closed ? 'w-14 pr-2': 'w-48 pr-4'}">
        <div class="transition-all text-start font-medium text-xl {!closed ? 'w-36 opacity-100 duration-700 pl-4':'w-0 opacity-0 duration-500'} ">Focus</div>
        <Compass class="size-7 stroke-black"/>
    </button>
    <button onclick={()=>closed = !closed} aria-label="Open/Close Menu" class="absolute bottom-16 hover:bg-neutral-200 h-14 transition-all duration-700 flex items-center justify-evenly {closed ? 'w-14 pr-2': 'w-48 pr-4'}">
        <div class="transition-all font-medium text-lg {!closed ? 'w-36 opacity-100 duration-700 pl-4 text-start':'w-0 opacity-0 duration-500'} ">Hide&nbsp;Menu</div>
        <Icon src={ArrowRightEndOnRectangle} class="size-7 stroke-black {!closed ? 'rotate-180' : 'rotate-0'}"></Icon>
    </button>
</div>
<div class="h-screen transition-all duration-700  {!closed ? 'w-56' : 'w-14'}"></div>