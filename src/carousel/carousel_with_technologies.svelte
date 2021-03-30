<script>
  import Carousel from './carousel.svelte'
  let technologies = [
    {
      extraClasses: "grid-cols-2 grid-rows-2",
      images: [
        {
          src: "media/react.webp",
        },
        {
          src: "media/svelte.webp",
        },
        {
          src: "media/django.webp",
        },
        {
          src: "media/jquery.webp",
        },
      ],
    },
    {
      extraClasses: "grid-cols-2 grid-rows-2",
      images: [
        { src: "media/materialui.webp" },
        {
          src: "media/bootstrap.webp",
        },
        {
          src: "media/tailwind.webp",
          extraClasses: "col-span-full",
        },
      ],
    },
    {
      extraClasses: "grid-rows-1 grid-cols-2",
      images: [
        {
          src: "media/reactnative.webp",
        },
        {
          src: "media/expo.webp",
        },
      ],
    },
    {
      extraClasses: "grid-rows-2 grid-cols-2",
      images: [
        {
          src: "media/apollo.webp",
        },

        {
          src: "media/typegraphql.webp",
        },

        {
          src: "media/postgraphile.webp",
          extraClasses: "col-span-full",
        },
      ],
    },
    {
      extraClasses: "grid-cols-2 grid-rows-2",
      images: [
        {
          src: "media/postgres.webp",
        },
        {
          src: "media/sequelize.webp",
        },
        {
          src: "media/typeorm.webp",
        },
        {
          src: "media/sqlalchemy.webp",
        },
      ],
    },

    {
      extraClasses: "grid-cols-2 grid-rows-2",
      images: [
        {
          src: "media/pandas.webp",
        },
        {
          src: "media/scikit.webp",
        },
        {
          src: "media/spotlight.webp",
        },
        {
          src: "media/networkx.webp",
        },
      ],
    },

  ];

</script>
<Carousel {technologies}/>
