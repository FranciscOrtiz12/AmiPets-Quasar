<template>
  <q-page class="flex column q-pa-md">
    
    <!-- <h1>Typografy</h1> -->
    <span class="text-h1">HeadLine 1</span>
    <span class="text-h2">HeadLine 2</span>
    <span class="text-h3">HeadLine 3</span>
    <span class="text-h4">HeadLine 4</span>
    <span class="text-h5">HeadLine 5</span>
    <span class="text-h6">HeadLine 6</span>

    <q-separator></q-separator>

    <span class="text-subtitle1">Subtitle 1</span>
    <span class="text-subtitle2">Subtitle 2</span>

    <q-separator></q-separator>

    <p class="text-body1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, neque? Beatae, mollitia quas. Assumenda blanditiis beatae rerum expedita enim cumque ducimus, eaque mollitia odio, sequi laudantium minus nulla reprehenderit. Consequuntur.</p>
    <p class="text-body2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, neque? Beatae, mollitia quas. Assumenda blanditiis beatae rerum expedita enim cumque ducimus, eaque mollitia odio, sequi laudantium minus nulla reprehenderit. Consequuntur.</p>

    <span class="text-weight-thin">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</span>
    <span class="text-weight-light">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</span>
    <span class="text-weight-regular">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</span>
    <span class="text-weight-medium">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</span>
    <span class="text-weight-bold">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</span>
    <span class="text-weight-bolder">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</span>  

    <q-separato></q-separato>

    <div class="row q-mb-md">
      <div class="col bg-primary">a</div>
      <div class="col bg-secondary">a</div>
      <div class="col bg-accent">a</div>
    </div>
    <div class="row q-mb-md">
      <div class="col bg-primary">a</div>
      <div class="col col-5 bg-secondary">a</div>
      <div class="col col-5 bg-accent">a</div>
    </div>
    <div class="row q-mb-md justify-center">
      <div class="col col-4 bg-primary">a</div>
      <div class="col col-4 bg-secondary">a</div>
    </div>
    <div class="row q-mb-md justify-between">
      <div class="col col-4 bg-primary">a</div>
      <div class="col col-4 bg-secondary">a</div>
    </div>

    <q-separator spaced/>

    <div class="row q-mb-md justify-between">
      <div class="col-12 col-sm-5 col-md-4 bg-primary">a</div>
      <div class="col-12 col-sm-5 col-md-4 bg-secondary">a</div>
    </div>

    <q-separator spaced/>

    <div class="row q-mb-md">
      <div class="square-box  bg-primary">a</div>
      <div class="square-box  bg-secondary">a</div>
      <div class="square-box  bg-accent">a</div>
    </div>

    <div class="row justify-between q-mb-md">
      <div class="square-box  bg-primary">a</div>
      <div class="square-box  bg-secondary">a</div>
      <div class="square-box  bg-accent">a</div>
    </div>

    <div class="row justify-around q-mb-md">
      <div class="square-box  bg-primary">a</div>
      <div class="square-box  bg-secondary">a</div>
      <div class="square-box  bg-accent">a</div>
    </div>

    <div class="column items-center q-mb-md bg-dark ">
      <div class="square-box  bg-primary">a</div>
      <div class="square-box  bg-secondary">a</div>
      <div class="square-box  bg-accent">a</div>
    </div>

    <div class="column items-end q-mb-md bg-dark ">
      <div class="square-box  bg-primary"><a href=""></a></div>
      <div class="square-box  bg-secondary">a</div>
      <div class="square-box  bg-accent">a</div>
    </div>

    <div class="column custom-height justify-center items-center q-mb-md bg-dark ">
      <div class="square-box  bg-primary">a</div>
      <div class="square-box  bg-secondary">a</div>
      <div class="square-box  bg-accent">a</div>
    </div>

    <div class="column custom-height justify-between items-center q-mb-md bg-dark ">
      <div class="square-box  bg-primary">a</div>
      <div class="square-box  bg-secondary">a</div>
      <div class="square-box  bg-accent">a</div>
    </div>

    <div class="column custom-height justify-between items-center q-mb-md bg-dark ">
      <div class="square-box  bg-primary">a</div>
      <div class="square-box self-end bg-secondary">a</div>
      <div class="square-box self-start  bg-accent">a</div>
    </div>

  </q-page>

  <q-separato></q-separato>

  <div class="q-pa-md">
    <div class="q-gutter-y-md" style="max-width: 1000px">
      <q-card>
        <q-tabs
          v-model="tab"
          dense
          class="text-grey"
          active-color="primary"
          indicator-color="primary"
          align="justify"
          narrow-indicator
        >
          <q-tab name="mails" label="Mails" />
          <q-tab name="alarms" label="Alarms" />
          <q-tab name="movies" label="Movies" />
          <q-tab name="update" label="Update" />
        </q-tabs>

        <q-separator />

        <q-tab-panels v-model="tab" animated>
          <q-tab-panel name="mails">
            <div class="text-h6">Mails</div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </q-tab-panel>

          <q-tab-panel name="alarms">
            <div class="text-h6">Alarms</div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </q-tab-panel>

          <q-tab-panel name="movies">
            <div class="text-h6">Movies</div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </q-tab-panel>

          <q-tab-panel name="update">
            <div class="text-h6">update</div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </q-tab-panel>
        </q-tab-panels>
      </q-card>

      

    </div>
  </div>

  <div class="q-pa-md">
    <!-- <q-date v-model="model" :locale="myLocale" /> -->
    <q-date v-model="model" :locale="myLocale" mask="MM-DD-YYYY" />
  </div>
  
</template>

<script>
import { defineComponent, ref } from 'vue'


export default defineComponent({
  name: 'Prueba',
  setup () {
    return {
      tab: ref('mails'),

      model: ref('2019/03/15'),
      //* DATE PICKER
      myLocale: {
        /* starting with Sunday */
        days: 'Domingo_Lunes_Martes_Miércoles_Jueves_Viernes_Sábado'.split('_'),
        daysShort: 'Dom_Lun_Mar_Mié_Jue_Vie_Sáb'.split('_'),
        months: 'Enero_Febrero_Marzo_Abril_Mayo_Junio_Julio_Agosto_Septiembre_Octubre_Noviembre_Diciembre'.split('_'),
        monthsShort: 'Ene_Feb_Mar_Abr_May_Jun_Jul_Ago_Sep_Oct_Nov_Dic'.split('_'),
        firstDayOfWeek: 1, // 0-6, 0 - Sunday, 1 Monday, ...
        format24h: true,
        pluralDay: 'dias'
      }

    }
  }
})
</script>
