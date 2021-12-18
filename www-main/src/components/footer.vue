<script>
import {
  FacebookIcon,
  TwitterIcon,
  InstagramIcon,
  LinkedinIcon,
} from 'vue-feather-icons';
import { BContainer, BRow, BCol } from 'bootstrap-vue';

export default {
  components: {
    FacebookIcon,
    TwitterIcon,
    InstagramIcon,
    LinkedinIcon,
    BContainer,
    BRow,
    BCol,
  },
};
</script>

<template>
  <!-- Footer Start -->
  <div class="footer-alt py-3">
    <b-container>
      <b-row>
        <b-col lg="12">
          <div class="text-center">
            <p class="text-white-50 font-size-15 mb-0">
              {{ new Date().getFullYear() }} © Palms and Dates
            </p>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
  <!-- Footer End -->
</template>
