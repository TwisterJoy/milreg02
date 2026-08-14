<template>
  <q-page class="flex bg-grey-2">
    <div class="q-pa-md full-width">
      <div class="row col-grow q-pb-sm">
        <!-- Это заменить на header из meta -->
        <q-btn
          outline
          color="primary"
          flat
          icon="mdi-arrow-left"
          @click="$router.back()"
        />
        <div class="text-h6 text-weight-bold q-ml-sm">header.label</div>
        <q-space />
        <q-chip v-for="i in 5" outline square color="teal" text-color="white">
          header.badge
        </q-chip>
      </div>
      <!-- Загрузка -->
      <q-inner-loading v-if="loading" :showing="loading">
        <q-spinner-gears size="50px" color="primary" />
      </q-inner-loading>
      <!-- Тело страницы -->
      <template v-else>
        <template v-if="viewType == 'list'">
          <!-- Здесь надо добавить шапку и фильтры -->
          <ListView
            v-for="(record, index) in data"
            :key="record.id || index"
            :structure="schema"
            :payload="record"
          />
        </template>
        <!--<template v-else-if="viewType == 'card'"></template>>-->
        <IndexPage v-else />
      </template>
    </div>
  </q-page>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import IndexPage from '@/pages/IndexPage.vue'
import ListView from '@/components/ListView.vue'
import { inject } from 'vue'

const loading = ref(true)
const schema = ref([])
const data = ref([])
const viewType = ref(false)

const route = useRoute()

const showError = inject('showError')

const fetchData = async () => {
  try {
    var response = await fetch(
      import.meta.env.QCLI_API + 'api/meta' + route.path
    )
    if (!response.ok) throw new Error('Не удалось загрузить данные')
    schema.value = await response.json()
    var response = await fetch(
      import.meta.env.QCLI_API + 'api' + route.path + '/list' //исправить на получение из меты или откуда?
    )
    if (!response.ok) console.log('Не удалось загрузить данные')
    data.value = await response.json()
  } catch (error) {
    showError('negative', error)
  } finally {
    viewType.value = schema.value.type
    console.log(schema.value.type)
    loading.value = false
  }
}

onMounted(() => {
  fetchData()
})
</script>
