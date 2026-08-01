<template>
  <q-list padding>
    <template v-if="mini">
      <!-- Свернутый режим -->
      <q-item v-for="node in items" :key="'mini-' + node.id" clickable v-ripple :to="node.route || ''" class="justify-center">
        <q-item-section avatar>
          <q-avatar size="24px">
            <q-icon :name="node.icon || 'folder'" size="24px" />
            <q-badge v-if="node.badge" color="red" floating rounded />
          </q-avatar>
        </q-item-section>
        <q-tooltip anchor="center end" self="center start">{{ node.title }}</q-tooltip>
      </q-item>
    </template>

    <template v-else>
      <!-- Развернутый режим с рекурсией -->
      <template v-for="node in items" :key="'full-' + node?.id">
        <q-expansion-item v-if="node.children && node.children.length > 0" :icon="node.icon || 'folder'" :header-inset-level="level * 0.5">
          <template v-slot:header>
            <q-item-section avatar v-if="node.icon"><q-icon :name="node.icon" /></q-item-section>
            <q-item-section><q-item-label>{{ node.title }}</q-item-label></q-item-section>
            <q-item-section side v-if="node.badge"><q-badge color="primary">{{ node.badge }}</q-badge></q-item-section>
          </template>

          <app-menu v-if="!mini" :items="node.children" :is-root="false" :mini="mini" :level="level + 1" @select="$emit('select', $event)" />
        </q-expansion-item>

        <q-item v-else clickable v-ripple :to="node.route || ''" :inset-level="level * 0.5">
          <q-item-section avatar v-if="node.icon"><q-icon :name="node.icon" /></q-item-section>
          <q-item-section><q-item-label>{{ node.title }}</q-item-label></q-item-section>
          <q-item-section side v-if="node.badge"><q-badge color="grey-7">{{ node.badge }}</q-badge></q-item-section>
        </q-item>
      </template>
    </template>
  </q-list>
</template>

<script setup>
defineOptions({
  name: 'AppMenu'
})

defineProps({
  items: { type: Array, required: true, default: () => [] },
  title: { type: String, default: '' },
  isRoot: { type: Boolean, default: true },
  mini: { type: Boolean, default: false },
  level: { type: Number, default: 0 }
})

defineEmits(['select'])
</script>
