<template>
  <q-layout view="LHh lpR fFf">
    <q-drawer
      show-if-above
      v-model="drawer"
      :mini="miniState"
      @mouseenter="miniState = false; menuMini = false"
      @mouseleave="miniState = true"
      @mini-state="(val) => menuMini = val"
      side="left"
      elevated
    >
      <!--<q-list>
        <EssentialLink
          v-for="link in linksList"
          :key="link.label"
          v-bind="link"
        />
      </q-list>
      <q-separator />
      меню
      <q-separator />-->
      <AppMenu
        :items="menuList"
        :mini="menuMini"
        @select="handleMenuSelection"
      /><!--
      <q-separator />
      <div class="text-center"><q-chip class="text-weight-regular text-caption" color="teal" text-color="white"><small>{{ version }}</small></q-chip></div>-->
    </q-drawer>

    <q-page-container class="bg-grey-2">
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script setup>
  import { ref } from 'vue'
  import EssentialLink from '@/components/EssentialLink.vue'
  import AppMenu from '@/components/AppMenu.vue'
  import { version } from '../../package.json'


  const menuList = ref([
    {
      id: 'home',
      title: 'Главная',
      icon: 'mdi-home',
      route: '/'
    },
    {
      id: 'persons-root',
      title: 'Ведение учёта',
      icon: 'mdi-account-multiple-outline',
      //badge: 12,
      //badgecolor: 'red',
      children: [
        { id: 'persons-all', title: 'Общий учёт', route: '/persons' },
        { id: 'persons-all', title: 'Общий учёт', route: '/catalog/shoes' }
      ]
    }
  ])

  /*ref([
    {
      id: 'home',
      title: 'Главная',
      icon: 'mdi-home-outline',
      route: '/'
    },
    {
      id: 'staff',
      title: 'Ведение учёта',
      icon: 'mdi-account-multiple-outline',
      children: [
        { id: 'staff-candidat', title: 'Кандидаты', icon: 'category', route: '/catalog' },
        { id: 'staff-all', title: 'Общий учёт', icon: 'shopping_cart', route: '/orders' }
      ]
    }
  ])*/

  const linksList = [
    {
      label: 'Главная',
      caption: '/',
      icon: 'mdi-home',
      link: '/'
    },

    {
      label: 'Общий учёт',
      caption: '/persons',
      icon: 'mdi-account-multiple',
      link: '/persons'
    },

    {
      label: 'Штатное расписание',
      caption: '/staffing',
      icon: 'mdi-human-capacity-decrease',
      link: '/staffing'
    },

    {
      label: 'Настройки',
      caption: '/settings',
      icon: 'mdi-cog-outline',
      link: '/settings'
    },

    {
      label: 'GitHub',
      caption: 'UrazaevR/MilReg-backend',
      icon: 'mdi-code-tags',
      link: 'https://github.com/UrazaevR/MilReg-backend'
    },

  ]

  const drawer = ref(false)
  const miniState = ref(true)
  const menuMini = ref(true)
  //const leftDrawerOpen = ref(false)

  //function toggleLeftDrawer() {
    //leftDrawerOpen.value = !leftDrawerOpen.value
  //}
</script>
