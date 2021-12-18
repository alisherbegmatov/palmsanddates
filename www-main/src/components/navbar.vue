<script>
import SvgIcon from '@jamescoyle/vue-icon';
import { mdiMenu } from '@mdi/js';
import { ArrowRightCircleIcon } from 'vue-feather-icons';
import {
  BContainer,
  BNavbarBrand,
  BCollapse,
  BNavItem,
  BNavbarNav,
} from 'bootstrap-vue';

export default {
  props: {
    navbarcolor: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      pathMenu: mdiMenu,
    };
  },
  components: {
    SvgIcon,
    ArrowRightCircleIcon,
    BContainer,
    BNavbarBrand,
    BCollapse,
    BNavItem,
    BNavbarNav,
  },
  mounted: () => {
    window.onscroll = function() {
      onwindowScroll();
    };
    var navbar = document.getElementById('navbar');
    function onwindowScroll() {
      if (
        document.body.scrollTop > 50 ||
        document.documentElement.scrollTop > 50
      ) {
        navbar.classList.add('nav-sticky');
      } else {
        navbar.classList.remove('nav-sticky');
      }
    }
  },
  methods: {
    /**
     * Toggle menu
     */
    toggleMenu() {
      document.getElementById('navbarCollapse').classList.toggle('show');
    },
  },
};
</script>

<template>
  <!--Navbar Start-->
  <nav
    class="navbar navbar-expand-lg fixed-top navbar-custom sticky sticky-dark"
    id="navbar"
    :class="{ 'navbar-light': navbarcolor === true }"
  >
    <b-container>
      <!-- LOGO -->
      <b-navbar-brand class="logo" href="/">
        <img src="@/assets/images/logo.png" alt class="logo-dark" height="60" />
        <img
          src="@/assets/images/logo.png"
          alt
          class="logo-light"
          height="60"
        />
      </b-navbar-brand>
      <button
        class="navbar-toggler"
        type="button"
        @click="toggleMenu()"
        aria-label="Toggle navigation"
      >
        <svg-icon
          type="mdi"
          :path="pathMenu"
          style="color: #e48669;"
        ></svg-icon>
      </button>
      <b-collapse class="navbar-collapse" id="navbarCollapse">
        <b-navbar-nav
          class="ml-auto navbar-center"
          id="mySidenav"
          v-scroll-spy-active
        >
          <b-nav-item href="javascript: void(0);" v-scroll-to="'#home'"
            >Home</b-nav-item
          >
          <b-nav-item
            href="javascript: void(0);"
            v-scroll-to="{ el: '#features', offset: -100 }"
            >Features</b-nav-item
          >
        </b-navbar-nav>
      </b-collapse>
    </b-container>
  </nav>
  <!-- Navbar End -->
</template>
