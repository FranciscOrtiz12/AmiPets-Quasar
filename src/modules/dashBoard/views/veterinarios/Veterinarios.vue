<script lang="js" src="./Veterinarios.js"/>

<template>
  <q-page class=" q-mx-auto ">

      <main class="row justify-center" >
        
        <span class="text-h2 q-my-lg q-mx-auto">Gestion de Veterinarios</span>


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
                <q-tab name="add" label="Agregar Veterinario" />
                <q-tab name="update" label="Actualizar Veterinario" />
              </q-tabs>

              <q-separator />

              <q-tab-panels v-model="tab" animated>
                <q-tab-panel class="q-my-md " name="add">
                  
                  <div class="column q-mx-md">
                    <span class="text-h6 text-bold">Veterinarios</span>
                    <span class="text-subtitle2 text-ligth">Agrega nuevos veterinarios a tu sistema</span>
                  </div>

                    <q-form
                      class="row q-gutter-lg q-my-xs justify-center"
                    > 

                      <div class="campo col-md-5 col-xs-11">
                        <q-input 
                        id="nombre"
                        filled
                        v-model="addVetForm.nombre" 
                        label="Nombre" 
                        lazy-rules
                        :rules="[ 
                        val => val && val.length > 0 || 'Este campo es obligatorio' 
                        ]"
                        />
                      </div>
                      
                      <div class="campo col-md-5 col-xs-11">
                        <q-input
                         id="nombre"
                         filled 
                         v-model="addVetForm.apellidos" 
                         label="Apellidos"
                         lazy-rules
                         :rules="[ 
                          val => val && val.length > 0 || 'Este campo es obligatorio' 
                          ]"
                        />
                      </div>

                      <div class="campo col-md-5 col-xs-11">
                        <q-input 
                         id="nombre" 
                         filled 
                         v-model="addVetForm.rut" 
                         label="Rut" 
                         lazy-rules
                         :rules="[ 
                          val => val && val.length > 0 || 'Este campo es obligatorio' 
                          ]"
                         />
                      </div>

                      <div class="campo col-md-5 col-xs-11">
                        <q-input 
                         id="nombre" 
                         filled 
                         v-model="addVetForm.especialidad" 
                         lazy-rules
                         label="Especialidad" 
                         type="text"
                         :rules="[ 
                          val => val && val.length > 0 || 'Este campo es obligatorio' 
                          ]"
                        />
                      </div>

                      <div class="campo col-md-5 col-xs-11">
                        <q-input
                         id="nombre" 
                         type="email" 
                         filled 
                         v-model="addVetForm.email" 
                         label="Email" 
                         lazy-rules
                         :rules="[
                          isValidEmail
                         ]"
                         />
                      </div>

                      <div class="campo col-md-5 col-xs-11">
                        <q-input 
                         id="nombre" 
                         type="text" 
                         filled 
                         v-model="addVetForm.telefono" 
                         label="Telefono" 
                         lazy-rules
                         :rules="[ 
                          val => val && val.length > 0 || 'Este campo es obligatorio' 
                          ]"
                        />
                      </div>

                      <div class="q-mt-xl col-md-10 row justify-end ">
                        <q-btn label="Limpiar" type="reset" color="primary" flat class="q-ml-sm" @click="helpLimpiarFormulario( addVetForm )"/>
                        <q-btn label="Enviar" @click="submitAdd" type="submit" color="primary"/>
                      </div>
                    </q-form>

                </q-tab-panel>

                <q-tab-panel class="q-my-md" name="update">
                  
                  <div class="column q-mx-md">
                    <span class="text-h6 text-bold">Veterinarios</span>
                    <span class="text-subtitle2 text-ligth">Actualiza los datos de tus veterinarios</span>
                  </div>

                    <q-form
                      class="row q-gutter-lg q-my-xs justify-center"
                    > 

                    <div class="campo col-md-5 col-xs-11">
                        <div class="q-gutter-md">
                          <q-select
                            label="Seleccione un Veterinario"
                            filled
                            v-model="model"
                            :options="updateVetForm.optionsSelect"
                            option-value="rut"
                            option-label="nombre"
                            emit-value
                            map-options
                          />
                        </div>
                      </div>

                      <!-- Espaciador -->
                      <div class="campo col-md-5 col-xs-11">
                      </div>

                      <div class="campo col-md-5 col-xs-11" >
                        <q-input
                         id="nombre" 
                         filled 
                         v-model="updateVetForm.nombre" 
                         label="Nombre" 
                         lazy-rules
                         :rules="[ 
                          val => val && val.length > 0 || 'Este campo es obligatorio' 
                          ]"
                        />
                      </div>

                      <div class="campo col-md-5 col-xs-11">
                        <q-input 
                         id="nombre" 
                         filled 
                         v-model="updateVetForm.apellidos" 
                         label="Apellidos"
                         lazy-rules
                         :rules="[ 
                          val => val && val.length > 0 || 'Este campo es obligatorio' 
                          ]"
                        />
                      </div>

                      <div class="campo col-md-5 col-xs-11">
                        <q-input
                         id="nombre"
                         filled
                         v-model="updateVetForm.rut"
                         label="Rut"
                         lazy-rules
                         :rules="[ 
                          val => val && val.length > 0 || 'Este campo es obligatorio' 
                          ]"
                         />
                      </div>

                      <div class="campo col-md-5 col-xs-11">
                        <q-input
                         id="nombre"
                         filled
                         v-model="updateVetForm.especialidad"
                         label="Especialidad"
                         lazy-rules
                         :rules="[ 
                          val => val && val.length > 0 || 'Este campo es obligatorio' 
                          ]"
                         />
                      </div>

                      <div class="campo col-md-5 col-xs-11">
                        <q-input
                         id="nombre"
                         type="text"
                         filled
                         v-model="updateVetForm.email"
                         label="Email"
                         lazy-rules
                         :rules="[ 
                          isValidEmail
                          ]"
                         />
                         
                      </div>

                      <div class="campo col-md-5 col-xs-11">
                        <q-input
                         id="nombre"
                         type="text"
                         filled
                         v-model="updateVetForm.telefono"
                         label="Telefono" 
                         lazy-rules
                         :rules="[ 
                          val => val && val.length > 0 || 'Este campo es obligatorio' 
                          ]"
                        />
                         
                      </div>

                      <div class="q-mt-xl col-md-10 row justify-end ">
                        <q-btn label="Limpiar" type="reset" color="primary" flat class="q-ml-sm" @click="helpLimpiarFormulario( updateVetForm )"/>
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
              title="Veterinarios"
              :rows="getVeterinarios"
              row-key="nombre"
              selection="single"
              v-model:selected="selectedTable"            
            >

              <template v-slot:top> 
                <q-btn class="q-ml-sm" @click="removeVet" color="primary" label="Eliminar Seleccionado" />
              </template>

            </q-table>
            
          </div>
        </div>

      </main>

  </q-page>
</template>

