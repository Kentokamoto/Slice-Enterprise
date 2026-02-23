<script lang="ts">
  import { onMount } from "svelte";
  let {children, iframeId} = $props();

  onMount(() => {
    const script = document.createElement("script");
    script.src = "https://cdn.jotfor.ms/s/umd/latest/for-form-embed-handler.js";
    script.onload = () => {
      if (window && "jotformEmbedHandler" in window) {
        window.jotformEmbedHandler(
          `iframe[id='${iframeId}']`,
          "https://form.jotform.com/",
        );
      }
    };
    document.body.appendChild(script);
  });
</script>

<div class="my-4 flex w-full flex-col place-content-center sm:flex-row">
  <section class="flex basis-full flex-col place-content-center p-4 sm:p-0">
    <h1 class="text-red-sauce text-center text-2xl font-bold">Register Here</h1>
    {@render children()}
  </section>
</div>
