<template>
  <q-layout view="LHh lpR fFf">
    <q-drawer
      show-if-above
      v-model="drawer"
      :mini="miniState"
      side="left"
      elevated
      @mouseenter="handleMouseEnter"
      @mouseleave="handleMouseLeave"
      class="column no-wrap"
    >
      <!-- header -->
      <div class="col-auto">
        <div class="q-pa-md">
          <div v-if="!miniState" class="text-subtitle1 text-weight-bold text-primary text-uppercase text-center">
            Воинский и кадровый учёт
            <!-- заменить на итоговое название с получением из api, стили вынести отдельно -->
          </div>
          <div v-else class="text-subtitle1 text-weight-bold text-primary text-uppercase flex justify-center">
            ВУ
          </div>
        </div>
        <div v-if="!miniState" class="relative-position">
          <q-separator />
          <div class="absolute-center">
            <q-btn
              round
              dense
              unelevated
              size="sm"
              :icon="isPinned ? 'mdi-pin-outline' : 'mdi-pin-off-outline'"
              :color="isPinned ? 'primary' : 'white'"
              :text-color="isPinned ? 'white' : 'primary'"
              class="shadow-2"
              @click="togglePin"
            >
              <q-tooltip>{{ isPinned ? 'Открепить' : 'Закрепить' }}</q-tooltip>
            </q-btn>
          </div>
        </div>
        <q-separator v-else />
        <div v-if="!miniState" class="q-pt-md"></div>
      </div>
      <!-- menu -->
      <div class="col">
        <q-scroll-area class="fit">
          <!-- menu component -->
          <q-list v-if="loading">
            <q-item clickable v-for="i in 5" :key="i">
              <q-item-section avatar><q-skeleton type="QAvatar" /></q-item-section>
              <q-item-section v-if="!miniState"><q-skeleton type="text" /></q-item-section>
            </q-item>
          </q-list>
          <AppMenu v-else
            :source="menuList.menu"
          />
        </q-scroll-area>
      </div>
      <!-- user -->
      <div class="col-auto">
        <q-separator />
        <q-item clickable class="q-py-md">
          <q-item-section avatar class="flex justify-center">
            <q-skeleton type="QAvatar" /><!--<q-avatar color="primary" text-color="white">TJ</q-avatar>-->
          </q-item-section>
          <q-item-section v-if="!miniState">
            <q-item-label class="text-weight-bold text-ellipsis"><q-skeleton type="text" /></q-item-label>
            <q-item-label caption class="text-ellipsis"><q-skeleton type="text" /></q-item-label>
          </q-item-section>
        </q-item>
      </div>
    </q-drawer>

    <q-page-container class="bg-grey-2">
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script setup>
  import { ref, onMounted } from 'vue'
  //import { version } from '../../package.json'
  import AppMenu from '@/components/AppMenu.vue'

  const menuList = ref([])
  const loading = ref(true)
  const drawer = ref(true)
  const miniState = ref(true)
  const isPinned = ref(false)

  const togglePin = () => {
    isPinned.value = !isPinned.value
    if (isPinned.value) {
      miniState.value = false
    }
  }

  const handleMouseEnter = () => {
    if (isPinned.value) return
    miniState.value = false
  }

  const handleMouseLeave = () => {
    if (isPinned.value) return
    miniState.value = true
  }

  const fetchData = async () => {
    try {
      var response = await fetch(import.meta.env.QCLI_API + 'api/menu/')
      if (!response.ok) throw new Error('Не удалось загрузить данные')
      menuList.value = await response.json()
    } catch (error) {
      console.error('Ошибка загрузки:', error)
    } finally {
      loading.value = false
    }
  }

  onMounted(() => {
    fetchData()
  })
</script>
