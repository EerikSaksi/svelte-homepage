<script>
  import { onMount } from "svelte";
  import Slide from "./slide.svelte";
  import TechnologyGrid from "./technology_grid.svelte";

  let activeIndex = 3;
  export let technologies;
  export let distances = Array(5);

  async function nextSlide() {
    activeIndex = (activeIndex + 1) % 5;
    distances = Array(5).fill(0).map((_, i) => {
      const nonLooped = activeIndex - i
      const looped = (5 - activeIndex) + i
      console.log({nonLooped, looped})
      if (Math.abs(nonLooped) < Math.abs(looped)){
        return nonLooped
      }
      return looped
    })
    console.log(distances)
  }
  onMount(() => {
    const interval = setInterval(() => nextSlide(), 1000);
    return () => clearInterval(interval);
  });
</script>

<div class="relative w-full h-64 rounded-xl">
  {#each technologies as technology, i}
    {#if distances[i] != 5}
      <Slide dist={distances[i]}>
        <TechnologyGrid/>
      </Slide>
    {/if}
  {/each}
</div>
