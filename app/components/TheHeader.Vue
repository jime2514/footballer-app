<template>
<el-menu mode="horizontal" :router="true">
    <el-menu-item index="1" style="pointer-events:none;">
        FootBaller APP
    </el-menu-item>

    <el-menu-item index="2" :route="{path:'/posts/'}">
        投稿一覧
    </el-menu-item>

    <el-menu-item index="3" style="floot:right;" :route="{path:'/'}">
        FootBaller APP
    </el-menu-item>

    <el-menu-item index="4" style="floot:right;" :route="{path:'/posts/new'}">
        FootBaller APP
    </el-menu-item>
</el-menu>
</template>