<template>
  <div class="login-top-wrapper">
    <el-card style="flex:1">

      <div class="login-title">
        <h1>Footballer App</h1>
      </div>

      <div class="login" slot="header">
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
            <el-button type="primary" @click="handleClickSubmit">{{buttonText}}</el-button>
          </div>

        </form>
      </div>

    </el-card>
  </div>
</template>

<script>
import{mapGetters,mapActions} from 'vuex'

export default{
  asyncData({redirect,store}){
    if(store.getters['user']){
      redirect('/posts/')
    }
    return{
      isCreateMode:false,
      formData:{
        id:''
      }
    }
  },

  computed:{
    buttonText(){
      return this.isCreateMode?'新規投稿':'ログイン'
    }
  },

  methods:{
    async handleClickSubmit(){
      if(this.CreateMode){
        try{
          await this.register({...this.formData})
          this.$notify({
            type:'success',
            title:'アカウント作成終了',
            message:'${this.formData.id}として登録しました',
            position:'bottom-right',
            duration:1000
          })
          this.$router.push('/posts/')
        }catch(){
          this.$notify.error({
            title:'アカウント作成失敗',
            message:'すでに登録されているか不正なユーザーIDです',
            position:'bottom-right',
            duration:1000
          })
        }
      }else{
        try{
          await this.login({...this.formData})
          this.$notify({
            type:'success',
            title:'ログイン成功',
            message:'${this.formData.id}としてログインしました',
            position:'bottom-right',
            duration:1000
        })
        this.$router.push('/posts/')
      }catch(e){
        this.$notify.error({
            title:'ログイン失敗',
            message:'不正なユーザーIDです',
            position:'bottom-right',
            duration:1000
          })
      }
    }
  },
  ...mapActions(['login','register'])
}
}
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
