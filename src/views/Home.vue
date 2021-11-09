<template>
  <div class="row mt-2">
    <router-link
      :to="{
        name: 'ListHarga',
      }"
      class="btn btn-primary"
      >Harga Udang Terbaru</router-link
    >
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>
