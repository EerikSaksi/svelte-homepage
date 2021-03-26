<script>
  import Tailwind from "./Tailwind.svelte";
  import LeftHandIcons from "./icons/left_hand.svelte";
  import RightHandIcons from "./icons/right_hand.svelte";
  import Timeline from "./timeline/bar.svelte";
</script>

<Tailwind />
<div class="flex flex-col h-screen md:container md:mx-auto">
  <div class="flex flex-row justify-center flex-1">
    <LeftHandIcons />
    <img
      class="h-72"
      alt="Cartoon Eerik"
      src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairFrizzle&accessoriesType=Round&hairColor=BlondeGolden&facialHairType=Blank&clotheType=Hoodie&clotheColor=Black&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light" />
    <RightHandIcons />
  </div>
  <div class="flex-1">
    <Timeline />
  </div>
</div>
