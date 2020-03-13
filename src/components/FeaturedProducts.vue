<template>
  <section>
    <b-tabs>
      <template v-for="(category, index) in categories">
        <b-tab-item :key="index" :label="category.name">
          <div class="card product-info" v-for="(product, index) in getFeaturedProducts(category.id)" :key="index">
            <div class="card-image">
              <figure class="image is-4by3">
                <a>
                  <img :src="product.imageLink" />
                </a>
              </figure>
            </div>
            <div class="card-content">
              <div class="content">
                <div class="field is-grouped">
                  <p class="control" v-if="product.rating">
                    <b-rate :value="product.rating" show-score disabled />
                  </p>
                </div>
                <p class="title is-6">{{ product.name }}</p>
                <p class="title is-5">${{ product.price }}</p>
              </div>
            </div>
          </div>
        </b-tab-item>
      </template>
    </b-tabs>
  </section>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { Product, Category } from "../types/types";
import * as api from "../utils/util";

@Component
export default class FeaturedProducts extends Vue {
  featuredProducts: Array<Product> = [];
  categories: Array<Category> = [];

  created() {
    this.featuredProducts = api.getProducts();
    this.categories = api.getCategoryItems();
  }

  getFeaturedProducts(categoryId: number) {
    return this.featuredProducts.filter(x => x.categoryId === categoryId);
  }
}
</script>

<style scoped>
.card.product-info {
  width: 300px;
  float: left;
}
</style>