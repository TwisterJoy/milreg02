<template>
  <div class="row col-grow text-uppercase text-secondary text-weight-bold q-mb-sm">
    <div class="col-grow"><small>Подразделение</small></div>
    <div class="col-2"><small>Сокращение</small></div>
    <div class="col-1"><small>Количество должностей</small></div>
  </div>
  <q-card v-for="dep in departmentsList" :key="dep.id" class="q-mb-sm" flat bordered>
    <q-card-section horizontal>
      <q-card-section >
        <q-checkbox v-model="selection" :val="dep.id"/>
      </q-card-section>
      <q-separator vertical />
      <q-card-section class="col-grow">
        <b>{{ dep.full_name }}</b><br />
        <small class="text-secondary">{{ dep.id }}</small>
      </q-card-section>
      <q-separator vertical />
      <q-card-section class="col-2 text-center row flex-center bg-grey-2 text-grey-7 text-uppercase">
        {{ dep.short_name }}
      </q-card-section>
      <q-separator vertical />
      <q-card-section class="col-1 text-center row flex-center">
        0
      </q-card-section>
    </q-card-section>
  </q-card>
</template>


<script setup>
  import { ref } from 'vue'

  const selection = ref([])

  defineProps({
    departmentsList: {
      type: Object,
      required: true
    },
  })
</script>
