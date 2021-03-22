<script>
  import Tailwind from "./Tailwind.svelte";
  import TimeEvent from "./time_event.svelte";
</script>

<Tailwind />

<div class="flex flex-col justify-center h-screen md:container md:mx-auto">
  <img
    class="flex-1"
    alt="Cartoon Eerik"
    src="https://avataaars.io/?avatarStyle=Circle&topType=ShortHairFrizzle&accessoriesType=Round&hairColor=BlondeGolden&facialHairType=Blank&clotheType=Hoodie&clotheColor=Black&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light" />
  <TimeEvent
    role="MSci in Computing"
    src="https://ukeducationguide.com/wp-content/uploads/2014/08/glasgow.png"
    alt="University of Glasgow"
    timeRange="September 2018 - May 2022" />
</div>
