<template>
  <b-container id="app">
    <b-row class="justify-content-md-center">
      <b-col cols="12" sm="9" md="6" lg="4" xl="4">
        <vue-confirm-dialog class="asc_yp-confirm" />
        <router-view/>
      </b-col>
    </b-row>
  </b-container>
</template>

<style>
body {
  background: #211f2a !important;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
.pointer {
  cursor: pointer
}
</style>
<style lang="sass">
  .asc_yp-auth
    position: relative
    min-height: 30vh
    margin: 25vh auto
    padding: 20px
    border-radius: 10px
    background: #181818
    color: #a3a3a3
    box-shadow: 0 0 10px #141414
    .asc_yp-auth-header
      text-transform: capitalize
  .asc_yp-peopleList
    position: relative
    height: 90vh
    margin: 5vh auto
    padding: 20px
    border-radius: 10px
    background: #181818
    color: #a3a3a3
    box-shadow: 0 0 10px #141414
    .asc_yp-peopleList-header
      position: relative
      height: 7vh
      .asc_yp-peopleList-header-input
        width: 100%
      .asc_yp-peopleList-header-h1
        margin-top: .5rem
        font-size: 20px
        text-align: center
      .asc_yp-peopleList-header-button
        margin-top: .25rem
        font-weight: bold
        width: 100%
    .asc_yp-peopleList-body
      position: relative
      height: 80vh
      overflow: auto
      .asc_yp-peopleList-body-list
        & ul
          list-style: none
          padding: 0
          & li
            line-height: 30px
            border-bottom: 1px #202020 solid
            font-weight: 400
            & span
              width: 10vw
              display: inline-block
              color: #626262
              font-size: 12px
              line-height: 32px
            &:last-child
              border-bottom: none
            & a
              padding: 10px
              color: #a3a3a3
              text-decoration: none
              display: block
              &:hover
                transition: .2s
                background: #000
              & span
                float: right
                color: #626262
                font-size: 12px
                line-height: 32px
  .asc_yp-confirm
    .vc-container
      background: #141414
      .vc-text
        color: #fff
    .vc-btn
      background: #141414
      border: none
      color: #fff
      &:hover
        background: #000
  .input--alert
    border: red !important
</style>
