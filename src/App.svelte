<script>
  import { onMount } from "svelte";
  import IntersectionObserver from "svelte-intersection-observer";
  import Tailwind from "./Tailwind.svelte";
  import LeftHandIcons from "./icons/left_hand.svelte";
  import RightHandIcons from "./icons/right_hand.svelte";
  import UniTimeline from "./timeline/timeline.svelte";
  import UrosTimeline from "./timeline/uros_timeline.svelte";
  import * as animateScroll from "svelte-scrollto";
  let uniTimelineVisible = false;
  let urosTimeLineVisible = false;
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
        case 1:
          uniTimelineVisible = true;
          console.log(uniTimelineVisible);
          break;
        case 3:
          urosTimeLineVisible = true;
          break;
        case 6:
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

<main>
  <div class="flex flex-col h-screen md:mx-auto md:container">
    <div
      class="flex-1 text-sm grid-flow-col grid grid-rows-2 grid-cols-4 md:grid-cols-3 md:text-3xl place-items-center">
      <LeftHandIcons />
      <img
        class="h-64 md:h-96 row-span-2 col-span-2 md:col-span-1 "
        alt="Cartoon Eerik"
        src="media/avataaars.svg" />

      <RightHandIcons />
    </div>
    <div class="flex-1">
      {#if uniTimelineVisible}
        <UniTimeline visible={uniTimelineVisible} />
      {/if}

      {#if urosTimeLineVisible}
        <UrosTimeline visible={urosTimeLineVisible} />
      {/if}
    </div>
    <button
      class="{arrowVisible ? 'opacity-100' : 'opacity-0'} delay-500 transition-opacity absolute w-12 h-12 bottom-4 left-1/2 -translate-x-1/2"
      on:click={() => animateScroll.scrollToBottom()}>
      <svg
        class="animate-bounce"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor">
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M16 17l-4 4m0 0l-4-4m4 4V3" />
      </svg>
    </button>
  </div>
</main>

<IntersectionObserver {element} threshold={0.05} bind:intersecting once={true}>
  <div bind:this={element} class="flex items-center justify-center h-screen">
    <svelte:component this={CarouselWithTechnologies} />
  </div>
</IntersectionObserver>
