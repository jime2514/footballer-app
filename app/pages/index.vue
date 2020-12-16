<template>
  <section class="container">
    <div class=".login-container">
      <el-form :model="form">
        <el-form-item label="メールアドレス">
          <el-input v-model="form.email" />
        </el-form-item>

        <el-form-item label="パスワード">
          <el-input v-model="form.password" type="password" />
        </el-form-item>

        <el-button type="primary" @click="login" value="ログイン" />
      </el-form>
    </div>
  </section>
</template>

<script>
export default {
  middleware({ store, redirect }) {
    if(store.$auth.loggedIn) {
      redirect('/');
    }
  },
  data() {
    return {
      form: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    async login() {
      try {
        const response = await this.$auth.loginWith('local', { data: this.form });
        console.log(response);
      } catch(error) {
        console.log(error);
      }
    }
  }
}
</script>

<style>
.login-container {
  margin: 50px auto;
  width: 300px;
  text-align: center;
}
</style>