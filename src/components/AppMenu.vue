<template>
  <q-list>
    <template v-for="item in source" :key="item.id">
      <q-item
        v-if="item.type === 'button'"
        clickable
        v-ripple
        :to="{ name: item.id }"
        @click="onItemClick(item)"
      >
        <q-item-section v-if="item.icon" avatar>
          <q-icon :name="item.icon" />
          <!-- badge? -->
          <!-- <q-badge v-if="item.badge" color="red" floating rounded /> -->
        </q-item-section>
        <q-item-section>{{ item.title }}</q-item-section>
        <q-item-section side v-if="item.badge"><q-badge color="grey-7">{{ item.badge }}</q-badge></q-item-section>
      </q-item>
      <q-expansion-item
        v-else-if="item.type === 'list'"
        :icon="item.icon || undefined"
        :label="item.title"
      >
        <main-menu
          :source="item.children"
          class="q-pl-md"
        />
      </q-expansion-item>
    </template>
  </q-list>
</template>

<script setup>
  defineOptions({
    name: 'MainMenu'
  })

  defineProps({
    source: {
      type: Array,
      required: true
    },
  })

  // dev
  const onItemClick = (item) => {
    console.log('Клик по пункту:', item.title)
    console.log('Мета:', item.metaEndpoint)
    console.log('Данные:', item.dataEndpoint)
  }
</script>
