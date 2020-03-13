<template>
    <section>
        <b-carousel
            :indicator="indicator"
            :indicator-background="indicatorBackground"
            :indicator-inside="indicatorInside"
            :indicator-mode="indicatorMode"
            :indicator-position="indicatorPosition"
            :indicator-style="indicatorStyle">
            <b-carousel-item v-for="(carousel, i) in carousels" :key="i">
                <section class="hero is-medium">
                    <div class="hero-body has-text-centered">
                        <h1 class="title">{{carousel.title}}</h1>
                    </div>
                </section>
            </b-carousel-item>
        </b-carousel>
    </section>
</template>
<script lang="ts">
import {Vue, Component} from 'vue-property-decorator'
import { Carousel } from '../types/types';
import * as api from "../utils/util";

@Component
export default class CarouselComp extends Vue {
  indicator = true;
  indicatorBackground = true;
  indicatorInside = true;
  indicatorMode = 'hover';
  indicatorPosition = 'is-top';
  indicatorStyle = 'is-lines';

  carousels: Array<Carousel> = []

  created() {
    this.carousels = api.getCarouselItems();
  }
}
</script>