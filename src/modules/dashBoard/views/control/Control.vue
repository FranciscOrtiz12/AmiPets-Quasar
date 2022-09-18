<script lang="js" src="./Control.js"/>

<template>
  <q-page class=" q-mx-auto ">

      <main class="row justify-center" >
        
        <span class="text-h2 q-my-lg q-mx-auto">Gestion de Controles</span>


        <div class="col-xs-12 col-md-10 q-pa-md">
          <div class="q-gutter-y-md" style=" ">
            <q-card>
              <q-tabs
                v-model="tab"
                dense
                class="text-grey"
                active-color="primary"
                indicator-color="primary"
                align="center"
                narrow-indicator
              >
                <q-tab name="add" label="Agregar Control" />
                <q-tab name="update" label="Actualizar Control" />
              </q-tabs>

              <q-separator />

              <q-tab-panels v-model="tab" animated>
                <q-tab-panel class="q-my-md" name="add">
                  
                  <div class="column q-mx-md">
                    <span class="text-h6 text-bold">Control</span>
                    <span class="text-subtitle2 text-ligth">Agenda nuevos controles en el sistema</span>
                  </div>

                    <q-form
                      class="row q-gutter-lg q-my-xs justify-center"
                    > 

                      <!-- COMPROBAR RUT DEL CLIENTE -->
                      <div class="row col-md-10 col-xs-11 justify-evenly ">

                        <div class="campo col-md-6 col-xs-11">
                          <div class="q-gutter-md">
                            <q-input
                              filled 
                              v-model="addControlForm.rutCli" 
                              label="Rut del cliente" 
                              lazy-rules
                              :rules="[ 
                              val => val && val.length > 0 || 'Este campo es obligatorio' 
                              ]"
                            />  

                          </div>
                        </div>

                        <!-- Espaciador -->
                        <div class="col-md-4 q-ma-xs">
                          <q-btn icon="find_replace" @click="verificarRut(addControlForm.rutCli)" label="Comprobar" color="primary"/>
                        </div>
                      </div>

                      <template v-if="addControlForm.rutValid">

                        <!-- VETERINARIO -->
                        <div class="campo col-md-5 col-xs-11">
                          <div class="q-gutter-md">
                            <q-select
                              filled
                              label="Seleccione un Veterinario"
                              v-model="addControlForm.veterinario"
                              :options="addControlForm.opcionesVeterinarios"
                              map-options
                            />
                          </div>
                        </div>

                        <!-- MASCOTA -->
                        <div class="campo col-md-5 col-xs-11">
                          <div class="q-gutter-md">
                            <q-select
                              filled
                              label="Seleccione una Mascota"
                              v-model="addControlForm.mascota"
                              :options="addControlForm.opcionesMasotas"
                              map-options
                            />
                          </div>
                        </div>

                        
                        <!-- FECHA -->
                        <div class="campo col-md-5 col-xs-11">
                          <q-date v-model="addControlForm.fecha" :locale="myLocale" mask="DD-MM-YYYY" />
                        </div>

                        <!-- HORA -->
                        <div class="campo col-md-5 col-xs-11">
                          <q-time v-model="addControlForm.hora" format24h />
                        </div>
                        
                        <div class="campo col-md-11 ">
                          <q-input
                            label="Detalle de la Consulta"
                            v-model="addControlForm.detalle"
                            filled
                            type="textarea"
                          />
                        </div>

                      </template>

                      <div class="q-mt-xl col-md-10 row justify-end ">
                        <q-btn label="Limpiar" type="reset" color="primary" flat class="q-ml-sm"/>
                        <q-btn label="Enviar" type="submit" @click="submitAdd" color="primary"/>
                      </div>
                    </q-form>

                </q-tab-panel>

                <q-tab-panel class="q-my-md" name="update">
                  
                  <div class="column q-mx-md">
                    <span class="text-h6 text-bold">Control</span>
                    <span class="text-subtitle2 text-ligth">Actualiza controles agendados</span>
                  </div>

                    <q-form
                      class="row q-gutter-lg q-my-xs justify-center"
                    > 

                      <!-- COMPROBAR ID DEL -->
                      <div class="row col-md-10 col-xs-11 justify-evenly ">

                        <div class="campo col-md-6 col-xs-11">
                          <div class="q-gutter-md">
                            <q-input
                              filled 
                              v-model="updateControlForm.id" 
                              label="Id de control" 
                              lazy-rules
                              :rules="[ 
                              val => val && val.length > 0 || 'Este campo es obligatorio' 
                              ]"
                            />  

                          </div>
                        </div>

                        <!-- Espaciador -->
                        <div class="col-md-4 q-ma-xs">
                          <q-btn icon="find_replace" @click="verificarId( updateControlForm.id )" label="Comprobar" color="primary"/>
                        </div>
                      </div>

                      <template v-if="updateControlForm.isValidId">

                        <!-- Detalles del Cliente -->
                        <div class="campo col-md-10 col-xs-10">
                          <div class="q-gutter-md">
                            <h4>Aca iran los detalles</h4>
                          </div>
                        </div>


                        <!-- VETERINARIO -->
                        <div class="campo col-md-5 col-xs-11">
                          <div class="q-gutter-md">
                            <q-select
                              filled
                              label="Seleccione un Veterinario"
                              v-model="updateControlForm.veterinario"
                              :options="updateControlForm.opcionesVeterinarios"
                              map-options
                            />
                          </div>
                        </div>

                        <!-- MASCOTA -->
                        <div class="campo col-md-5 col-xs-11">
                          <div class="col-md-4 q-ma-xs">
                          
                          </div>
                        </div>

                        
                        <!-- FECHA -->
                        <div class="campo col-md-5 col-xs-11">
                          <q-date v-model="updateControlForm.fecha" :locale="myLocale" mask="DD-MM-YYYY" />
                        </div>

                        <!-- HORA -->
                        <div class="campo col-md-5 col-xs-11">
                          <q-time v-model="updateControlForm.hora" format24h />
                        </div>
                        
                        <div class="campo col-md-11 ">
                          <q-input
                            label="Detalle de la Consulta"
                            v-model="updateControlForm.detalle"
                            filled
                            type="textarea"
                          />
                        </div>

                      </template>


                      <div class="q-mt-xl col-md-10 row justify-end ">
                        <q-btn label="Limpiar" type="reset" color="primary" flat class="q-ml-sm"/>
                        <q-btn label="Enviar" type="submit" @click="submitUpdate" color="primary"/>
                      </div>
                    </q-form>
                  
                </q-tab-panel>
              </q-tab-panels>
            </q-card>

            
          </div>
        </div>

        
        <div class="col-xs-12 col-md-11">

          <div class="q-pa-md q-my-lg">

            <q-table
              title="Controles"
              :rows="getControls"
              row-key="id"
              selection="single"
              v-model:selected="selectedTable"
            >
          

            <template v-slot:top>
              <q-btn class="q-ml-sm" @click="removeControl" color="primary" label="Cancelar Control Seleccionado" />
            </template>

          </q-table>
          
        </div>
          
        </div>

      </main>

  </q-page>
</template>

