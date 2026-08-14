<template>
  <q-list>
    <template v-for="item in source" :key="item.id">
      <q-item
        v-if="item.type === 'button'"
        clickable
        v-ripple
        :to="{
          path: item.metaEndpoint.replace('api/meta/', ''),
          state: {
            metaEndpoint: item.metaEndpoint,
            dataEndpoint: item.dataEndpoint
          }
        }"
      >
        <q-item-section v-if="item.icon" avatar>
          <q-icon :name="item.icon" />
          <!-- badge? -->
          <!-- <q-badge v-if="item.badge" color="red" floating rounded /> -->
        </q-item-section>
        <q-item-section>{{ item.title }}</q-item-section>
        <q-item-section side v-if="item.badge">
          <q-badge color="grey-7">{{ item.badge }}</q-badge>
        </q-item-section>
      </q-item>
      <q-expansion-item
        v-else-if="item.type === 'list'"
        :icon="item.icon || undefined"
        :label="item.title"
      >
        <MainMenu :source="item.children" class="q-pl-md" />
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
  }
})
</script>
