<template>
  <div class="asc_yp-auth">
    <template v-if="loginMode">
      <b-row class="asc_yp-auth-header">
        <b-col cols="12">
          <h1>{{ $t('login') }}</h1>
        </b-col>
      </b-row>
      <Login />
      <span @click="loginMode = false">
        {{ $t('register') }}
      </span>
    </template>
    <template v-else>
      <b-row class="asc_yp-auth-header">
        <b-col cols="12">
          <h1>{{ $t('register') }}</h1>
        </b-col>
      </b-row>
      <Register />
      <span @click="loginMode = true">
        {{ $t('login') }}
      </span>
    </template>
  </div>
</template>
<script>
import Login from '@/components/Login.vue'
import Register from '@/components/Register.vue'
export default {
  name: 'Home',
  components: {
    Login,
    Register
  },
  data: () => ({
    loginMode: true
  })
}
</script>
