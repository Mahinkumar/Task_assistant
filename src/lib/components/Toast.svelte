<script lang="ts" context="module">
    export type ToastData = {
      title: string
      description: string
      color: string
    }
   
    const {
      elements: { content, title, description, close },
      helpers,
      states: { toasts },
      actions: { portal }
    } = createToaster<ToastData>()
   
    export const addToast = helpers.addToast
  </script>
   
  <script lang="ts">
    import { createToaster, melt } from '@melt-ui/svelte'
    import { fade } from 'svelte/transition'
  </script>
   
  <div use:portal class="absolute right-4 bottom-4 space-y-4">
    {#each $toasts as { id, data } (id)}
      <div use:melt={$content(id)} transition:fade class="bg-gray-200 rounded-2xl w-64 pt-2 pb-2 flex flex-col items-center justify-start ring-2 ring-zinc-600">
        <div class="flex flex-col items-center justify-center p-1">
            <h3 use:melt={$title(id)} class="font-bold text-start">
              From : {data.title}
              <span style:color={data.color}></span>
            </h3>
            <div use:melt={$description(id)} class="text-start pl-4 pr-4">
              {data.description}
            </div>
          <div class="flex justify-evenly items-center w-full">
          <button use:melt={$close(id)} class="underline text-red-500" aria-label="close notification">Close</button>
          <button use:melt={$close(id)} class="underline text-green-700" aria-label="Accept notification">Ok</button>
          </div>
        </div>
      </div>
    {/each}
  </div>