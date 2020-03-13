<template>
  <section class="banner-section">
    <div class="tile is-ancestor">
      <div class="tile">
        <figure class="image is-48x48">
          <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image" />
        </figure>Free Shipping
      </div>
      <div class="tile">
        <figure class="image is-48x48">
          <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image" />
        </figure>100% Money Guarantee
      </div>
      <div class="tile">
        <figure class="image is-48x48">
          <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image" />
        </figure>Help Center
      </div>
      <div class="tile">
        <figure class="image is-48x48">
          <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image" />
        </figure>Payment Method
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component
export default class Banner extends Vue {}
</script>

<style scoped>
section.banner-section {
    margin: 50px;
}
</style>