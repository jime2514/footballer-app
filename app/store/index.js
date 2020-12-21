import { auth } from '~/plugins/firebase.js'

export const strict = false

export const state = () => ({
    user: null,
})

export const mutations = {
    setUser(state, payload) {
        state.user = payload
    }
}

export const actions = {
    signUp({ commit }, { email, password }) {
        return auth().createUserWithEmailAndPassword(email, password)
    },

    signInWithEmail({ commit }, { email, password }) {
        return auth().signInWithEmailAndPassword(email, password)
    },

    signInWithGoogle({ commit }){
        return auth().signInWithPopup(new auth.GoogleAuthProvider())
    },

    signOut() {
        return auth().signOut()
    },

    // 投稿機能（仮）始まり
    async postContent(context, payload) {
        const contents = payload
        const loadImage = await context.dispatch('uploadImage', {
          name: contents.image.name,
          file: contents.image.file
        })
        contents.image = loadImage
     
        const articlesRef = db.collection('articles')
        await articlesRef.add(contents)
    },


    uploadImage(context, payload) {
        if (!payload.file) {
          return {
            name: 'サンプル画像',
            src: 'https://placehold.jp/150x150.png'
          }
        }
        const storageRef = storage.ref()
     
        return new Promise((resolve, reject) => {
          storageRef
            .child(`images/${payload.name}`)
            .put(payload.file)
            .then((snapshot) => {
              snapshot.ref.getDownloadURL().then((url) => {
                resolve({ name: payload.name, src: url })
              })
            })
            .catch((err) => {
              console.log('画像投稿エラー', err)
            })
        })
      }
    // 投稿機能（仮）終わり
}

export const getters = {
    user(state){
        return state.user
    },
    isAuthenticated (state) {
        return !!state.user
    }
}