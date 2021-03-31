<script>
  export let src = "media/uni.webp";
  export let colors;
  export let explanationText;
  export let leftShift;
</script>


<div
  class="w-36 md:w-64 pic relative  {leftShift ? leftShift : 'left-1/2'} transform -translate-x-1/2 mt-3 mb-3">
  <div
    class="flex flex-col items-center p-2 rounded-lg ring {colors[5]} ">
    <img
      class="object-cover mb-2 xs:w-full"
      alt="University of Glasgow"
      {src} />
    <p class="text-sm text-center md:text-xl">{explanationText}</p>
  </div>
</div>
