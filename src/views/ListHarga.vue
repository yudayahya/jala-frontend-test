<template>
  <div class="bg-light">
    <div class="container">
      <FilterComponent />
      <PersebaranComponent />
      <TabelListHarga />
    </div>
  </div>
</template>

<script>
import TabelListHarga from "@/components/TabelListHarga.vue";
import FilterComponent from "@/components/FilterComponent.vue";
import PersebaranComponent from "@/components/PersebaranComponent.vue";

export default {
  name: "ListHarga",
  components: {
    TabelListHarga,
    FilterComponent,
    PersebaranComponent,
  },
};
</script>
