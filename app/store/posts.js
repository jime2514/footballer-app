import moment from '~/plugins/moment'

export const state=()=>({
    posts:[]
})

export const getters={
    posts:(state)=>state.posts
}

export const mutations={
    addPost(state,{post}){
        state.posts.push(post)
    },

    updatePost(state,{post}){
        state.posts=state.posts.map((p)=>(p.id === post.id ? post:p))
    },
    clearPosts(state){
        state.posts=[]
    }
}


export const actions={
    async fetchPosts({commit}){
        const posts=await this.$axios.$get(`/posts.json`)
        commit('clearPosts')
        Object.entries(posts)
        .reverse()
        .forEach(([id,content])=>
        commit('addPost',{
            post:{
                id,
                ...content
            }
        })
        )
    },
    async publishPost({commit},{payload}){
        
    }
}