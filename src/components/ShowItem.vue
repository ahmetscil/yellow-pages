<template>
  <div>
    <b-row class="asc_yp-peopleList-header">
      <b-col cols="3">
        <router-link :to="{name: 'Home'}" class="btn btn-dark btn-sm asc_yp-peopleList-header-button">
          back
        </router-link>
      </b-col>
      <b-col cols="6">
        <h1 class="asc_yp-peopleList-header-h1">
          {{ content.name }}
        </h1>
      </b-col>
      <b-col cols="3">
        <b-button size="sm" variant="dark" class="asc_yp-peopleList-header-button" @click="editMode()">
          edit
        </b-button>
      </b-col>
    </b-row>
    <b-row class="asc_yp-peopleList-body">
      <b-col cols="12" class="asc_yp-peopleList-body-list">
        <ul>
          <li>
            <span>name</span>
            {{ content.name }}
          </li>
          <li>
            <span>surname</span>
            {{ content.surname }}
          </li>
          <li>
            <span>company</span>
            {{ content.company }}
          </li>
          <li v-for="(phone, p) in content.phone" :key="`phone${p}`">
            <b-row>
              <b-col cols="10">
                <a :href="`tel:${phone.number}`">
                  {{ phone.number }}
                </a>
              </b-col>
              <b-col cols="2" class="pointer" @click="removeNumber(phone.id)">
                -
              </b-col>
            </b-row>
          </li>
          <li>
            <AddNumber :people="content.id" />
          </li>
        </ul>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import AddNumber from '@/components/AddNumber.vue'
export default {
  name: 'ShowItem',
  components: {
    AddNumber
  },
   computed: {
    ...mapState(['content'])
  },
  mounted () {
    this.getData()
  },
  methods: {
    getData () {
      this.$store.dispatch('getContent', { ...this.data, api: 'people', show: this.$route.params.id})
    },
    searchThis () {
      console.log(this.search)
    },
    editMode () {
      this.$store.commit('setMode', true)
    },
    removeNumber (e) {
      this.$confirm(
        {
          message: `Are you sure?`,
          button: {
            no: 'No',
            yes: 'Yes'
          },
          callback: confirm => {
            if (confirm) {
              this.$store.dispatch('removeData', { ...this.data, api: 'phone', show: e})
            }
          }
        }
      )
    }
  }
}
</script>
<style lang="sass" scoped>
  .asc_yp-peopleList-body-list
    & ul
      & li
        margin-bottom: 1rem
        & input
          background: transparent
          border: none
          color: #a3a3a3
</style>