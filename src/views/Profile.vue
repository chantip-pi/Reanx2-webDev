<template>
  <div class="flex item-center justify-center space-x-5 h-screen">
    <div v-for="member in members" :key="member.id" class="flex item-center justify-center space-x-5 h-screen">
      <profileCard
        v-if="member.isMember"
        :key="member.id"
        :name="member.name"
        :year="member.year"
        :faculty="member.faculty"
        :image="member.image"
      ></profileCard>
    </div>
  </div>
</template>

<script>
import profileCard from "../components/Profile.vue";
export default {
  data() {
    return {
      members: [
        {
          name: "GungGing",
          image: "assets/image/shibe.jpg",
          faculty: "Crispy Pork",
          isMember: true,
        },
        {
          name: "Phum",
          image: "assets/image/red.jpg",
          faculty: "Red Bird",
          isMember: true,
        },
        { name: "Mim", 
        faculty: "Polite Cat" ,
      isMember:true},
        {
          name: "Imposter",
          faculty: "SUS",

          image: "assets/image/sus.jpg",
          isMember:false
        },
      ],
    };
  },
  components: {
    profileCard,
  },
};
</script>

<style></style>
