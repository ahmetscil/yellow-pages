<template>
  <div>
    <b-row class="asc_yp-peopleList-header">
      <b-col cols="3">
        <router-link :to="{ name: 'Home' }" class="asc_yp-peopleList-header-button btn btn-sm btn-dark">
          {{ $t('cancel') }}
        </router-link>
      </b-col>
      <b-col cols="6">
        <h1 class="asc_yp-peopleList-header-h1">
          {{ $t('newUser') }}
        </h1>
      </b-col>
      <b-col cols="3">
        <b-button size="sm" class="asc_yp-peopleList-header-button" variant="dark" @click="saveForm()">
          {{ $t('save') }}
        </b-button>
      </b-col>
    </b-row>
    <b-row v-if="infoStatus">
      <b-col>
        <b-alert show>
          {{ infoMessage }}
        </b-alert>
      </b-col>
    </b-row>
    <b-row class="asc_yp-peopleList-body">
      <b-col cols="12" class="asc_yp-peopleList-body-list">
        <ul>
          <li>
            <b-form-group :label="$t('name')">
              <b-form-input v-model="user.name" />
            </b-form-group>
          </li>
          <li>
            <b-form-group :label="$t('surname')">
              <b-form-input v-model="user.surname" />
            </b-form-group>
          </li>
          <li>
            <b-form-group :label="$t('company')">
              <b-form-input v-model="user.company" />
            </b-form-group>
          </li>
          <li>
            <b-row>
              <b-col cols="10">
                <b-form-group :label="$t('number')" :class="{ 'input--alert': $v.newNumber.$error }">
                  <b-form-input v-model="newNumber" placeholder="number" />
                </b-form-group>
              </b-col>
              <b-col cols="2">
                <b-button size="sm" variant="dark" class="mt-4" @click="addNew()">
                  +
                </b-button>
              </b-col>
            </b-row>
          </li>
          <li v-for="(phone, p) in user.phone" :key="`phone${p}`">
            {{ phone }}
          </li>
        </ul>
      </b-col>
    </b-row>
  </div>
</template>
<script>
import { mapState } from 'vuex'
import { required, numeric } from 'vuelidate/lib/validators'
export default {
  name: 'NewItem',
  data: () => ({
    newNumber: null,
    user: {
      id: 1,
      name: '',
      surname: '',
      company: '',
      phone: []
    }
  }),
  computed: {
    ...mapState(['infoStatus, infoMessage'])
  },
  methods: {
    addNew () {
      this.$v.newNumber.$touch()
      if (this.$v.$invalid) {
        alert('field error')
      } else {
        const newNum = this.newNumber
        this.user.phone.push(newNum)
        this.newNumber = null
      }
    },
    saveForm () {
      this.$store.dispatch('postData', { ...this.data, form: this.user, api: 'people'})
    }
  },
  validations: {
    newNumber: {
      required,
      numeric
    }
  }
}
</script>
