<template>
  <div class="flex item-center justify-center space-x-5">
    <div v-for="member in members" :key="member.id">
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
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8n5cqOcmQfUhFrb759ZISUoirU7LZTQuqBA&usqp=CAU",
          faculty: "Crispy Pork",
          isMember: true,
        },
        {
          name: "Phum",
          image: "http://i.ytimg.com/vi/6p8rZmCVDwo/hqdefault.jpg",
          faculty: "Red Bird",
          isMember: true,
        },
        { name: "Mim", faculty: "Polite Cat", isMember: true },
        {
          name: "Imposter",
          faculty: "SUS",

          image: "assets/image/sus.jpg",
          isMember: false,
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
