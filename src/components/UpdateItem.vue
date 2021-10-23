<template>
  <div>
    <b-row class="asc_yp-peopleList-header">
      <b-col cols="3">
        <b-button size="sm" variant="dark" class="asc_yp-peopleList-header-button" @click="editMode()">
          cancel
        </b-button>
      </b-col>
      <b-col cols="6">
        <h1 class="asc_yp-peopleList-header-h1">
          Update User
        </h1>
      </b-col>
      <b-col cols="3">
        <b-button size="sm" class="asc_yp-peopleList-header-button" variant="dark">
          save
        </b-button>
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
          <li v-for="(phone, p) in user.phone" :key="`phone${p}`">
            <b-row>
              <b-col cols="10">
                <b-form-group :label="$t('number')">
                  <b-form-input v-model="phone.number" />
                </b-form-group>
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
  name: 'UpdateItem',
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
    editMode () {
      this.$store.commit('setMode', false)
    },
    searchThis () {
      console.log(this.search)
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