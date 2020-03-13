<template>
  <section class="blog-section">
    <div class="paginationSection">
      <b-pagination
        :total="totalPages"
        :current.sync="currentPage"
        :range-before="paginationModel.rangeBefore"
        :range-after="paginationModel.rangeAfter"
        :order="paginationModel.order"
        :size="paginationModel.size"
        :simple="paginationModel.isSimple"
        :rounded="paginationModel.isRounded"
        :per-page="paginationModel.perPage"
        :icon-prev="paginationModel.prevIcon"
        :icon-next="paginationModel.nextIcon"
        aria-next-label="Next page"
        aria-previous-label="Previous page"
        aria-page-label="Page"
        aria-current-label="Current page"
      ></b-pagination>
    </div>
    <div class="container">
      <div class="card blog-info" v-for="(blog, index) in paginatedItems" :key="index">
        <div class="card-content">
          <div class="media">
            <div class="media-left">
              <figure class="image is-48x48">
                <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image" />
              </figure>
            </div>
            <div class="media-content">
              <p class="title is-4">{{ blog.title }}</p>
            </div>
          </div>

          <div class="content">
            {{ blog.description }}
            <br />
            <time datetime="2016-1-1">{{blog.date}}</time>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { Blog } from "../types/types";
import * as api from "../utils/util";
import { slice } from "lodash-es";

@Component
export default class Blogs extends Vue {
  blogs: Array<Blog> = [];
  paginationModel: any = this.initializePaginationModel();
  currentPage = 1;

  created() {
    this.blogs = api.getBlogItems();
  }

  initializePaginationModel() {
    return {
      perPage: 2,
      rangeBefore: 1,
      rangeAfter: 1,
      order: "is-centered",
      size: "is-medium",
      isSimple: false,
      isRounded: false,
      prevIcon: "chevron-left",
      nextIcon: "chevron-right"
    };
  }

  get totalPages() {
    return this.blogs ? this.blogs.length : 0;
  }

  get paginatedItems() {
    const nextElem = (this.currentPage - 1) * this.paginationModel.perPage;
    return slice(this.blogs, nextElem, nextElem + this.paginationModel.perPage);
  }
}
</script>

<style scoped>
.card.blog-info {
  width: 50%;
  float: left;
}
.paginationSection {
  margin-top: 20px;
  margin-bottom: 20px;
}
section.blog-section {
    height: 200px;
}
</style>