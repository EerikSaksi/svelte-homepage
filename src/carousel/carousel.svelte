<script>
  import { onMount } from "svelte";
  import Slide from "./slide.svelte";
  import TechnologyGrid from "./technology_grid.svelte";

  const convertIndex = (index) => {
    if (index < 0) {
      return 5 + index;
    }
    return index % 5;
  };

  let activeIndex = 0;
  export let technologies;
  export let distances = Array(5);

  async function nextSlide() {
    activeIndex = (activeIndex + 1) % 5;
    const tempDistances = Array(5).fill(0);
    tempDistances[convertIndex(activeIndex - 1)] = -1;
    tempDistances[convertIndex(activeIndex - 2)] = -2;
    tempDistances[convertIndex(activeIndex + 1)] = 1;
    tempDistances[convertIndex(activeIndex + 2)] = 2;
    distances = tempDistances;
    console.log(distances);
  }
  onMount(() => {
    const interval = setInterval(() => nextSlide(), 1000);
    return () => clearInterval(interval);
  });
</script>

<div class="relative w-full h-64 rounded-xl">
  {#each technologies as technology, i}
    {#if Math.abs(distances[i]) != 2}
      <Slide dist={distances[i]}>
        <TechnologyGrid />
      </Slide>
    {/if}
  {/each}
</div>
