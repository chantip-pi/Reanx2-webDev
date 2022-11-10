<template>
  <div>
    <div
      class="font-black text-5xl flex justify-around box-content h-36 content-around h-14 bg-gradient-to-t from-blue-500 to-pink-500 text-white"
    >
      <br />
      ReanX2
      <br />
    </div>
    <div>
      
      <nav class="flex space-x-10 flex justify-center text-2xl border box-content h-10">
        <RouterLink to="/" class="hover:text-pink-500 transition duration-300 ease-in-out hover:scale-105">Home</RouterLink>

        <RouterLink class="hover:text-pink-500 transition duration-300 ease-in-out hover:scale-105 " to="/about">About</RouterLink>

        <RouterLink class="hover:text-pink-500 transition duration-300 ease-in-out hover:scale-105" to="/profile"
          >Profile</RouterLink
        >
        <RouterLink class="hover:text-pink-500 transition duration-300 ease-in-out hover:scale-105" to="/form"
          >Form</RouterLink
        >
      </nav>
      
      <br>
    </div>
    <slot></slot>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
