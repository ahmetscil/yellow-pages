<template>
  <div>
    <div v-if="addNew">
      <b-row>
        <b-col cols="10">
          <b-form-group :label="$t('number')">
            <b-form-input v-model="newNumber" placeholder="number" />
          </b-form-group>
        </b-col>
        <b-col cols="2">
          <b-button size="sm" variant="dark" class="mt-4" @click="saveForm()">
            ok
          </b-button>
        </b-col>
      </b-row>
    </div>
    <div v-else>
      <b-row class="pointer" @click="addNew = true">
        <b-col cols="10">
          add new phone
        </b-col>
        <b-col cols="2">
          +
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { required, numeric } from 'vuelidate/lib/validators'
export default {
  name: 'AddNumber',
  props: {
    people: Number
  },
  data: () => ({
    addNew: false,
    newNumber: null
  }),
  computed: {
    ...mapState(['infoStatus', 'infoMessage'])
  },
  watch: {
    infoStatus:function(val) {
      if(val) {
        this.addNew = false
        this.newNumber = null
        this.$store.dispatch('getContent', { ...this.data, api: 'people', show: this.$route.params.id})
      }
    }
  },
  methods: {
    saveForm () {
      this.$v.newNumber.$touch()
      if (this.$v.$invalid) {
        alert('field error')
      } else {
        const form = {
          people: this.people,
          number: this.newNumber
        }
        this.$store.dispatch('postData', { ...this.data, form: form, api: 'phone'})
      }
    },
    editMode () {
      this.$store.commit('setMode', false)
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
