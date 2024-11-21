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
  </script>
   
  <div use:portal>
    {#each $toasts as { id, data } (id)}
      <div use:melt={$content(id)} class="bg-green-500 rounded-2xl w-64 h-32 absolute right-4 bottom-4 p-5">
        <div>
          <div>
            <h3 use:melt={$title(id)}>
              {data.title}
              <span style:color={data.color}></span>
            </h3>
            <div use:melt={$description(id)}>
              {data.description}
            </div>
          </div>
          <button use:melt={$close(id)} aria-label="close notification"> X </button>
        </div>
      </div>
    {/each}
  </div>