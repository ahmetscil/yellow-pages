<template>
  <div class="asc_yp-peopleList">
    <UpdateItem v-if="editMode" />
    <ShowItem v-else />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import UpdateItem from '@/components/UpdateItem.vue'
import ShowItem from '@/components/ShowItem.vue'
export default {
  name: 'Item',
  components: {
    UpdateItem,
    ShowItem
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
  computed: {
    ...mapState(['editMode'])
  },
  methods: {
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