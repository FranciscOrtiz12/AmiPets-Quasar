<script lang="js" src="./Mascotas.js"/>

<template>
  <q-page class=" q-mx-auto ">

      <main class="row justify-center" >
        
        <span class="text-h2 q-my-lg q-mx-auto">Gestion de Mascotas</span>


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
                <q-tab name="add" label="Agregar Mascotas" />
                <q-tab name="update" label="Actualizar Mascotas" />
              </q-tabs>

              <q-separator />

              <q-tab-panels v-model="tab" animated>
                <q-tab-panel class="q-my-md" name="add">
                  
                  <div class="column q-mx-md">
                    <span class="text-h6 text-bold">Mascotas</span>
                    <span class="text-subtitle2 text-ligth">Agrega nuevas mascotas a tu sistema</span>
                  </div>

                    <q-form
                     class="row q-gutter-lg q-my-xs justify-center"
                    > 

                      <div class="row col-md-10 col-xs-11 justify-evenly ">

                        <div class="campo col-md-6 col-xs-11">
                          <div class="q-gutter-md">
                            <q-input
                              filled 
                              v-model="addMasForm.rutDue" 
                              label="Ingrese RUT del dueño" 
                              lazy-rules
                              :rules="[ 
                              val => val && val.length > 0 || 'Este campo es obligatorio' 
                              ]"
                            />  

                          </div>
                        </div>

                        <!-- Espaciador -->
                        <div class="col-md-4 q-ma-xs">
                          <q-btn icon="find_replace" @click="verificarRut(addMasForm.rutDue, 'add')" label="Comprobar" color="primary"/>
                        </div>

                      </div>

                      <q-separator></q-separator>
                      
                      <template v-if="addMasForm.rutValido === true ">

                        <!-- NOMBRE -->
                        <div class="campo col-md-5 col-xs-11">
                          <q-input 
                            filled 
                            v-model="addMasForm.nombre" 
                            label="Nombre"
                            lazy-rules
                            :rules="[ 
                              val => val && val.length > 0 || 'Este campo es obligatorio' 
                            ]"
                          />
                        </div>

                        <!-- COLOR -->
                        <div class="campo col-md-5 col-xs-11">
                          <q-input 
                            filled 
                            v-model="addMasForm.color" 
                            label="Color"
                            lazy-rules
                            :rules="[ 
                              val => val && val.length > 0 || 'Este campo es obligatorio' 
                            ]"
                          />
                        </div>
                        
                        
                        <!-- TIPO -->
                        <div class="campo col-md-5 col-xs-11">
                          <div class="q-gutter-md">
                            <q-select
                              filled
                              label="Seleccione tipo de Mascota"
                              v-model="addMasForm.tipo"
                              :options="['Perro','Gato','Caballo','Tortuga']"
                            />
                          </div>
                        </div>

                        <div class="campo col-md-5 col-xs-11">
                          <div class="q-gutter-md">
                            <q-select
                              filled
                              label="Tamaño de la Mascota"
                              v-model="addMasForm.size"
                              :options="['Pequeño','Mediano','Grande']"
                            />
                          </div>
                        </div>

                        <!-- SEXO -->
                        <div class="campo col-md-5 col-xs-11">
                          <span class="text-subtitle1 q-my-lg q-mx-auto">Sexo: </span>
                          <div class="q-gutter-sm">
                            <q-radio keep-color v-model="addMasForm.sexo" val="macho" label="Macho" color="teal" />
                            <q-radio keep-color v-model="addMasForm.sexo" val="hembra" label="Hembra" color="pink" />
                          </div>
                        </div>

                        <div class="campo col-md-5 col-xs-11">
                          <q-input 
                            filled 
                            v-model="addMasForm.edad" 
                            label="Edad en años"
                            lazy-rules
                            type="number"
                            :rules="[ 
                              val => val && val.length > 0 || 'Este campo es obligatorio' 
                            ]"
                          />
                        </div>


                        <div class="q-mt-xl col-md-10 row justify-end ">
                          <q-btn label="Limpiar" @click="helpLimpiarFormulario(addMasForm)" type="reset" color="primary" flat class="q-ml-sm" />
                          <q-btn label="Enviar" @click="submitAdd" color="primary"/>
                        </div>

                      </template>
                    </q-form>

                </q-tab-panel>


                <q-tab-panel class="q-my-md " name="update">
                  
                  <div class="column q-mx-md">
                    <span class="text-h6 text-bold">Mascotas</span>
                    <span class="text-subtitle2 text-ligth">Actualiza las mascotas de tu sistema</span>
                  </div>

                    <q-form
                     class="row q-gutter-lg q-my-xs justify-center"
                    > 

                      <div class="row col-md-10 col-xs-11 justify-evenly 	q-my-lg">

                        <div class="campo col-md-6 col-xs-11">
                          <div class="q-gutter-md">
                            <q-input
                              filled 
                              v-model="rutDueño" 
                              label="Ingrese RUT del dueño" 
                              lazy-rules
                              :rules="[ 
                              val => val && val.length > 0 || 'Este campo es obligatorio' 
                              ]"
                            />  

                          </div>
                        </div>

                        <!-- Espaciador -->
                        <div class="col-md-4 q-ma-xs">
                          <q-btn icon="find_replace" @click="verificarRut(updateMasForm.rutDue, 'update')" label="Comprobar" color="primary"/>
                        </div>
                        
                        <template v-if="updateMasForm.rutValido">
                          <div class="campo col-md-6 col-xs-11">
                            <div class="q-gutter-md">
                              <q-select
                                filled
                                label="Seleccione la Mascota"
                                v-model="idMas"
                                :options="updateMasForm.optionsSelect"
                                map-options
                              />
                            </div>
                          </div>
                        </template>

                        <!-- Espaciador -->
                        <div class="col-md-4 q-ma-xs">
                        </div>

                      </div>

                      <q-separator></q-separator>
                      
                      <template v-if="updateMasForm.mascota">

                        <!-- NOMBRE -->
                        <div class="campo col-md-5 col-xs-11">
                          <q-input 
                            filled 
                            v-model="updateMasForm.nombre" 
                            label="Nombre"
                            lazy-rules
                            :rules="[ 
                              val => val && val.length > 0 || 'Este campo es obligatorio' 
                            ]"
                          />
                        </div>


                        <!-- COLOR -->
                        <div class="campo col-md-5 col-xs-11">
                          <q-input 
                            filled 
                            v-model="updateMasForm.color" 
                            label="Color"
                            lazy-rules
                            :rules="[ 
                              val => val && val.length > 0 || 'Este campo es obligatorio' 
                            ]"
                          />
                        </div>
                        

                        <!-- SEXO -->
                        <div id="sexo" class="campo col-md-5 col-xs-11">
                          <span class="text-subtitle1 q-my-lg q-mx-auto">Sexo: </span>
                          <div class="q-gutter-sm">
                            <q-radio keep-color v-model="addMasForm.sexo" val="macho" label="Macho" color="teal" />
                            <q-radio keep-color v-model="addMasForm.sexo" val="hembra" label="Hembra" color="pink" />
                          </div>
                        </div>

                        <!-- 

                              margin-top: 12px;
                              padding-left: 1rem;
                         -->


                        <!-- TAMAÑO -->
                        <div class="campo col-md-5 col-xs-11">
                          <div class="q-gutter-md">
                            <q-select
                              filled
                              label="Tamaño de la Mascota"
                              v-model="updateMasForm.size"
                              :options="['hi']"
                            />
                          </div>
                        </div>


                        <div class="campo col-md-5 col-xs-11">
                          <q-input 
                            filled 
                            v-model="updateMasForm.edad" 
                            label="Edad en años"
                            lazy-rules
                            type="number"
                            :rules="[ 
                              val => val && val.length > 0 || 'Este campo es obligatorio' 
                            ]"
                          />
                        </div>

                        <div class="q-mt-xl col-md-10 row justify-end ">
                          <q-btn label="Enviar" @click="submitUpdate" color="primary"/>
                        </div>


                      </template>
                    </q-form>

                </q-tab-panel>

              </q-tab-panels>
            </q-card>

            
          </div>
        </div>


        <div class="col-xs-12 col-md-11">
          <div class="q-pa-md q-my-lg"> 
            <q-table
              title="Mascotas"
              :rows="getMascotas"
              row-key="id"
              selection="single"
              v-model:selected="selectedTable"
            >
            

              <template v-slot:top>
                <q-btn class="q-ml-sm" color="primary" label="Eliminar Seleccionado" @click="removeMas" />
              </template>

            </q-table>
          </div>
        </div>

      </main>

  </q-page>
</template>

<style>
    #sexo{
      margin-top: 12px;
      padding-left: 1rem;
    }
</style>