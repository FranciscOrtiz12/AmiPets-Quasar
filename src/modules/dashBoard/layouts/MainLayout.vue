<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="reorder"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title>
          <div class="row tituloSidebar q-mt-md">
            <p>AmiPets</p>
            <img
              alt="Quasar logo"
              src="~assets/Corazon_perro.png"
              style="width 30px; height: 30px; margin-left:10px;"
            >
            
          </div>
        </q-toolbar-title>

        <div>Quasar v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
    >
      <q-list>
        <q-item-label
          header
        >
          <!-- Parte Superior de lista de Links -->
          
        </q-item-label>

        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from 'vue'
import EssentialLink from '../../../modules/dashBoard/components/EssentialLink.vue'

const linksList = [
  {
    title: 'Inicio',
    caption: '',
    icon: 'home',
    link: 'index',
  },
  {
    title: 'Usuarios',
    caption: 'Administrar permisos de usuario',
    icon: 'manage_accounts',
    link: 'usuarios'
  },
  {
    title: 'Clientes',
    caption: 'Gestiona tus Clientes',
    icon: 'supervisor_account',
    link: 'clientes'
  },
  {
    title: 'Mascotas',
    caption: 'Gestiona las Mascotas',
    icon: 'pets',
    link: 'mascotas'
  },
  {
    title: 'Veterinarios',
    caption: 'Gestiona a tus Veterinarios',
    icon: 'personal_injury',
    link: 'veterinarios'
  },
  {
    title: 'Control',
    caption: 'Agenda Controles Medicos',
    icon: 'difference',
    link: 'control'
  },
  {
    title: 'Cerrar Sesión',
    caption: 'quasar.dev',
    icon: 'logout',
    link: 'https://quasar.dev'
  },
  {
    title: 'Prueba',
    caption: 'Prueba la vaina',
    icon: 'quiz',
    link: 'prueba'
  },
]

export default defineComponent({
  name: 'MainLayout',

  components: {
    EssentialLink
  },

  setup () {
    const leftDrawerOpen = ref(false)

    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
})
</script>
