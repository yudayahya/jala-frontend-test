<template>
  <div class="bg-light">
    <div class="container">
      <div class="row">
        <div class="col-lg-7">
          <div class="card">
            <div class="card-header bg-transparent">
              <h6>Detail Harga Udang</h6>
            </div>
            <div class="card-body">
              <div class="row">
                <div class="col-lg-6"></div>
                <div class="col-lg-3"></div>
                <div class="col-lg-3"></div>
              </div>
              <div class="row mt-5">
                <div class="col-lg-12">
                  <ul class="list-group list-group-flush">
                    <li
                      class="list-group-item"
                      v-if="product_detail.size_20 > 0"
                    >
                      <div class="row">
                        <div class="col-lg-4">
                          <b>Size 20</b>
                        </div>
                        <div class="col-lg-8">
                          {{ product_detail.currency.symbol }}
                          {{
                            Intl.NumberFormat().format(product_detail.size_20)
                          }}
                        </div>
                      </div>
                    </li>
                    <li
                      class="list-group-item"
                      v-if="product_detail.size_30 > 0"
                    >
                      <div class="row">
                        <div class="col-lg-4">
                          <b>Size 30</b>
                        </div>
                        <div class="col-lg-8">
                          {{ product_detail.currency.symbol }}
                          {{
                            Intl.NumberFormat().format(product_detail.size_30)
                          }}
                        </div>
                      </div>
                    </li>
                    <li
                      class="list-group-item"
                      v-if="product_detail.size_40 > 0"
                    >
                      <div class="row">
                        <div class="col-lg-4">
                          <b>Size 40</b>
                        </div>
                        <div class="col-lg-8">
                          {{ product_detail.currency.symbol }}
                          {{
                            Intl.NumberFormat().format(product_detail.size_40)
                          }}
                        </div>
                      </div>
                    </li>
                    <li
                      class="list-group-item"
                      v-if="product_detail.size_50 > 0"
                    >
                      <div class="row">
                        <div class="col-lg-4">
                          <b>Size 50</b>
                        </div>
                        <div class="col-lg-8">
                          {{ product_detail.currency.symbol }}
                          {{
                            Intl.NumberFormat().format(product_detail.size_50)
                          }}
                        </div>
                      </div>
                    </li>
                    <li
                      class="list-group-item"
                      v-if="product_detail.size_60 > 0"
                    >
                      <div class="row">
                        <div class="col-lg-4">
                          <b>Size 60</b>
                        </div>
                        <div class="col-lg-8">
                          {{ product_detail.currency.symbol }}
                          {{
                            Intl.NumberFormat().format(product_detail.size_60)
                          }}
                        </div>
                      </div>
                    </li>
                    <li
                      class="list-group-item"
                      v-if="product_detail.size_70 > 0"
                    >
                      <div class="row">
                        <div class="col-lg-4">
                          <b>Size 70</b>
                        </div>
                        <div class="col-lg-8">
                          {{ product_detail.currency.symbol }}
                          {{
                            Intl.NumberFormat().format(product_detail.size_70)
                          }}
                        </div>
                      </div>
                    </li>
                    <li
                      class="list-group-item"
                      v-if="product_detail.size_80 > 0"
                    >
                      <div class="row">
                        <div class="col-lg-4">
                          <b>Size 80</b>
                        </div>
                        <div class="col-lg-8">
                          {{ product_detail.currency.symbol }}
                          {{
                            Intl.NumberFormat().format(product_detail.size_80)
                          }}
                        </div>
                      </div>
                    </li>
                    <li
                      class="list-group-item"
                      v-if="product_detail.size_90 > 0"
                    >
                      <div class="row">
                        <div class="col-lg-4">
                          <b>Size 90</b>
                        </div>
                        <div class="col-lg-8">
                          {{ product_detail.currency.symbol }}
                          {{
                            Intl.NumberFormat().format(product_detail.size_90)
                          }}
                        </div>
                      </div>
                    </li>
                    <li
                      class="list-group-item"
                      v-if="product_detail.size_100 > 0"
                    >
                      <div class="row">
                        <div class="col-lg-4">
                          <b>Size 100</b>
                        </div>
                        <div class="col-lg-8">
                          {{ product_detail.currency.symbol }}
                          {{
                            Intl.NumberFormat().format(product_detail.size_100)
                          }}
                        </div>
                      </div>
                    </li>
                    <li
                      class="list-group-item"
                      v-if="product_detail.size_110 > 0"
                    >
                      <div class="row">
                        <div class="col-lg-4">
                          <b>Size 110</b>
                        </div>
                        <div class="col-lg-8">
                          {{ product_detail.currency.symbol }}
                          {{
                            Intl.NumberFormat().format(product_detail.size_110)
                          }}
                        </div>
                      </div>
                    </li>
                    <li
                      class="list-group-item"
                      v-if="product_detail.size_120 > 0"
                    >
                      <div class="row">
                        <div class="col-lg-4">
                          <b>Size 120</b>
                        </div>
                        <div class="col-lg-8">
                          {{ product_detail.currency.symbol }}
                          {{
                            Intl.NumberFormat().format(product_detail.size_120)
                          }}
                        </div>
                      </div>
                    </li>
                    <li
                      class="list-group-item"
                      v-if="product_detail.size_130 > 0"
                    >
                      <div class="row">
                        <div class="col-lg-4">
                          <b>Size 130</b>
                        </div>
                        <div class="col-lg-8">
                          {{ product_detail.currency.symbol }}
                          {{
                            Intl.NumberFormat().format(product_detail.size_130)
                          }}
                        </div>
                      </div>
                    </li>
                    <li
                      class="list-group-item"
                      v-if="product_detail.size_140 > 0"
                    >
                      <div class="row">
                        <div class="col-lg-4">
                          <b>Size 140</b>
                        </div>
                        <div class="col-lg-8">
                          {{ product_detail.currency.symbol }}
                          {{
                            Intl.NumberFormat().format(product_detail.size_140)
                          }}
                        </div>
                      </div>
                    </li>
                    <li
                      class="list-group-item"
                      v-if="product_detail.size_150 > 0"
                    >
                      <div class="row">
                        <div class="col-lg-4">
                          <b>Size 150</b>
                        </div>
                        <div class="col-lg-8">
                          {{ product_detail.currency.symbol }}
                          {{
                            Intl.NumberFormat().format(product_detail.size_150)
                          }}
                        </div>
                      </div>
                    </li>
                    <li
                      class="list-group-item"
                      v-if="product_detail.size_160 > 0"
                    >
                      <div class="row">
                        <div class="col-lg-4">
                          <b>Size 160</b>
                        </div>
                        <div class="col-lg-8">
                          {{ product_detail.currency.symbol }}
                          {{
                            Intl.NumberFormat().format(product_detail.size_160)
                          }}
                        </div>
                      </div>
                    </li>
                    <li
                      class="list-group-item"
                      v-if="product_detail.size_170 > 0"
                    >
                      <div class="row">
                        <div class="col-lg-4">
                          <b>Size 170</b>
                        </div>
                        <div class="col-lg-8">
                          {{ product_detail.currency.symbol }}
                          {{
                            Intl.NumberFormat().format(product_detail.size_170)
                          }}
                        </div>
                      </div>
                    </li>
                    <li
                      class="list-group-item"
                      v-if="product_detail.size_180 > 0"
                    >
                      <div class="row">
                        <div class="col-lg-4">
                          <b>Size 180</b>
                        </div>
                        <div class="col-lg-8">
                          {{ product_detail.currency.symbol }}
                          {{
                            Intl.NumberFormat().format(product_detail.size_180)
                          }}
                        </div>
                      </div>
                    </li>
                    <li
                      class="list-group-item"
                      v-if="product_detail.size_190 > 0"
                    >
                      <div class="row">
                        <div class="col-lg-4">
                          <b>Size 190</b>
                        </div>
                        <div class="col-lg-8">
                          {{ product_detail.currency.symbol }}
                          {{
                            Intl.NumberFormat().format(product_detail.size_190)
                          }}
                        </div>
                      </div>
                    </li>
                    <li
                      class="list-group-item"
                      v-if="product_detail.size_200 > 0"
                    >
                      <div class="row">
                        <div class="col-lg-4">
                          <b>Size 200</b>
                        </div>
                        <div class="col-lg-8">
                          {{ product_detail.currency.symbol }}
                          {{
                            Intl.NumberFormat().format(product_detail.size_200)
                          }}
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="row mt-5">
                <span><b>Catatan</b></span>
                <p v-if="product_detail.remark" style="white-space: pre-line">
                  {{ product_detail.remark }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import shrimp_prices from "../assets/shrimp_prices.json";

export default {
  name: "Detail",
  data() {
    return {
      product_detail: [],
    };
  },
  mounted() {
    this.getDetail();
  },
  methods: {
    getDetail() {
      let allData = shrimp_prices.data;

      let results = allData.filter((item) => {
        return item.id == this.$route.params.id;
      });

      this.product_detail = results[0];
    },
  },
};
</script>
