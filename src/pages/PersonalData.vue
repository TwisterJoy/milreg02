
<template>
  <q-page class="flex bg-grey-2">
    <div class="q-pa-md full-width">
      <div class="row col-grow q-pb-sm">
        <q-btn outline  color="primary" flat icon="mdi-arrow-left" @click="$router.back()" />
        <div class="text-h6 text-weight-bold q-ml-sm">{{ person.surname + ' ' + person.name + ' ' + person.middle_name }}</div>
        <q-space />
        <q-chip outline square color="teal" text-color="white">
          {{ person.id }}
        </q-chip>
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
        <q-tab name="main" label="Личные сведения" />
        <q-tab name="advanced" label="Подробные сведения" />
        <q-tab name="military" label="Воинский учёт" disabled/>
      </q-tabs>

      <q-separator />

      <q-tab-panels v-model="tab" animated>
        <q-tab-panel name="main">
          <div v-if="loading">pfuheprf</div>
          <MainData v-else :person="person" />
        </q-tab-panel>

        <q-tab-panel name="advanced">
          <div v-if="loading">pfuheprf</div>
          <AdvancedData v-else :person="person" />
        </q-tab-panel>

        <q-tab-panel name="military">
          -
        </q-tab-panel>
      </q-tab-panels>
    </div>
  </q-page>
</template>

<script setup>
  import { ref, onMounted } from 'vue'
  import { useRoute } from 'vue-router'

  import MainData from '@/layouts/persons/MainData.vue'
  import AdvancedData from '@/layouts/persons/AdvancedData.vue'

  const tab = ref('main')

  const route = useRoute()
  const id = route.params.personId

  const person = ref([])
  const classif = ref([])
  const loading = ref(true)

  const fetchData = async () => {
    try {
      var response = await fetch(import.meta.env.QCLI_API + 'api/persons/' + id)
      if (!response.ok) throw new Error('Не удалось загрузить данные')
      person.value = await response.json()

      //доставка из классификаторов
      //надо циулом прогнать
      var response = await fetch(import.meta.env.QCLI_API + 'api/okin-01/' + person.value.sex_id)
      if (!response.ok) console.log('Не удалось загрузить данные')
      classif.value = await response.json()
      person.value.sex_name = classif.value.name

      var response = await fetch(import.meta.env.QCLI_API + 'api/okato/' + person.value.okato_id)
      if (!response.ok) console.log('Не удалось загрузить данные')
      classif.value = await response.json()
      person.value.okato_name = classif.value.name

      var response = await fetch(import.meta.env.QCLI_API + 'api/okin-10/' + person.value.family_status_id)
      if (!response.ok) console.log('Не удалось загрузить данные')
      classif.value = await response.json()
      person.value.family_status_name = classif.value.name

    } catch (error) {
      console.log(id)
      console.error('Ошибка загрузки:', error)
    } finally {
      loading.value = false
    }
  }

  onMounted(() => {
    fetchData()
  })
</script>
