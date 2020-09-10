<template>
  <div id="app">
    <v-table 
      :members_data="MEMBERS"
    />
  </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex';
import vTable from './components/table/v-table';

export default {
  name: 'App',
  components: {
    vTable,
  },
  data: () => {
    return {

    }
  },
  computed: {
    ...mapGetters([
      'MEMBERS'
    ])
  },
  methods: {
    ...mapActions([
      'GET_MEMBERS'
    ])
  },
  mounted() {
    this.GET_MEMBERS()
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
