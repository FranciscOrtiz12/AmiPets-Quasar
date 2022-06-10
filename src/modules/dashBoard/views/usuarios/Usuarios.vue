<script lang="js" src="./Usuarios.js"/>

<template>
  <q-page class=" q-mx-auto ">

      <main class="row justify-center" >
        
        <span class="text-h2 q-my-lg q-mx-auto">Gestion de Usuarios</span>


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
                <q-tab name="add" label="Agregar Usuario" />
                <q-tab name="update" label="Actualizar Usuario" />
              </q-tabs>

              <q-separator />

              <q-tab-panels v-model="tab" animated>
                <q-tab-panel class="q-my-md " name="add">
                  
                  <div class="column q-mx-md">
                    <span class="text-h6 text-bold">Usuarios</span>
                    <span class="text-subtitle2 text-ligth">Agrega nuevos usuarios a tu sistema</span>
                  </div>

                    <q-form
                      class="row q-gutter-lg q-my-xs justify-center"
                    > 

                      <div class="campo col-md-5 col-xs-11">
                        <q-input 
                        id="nombre"
                        filled
                        v-model="addUserForm.nombreUsuario" 
                        label="Nombre de Usuario" 
                        lazy-rules
                        :rules="[ 
                        val => val && val.length > 0 || 'Este campo es obligatorio' 
                        ]"
                        />
                      </div>

                      <!-- Espaciador -->
                      <div class="campo col-md-5 col-xs-11">
                      </div>
                      
                      <div class="campo col-md-5 col-xs-11">
                        <q-input
                         id="nombre"
                         filled 
                         v-model="addUserForm.nombre" 
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
                         v-model="addUserForm.apellido" 
                         label="Apellido" 
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
                         v-model="addUserForm.telefono" 
                         lazy-rules
                         label="Telefono" 
                         type="number"
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
                         v-model="addUserForm.email" 
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
                         type="password" 
                         filled 
                         v-model="addUserForm.contraseña1" 
                         label="Contraseña" 
                         lazy-rules
                         :rules="[ 
                          val => val && val.length > 0 || 'Este campo es obligatorio' 
                          ]"
                        />
                      </div>

                      <div class="campo col-md-5 col-xs-11">
                        <q-input 
                         id="nombre" 
                         type="password" 
                         filled 
                         v-model="addUserForm.contraseña2" 
                         label="Repita la Contraseña" 
                         lazy-rules
                         :rules="[ 
                            val => val === addUserForm.contraseña1 || 'Las contraseñas no son iguales' 
                          ]"
                         />
                      </div>

                      <div class="q-mt-xl col-md-10 row justify-end ">
                        <q-btn label="Limpiar" type="reset" color="primary" flat class="q-ml-sm" @click="helpLimpiarFormulario( addUserForm )"/>
                        <q-btn label="Enviar" @click="submitAdd" type="submit" color="primary"/>
                      </div>
                    </q-form>

                </q-tab-panel>

                <q-tab-panel class="q-my-md" name="update">
                  
                  <div class="column q-mx-md">
                    <span class="text-h6 text-bold">Usuarios</span>
                    <span class="text-subtitle2 text-ligth">Actualiza los datos de tus usuarios</span>
                  </div>

                    <q-form
                      class="row q-gutter-lg q-my-xs justify-center"
                    > 

                      <div class="campo col-md-5 col-xs-11">
                        <div class="q-gutter-md">
                          <q-select
                            filled
                            label="Seleccione un Usuario"
                            v-model="model"
                            :options="updateUserForm.optionsSelect"
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
                         v-model="updateUserForm.nombre" 
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
                         v-model="updateUserForm.apellido" 
                         label="Apellido"
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
                         v-model="updateUserForm.telefono"
                         label="Telefono"
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
                         v-model="updateUserForm.email"
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
                         type="password"
                         filled
                         v-model="updateUserForm.contraseña1"
                         label="Contraseña" />
                      </div>

                      <div class="campo col-md-5 col-xs-11">
                        <q-input
                         id="nombre"
                         type="password"
                         filled
                         v-model="updateUserForm.contraseña2"
                         label="Repita la Contraseña"
                         lazy-rules
                         :rules="[ 
                            val => val === updateUserForm.contraseña1 || 'Las contraseñas no son iguales' 
                          ]"
                        />
                         
                      </div>

                      <div class="q-mt-xl col-md-10 row justify-end ">
                        <q-btn label="Limpiar" type="reset" color="primary" flat class="q-ml-sm" @click="helpLimpiarFormulario( updateUserForm )"/>
                        <q-btn label="Enviar" type="submit" @click="submitUpdate" color="primary"/>
                      </div>
                    </q-form>
                  
                </q-tab-panel>
              </q-tab-panels>
            </q-card>

            
          </div>
        </div>

        <div class="q-pa-md q-my-lg">

          <q-table
            title="Usuarios"
            :rows="getUsers"
            row-key="nombre"
            selection="single"
            v-model:selected="selectedTable"            
          >

            <template v-slot:top>
              <q-btn class="q-ml-sm" color="primary" label="Eliminar Seleccionado" @click="removeUser" />
            </template>

          </q-table>
          
        </div>

      </main>

  </q-page>
</template>

