<template>
  <div class="row col-grow text-uppercase text-secondary text-weight-bold q-mb-sm">
    <div class="col-grow"><small>Должность</small></div>
    <div class="col-2"><small>Подразделение</small></div>
    <div class="col-1"><small>По штату</small></div>
    <div class="col-1"><small>По списку</small></div>
  </div>
  <q-card v-for="staff in staffingList" :key="staff.id" class="q-mb-sm" flat bordered>
    <q-card-section horizontal>
      <q-card-section >
        <q-checkbox v-model="selection" :val="staff.id"/>
      </q-card-section>
      <q-separator vertical />
      <q-card-section class="col-grow">
        <b>{{ staff.name }}</b><br />
        <small class="text-secondary">{{ staff.id }}</small>
      </q-card-section>
      <q-separator vertical />
      <q-card-section class="col-2 text-center row flex-center bg-grey-2 text-grey-7 text-uppercase">
        {{ departmentsList[staff.department_id].short_name }}
      </q-card-section>
      <q-separator vertical />
      <q-card-section class="col-1 text-center row flex-center">
        {{ staff.count }}
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
    staffingList: {
      type: Object,
      required: true
    },
    departmentsList: {
      type: Object,
      required: true
    },
  })
</script>

