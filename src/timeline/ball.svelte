<script>
  export let isRight = false;
</script>


<div class="relative flex items-center justify-center">
  <div
    class="absolute flex items-center w-6 h-6 rounded-full bg-gradient-to-r {isRight ? 'from-green-200 to-green-500' : 'from-green-500 to-green-200'}" />
</div>
