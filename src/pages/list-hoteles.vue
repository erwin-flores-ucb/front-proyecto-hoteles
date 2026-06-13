<template>
    <div>
        <h1>LISTA DE HOTELES</h1>
        <el-button type="success" @click="$router.push({name: 'crearHotel'})" :icon="Plus">Nuevo</el-button>
        <el-button type="primary" :loading="loading" @click="loadHoteles">Recargar</el-button>
        <el-table :data="hoteles" style="width: 100%" height="250">
            <el-table-column prop="id" label="ID" />
            <el-table-column prop="nombre" label="Nombre" />
            <el-table-column prop="direccion" label="Direccion" />
            <el-table-column label="estrellas" fixed="right">
                <template #default="scope">
                    <el-rate v-model="scope.row.estrellas" clearable />
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import {
    Plus
} from '@element-plus/icons-vue'
import { useListHotelesComposable } from '../composables/list-hotel.composable';

const {
    hoteles,
    loading,
    loadHoteles,
} = useListHotelesComposable();

onMounted(() => {
    loadHoteles()
})

</script>

<style scoped>

</style>