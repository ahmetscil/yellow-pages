<template>
  <div class="asc_yp-peopleList">
    <b-row class="asc_yp-peopleList-header">
      <b-col cols="10">
        <b-form-input v-model="search" type="search" placeholder="Search..." class="asc_yp-peopleList-header-input" @keyup="searchThis()" />
      </b-col>
      <b-col cols="2">
        <router-link :to="{ name: 'New' }" class="asc_yp-peopleList-header-button btn btn-dark btn-sm">
          +
        </router-link>
      </b-col>
    </b-row>
    <b-row class="asc_yp-peopleList-body">
      <b-col cols="12" class="asc_yp-peopleList-body-list">
        {{ listData }}
        <ul>
          <li v-for="(user, i) in users" :key="i">
            <router-link :to="{ name: 'Item', params: { id: user.id, name: user.name } }">
              {{ user.name }}
            </router-link>
          </li>
        </ul>
      </b-col>
    </b-row>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  name: 'People',
  props: {
    msg: String
  },
  data: () => ({
    search: null,
    users: [
      { id: 1, name: 'a' },
      { id: 2, name: 'b' },
      { id: 3, name: 'c' },
      { id: 4, name: 'd' },
      { id: 5, name: 'e' },
      { id: 6, name: 'f' },
      { id: 7, name: 'g' },
    ]
  }),
  computed: {
    ...mapState(['listData'])
  },
  mounted () {
    this.getData()
  },
  methods: {
    getData () {
      this.$store.dispatch('getList', { ...this.data, api: 'people'})
    },
    searchThis () {
      console.log(this.search)
    }
  }
}
</script>
