<template>
  <q-page class="flex">
    <div class="q-pa-md full-width">
      <div class="row col-grow q-pa-sm">
        <div class="text-h5 text-weight-bold">Общий учёт</div>
        <q-space />
        <q-btn color="primary" icon="mdi-account-plus" label="Создать" />
      </div>
      <q-inner-loading v-if="loading" :showing="loading">
        <q-spinner-gears size="50px" color="primary" />
      </q-inner-loading>
      <template v-else>
        <div class="row col-grow text-uppercase text-secondary text-weight-bold q-mb-sm">
          <div class="col-grow"><small>ФИО</small></div>
          <div class="col-2"><small>Должность</small></div>
          <div class="col-1"><small>Статус</small></div>
        </div>
        <q-card v-for="person in persons" :key="person.id" class="q-mb-sm" flat bordered>
          <q-card-section horizontal>
            <q-card-section >
              <q-checkbox v-model="selection" :val="person.id"/>
            </q-card-section>
            <q-separator vertical />
            <q-card-section class="col-grow">
              <a :href="'/persons/'+person.id"><b>{{ person.surname + ' ' + person.name + ' ' + person.middle_name }}</b></a><br>
              {{ person.birth_day }} <q-chip outline color="teal"><small>{{ person.id }}</small></q-chip>
            </q-card-section>
            <q-separator vertical />
            <q-card-section class="col-2 text-center row flex-center text-uppercase" :class="person.staff_table_id ? 'text-primary' : 'bg-red-2 text-red-10'">
              {{ ( person.staff_table_id ? staffingMap[person.staff_table_id].name : 'Кандидат' ) }}
            </q-card-section>
            <q-separator vertical />
            <q-card-section class="col-1 text-center row flex-center bg-grey-2 text-grey-7 text-uppercase">
              {{ ( person.is_training ? 'учебная запись' : 'реальный' ) }}
            </q-card-section>
          </q-card-section>
        </q-card>
      </template>
    </div>
  </q-page>
</template>

<script setup>
  import { ref, onMounted, computed } from 'vue'

  const selection = ref([])

  const persons = ref([])
  const staffing = ref([])
  //const departments = ref([])
  const staffingMap = computed(() => {
    return Object.fromEntries(
      (staffing.value || []).map(item => [item.id, item])
    )
  })



  const loading = ref(true)
  // 2. Функция для получения JSON
  const fetchData = async () => {
    try {
      var response = await fetch(import.meta.env.QCLI_API + 'api/persons/')
      //const response = await fetch('api/persons/')
      if (!response.ok) throw new Error('Не удалось загрузить данные')
      persons.value = await response.json()

      var response = await fetch(import.meta.env.QCLI_API + 'api/staffing/')
      if (!response.ok) throw new Error('Не удалось загрузить данные')
      staffing.value = await response.json()
    } catch (error) {
      console.error('Ошибка загрузки:', error)
    } finally {
      loading.value = false
    }
  }

  // 3. Вызываем запрос при монтировании компонента
  onMounted(() => {
    fetchData()
  })
</script>
