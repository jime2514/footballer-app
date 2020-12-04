<template>
<client-only>
  <div class="header-wrapper">
    <div class="cont">
      <div class="headers">

        <div class="header header-1">
          <a href="/">footballer app</a>
        </div>

        <div class="header header-2">
          <a href="/posts/">投稿一覧</a>
        </div>

        <div class="header header-3">
          <a href="">{{user.id}}</a>
        </div>

        <div class="header header-4">
          <a href="/">ログイン</a>
        </div>

      </div>
    </div>
  </div>
</client-only>
</template>

<style>

.headers{
  width: 100%;
  height: 70px;
  background-color: aquamarine;
}

.headers {
  display: inline-block;
}

.header {
  display: inline-block;
}

.header a {
  color: black;
  font-size: 20px;
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 20px;
  padding-top: 20px;
  margin-top: 30px;
}


</style>



<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['user'])
  }
}
</script>