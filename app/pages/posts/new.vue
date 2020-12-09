<template>
  <section class="container posts-page">
    <el-card style="flex: 1">
      <div slot="header" class="clearfix">
        <el-input placeholder="タイトルを入力" v-model="formData.title" />
      </div>

      <!-- 画像アップ開始 -->
      <div>
        <input type="file" :multiple="false" accept="image/*" @change="detectFiles($event)">
      </div>
      <!-- 画像アップ終了 -->
      <div>
        <el-input placeholder="本文を入力……" type="textarea" rows="15" v-model="formData.body" />
      </div>
      <div class="text-right" style="margin-top: 16px;">
        <el-button type="primary" @click="publish" round>
          <span class="el-icon-upload2" />
          <span>Publish</span>
        </el-button>
      </div>
    </el-card>
  </section>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
// 画像アップ開始
import uuid from 'uuid'
// 画像アップ終了

export default {
  asyncData({ redirect, store }) {
    if (!store.getters['user']) {
      redirect('/')
    }
    return {
      formData: {
        title: '',
        body: ''
      }
    }
  },
  computed: {
    ...mapGetters(['user'])
  },
  methods: {
    async publish() {
      const payload = {
        user: this.user,
        ...this.formData
      }
      await this.publishPost({ payload })
      this.$router.push('/posts')
    },
    ...mapActions('users', ['updateUser']),
    ...mapActions('posts', ['publishPost']),

// 画像アップ開始
detectFiles(e) {
      // アップロード対象は1件のみとする
      const file = (e.target.files || e.dataTransfer.files)[0]
      if (file) {
        const fileName = uuid()

        this.$store
          .dispatch('personas/uploadImage', {
            name: fileName,
            file: file
          })
          .then(url => {
            // アップロード完了処理 (ローカルメンバに保存したり)
            this.fileName = fileName
            this.imageUrl = url
          })
      }
    }
// 画像アップ終了

  }
}
</script>

<style>
.posts-page .el-table__row {
  cursor: pointer;
}
</style>
