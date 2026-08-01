<template>
  <q-page class="flex">
    <div class="q-pa-md full-width">
      <div class="row col-grow q-pa-sm">
        <div class="text-h5 text-weight-bold">Штатное расписание</div>
      </div>
      <q-tabs
        v-model="tab"
        dense
        class="text-weight-bold bg-white"
        active-color="primary"
        indicator-color="primary"
        align="justify"
        narrow-indicator
      >
        <q-tab name="structure" label="Структура организации" />
        <q-tab name="staffing" label="Перечень должностей" />
      </q-tabs>

      <q-separator />

      <q-tab-panels v-model="tab" animated>
        <q-tab-panel name="structure">
          <q-inner-loading v-if="loading" :showing="loading">
            <q-spinner-gears size="50px" color="primary" />
          </q-inner-loading>
          <DepartmentsList v-else :departments-list="departmentsMap"/>
        </q-tab-panel>

        <q-tab-panel name="staffing">
          <q-inner-loading v-if="loading" :showing="loading">
            <q-spinner-gears size="50px" color="primary" />
          </q-inner-loading>
          <StaffingList v-else :staffing-list="staffingMap" :departments-list="departmentsMap" />
        </q-tab-panel>
      </q-tab-panels>
    </div>
  </q-page>
</template>

<script setup>
  import { ref, onMounted, computed } from 'vue'

  import DepartmentsList from '@/layouts/staffing/DepartmentsList.vue'
  import StaffingList from '@/layouts/staffing/StaffingList.vue'

  const tab = ref('structure')
  const selection = ref([])

  const staffing = ref([])
  const departments = ref([])
  const staffingMap = computed(() => {
    return Object.fromEntries(
      (staffing.value || []).map(item => [item.id, item])
    )
  })
  const departmentsMap = computed(() => {
    return Object.fromEntries(
      (departments.value || []).map(item => [item.id, item])
    )
  })
  //const deps = ref([])
  const loading = ref(true)

  const fetchData = async () => {
    try {
      var response = await fetch(import.meta.env.QCLI_API + 'api/staffing/')
      if (!response.ok) throw new Error('Не удалось загрузить данные')
      staffing.value = await response.json()
      var response = await fetch(import.meta.env.QCLI_API + 'api/departments/')
      if (!response.ok) console.log('Не удалось загрузить данные')
      departments.value = await response.json()
    } catch (error) {
      console.error('Ошибка загрузки:', error)
    } finally {
      loading.value = false
      //const deps = Object.entries(departments).map(([full_name]) => ({
        //label: full_name,          // сохраняем ключ как id
      //}));
    }
  }

  onMounted(() => {
    fetchData()
  })
</script>
