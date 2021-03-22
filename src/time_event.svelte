<script>
  export let role;
  export let src;
  export let alt;
  export let imgStyles = "h-24 mr-4";
  export let timeRange;
</script>

<div
  class="max-w-md mx-auto overflow-hidden bg-white shadow-md rounded-xl md:max-w-2xl">
  <div class="md:flex">
    <div class="md:flex-shrink-0">
      <img class="object-cover w-full h-48 md:w-72" {src} {alt} />
    </div>
    <div class="p-8">
      <div
        class="text-sm font-semibold tracking-wide text-indigo-500 uppercase">
        Education
      </div>
      <p class="text-3xl text-center">{timeRange}</p>
      <p class="text-5xl">{role}</p>
    </div>
  </div>
</div>
