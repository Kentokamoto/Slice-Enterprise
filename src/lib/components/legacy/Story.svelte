<script>
let { storyTitle, storyParagraphs } = $props();
</script>

<article class="text-black">
  <h1 class="text-red-sauce mt-5 text-center text-2xl font-bold sm:text-left">
    {storyTitle}
  </h1>
  {#each storyParagraphs as paragraph, index (index)}
    <p class="mb-3">{paragraph}</p>
  {/each}

</article>
