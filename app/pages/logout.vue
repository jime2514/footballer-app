<template>
<div class="container">
 <p>名前：{{ user.name }}</p>
 <p>年齢：{{ user.age }} 歳</p>
 <el-button type="primary" @click="logout">ログアウト</el-button>
</div>
</template>

<script>
export default {
  middleware({ store, redirect }) {
    if(!store.$auth.loggedIn) {
      redirect('/login');
    }
  },
  computed: {
    user() {
      return this.$auth.user;
    }
  },
  methods: {
    logout() {
      this.$auth.logout();
    },
  }
}
</script>

<style>
.container {
  margin: 50px auto;
  width: 300px;
  text-align: center;
}

.button {
    margin-top: 30px;
  }
</style>