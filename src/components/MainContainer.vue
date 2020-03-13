<template>
  <div class="container is-widescreen">
    <Header/>
    <FeaturedProducts/>
    <Footer/>
  </div>
</template>

<script lang="ts">
import {Vue, Component} from 'vue-property-decorator'
import Header from "./Header.vue";
import Footer from "./Footer.vue";
import FeaturedProducts from "./FeaturedProducts.vue";

@Component({
  components: {
    Header,
    Footer,
    FeaturedProducts
  },
})
export default class MainContainer extends Vue {

}
</script>