<template>
  <el-menu mode="horizontal" :router="true">
    <el-menu-item index="1" :route="{ path: '/' }" >
      Football-App
    </el-menu-item>
    <el-menu-item index="2" :route="{ path: '/posts/all' }">
      投稿一覧
    </el-menu-item>

    <no-ssr>
      <el-menu-item index="4" style="float: right;" :route="{ path: `/users/${user.id}` }" v-if="user">
        <span>{{user.id}}</span>
      </el-menu-item>
      <el-menu-item index="4" style="float: right;" :route="{ path: '/' }" v-else>
        <span>ログイン</span>
      </el-menu-item>
    </no-ssr>
    <el-menu-item index="5" style="float: right" :route="{ path: '/posts/new' }">
      新規投稿
    </el-menu-item>
    <el-menu-item index="6" style="float: right;" :route="{ path: '/logout' }">
        <span>ログアウト</span>
      </el-menu-item>
  </el-menu>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['user'])
  }
}
</script>
