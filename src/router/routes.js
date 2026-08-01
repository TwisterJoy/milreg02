const routes = [
  {
    path: "/",
    component: () => import("@/layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("@/pages/IndexPage.vue") },
      { path: "persons", component: () => import("@/pages/ViewPersons.vue") },
      {
        path: "persons/:personId",
        component: () => import("@/pages/PersonalData.vue"),
      },
      { path: "settings", component: () => import("@/pages/SettingsPage.vue") },
      { path: "staffing", component: () => import("@/pages/StaffingData.vue") },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("@/pages/ErrorNotFound.vue"),
  },
];

export default routes;
