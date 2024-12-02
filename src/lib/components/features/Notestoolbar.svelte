<script lang="ts">
	import {
	Bell,
		Bold,
		BookDownIcon,
		Calendar,
		Code,
		Heading1,
		Heading2,
		Heading3,
		Italic,
		LucideFullscreen,
		NotebookPenIcon,
		SaveIcon,
		SquareCheckBigIcon,
		Strikethrough,
		Table
	} from 'lucide-svelte';
</script>

<div
	class="flex justify-evenly min-w-max items-center gap-4 rounded-lg m-2 ml-0 mr-3 py-3 text-neutral-700 shadow-sm"
>
    <div class="flex w-1/3">
        <input class="link nowrap flex-shrink-0 form-textarea w-full border-gray-400 pl-5" type="text" placeholder="Note Name"/>
    </div>
    <div class="flex w-2/3 justify-evenly items-center space-x-4">
        <button class="ml-auto rounded-md bg-white py-1 font-medium text-lg"><SaveIcon/></button>
    <button class="ml-auto rounded-md bg-white py-1 font-medium text-lg"><BookDownIcon/></button>
	<div class="separator"></div>
	<div class="flex items-center gap-1">
		<button class="item" aria-label="bold">
			<Bold />
		</button>
		<button class="item" aria-label="italic">
			<Italic />
		</button>
		<button class="item" aria-label="strikethrough">
			<Strikethrough />
		</button>
	</div>
	<div class="separator"></div>
	<div class="flex items-center gap-1">
		<button class="item" aria-label="align left">
			<Heading1 />
		</button>
		<button class="item" aria-label="align center">
			<Heading2 />
		</button>
		<button class="item" aria-label="align-right">
			<Heading3 />
		</button>
	</div>
	<div class="separator"></div>
	<div class="flex items-center gap-1">
		<button class="item" aria-label="align left">
			<Table />
		</button>
		<button class="item" aria-label="align center">
			<Code />
		</button>
		<button class="item" aria-label="align-right">
			<SquareCheckBigIcon />
		</button>
	</div>
	<div class="separator"></div>
	<a href="/#" class="link nowrap flex-shrink-0"> Edited 2 hours ago </a>
	<button class="ml-auto rounded-md bg-white px-3 py-1 font-medium text-lg"><Calendar/></button>
    <div class="separator"></div>
    <div class="flex items-center gap-2">
		<button class="item" aria-label="align left">
			<Bell/>
		</button>
		<button class="item" aria-label="align center">
			<NotebookPenIcon/>
		</button>
		<button class="item" aria-label="align-right">
			<LucideFullscreen/>
		</button>
	</div>
    </div>
</div>

<style lang="postcss">
	.item {
		padding: theme('spacing.1');
		border-radius: theme('borderRadius.md');

		&:focus {
			@apply ring-2;
		}
	}

	.separator {
		width: 1px;
		background-color: theme('colors.neutral.300');
		align-self: stretch;
	}
</style>
