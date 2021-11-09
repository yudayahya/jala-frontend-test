<template>
  <c-box>
    <div class="row">
      <div class="col-lg-12">
        <div class="card">
          <div
            class="card-header bg-transparent d-flex justify-content-between"
          >
            <h6>List Harga Udang</h6>
            <c-button variant-color="blue" size="xs">TAMBAHKAN HARGA</c-button>
          </div>
          <div class="card-body">
            <div class="table-responsive">
              <table class="table table-striped">
                <thead>
                  <tr>
                    <th>Tanggal</th>
                    <th>Lokasi</th>
                    <th>Supplier</th>
                    <th>Harga Size 100</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="product in products" :key="product.id">
                    <td>{{ format_date(product.date) }}</td>
                    <td>
                      <span class="text-primary"
                        ><b>{{ product.region.province_name }}</b></span
                      >
                      <br />
                      <span>{{ product.region.regency_name }}</span>
                    </td>
                    <td>
                      <i
                        class="fas fa-check-circle mr-3"
                        style="color: rgb(69, 210, 242)"
                      ></i>
                      <span
                        ><b>{{ product.creator.name }}</b></span
                      >
                    </td>
                    <td>
                      {{ product.currency.symbol }}
                      {{ Intl.NumberFormat().format(product.size_100) }}
                      <i
                        v-if="
                          product.shrimp_price_per_week_region_id
                            .diff_max_size_100 !== 0
                        "
                        class="fas fa-arrow-up text-success"
                      ></i>
                    </td>
                    <td>
                      <router-link
                        :to="{
                          name: 'ProductDetail',
                          params: { id: product.id },
                        }"
                        class="btn btn-primary"
                        >LIHAT DETAIL</router-link
                      >
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </c-box>
</template>

<script>
import { CBox } from "@chakra-ui/vue";
import shrimp_prices from "../assets/shrimp_prices.json";
import moment from "moment";

export default {
  name: "TabelListHarga",
  data() {
    return {
      products: shrimp_prices.data,
    };
  },
  components: {
    CBox,
  },
  methods: {
    format_date(value) {
      if (value) {
        return moment(String(value)).format("DD MMMM YYYY");
      }
    },
  },
};
</script>
