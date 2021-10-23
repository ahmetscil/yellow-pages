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
          {{ user.name + ' ' + user.surname }}
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
            {{ user.name }}
          </li>
          <li>
            {{ user.surname }}
          </li>
          <li>
            {{ user.company }}
          </li>
          <li v-for="(phone, p) in user.phone" :key="`phone${p}`">
            <b-row>
              <b-col cols="10">
                {{ phone.number }}
              </b-col>
              <b-col cols="2" class="pointer" @click="removeNumber()">
                -
              </b-col>
            </b-row>
          </li>
          <li>
            <AddNumber />
          </li>
        </ul>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import AddNumber from '@/components/AddNumber.vue'
export default {
  name: 'ShowItem',
  components: {
    AddNumber
  },
  data: () => ({
    addNew: false,
    newNumber: null,
    user: {
      id: 1,
      name: 'Ahmet',
      surname: 'Selim',
      company: 'Canvas',
      phone: [
        { number: 1123123123 },
        { number: 2342342345 },
        { number: 4564564562 },
        { number: 7686786786 }
      ]
    }
  }),
  methods: {
    searchThis () {
      console.log(this.search)
    },
    editMode () {
      this.$store.commit('setMode', true)
    },
    addNumber () {

    },
    removeNumber () {
      this.$confirm(
        {
          message: `Are you sure?`,
          button: {
            no: 'No',
            yes: 'Yes'
          },
          callback: confirm => {
            if (confirm) {
              console.log(confirm)
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