<template>
  <b-row class="asc_yp-auth-body">
    <b-col cols="12" class="mb-2">
      <b-form-group :label="$t('name')">
        <b-form-input type="text" v-model="form.name" />
      </b-form-group>
    </b-col>
    <b-col cols="12" class="mb-2">
      <b-form-group :label="$t('email')">
        <b-form-input type="email" v-model="form.email" />
      </b-form-group>
    </b-col>
    <b-col cols="12" class="mb-2">
      <b-form-group :label="$t('password')">
        <b-form-input type="password" v-model="form.password" />
      </b-form-group>
    </b-col>
    <b-col cols="12" class="mb-2">
      <b-button variant="success" @click="register()">
        {{ $t('register') }}
      </b-button>
    </b-col>
  </b-row>
</template>
<script>
import { mapActions } from 'vuex'
import { required, email } from 'vuelidate/lib/validators'
export default {
  name: 'Register',
  data: () => ({
    showError: false,
    form: {
      name: '',
      email: '',
      password: ''
    }
  }),
  methods: {
    ...mapActions(['Register']),
    async register () {
      this.$v.$touch()
      if (this.$v.$invalid) {
        alert('field error')
      } else {
        const User = {
          username: this.form.name,
          email: this.form.email,
          password: this.form.password
        }
        try {
            await this.Register(User);
            this.$router.push({ name: 'Home' });
            this.showError = false
        } catch (error) {
          this.showError = true
        }
      }
    }
  },
  validations: {
    form: {
      name: {
        required
      },
      email: {
        required,
        email
      },
      password: {
        required
      }
    }
  }
}
</script>
