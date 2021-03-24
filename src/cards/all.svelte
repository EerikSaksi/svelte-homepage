<script>
  import OneCard from "./one_card.svelte";

  let index = 1;
  let cardData = [
    {
      extraClasses: "bg-green-400 grid-rows-1 grid-cols-2",
      images: [
        {
          src:
            "https://res.cloudinary.com/practicaldev/image/fetch/s--5N472VlU--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://repository-images.githubusercontent.com/65750241/79017180-d4ce-11e9-9955-3f0a7be00c7a",
        },
        {
          src:
            "https://toppng.com/uploads/preview/react-native-svg-transformer-allows-you-import-svg-aperture-science-innovators-logo-11562851994zqcpwozsvy.png",
        },
      ],
    },
    {
      extraClasses: "bg-red-400 -top-8 -left-8 grid-rows-2 grid-cols-2",
      images: [
        { src: "https://material-ui.com/static/logo.png" },
        {
          src:
            "https://camo.githubusercontent.com/a664defdd5c2ec93a3fbfb51e0f2aaafa5dc57bf1e13aa47456ced037b3cebe8/68747470733a2f2f676574626f6f7473747261702e636f6d2f646f63732f352e302f6173736574732f6272616e642f626f6f7473747261702d6c6f676f2d736861646f772e706e67",
        },
        {
          src: "https://miro.medium.com/max/800/1*mUISLg4ghf6QYT_f1-cnlg.png",
          extraClasses: "col-span-full",
        },
      ],
    },
    {
      extraClasses: "bg-black -top-12 -left-12 grid-cols-2 grid-rows-2",
      images: [
        {
          src:
            "https://blog.knoldus.com/wp-content/uploads/2019/06/graphql.png",
        },

        {
          src:
            "https://user-images.githubusercontent.com/841294/53402609-b97a2180-39ba-11e9-8100-812bab86357c.png",
        },
  
        {
          src: "media/postgraphile.png",
          extraClasses: "col-span-full",
        },
      ],
    },

    {
      extraClasses: "bg-purple-400 -top-16 -left-16",
      images: [
        {
          src: "https://image.flaticon.com/icons/png/512/1183/1183672.png",
          extraClasses: "h-32",
        },
      ],
    },
    //{ extraClasses: "bg-yellow-400 -top-4 -left-4" },
  ];
  const nextCard = () => {
    console.log("ran");
    cardData[index].extraClasses += " opacity-0";
    index--;
  };

  //let clear;
  //$: {
  //  clearInterval(clear);
  //  clear = setInterval(nextCard, 2000);
  //}
</script>

<div class="flex items-center justify-center h-56 ">
  <div class="relative flex">
    <div class="relative flex">
      {#each cardData as cd, i}
        {#if i == 1}
          <OneCard extraClasses={cd.extraClasses} images={cd.images} />
        {/if}
      {/each}
    </div>
  </div>
</div>
