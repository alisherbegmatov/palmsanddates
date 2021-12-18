<script>
import SvgIcon from '@jamescoyle/vue-icon';
import { mdiAccountGroup, mdiAccountTie } from '@mdi/js';
import {
  LayoutIcon,
  LifeBuoyIcon,
  ServerIcon,
  RssIcon,
} from 'vue-feather-icons';
import { BContainer, BRow, BCol } from 'bootstrap-vue';

export default {
  components: {
    LayoutIcon,
    LifeBuoyIcon,
    ServerIcon,
    RssIcon,
    SvgIcon,
    BContainer,
    BRow,
    BCol,
  },
  data() {
    return {
      pathStudents: mdiAccountGroup,
      pathManager: mdiAccountTie,
    };
  },
};
</script>

<template>
  <div>
    <!-- Features Start -->
    <section
      class="section bg-light feather-bg-img"
      :style="{
        'background-image':
          'url(' + require('@/assets/images/features-bg-img.png') + ')',
      }"
      id="features"
    >
      <b-container>
        <b-row class="justify-content-center">
          <b-col lg="6">
            <div class="text-center mb-5">
              <h3 class="title mb-3">It's a Win-Win Platform</h3>
              <p class="text-muted font-size-15">
                Whether you're a building manager or a student.
                <br />We got you covered.
              </p>
            </div>
          </b-col>
        </b-row>
        <b-row class="align-items-center">
          <b-col lg="6">
            <div class="mb-4 mb-lg-0">
              <img
                src="@/assets/images/hero-2.webp"
                alt
                class="img-fluid d-block mx-auto"
              />
            </div>
          </b-col>

          <b-col lg="5" offset-lg="1">
            <p class="font-weight-medium text-uppercase mb-2">
              <svg-icon
                type="mdi"
                :path="pathStudents"
                class="mdi h2 text-primary mr-3 align-middle"
              ></svg-icon
              >Students
            </p>
            <h3 class="font-weight-semibold line-height-1_4 mb-4">
              Build
              <b>Community</b> & <b>Long Lasting</b> Friendship
            </h3>
            <p class="text-muted font-size-15 mb-4 text-justify">
              You could be a senior or fresh off the boat; you'll be welcome all
              the same. In addition, you'd be able to scroll through events and
              join in on the fun.
            </p>
            <div class="mt-5">
              <a  href="https://app.palmsanddates.com" target="_blank" class="btn btn-primary mr-2"
                >Redirect Me</a
              >
            </div>
          </b-col>
        </b-row>
      </b-container>
    </section>

    <section
      class="section feather-bg-img"
      :style="{
        'background-image':
          'url(' + require('@/assets/images/features-bg-img-1.png') + ')',
      }"
    >
      <b-container>
        <b-row class="align-items-center">
          <b-col lg="5">
            <p class="font-weight-medium text-uppercase mb-2">
              <svg-icon
                type="mdi"
                :path="pathManager"
                class="mdi h2 text-primary mr-1 align-middle"
              ></svg-icon>
              Event Organizers
            </p>
            <h3 class="font-weight-semibold line-height-1_4 mb-4">
              Create Fun Events With Ease
            </h3>
            <p class="text-muted font-size-15 mb-4 text-justify">
              Create a safe & social environment for students, and a happy
              student is a recurring one. You'll have the power to update and
              notify the students.
            </p>
            <div class="mt-5">
              <a class="btn btn-primary mr-2" href="https://app.palmsanddates.com" target="_blank"
                >Redirect Me</a
              >
            </div>
          </b-col>
          <b-col lg="6" offset-lg="1">
            <div class="mt-4 mt-lg-0">
              <img
                src="@/assets/images/hero-3.webp"
                alt
                class="img-fluid d-block mx-auto"
              />
            </div>
          </b-col>
        </b-row>
      </b-container>
    </section>
    <!-- Features End -->
  </div>
</template>
