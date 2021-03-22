<script>
  import Tailwind from "./Tailwind.svelte";
  import TimeEvent from "./time_event.svelte";
</script>

<style>
  .back {
    background: linear-gradient(135deg, rgba(101,201,255,1) 5%, rgba(255, 255, 255, 1) 15%);
  }
</style>

<Tailwind />

<div class = "back">
  <div class="flex flex-col justify-center h-screen md:container md:mx-auto ">
    <img
      class = "h-72"
      alt="Cartoon Eerik"
      src="https://avataaars.io/?avatarStyle=Circle&topType=ShortHairFrizzle&accessoriesType=Round&hairColor=BlondeGolden&facialHairType=Blank&clotheType=Hoodie&clotheColor=Black&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light" />
    <div class="flex-1">
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
  </div>
</div>
