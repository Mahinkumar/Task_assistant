<script lang="ts">
    import {
      createSeparator,
      melt,
      type CreateSeparatorProps,
    } from '@melt-ui/svelte';
  
    export let orientation: CreateSeparatorProps['orientation'] = 'vertical';
  
    const {
      elements: { root: vertical },
    } = createSeparator({
      orientation,
    });
  
    const {
      elements: { root: horizontal },
    } = createSeparator({
      orientation: 'horizontal',
      decorative: true,
    });
  
    const icecreams = ['Caramel', 'Vanilla', 'Hmm'];
  </script>
  
  <div class="text-black-900 p-5 flex flex-col justify-evenly items-center w-full h-full">
    <div class="h-1/2 w-full flex justify-evenly">
        <div class="w-1/3 h-full">
        </div>
        <div use:melt={$vertical} class="w-[1px] h-full bg-black"></div>
        <div class="w-2/3 h-full">
        </div>
    </div>
    <div use:melt={$horizontal} class="h-[1px] w-full bg-black"></div>
    <div class="h-1/2 w-full"></div>
  </div>