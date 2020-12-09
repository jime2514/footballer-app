import moment from '~/plugins/moment'

// 画像アップ開始
import firebase from '@/plugins/firebase'
const firestorage = firebase.storage()
// 画像アップ終了

export const state = () => ({
  posts: []
})

export const getters = {
  posts: state => state.posts.map(post => Object.assign({ likes: [] }, post))
}

export const mutations = {
  addPost(state, { post }) {
    state.posts.push(post)
  },
  updatePost(state, { post }) {
    state.posts = state.posts.map(p => (p.id === post.id ? post : p))
  },
  clearPosts(state) {
    state.posts = []
  }
}

export const actions = {
  async fetchPost({ commit }, { id }) {
    const post = await this.$axios.$get(`/posts/${id}.json`)
    commit('addPost', { post: { ...post, id } })
  },
  async fetchPosts({ commit }) {
    const posts = await this.$axios.$get(`/posts.json`)
    commit('clearPosts')
    Object.entries(posts || [])
      .reverse()
      .forEach(([id, content]) =>
        commit('addPost', {
          post: {
            id,
            ...content
          }
        })
      )
  },
  async publishPost({ commit }, { payload }) {
    const user = await this.$axios.$get(`/users/${payload.user.id}.json`)
    const created_at = moment().format()
    payload = {
      created_at,
      ...payload
    }
    const post_id = (await this.$axios.$post('/posts.json', payload)).name
    const post = { id: post_id, ...payload, created_at }
    const putData = { id: post_id, ...payload, created_at }
    delete putData.user
    await this.$axios.$put(`/users/${user.id}/posts.json`, [
      ...(user.posts || []),
      putData
    ])
    commit('addPost', { post })
  },
  async addLikeToPost({ commit }, { user, post }) {
    post.likes.push({
      created_at: moment().format(),
      user_id: user.id,
      post_id: post.id
    })
    const newPost = await this.$axios.$put(`/posts/${post.id}.json`, post)
    commit('updatePost', { post: newPost })
  },
  async removeLikeToPost({ commit }, { user, post }) {
    post.likes = post.likes.filter(like => like.user_id !== user.id) || []
    const newPost = await this.$axios.$put(`/posts/${post.id}.json`, post)
    commit('updatePost', { post: newPost })
  },

  // 画像アップ開始
  uploadImage: (context, payload) => {
    return new Promise((resolve, reject) => {
      // firestorage にファイルをアップロード
      const uploadTask = firestorage
        .ref('images/' + payload.name)
        .put(payload.file)
        .then(snapshot => {
           // アップロード完了処理。URLを取得し、呼び出し元へ返す。
           snapshot.ref.getDownloadURL().then(url => {
             resolve(url)
           })
         })
      
    }
    )}
// 画像アップ終了



}
