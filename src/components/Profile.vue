<template>
 
    <div
      class="box-content w-40 h-80 p-8 border-2 shadow-xl rounded-lg md:box-content hover:border-dashed hover:bg-gradient-to-b from-blue-500 to-pink-500 hover:text-white transition duration-300 ease-in-out hover:scale-105 display: inline-block"
    >
      <div
        class="h-40 w-full bg-cover bg-center bg-no-repeat rounded-full"
        :style="getUrl(image)"
      ></div>
      <br />
      <div name="texts" class="font-mono md:whitespace-pre">
        <div class="font-black text-xl flex justify-center">MY PROFILE</div>

        <div class="flex justify-center">{{ name }}</div>
        <div class="flex justify-center">Year {{ year }}</div>
        <div class="flex justify-center">Faculty of {{ faculty }}</div>
        
      </div>
      <div name="icons" class="p-4 space-x-4 flex justify-center">
        <font-awesome-icon
          icon="fa-brands fa-instagram"
          class="text-white text-xl"
        />
        <font-awesome-icon
          icon="fa-brands fa-facebook"
          class="text-white text-xl"
        />
        <font-awesome-icon icon="fa-brands fa-discord" class="text-white text-xl" />
      </div>
    </div>
 
</template>
<script>
export default {
  props: {
    name: { type: String, default: "Polite Cat" },
    year: {
      type: Number,
      default: 1,
    },
    faculty: {
      type: String,
      default: "Polite",
    },
    image: {
      type: String,
      default: "/assets/image/download.jpg",
    },
  },
  methods: {
    getUrlImage(ImagePath) {
      let url = new URL(ImagePath);
      return url;
    },
    getUrl(imagePath) {
      return { "background-image": 'url("./src' + imagePath + '")' };
    },
  },
};
</script>
<style></style>
