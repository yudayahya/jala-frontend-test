<template>
  <div class="bg-white">
    <div class="row py-3">
      <div class="col-lg-12 px-5">
        <div class="row">
          <div class="col-lg-6 d-flex justify-content-between">
            <label class="col-form-label"><b>Filter :</b></label>
            <div class="col-lg-11">
              <select class="form-select">
                <option value="">Pilih</option>
              </select>
            </div>
          </div>
          <div class="col-lg-2">
            <select class="form-select">
              <option value="">Pilih</option>
            </select>
          </div>
          <div class="col-lg-2">
            <select class="form-select">
              <option value="">Pilih</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FilterComponent",
};
</script>