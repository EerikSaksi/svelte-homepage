<script>
  import { onMount } from "svelte";
  import Tailwind from "./Tailwind.svelte";
  import LeftHandIcons from "./icons/left_hand.svelte";
  import RightHandIcons from "./icons/right_hand.svelte";
  import Explanation from "./timeline/explanation.svelte";
  import Bar from "./timeline/bar.svelte";
  let timer = 0;
  onMount(() => {
    const interval = setInterval(() => {
      timer += 1;
      console.log(timer);
    }, 500);
    return () => {
      clearInterval(interval);
    };
  });
</script>

<Tailwind />
<div class="flex flex-col h-screen md:container md:mx-auto">
  <div class="flex justify-center flex-1">
    <LeftHandIcons />
    <div class="flex flex-col justify-evenly">
      <img
        class="h-72"
        alt="Cartoon Eerik"
        src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairFrizzle&accessoriesType=Round&hairColor=BlondeGolden&facialHairType=Blank&clotheType=Hoodie&clotheColor=Black&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light" />
    </div>
    <RightHandIcons />
  </div>
  <div class="flex-1">
    <Explanation src={'media/uni.webp'} invisible={timer <= 2} />
    {#if timer >= 2}
      <Bar />
    {/if}
    {#if timer >= 8}
      <div class="mt-4">
        <Bar
          colors={['from-red-200', 'via-red-500', 'to-red-200', 'from-red-500', 'to-red-500']} />
      </div>
    {/if}
  </div>
</div>
