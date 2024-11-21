<script lang="ts">
	import '../app.css';
	import { Cog6Tooth, Icon, CalendarDays, Map, User, Bell } from "svelte-hero-icons";
	let { children } = $props();
</script>

<nav class="bg-white fixed w-screen h-16 flex border-b-2 border-neutral-200">
	<div class="lg:w-[15%] w-[70%] flex justify-start pl-5 items-center text-2xl font-semibold text-black">
	  Task Assistant
	</div>
	<button class="lg:w-[15%] lg:flex hidden justify-center items-center text-xl text-black">
	  Random Date
	</button>
	<div class="lg:w-[40%] p-4 lg:flex hidden justify-center items-center">
	  <input type="text" class="rounded-sm w-full h-10 ring-neutral-300 ring-2 pl-4 pr-4 text-lg text-black" placeholder=" 🔍  Search for anything " />
	</div>
	<div class="lg:w-[30%] w-[70%] flex justify-evenly items-center">
	  <button class="hover:bg-gray-100 rounded-sm w-10 h-10 ring-neutral-300 ring-2 flex justify-center items-center"><Icon src={Cog6Tooth} class="size-7 stroke-black" /></button>
	  <button class="hover:bg-gray-100 rounded-sm w-10 h-10 ring-neutral-300 ring-2 flex justify-center items-center"><Icon src={CalendarDays} class="size-7 stroke-black" /></button>
	  <button class="hover:bg-gray-100 rounded-sm w-10 h-10 ring-neutral-300 ring-2 lg:flex hidden justify-center items-center"><Icon src={Bell} class="size-7 stroke-black" /></button>
	  <button class="hover:bg-gray-100 rounded-sm w-36 h-10 ring-neutral-300 ring-2 lg:flex hidden justify-evenly items-center">
		<h2 class="text-xl text-black">Timeline</h2>
		<Icon src={Map} class="size-7 stroke-black" />
	  </button>
	  <button class="hover:bg-gray-100 rounded-sm w-10 h-10 ring-neutral-300 ring-2 flex justify-center items-center"><Icon src={User} class="size-7 stroke-black" /></button>
	</div>
  </nav>
  <div class='w-screen h-16'></div>

