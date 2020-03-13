<template>
  <div class="container is-widescreen">
    <Header/>
    <CarouselComp />
    <FeaturedProducts/>
    <Blogs/>
    <Footer/>
  </div>
</template>

<script lang="ts">
import {Vue, Component} from 'vue-property-decorator'
import Header from "./Header.vue";
import Footer from "./Footer.vue";
import FeaturedProducts from "./FeaturedProducts.vue";
import Blogs from "./Blogs.vue";
import CarouselComp from "./Carousel.vue";

@Component({
  components: {
    Header,
    CarouselComp,
    Footer,
    FeaturedProducts,
    Blogs
  },
})
export default class MainContainer extends Vue {

}
</script>