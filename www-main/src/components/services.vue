<script>
import SvgIcon from '@jamescoyle/vue-icon';
import {
  mdiRocketLaunch,
  mdiAccount,
  mdiHome,
  mdiVote,
  mdiHelpCircle,
} from '@mdi/js';
import { BContainer, BRow, BCol } from 'bootstrap-vue';

export default {
  components: {
    SvgIcon,
    BContainer,
    BRow,
    BCol,
  },
  data() {
    return {
      pathRocket: mdiRocketLaunch,
      pathAccount: mdiAccount,
      pathHome: mdiHome,
      pathVote: mdiVote,
      pathHelp: mdiHelpCircle,
    };
  },
};
</script>

<template>
  <!-- Why Choose Us Start -->
  <section class="section">
    <b-container>
      <b-row class="align-items-center">
        <b-col lg="4">
          <div class="mb-4 mb-lg-0">
            <div class="p-2 bg-soft-primary d-inline-block rounded mb-4">
              <div class="icon-xxl">
                <svg-icon
                  type="mdi"
                  :path="pathRocket"
                  style="color: #e48669;"
                ></svg-icon>
              </div>
            </div>
            <h3>Mission</h3>
            <p class="text-muted mb-4 text-justify">
              Let's face it; the pandemic has stagnated communities. It's time
              to start building, and we ought to begin with those who do it
              best. Students.
            </p>
          </div>
        </b-col>
        <b-col lg="8">
          <b-row>
            <b-col md="6">
              <div
                class="wc-box rounded text-center wc-box-primary p-4 mt-md-5"
              >
                <div class="wc-box-icon">
                  <svg-icon type="mdi" :path="pathAccount"></svg-icon>
                </div>
                <h5 class="font-weight-bold mb-2 wc-title mt-4">
                  Meet Students
                </h5>
                <p class="text-muted mb-0 font-size-15 wc-subtitle">
                  Find people you vibe with on campus through events, on a
                  simple interface.
                </p>
              </div>
              <div class="wc-box rounded text-center wc-box-primary p-4">
                <div class="wc-box-icon">
                  <svg-icon type="mdi" :path="pathHome"></svg-icon>
                </div>
                <h5 class="font-weight-bold mb-2 wc-title mt-4">
                  Build Community
                </h5>
                <p class="text-muted mb-0 font-size-15 wc-subtitle">
                  Creating events and making everyone feel included and warm is
                  all we want.
                </p>
              </div>
            </b-col>
            <b-col md="6">
              <div class="wc-box rounded text-center wc-box-primary p-4">
                <div class="wc-box-icon">
                  <svg-icon type="mdi" :path="pathVote"></svg-icon>
                </div>
                <h5 class="font-weight-bold mb-2 wc-title mt-4">
                  Democracy
                </h5>
                <p class="text-muted mb-0 font-size-15 wc-subtitle">
                  Vote on events that you find interesting and matter to you.
                </p>
              </div>
              <div class="wc-box rounded text-center wc-box-primary p-4">
                <div class="wc-box-icon">
                  <svg-icon type="mdi" :path="pathHelp"></svg-icon>
                </div>
                <h5 class="font-weight-bold mb-2 wc-title mt-4">
                  Feedback
                </h5>
                <p class="text-muted mb-0 font-size-15 wc-subtitle">
                  Get your voices heard; if you have a suggestion let organizers know!
                </p>
              </div>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
    </b-container>
  </section>
  <!-- Why Choose Us End -->
</template>
