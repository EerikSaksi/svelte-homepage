<script>
  import Tailwind from "./Tailwind.svelte";
  import TimeEvent from "./time_event.svelte";
  import LeftHandIcons from "./icons/left_hand.svelte";
  import RightHandIcons from "./icons/right_hand.svelte";
  import Cards from "./cards/all.svelte";
</script>

<Tailwind />
<div class="flex flex-col h-screen md:container md:mx-auto">
  <div class="flex flex-row justify-center">
    <LeftHandIcons />
    <img
      class="h-72"
      alt="Cartoon Eerik"
      src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairFrizzle&accessoriesType=Round&hairColor=BlondeGolden&facialHairType=Blank&clotheType=Hoodie&clotheColor=Black&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light" />
    <RightHandIcons />
  </div>

  <div class="flex-row justify-center flex-1">
    <TimeEvent
      role="MSci in Computing"
      src="media/uni.png"
      alt="University of Glasgow"
      timeRange="September 2018 - May 2022" />
    <TimeEvent
      role="Software Engineer"
      src="https://upload.wikimedia.org/wikipedia/commons/4/41/Uros-logo-plain.png"
      alt="UROS"
      timeRange="June 2019 - August 2019" />
  </div>
  <div class="flex-1">
    <Cards />
  </div>
</div>
