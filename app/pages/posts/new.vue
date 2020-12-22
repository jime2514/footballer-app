<template>
<div class="post-wrapper">
  <div class="post-title">
    <h2>投稿ページ</h2>
  </div>
  
 <div class="post-name-wrapper">
   <input type="text" class="post-name" v-modle="p_name"  placeholder="選手の名前" />
 </div>

 <div class="post-text-wrapper">
   <textarea class="post-text" v-model="body" placeholder="コメント"/>
 </div>

 <div class="post-image-wrapper">
    <img v-if="preview" src="preview"/>
    <input type="file" accept="image/png,image/jpeg" @change="previewImage"/>
  </div>

 <div class="post-btn-wrapper">
   <button class="post-btn" @click="postContents">投稿</button>
 </div>
</div>


 <!-- プレビュー -->
</template>
.
.
.
<script>

export default {
  data: {
  return () {
   file: null
   preview: ''
   fileName: ''
   body: ''
  }
 },

  methods: {
    previewImage(e) {
    const file = e.target.files[0];
    this.file = file
    const reader = new FileReader()
     reader.onload = (e) => {
       this.preview = e.target.result
       this.fileName = file.name
     }
     reader.readAsDataURL(file)
},

   async postContents() {
     const d = new Date()
     const today = d.toLocaleDateString()

     const contents = {
       note: {
         created_at: today,
         title: this.title,
         p_name:this.p_name,
         body: this.body
       },
       image: {
         file: this.file,
         name: this.fileName
       }
     }
     await this.$store.dispatch('postContents', contents)
     console.log('load finish') // dataをclearにする
   }
 }
}

</script>

<style>
.post-title h2 {
font-size: 28px;
}

.post-name-wrapper {
margin-top: 20px;
}

.post-name {
width: 300px;
background-color: #ffff;
border: 1px solid ;
height: 25px;
}

.post-image-wrapper {
display: flex;
flex-direction: column;
}

.post-text-wrapper {
display: flex;
flex-direction: column;
margin: 10px 0 10px 0;
}

.post-text {
width: 500px;
height: 200px;
background-color: #ffff;
border: 1px solid ;
}

.post-image-wrapper {
  margin: 10px 0;
  width: 300px;
}

.post-btn-wrapper {
  display: inline-block;
}

.post-btn {
padding: 10px 50px;
background-color: #ffff;
border: solid 1px;
}
</style>