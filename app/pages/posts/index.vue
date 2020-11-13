<template>
<section class="container post-page">
    <el-card>
        <div slot="header" class="clearfix">
            <span>新規投稿</span>
        </div>
        <el-table
            :data="showPosts"
            style="whdth:100%"
            class="table"
        >
            <el-table-column
                prop="user.id"
                label="投稿者"
                width="180">
            </el-table-column>
            <el-table-column
                prop="created_at"
                label="投稿日時"
                width="240">
            </el-table-column>
        </el-table>
    </el-card>
</section>
</template>


<script>
import moment from '~/plugins/moment'
import {mapGetters} from 'vuex'

export default{
    computed:{
        showPosts(){
            return[
                {
                    id:'001',
                    title:'How todevelopment Nuxt.jss Application',
                    body:'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
                    created_at:'2018/08/10 12:00:00',

                    user:{
                        id:'potato4d'
                    }
                },

                {
                    id:'002',
                    title:'deployment Nuxt.js Application to Heroku',
                    body:'Lorem ipsum dolor sit amet, consectetur adipsicing elit...',
                    created_at:'2018/08/10 13:00:00',

                    user:{
                        id:'potato4d'
                    }
                },
            ]
        }
    }
}
</script>


<style>
.posts-page .el-table__row{
    cursor:pointer;
}
</style>