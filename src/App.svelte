<script>
  import { onMount } from "svelte";
  import IntersectionObserver from "svelte-intersection-observer";
  import Tailwind from "./Tailwind.svelte";
  import LeftHandIcons from "./icons/left_hand.svelte";
  import UniTimeline from "./timeline/timeline.svelte";
  import UrosTimeline from "./timeline/uros_timeline.svelte";
  import VerticalTimeline from "./timeline/vertical_timeline.svelte";
  let uniTimelineVisible = true;
  let urosTimeLineVisible = true;
  let CarouselWithTechnologies;
  let intersecting;
  let element;
  $: if (intersecting) {
    arrowVisible = false;
    console.log("ran");
    import("./carousel/carousel_with_technologies.svelte").then((module) => {
      CarouselWithTechnologies = module.default;
    });
  }

  let arrowVisible = false;

  let timer = 0;
  onMount(() => {
    const interval = setInterval(() => {
      timer += 1;
      switch (timer) {
        case 2:
          uniTimelineVisible = true;
          console.log(uniTimelineVisible);
          break;
        case 4:
          urosTimeLineVisible = true;
          break;
        case 7:
          arrowVisible = !intersecting;
          clearInterval(interval);
      }
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  });
</script>

<Tailwind />

<div class="bg-gradient-to-b from-blue-200 via-indigo-400 to-purple-400">
  <LeftHandIcons />
  <div
    class="z-10 flex flex-col items-center justify-center md:mx-auto md:container forefront-element ">
    <main>
      <div class="flex-1 ">
        <VerticalTimeline />
      </div>
    </main>
    <IntersectionObserver
      {element}
      threshold={0.05}
      bind:intersecting
      once={true}>
      <div
        bind:this={element}
        class="flex items-center justify-center h-screen">
        <svelte:component this={CarouselWithTechnologies} />
      </div>
    </IntersectionObserver>
  </div>
</div>
