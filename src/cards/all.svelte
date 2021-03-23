<script>
  let index = 5;
  import OneCard from "./one_card.svelte";
  let cardData = [
    { extraClasses: "bg-green-400" },
    { extraClasses: "bg-yellow-400 -top-4 -left-4" },
    { extraClasses: "bg-red-400 -top-8 -left-8" },
    { extraClasses: "bg-black -top-12 -left-12" },

    //react
    {
      extraClasses: "bg-purple-400 -top-16 -left-16",
      images: [
        {
          src: "https://image.flaticon.com/icons/png/512/1183/1183672.png",
          imgClasses: "h-20",
        },
      ],
    },
  ];

  const nextCard = () => {
    console.log("ran");
    cardData[index].extraClasses += " opacity-0";
    index--;
  };

  let clear;
  $: {
    clearInterval(clear);
    clear = setInterval(nextCard, 2000);
  }
</script>

<div class="flex items-center justify-center h-56 ">
  <div class="relative flex">
    <div class="relative flex">
      {#each cardData as cd}
        <OneCard
          extraClasses={cd.extraClasses}
          images = {cd.images}
        />
      {/each}
    </div>
  </div>
</div>
