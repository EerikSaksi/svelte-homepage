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

  let activeIndex = -1;
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
    nextSlide()
    const interval = setInterval(() => nextSlide(), 3000);
    return () => clearInterval(interval);
  });
</script>

<div class="relative w-screen overflow-x-hidden h-1/2 rounded-xl">
  {#each technologies as technology, i}
    <Slide dist={distances[i]}>
      {#if distances[i] <= 1 && -2 <= distances[i]}
        <TechnologyGrid images = {technology.images} extraClasses = {technology.extraClasses} />
      {/if}
    </Slide>
  {/each}
</div>
