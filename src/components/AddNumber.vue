<template>
  <div>
    <div v-if="addNew">
      <b-row>
        <b-col cols="10">
          <b-form-group :label="$t('number')">
            <b-form-input v-model="number.number" placeholder="number" />
          </b-form-group>
        </b-col>
        <b-col cols="2" class="pointer">
          ok
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
export default {
  name: 'AddNumber',
  data: () => ({
    addNew: false,
    number: {
      people: 1,
      number: null
    }
  }),
  methods: {
    editMode () {
      this.$store.commit('setMode', false)
    }
  }
}
</script>
