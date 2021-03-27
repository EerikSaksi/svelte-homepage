<script>
  import { onMount } from "svelte";
  import Tailwind from "./Tailwind.svelte";
  import LeftHandIcons from "./icons/left_hand.svelte";
  import RightHandIcons from "./icons/right_hand.svelte";

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

        case 2:
          import("./timeline/uros_timeline.svelte").then((module) => {
            UrosTimeline = module.default;
          });
      }
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  });
</script>

<Tailwind />
<div class="flex flex-col h-screen md:container md:mx-auto">
  <div class="flex justify-center flex-1 ">
    <LeftHandIcons />
    <div class="flex flex-col justify-evenly">
      <img alt="Cartoon Eerik" src="media/avataaars.svg" />
    </div>
    <RightHandIcons />
  </div>
  <div class="flex-1">
    <svelte:component this={UniTimeline} />
    <svelte:component this={UrosTimeline} />
  </div>
  <div class="flex-1" />
</div>
