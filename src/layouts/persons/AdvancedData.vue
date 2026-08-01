<template>
  <div>
    <div class="row col-grow q-ma-xs q-pa-xs">
        <div class="text-h6">Подробные сведения</div>
    </div>
    <div class="row col-grow q-ma-xs">
        <div class="col-grow q-ma-xs q-pa-sm bg-grey-2 rounded-borders">
            <small class="text-primary text-weight-bold">Сведения о семье</small><br>
            <div class="col-grow q-mt-xs q-pa-sm bg-white rounded-borders">
                <small class="text-primary text-weight-bold">Семейное положение</small><br>
                 {{ person.family_status_name }}
            </div>
        </div>
    </div>
    <div class="row col-grow q-ma-xs">
      <div class="col-grow q-ma-xs q-pa-sm bg-grey-2 rounded-borders">
          <small class="text-primary text-weight-bold">Сведения о родственнике</small><br>
          <div class="row col-grow">
              <div class="col-grow q-ma-xs q-pa-sm bg-white rounded-borders">
                  <small class="text-primary text-weight-bold">ИД</small><br>
                  ---
              </div>
              <div class="col-grow q-ma-xs q-pa-sm bg-white rounded-borders">
                  <small class="text-primary text-weight-bold">Родственная связь</small><br>
                  ---
              </div>
          </div>
          <div class="row col-grow">
              <div class="col-grow q-ma-xs q-pa-sm bg-white rounded-borders">
                  <small class="text-primary text-weight-bold">ФИО</small><br>
                  ---
              </div>
          </div>
          <div class="row col-grow">
              <div class="col-grow q-ma-xs q-pa-sm bg-white rounded-borders">
                  <small class="text-primary text-weight-bold">Дата рождения</small><br>
                  ---
              </div>
              <div class="col-grow q-ma-xs q-pa-sm bg-white rounded-borders">
                  <small class="text-primary text-weight-bold">Телефон</small><br>
                  ---
              </div>
          </div>
      </div>
    </div>
  </div>
  <q-separator />
  <div>
    <div class="row col-grow q-ma-xs q-pa-xs">
        <div class="text-h6">Российские дипломы/аттестаты</div>
    </div>
    <div class="row col-grow q-ma-xs">
      <div class="col-grow q-ma-xs q-pa-sm bg-grey-2 rounded-borders">
          <small class="text-primary text-weight-bold">Документ об образовании</small><br>
          <div class="row col-grow">
              <div class="col-grow q-ma-xs q-pa-sm bg-white rounded-borders">
                  <small class="text-primary text-weight-bold">Уровень образования</small><br>
                  ---
              </div>
              <div class="col-grow q-ma-xs q-pa-sm bg-white rounded-borders">
                  <small class="text-primary text-weight-bold">Вид документа</small><br>
                  ---
              </div>
          </div>
          <div class="row col-grow">
              <div class="col-grow q-ma-xs q-pa-sm bg-white rounded-borders">
                  <small class="text-primary text-weight-bold">Серия</small><br>
                  ---
              </div>
              <div class="col-grow q-ma-xs q-pa-sm bg-white rounded-borders">
                  <small class="text-primary text-weight-bold">Номер</small><br>
                  ---
              </div>
              <div class="col-grow q-ma-xs q-pa-sm bg-white rounded-borders">
                  <small class="text-primary text-weight-bold">Регистрационный номер</small><br>
                  ---
              </div>
              <div class="col-grow q-ma-xs q-pa-sm bg-white rounded-borders">
                  <small class="text-primary text-weight-bold">Дата выдачи</small><br>
                  ---
              </div>
          </div>
          <div class="row col-grow">
              <div class="col-grow q-ma-xs q-pa-sm bg-white rounded-borders">
                  <small class="text-primary text-weight-bold">Наименование образовательной организации</small><br>
                  ---
              </div>
          </div>
      </div>
    </div>
  </div>
</template>


<script setup>
  defineProps({
    person: {
      type: Object,
      required: true
    }
  })
</script>

