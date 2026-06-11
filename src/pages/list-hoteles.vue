<template>
    <div>
        <h1>LISTA DE HOTELES</h1>  <el-button type="primary" :loading="loading" @click="loadHoteles">Recargar</el-button>
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
import { onMounted, ref } from 'vue';

type HotelType = {
    id: string,
    nombre: string,
    direccion: string,
    estrellas: number
}

const hoteles = ref<Array<HotelType>>([]);
const loading = ref(false)

const loadHoteles = () => {
    loading.value = true
    fetch('http://localhost:3000/hotel/list').then(async resp => {
        const data = await resp.json()
        hoteles.value = data.data;
    }).catch(err => console.log(err)).finally(() => {
        loading.value = false
    })
}

onMounted(() => {
    loadHoteles()
})

</script>

<style scoped>

</style>