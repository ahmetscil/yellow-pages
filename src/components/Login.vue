<template>
  <b-row class="asc_yp-auth-body">
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
      <b-button variant="success" @click="login()">
        {{ $t('login') }}
      </b-button>
    </b-col>
  </b-row>
</template>
<script>
import { mapActions } from 'vuex'
import { required, email } from 'vuelidate/lib/validators'
export default {
  name: 'Login',
  data: () => ({
    showError: false,
    form: {
      email: '',
      password: ''
    }
  }),
  methods: {
    ...mapActions(['LogIn']),
    async login () {
      this.$v.$touch()
      if (this.$v.$invalid) {
        alert('field error')
      } else {
        const User = new FormData();
        User.append("email", this.form.email);
        User.append("password", this.form.password);
        try {
            await this.LogIn(User);
            this.$router.push("/People");
            this.showError = false
        } catch (error) {
          this.showError = true
        }
      }
    }
  },
  validations: {
    form: {
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
