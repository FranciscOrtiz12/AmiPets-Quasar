<script lang="js" src="./Clientes.js"/>

<template>
  <q-page class=" q-mx-auto ">

      <main class="row justify-center" >
        
        <span class="text-h2 q-my-lg q-mx-auto">Gestion de Clientes</span>

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
                <q-tab name="add" label="Agregar Cliente" />
                <q-tab name="update" label="Actualizar Cliente" />
              </q-tabs>

              <q-separator />

              <q-tab-panels v-model="tab" animated>
                <!-- PANEL DE AGREGAR -->
                <q-tab-panel class="q-my-md" name="add">
                  
                  <div class="column q-mx-md">
                    <span class="text-h6 text-bold">Clientes</span>
                    <span class="text-subtitle2 text-ligth">Agrega nuevos Clientes a tu sistema</span>
                  </div>

                    <q-form
                      class="row q-gutter-lg q-my-xs justify-center"
                    > 

                      <div class="campo col-md-5 col-xs-11">
                        <q-input
                         filled
                         v-model="addClientForm.nombre"
                         label="Nombre"
                         lazy-rules
                         :rules="[ 
                          val => val && val.length > 0 || 'Este campo es obligatorio' 
                          ]"
                        />
                      </div>

                      <div class="campo col-md-5 col-xs-11">
                        <q-input
                         filled
                         v-model="addClientForm.apellidos"
                         label="Apellidos" 
                         lazy-rules
                         :rules="[ 
                          val => val && val.length > 0 || 'Este campo es obligatorio' 
                          ]"
                        />
                      </div>

                      <div class="campo col-md-5 col-xs-11">
                        <q-input
                          filled
                         v-model="addClientForm.rut"
                         label="Rut" 
                         lazy-rules
                         :rules="[ 
                          val => val && val.length > 0 || 'Este campo es obligatorio' 
                          ]"
                        />
                      </div>

                      <div class="campo col-md-5 col-xs-11">
                        <q-input
                         filled
                         v-model="addClientForm.telefono"
                         label="Telefono" 
                         lazy-rules
                         :rules="[ 
                          val => val && val.length > 0 || 'Este campo es obligatorio' 
                          ]"
                        />
                      </div>


                      <div class="campo col-md-5 col-xs-11">
                        <q-input
                         filled
                         v-model="addClientForm.email"
                         label="Email" 
                         lazy-rules
                         :rules="[ 
                          isValidEmail
                          ]"
                        />
                      </div>

                      <div class="campo col-md-5 col-xs-11">
                        <q-input
                         type="text"
                         filled
                         v-model="addClientForm.direccion"
                         label="Dirección" 
                         lazy-rules
                         :rules="[ 
                          val => val && val.length > 0 || 'Este campo es obligatorio' 
                          ]"
                        />
                      </div>
                      

                      <div class="q-mt-xl col-md-10 row justify-end ">
                        <q-btn label="Limpiar" @click="helpLimpiarFormulario(addClientForm)" type="reset" color="primary" flat class="q-ml-sm" />
                        <q-btn label="Enviar" @click="submitAdd" type="submit" color="primary"/>
                      </div>
                    </q-form>

                </q-tab-panel>

                <!-- PANEL DE ACTUALIZACIsON -->
                <q-tab-panel class="q-my-md" name="update">
                  
                  <q-form
                      class="row q-gutter-lg q-my-xs justify-center"
                    > 

                    <div class="row col-md-10 col-xs-11 justify-evenly ">

                      <div class="campo col-md-6 col-xs-11">
                        <div class="q-gutter-md">
                          <q-input
                            filled 
                            v-model="updateClientForm.clientToUpdateRut" 
                            label="Rut del cliente a Actualizar" 
                            lazy-rules
                            :rules="[ 
                            val => val && val.length > 0 || 'Este campo es obligatorio' 
                            ]"
                          />  

                        </div>
                      </div>

                      <!-- Espaciador -->
                      <div class="col-md-4 q-ma-xs">
                        <q-btn icon="find_replace" @click="rellenarForm(updateClientForm.clientToUpdateRut)" label="Comprobar" color="primary"/>
                      </div>

                    </div>

                    <template v-if="getValidRut">
                        <div class="campo col-md-5 col-xs-11" >
                        <q-input
                          filled 
                          v-model="updateClientForm.nombre" 
                          label="Nombre" 
                          lazy-rules
                          :rules="[ 
                            val => val && val.length > 0 || 'Este campo es    obligatorio' 
                          ]"
                        />
                      </div>

                      <div class="campo col-md-5 col-xs-11">
                        <q-input 
                          filled 
                          v-model="updateClientForm.apellidos" 
                          label="Apellido"
                          lazy-rules
                          :rules="[ 
                            val => val && val.length > 0 || 'Este campo es obligatorio' 
                          ]"
                        />
                      </div>

                      <div class="campo col-md-5 col-xs-11">
                        <q-input 
                          filled 
                          v-model="updateClientForm.rut" 
                          label="Rut"
                          lazy-rules
                          :rules="[ 
                            val => val && val.length > 0 || 'Este campo es obligatorio' 
                          ]"
                        />
                      </div>

                      <div class="campo col-md-5 col-xs-11">
                        <q-input
                          filled
                          v-model="updateClientForm.telefono"
                          label="Telefono"
                          lazy-rules
                          :rules="[ 
                            val => val && val.length > 0 || 'Este campo es obligatorio' 
                          ]"
                         />
                      </div>

                      <div class="campo col-md-5 col-xs-11">
                        <q-input
                          filled
                          v-model="updateClientForm.email"
                          label="Email"
                          lazy-rules
                          :rules="[ 
                            isValidEmail
                          ]"
                         />
                      </div>

                      <div class="campo col-md-5 col-xs-11">
                        <q-input
                          filled
                          v-model="updateClientForm.direccion"
                          label="Dirección"
                          lazy-rules
                          :rules="[ 
                            val => val && val.length > 0 || 'Este campo es obligatorio' 
                          ]"
                         />
                      </div>

                      <div class="q-mt-xl col-md-10 row justify-end ">
                        <q-btn label="Limpiar" type="reset" color="primary" flat class="q-ml-sm" @click="helpLimpiarFormulario( updateClientForm )"/>
                        <q-btn label="Enviar" @click="submitUpdate" type="submit" color="primary"/>
                      </div>
                    </template>

                    </q-form>

                </q-tab-panel>
              </q-tab-panels>
            </q-card>

            
          </div>
        </div>

        <div class="q-pa-md q-my-lg">
          
          <q-table
            title="Clientes"
            :rows="getClients"
            row-key="nombre"
            selection="single"
            v-model:selected="selectedTable"            
          >

            <template v-slot:top>
              <q-btn class="q-ml-sm" color="primary" label="Eliminar Seleccionado" @click="removeClient" />
            </template>

          </q-table>
          
        </div>

      </main>


  </q-page>
</template>


