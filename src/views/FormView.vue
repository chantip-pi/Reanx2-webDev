<template>
  <div>
    this is onclick <br />
    <button @click="count++" class="p4 bg-slate-400 rounded-md">Add 1</button>
    <div>
      {{ count }}
    </div>
  </div>

  <div>
    this is dropdown <br />
    <button @click="dropdown = !dropdown" class="p4 bg-slate-400 rounded-md">
      Add 1
    </button>
    <div v-if="dropdown">this is dropdown</div>
  </div>

  <div>
    <br />
    this is onchange
    <input
      class="p-2 border-2"
      type="text"
      @change="count++, (dropdown = !dropdown)"
    />
    <div>count is {{ count }}</div>
  </div>

  <div>
    <br />
    this is v model
    <input class="p-2 border-2" type="text" v-model="name" />
    <div>I am {{ name }}</div>
  </div>

  <div>
    <div>THIS IS POP CAT</div>
    <button @click="pop++, (poptrue = !poptrue)">click</button>
    <div class="font-black flex justify-center">
      <div>POPCAT</div>
      <div>{{ pop }}</div>
    </div>
    <div class="flex center">
      <img class="h-40 absolute" src="../assets/image/pop-.jpg" alt="" />
      <div v-if="poptrue">
        <img class="h-40 absolute" src="../assets/image/pop-O.png" alt="" />
        <div></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      poptrue: false,
      pop: 0,
      name: "John",
      count: 0,
      dropdown: false,
    };
  },
};
</script>

<style></style>
