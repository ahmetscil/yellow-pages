<template>
  <div class="asc_yp-peopleList">
    <b-row class="asc_yp-peopleList-header">
      <b-col cols="10">
        <b-form-input v-model="searchKey" autofocus type="search" placeholder="Search..." class="asc_yp-peopleList-header-input" @keyup="searchThis()" />
      </b-col>
      <b-col cols="2">
        <router-link :to="{ name: 'New' }" class="asc_yp-peopleList-header-button btn btn-dark btn-sm">
          +
        </router-link>
      </b-col>
    </b-row>
    <b-row class="asc_yp-peopleList-body">
      <b-col cols="12" class="asc_yp-peopleList-body-list">
        <ul>
          <li v-for="(user, i) in listData" :key="i">
            <router-link :to="{ name: 'Item', params: { id: user.id, name: user.name } }">
              {{ user.name }}
              <span>
                {{ user.company }}
              </span>
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
  data: () => ({
    searchKey: null
  }),
  computed: {
    ...mapState(['listData'])
  },
  watch: {
    searchKey: function (e) {
      this.searchPeople(e)
    }
  },
  mounted () {
    if (this.$route.query.search) {
      this.searchKey = this.$route.query.search
      this.searchPeople(this.searchKey)
    } else {
      this.getData()
    }
  },
  methods: {
    getData () {
      this.$store.dispatch('getList', { ...this.data, api: 'people'})
    },
    searchThis () {
      this.$router.push({ name: 'Home', query: { search: this.searchKey } })
    },
    searchPeople (e) {
      let sType = 'single'
      if (parseInt(e)) {
        sType = 'number'
      } else {
        sType = 'single'
      }
      this.$store.dispatch('searchData', { ...this.data, key: e, type: sType})
    }
  }
}
</script>
