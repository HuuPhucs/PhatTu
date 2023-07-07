import { createRouter, createWebHashHistory } from "vue-router";
import AdminLayout from "@/components/Admin/AdminLayout.vue";
import MainVue from "@/components/Main/MainVue.vue";
import DashboardAdmin from "@/components/Admin/DashboardAdmin.vue";
import CourseAdmin from "@/components/Admin/Layout/CourseAdmin.vue";
import LessonAdmin from "@/components/Admin/Layout/LessonAdmin.vue";
import Table from "@/components/Admin/Layoutcon/Table.vue";
import Profile from "@/components/Admin/Layoutcon/Profile.vue";
import SingUp from "@/components/Main/SingUp.vue";
import LostPass from "@/components/Main/LostPass.vue";
const routes = [
  {
    path: "/",
    name: "home",
    component: MainVue,
  },
  {
    path: "/singup",
    name: "singup",
    component: SingUp,
  },
  {
    path: "/lostpass",
    name: "LostPass",
    component: LostPass,
  },
  {
    path: "/admin",
    name: "abadminout",
    component: AdminLayout,
    children: [
      {
        path: "course",
        name: "DashboardAdmin",
        component: DashboardAdmin,
      },
      {
        path: "chapter",
        name: "CourseAdmin",
        component: CourseAdmin,
      },
      {
        path: "lesson",
        name: "LessonAdmin",
        component: LessonAdmin,
      },
      {
        path: "tabledata",
        name: "TableData",
        component: Table,
      },
      {
        path: "profile",
        name: "DataCaNhan",
        component: Profile,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes,
});

export default router;
