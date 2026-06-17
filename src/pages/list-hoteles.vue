<template>
    <div>
        <HabitacionSimpleFormModal ref="habitacionSimpleFormModalRef" @on-save="loadHoteles" />
        <h1>LISTA DE HOTELES</h1>
        <el-button type="success" @click="$router.push({ name: 'crearHotel' })" :icon="Plus">Nuevo</el-button>
        <el-button type="primary" :loading="loading" @click="loadHoteles">Recargar</el-button>
        <el-table :data="hoteles" style="width: 100%" height="250">
            <el-table-column prop="id" label="ID" />
            <el-table-column prop="nombre" label="Nombre" />
            <el-table-column prop="direccion" label="Direccion" />
            <el-table-column label="estrellas">
                <template #default="scope">
                    <el-rate v-model="scope.row.estrellas" clearable />
                </template>
            </el-table-column>
            <el-table-column label="Opciones" fixed="right">
                <template #default="scope">
                    <el-tooltip class="box-item" effect="dark" content="Agregar habitacion simple"
                        placement="top-start">
                        <el-badge :value="scope.row.habitaciones?.length || 0" class="item" style="margin-top: 10px;" type="primary">
                            <el-button :icon="BedSingle" circle title="Agregar habitacion simple"
                            @click="onOpenAddhabiatcionSimpleModal(scope.row.id)" />
                        </el-badge>
                    </el-tooltip>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>

<script setup lang="ts">
import { onMounted, ref, useTemplateRef } from 'vue';
import {
    Plus
} from '@element-plus/icons-vue'
import { useListHotelesComposable } from '../composables/list-hotel.composable';
import BedSingle from './../assets/icons/bed-single.svg'
import HabitacionSimpleFormModal from './../components/habitacion-simple-form-modal.vue'

const hsfm = useTemplateRef<InstanceType<typeof HabitacionSimpleFormModal>>('habitacionSimpleFormModalRef')

const {
    hoteles,
    loading,
    loadHoteles,
} = useListHotelesComposable();

onMounted(() => {
    loadHoteles()
})

const onOpenAddhabiatcionSimpleModal = (hotelId: string) => {
    hsfm.value?.openModal(hotelId)
    console.log('Habriendo modal para agregar habiytacion simple')
}

</script>

<style scoped></style>