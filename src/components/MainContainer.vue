<template>
  <div class="container is-widescreen">
    <div class="notification">
      This container is <strong>fullwidth</strong> <em>until</em> the <code>$widescreen</code> breakpoint.
    </div>
  </div>
</template>

<script lang="ts">
import {Vue, Component} from 'vue-property-decorator'

@Component
export default class MainContainer extends Vue {

}
</script>