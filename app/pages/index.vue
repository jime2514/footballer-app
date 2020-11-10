<template>
  <div class="login-top-wrapper">
    <el-card style="flex:1">

      <div class="login-title">
        <h1>Footballer App</h1>
      </div>

      <div class="login">
        <h3>ログイン</h3>
        <form>

          <div class="form-content">
            <span>ユーザーID</span>
            <el-input placeholder="" vue-model="formData.id" />
          </div>

          <div class="form-content">
            <span>メールアドレス</span>
            <el-input placeholder="" vue-model="formData.id" />
          </div>

          <div class="form-content">
            <el-checkbox v-model="isCreateMode">アカウントを作成する</el-checkbox>
          </div>

          <div class="login-button">
            <el-button type="primary">{{buttonText}}</el-button>
          </div>

        </form>
      </div>

    </el-card>
  </div>
      


</template>

<script>
export default {}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
