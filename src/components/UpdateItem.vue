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
        <b-button size="sm" class="asc_yp-peopleList-header-button" variant="dark" @click="submitForm()">
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
        </ul>
      </b-col>
      <b-col cols="12" class="mt-5 text-danger">
        <span style="float: right; text-align: right" @click="removeItem()">
          {{ $t('delete') }}
        </span>
      </b-col>
    </b-row>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  name: 'UpdateItem',
  data: () => ({
    addNew: false,
    newNumber: null,
    user: {
      name: null,
      surname: null,
      company: null
    }
  }),
  watch: {
    infoStatus:function(val) {
      if(val) {
        this.editMode()
        this.$store.dispatch('getContent', { ...this.data, api: 'people', show: this.$route.params.id})
      }
    },
    itemInfoStatus:function(val) {
      if(val) {
        this.editMode()
        this.$router.push("/People");
      }
    }
  },
  computed: {
    ...mapState(['content', 'infoStatus', 'itemInfoStatus'])
  },
  mounted () {
    this.user.name = this.content.name
    this.user.surname = this.content.surname
    this.user.company = this.content.company
  },
  methods: {
    editMode () {
      this.$store.commit('setMode', false)
    },
    submitForm () {
      const formData = {
        name: this.user.name,
        surname: this.user.surname,
        company: this.user.company
      }
      console.log(formData)
      this.$store.dispatch('updateData', { ...this.data, api: 'people', show: this.$route.params.id, form: formData})
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
    },
    removeItem () {
      this.$confirm(
        {
          message: `Are you sure?`,
          button: {
            no: 'No',
            yes: 'Yes'
          },
          callback: confirm => {
            if (confirm) {
              this.$store.dispatch('removeItem', { ...this.data, api: 'people', show: this.$route.params.id})
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