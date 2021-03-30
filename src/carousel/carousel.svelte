<script>
  import { onMount } from "svelte";
  import Slide from "./slide.svelte";
  import TechnologyGrid from "./technology_grid.svelte";

  let allExtraClasses;

  export let technologies;

  function initExtraClasses() {
    var toAssign = Array(5).fill("translate-x-full");
    toAssign[0] = "translate-x-0";
    allExtraClasses = toAssign;
  }
  async function nextSlide() {
    const activeIndex = allExtraClasses.findIndex(
      (val) => val === "translate-x-0"
    );
    allExtraClasses[activeIndex] = "-translate-x-full";
    if (activeIndex + 1 === allExtraClasses.length) {
      initExtraClasses();
    } else {
      allExtraClasses[activeIndex + 1] = "translate-x-0";
    }
  }
  onMount(() => {
    initExtraClasses();
    const interval = setInterval(() => nextSlide(), 3000);
    return () => clearInterval(interval);
  });
</script>

<div class="relative h-64 overflow-hidden w-96 rounded-xl">
  {#if allExtraClasses}
    {#each allExtraClasses as extraClasses, i}
      <Slide extraClasses="{extraClasses} bg-blue-{i + 1}00" >
        <TechnologyGrid />
      </Slide>
    {/each}
  {/if}
</div>
