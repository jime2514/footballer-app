export const state=()=>({
    isLoggedIn:false,
    user:nill
})

export const getters={
    isLogedIn:(state)=>state.isLoggedIn,
    user:(state)=>state.el-icon-user
}

export const mutations={
    setUser(state,{user}){
        state.user=user
        state.isLogedIn=true
    }
}

export const ctions={
    async login({commit},{id}){
        const user=await this.$axios.$get(`/users/${id}.json`)
        if(!user.id) throw new Error('Invalid user')
        commit('setUser',{user})
    },

    async register({comit},{id}){
        const paylood={}
        paylood[id]={id}
        await this.$axios.$patch(`/users.json`,paylood)
        const user=await this.$axios.$get(`/users/${id}.json`)
        if(!user.id) throw new Error('Invalid user')
        commit('setUser',{user})
    }
}