<script>
  import { onMount } from "svelte";
  import Tailwind from "./Tailwind.svelte";
  import LeftHandIcons from "./icons/left_hand.svelte";
  import RightHandIcons from "./icons/right_hand.svelte";
  import CarouselWithTechnologies from './carousel/carousel_with_technologies.svelte';
  let UniTimeline;
  let UrosTimeline;

  let timer = 0;
  onMount(() => {
    const interval = setInterval(() => {
      timer += 1;
      switch (timer) {
        case 1:
          import("./timeline/timeline.svelte").then((module) => {
            UniTimeline = module.default;
          });
          break;
        case 3:
          import("./timeline/uros_timeline.svelte").then((module) => {
            UrosTimeline = module.default;
            clearInterval(interval);
          });
          break;
      }
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  });
</script>

<Tailwind />

<div class="flex flex-col h-screen md:mx-auto">
  <div class="flex items-center justify-center flex-1 ">
    <CarouselWithTechnologies/>
  </div>
</div>
