<template>
    <b-navbar>
        <template slot="brand">
            <b-navbar-item>
                <img
                    src="../assets/YOUSHOP.png"
                    alt="You Shop"
                >
            </b-navbar-item>
        </template>
        <template slot="start">
            <b-navbar-item href="#">
                Home
            </b-navbar-item>
            <b-navbar-item href="#">
                Documentation
            </b-navbar-item>
            <b-navbar-dropdown label="All Categories">
                <b-navbar-item href="#" v-for="(category, index) in categories" :key="index">
                    {{ category.name }}
                </b-navbar-item>
            </b-navbar-dropdown>
        </template>

        <template slot="end">
            <b-navbar-item tag="div">
                <div class="buttons">
                    <a class="button is-primary">
                        <strong>Sign up</strong>
                    </a>
                    <a class="button is-light">
                        Log in
                    </a>
                </div>
            </b-navbar-item>
        </template>
    </b-navbar>
</template>

<script lang="ts">
import {Vue, Component} from 'vue-property-decorator'
import * as api from "../utils/util";
import { Category } from "../types/types";

@Component
export default class Header extends Vue {
  categories: Array<Category> = [];

  created() {
    this.categories = api.getCategoryItems();
  }
}
</script>