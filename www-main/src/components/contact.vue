<script>
import {
  SendIcon,
  MailIcon,
  LinkIcon,
  PhoneCallIcon,
  ClockIcon,
  MapPinIcon,
} from 'vue-feather-icons';
import { validationMixin } from 'vuelidate';
import { email, required, between } from 'vuelidate/lib/validators';

import {
  BSpinner,
  BContainer,
  BRow,
  BCol,
  BForm,
  BFormGroup,
  BFormInput,
  BFormTextarea,
  BFormInvalidFeedback,
  BButton,
} from 'bootstrap-vue';

export default {
  mixins: [validationMixin],
  components: {
    SendIcon,
    MailIcon,
    LinkIcon,
    PhoneCallIcon,
    ClockIcon,
    MapPinIcon,
    BSpinner,
    BContainer,
    BRow,
    BCol,
    BForm,
    BFormGroup,
    BButton,
    BFormInput,
    BFormTextarea,
    BFormInvalidFeedback,
  },
  validations: {
    form: {
      name: {
        required,
        between: between(1, 40),
      },
      email: {
        required,
        email,
      },
      message: {
        required,
        between: between(1, 100),
      },
    },
  },
  data() {
    return {
      isSending: false,
      form: {
        name: null,
        email: null,
        message: null,
      },
      name: '',
      email: '',
      message: '',
    };
  },
  methods: {
    validateState(name) {
      const { $dirty, $error } = this.$v.form[name];
      return $dirty ? !$error : null;
    },
    resetForm() {
      this.form = {
        name: null,
        email: null,
        message: null,
      };

      this.$nextTick(() => {
        this.$v.$reset();
      });
    },
    async onSubmit() {
      try {
        this.isSending = true;
        this.$v.form.$touch();
        if (this.$v.form.$anyError) {
          this.isSending = false;
          return;
        }
        await this.axios.post('/mail/contact-us', this.form);
        this.isSending = false;
        this.resetForm();
      } catch (error) {
        this.isSending = false;
      }
    },
  },
};
</script>
<template>
  <!-- Contact Us Start -->
  <section class="section bg-light" id="contact">
    <b-container>
      <b-row class="justify-content-center">
        <b-col lg="6">
          <div class="text-center mb-5">
            <h3 class="title mb-3">Contact Us</h3>
            <p class="text-muted font-size-15">
              We love attention, especially if it's from an early adopter. Send
              us a message and we'll get back to you as soon as possible.
            </p>
          </div>
        </b-col>
      </b-row>
      <b-row class="align-items-center">
        <b-col lg="6" class="mx-auto">
          <div class="custom-form mb-5 mb-lg-0">
            <div id="message"></div>
            <b-form
              name="contact-form"
              id="contact-form"
              @submit.stop.prevent="onSubmit"
            >
              <b-row>
                <b-col md="6">
                  <b-form-group label="Name*" label-for="form-name">
                    <b-form-input
                      id="form-name"
                      class="form-control"
                      placeholder="Your name..."
                      v-model="$v.form.name.$model"
                      :state="validateState('name')"
                      aria-describedby="input-name-feedback"
                    ></b-form-input>
                    <b-form-invalid-feedback id="input-name-feedback"
                      >Please enter your name.</b-form-invalid-feedback
                    >
                  </b-form-group>
                </b-col>
                <b-col md="6">
                  <b-form-group label="Email Address*" label-for="form-email">
                    <b-form-input
                      id="form-email"
                      type="email"
                      class="form-control"
                      placeholder="Your email..."
                      v-model="$v.form.email.$model"
                      :state="validateState('email')"
                      aria-describedby="input-email-feedback"
                    ></b-form-input>
                    <b-form-invalid-feedback id="input-email-feedback"
                      >Please enter your email.</b-form-invalid-feedback
                    >
                  </b-form-group>
                </b-col>
              </b-row>
              <b-row>
                <b-col lg="12">
                  <b-form-group label="Message*" label-for="form-message">
                    <b-form-textarea
                      id="form-message"
                      rows="4"
                      class="form-control"
                      placeholder="Your message..."
                      v-model="$v.form.message.$model"
                      :state="validateState('message')"
                      aria-describedby="input-message-feedback"
                    ></b-form-textarea>
                    <b-form-invalid-feedback id="input-message-feedback"
                      >Please enter your message.</b-form-invalid-feedback
                    >
                  </b-form-group>
                </b-col>
              </b-row>
              <b-row>
                <b-col sm="12">
                  <b-button type="submit" variant="primary" class="w-100">
                    <div class="text-center" v-if="!isSending">
                      Send Message
                      <send-icon class="icon-size-15 ml-2 icon"></send-icon>
                    </div>
                    <div class="text-center" v-else>
                      <b-spinner small label="Loading..."></b-spinner>
                    </div>
                  </b-button>
                  <div id="simple-msg"></div>
                </b-col>
              </b-row>
            </b-form>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </section>
  <!-- Contact Us End -->
</template>
