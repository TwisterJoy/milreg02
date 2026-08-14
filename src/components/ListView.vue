<template>
  <q-card flat bordered class="q-mb-sm" clickable @click="onItemClick(item)">
    <q-card-section horizontal>
      <template v-for="(item, index) in structure.value" :key="index">
        <template v-if="item.type === 'list'">
          <q-card-section>
            <template v-for="(subItem, subIndex) in item.value" :key="subIndex">
              <span class="text-dark">{{ getValue(subItem) }}</span>
              <!-- Если несколько элементов, отображаем каждый с новой строки -->
              <br v-if="subIndex < item.value.length - 1" />
            </template>
          </q-card-section>
        </template>
        <template v-else>
          <q-card-section>
            <span class="text-dark">{{ getValue(item) }}</span>
          </q-card-section>
        </template>
        <!-- Разделитель -->
        <q-separator v-if="index < structure.value.length - 1" vertical />
      </template>
    </q-card-section>
  </q-card>
</template>

<script setup>
import { toRefs } from 'vue'

const props = defineProps({
  structure: {
    type: Object,
    required: true,
    default: () => ({ type: 'list', value: [] })
  },
  payload: {
    type: Object,
    required: true,
    default: () => ({})
  }
})

const { structure, payload } = toRefs(props)

// Извлечение значения по ключу из схемы - убрать, заменить
const getValue = item => {
  const rawValue = payload.value[item.value]
  if (rawValue === undefined || rawValue === null || rawValue === '') return '—'
  if (item.type === 'boolean') return rawValue ? 'Да' : 'Нет'
  return rawValue
}

const onItemClick = item => {
  console.log('clicked item.id:', item.id) //убрать и добавить роутер
}
</script>
