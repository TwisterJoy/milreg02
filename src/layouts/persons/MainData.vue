<template>
  <div class="">
    <div class="row col-grow q-ma-xs q-pa-xs">
        <div class="text-h6">Личные сведения</div>

    </div>
    <div class="row col-grow q-ma-xs">
        <div class="col-grow q-ma-xs q-pa-sm bg-grey-2 rounded-borders">
            <small class="text-primary text-weight-bold">ФИО</small><br>
            {{ person.surname + ' ' + person.name + ' ' + person.middle_name }}
        </div>
    </div>
    <div class="row col-grow q-ma-xs">
        <div class="col-grow q-ma-xs q-pa-sm bg-grey-2 rounded-borders">
            <small class="text-primary text-weight-bold">Дата рождения</small><br>
            <q-icon name="mdi-calendar" /> {{ person.birth_day }}
        </div>
        <div class="col-grow q-ma-xs q-pa-sm bg-grey-2 rounded-borders">
            <small class="text-primary text-weight-bold">Пол</small><br>
            {{ person.sex_name }}
        </div>
        <div class="col-grow q-ma-xs q-pa-sm bg-grey-2 rounded-borders">
            <small class="text-primary text-weight-bold">Место рождения</small><br>
            <q-icon name="mdi-map-marker-outline" /> {{ person.okato_name }}
        </div>
        <div class="col-grow q-ma-xs q-pa-sm bg-grey-2 rounded-borders">
            <small class="text-primary text-weight-bold">СНИЛС</small><br>
            {{ person.snils }}
        </div>
    </div>
    <div class="row col-grow q-ma-xs">
        <div class="col-grow q-ma-xs q-pa-sm bg-grey-2 rounded-borders">
            <small class="text-primary text-weight-bold">ИНН</small><br>
            {{ person.inn }}
        </div>
    </div>
    <div class="row col-grow q-ma-xs">
        <div class="col-grow q-ma-xs q-pa-sm bg-grey-2 rounded-borders">
            <small class="text-primary text-weight-bold">Паспорт гражданина РФ</small><br>
            <div class="col-grow q-mt-xs q-pa-sm bg-white rounded-borders">
                <small class="text-primary text-weight-bold">Действующий паспорт</small><br>
                <div class="col-grow q-pa-sm bg-grey-2 rounded-borders">
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
                            <small class="text-primary text-weight-bold">Дата выдачи</small><br>
                            <q-icon name="mdi-calendar" /> ---
                        </div>
                        <div class="col-grow q-ma-xs q-pa-sm bg-white rounded-borders">
                            <small class="text-primary text-weight-bold">Код подразделения</small><br>
                            ---
                        </div>
                    </div>
                    <div class="row col-grow">
                        <div class="col-grow q-ma-xs q-pa-sm bg-white rounded-borders">
                            <small class="text-primary text-weight-bold">Наименование органа, выдавшего документ</small><br>
                            ---
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-grow q-mt-xs q-pa-sm bg-white rounded-borders">
                <small class="text-primary text-weight-bold">Ранее выданный паспорт</small><br>
                <div class="col-grow q-pa-sm bg-grey-2 rounded-borders">
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
                            <small class="text-primary text-weight-bold">Дата выдачи</small><br>
                            <q-icon name="mdi-calendar" /> ---
                        </div>
                        <div class="col-grow q-ma-xs q-pa-sm bg-white rounded-borders">
                            <small class="text-primary text-weight-bold">Код подразделения</small><br>
                            ---
                        </div>
                    </div>
                    <div class="row col-grow">
                        <div class="col-grow q-ma-xs q-pa-sm bg-white rounded-borders">
                            <small class="text-primary text-weight-bold">Наименование органа, выдавшего документ</small><br>
                            ---
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="row col-grow q-ma-xs">
        <div class="col-grow q-ma-xs q-pa-sm bg-grey-2 rounded-borders">
            <small class="text-primary text-weight-bold">Адреса</small><br>
            <div class="col-grow q-mt-xs q-pa-sm bg-white rounded-borders">
                <small class="text-primary text-weight-bold">Адрес регистрации по месту жительства</small><br>
                <div class="row col-grow ">
                    <div class="col-grow q-ma-xs q-pa-sm bg-grey-2 rounded-borders">
                        <small class="text-primary text-weight-bold">Адрес</small><br>
                        <q-icon name="mdi-map-marker-outline" /> ---
                    </div>
                </div>
                <div class="row col-grow ">
                    <div class="col-grow q-ma-xs q-pa-sm bg-grey-2 rounded-borders">
                        <small class="text-primary text-weight-bold">Дата начала регистрации</small><br>
                        <q-icon name="mdi-calendar" /> ---
                    </div>
                </div>
            </div>

        </div>
    </div>
  </div>
  <q-separator />
  <div>
      <div class="row col-grow q-ma-xs q-pa-xs">
          <div class="text-h6">Контактные данные</div>
      </div>
      <div class="row col-grow q-ma-xs">
          <div class="col-grow q-ma-xs q-pa-sm bg-grey-2 rounded-borders">
              <small class="text-primary text-weight-bold">Телефон</small><br>
              <q-icon name="mdi-phone" /> ---
          </div>
          <div class="col-grow q-ma-xs q-pa-sm bg-grey-2 rounded-borders">
              <small class="text-primary text-weight-bold">Email</small><br>
              <q-icon name="mdi-email" /> ---
          </div>
      </div>
  </div>
  <q-separator />
  <div>
      <div class="row col-grow q-ma-xs q-pa-xs">
          <div class="text-h6">Системные сведения</div>
      </div>
      <div class="row col-grow q-ma-xs">
          <div class="col-grow q-ma-xs q-pa-sm bg-grey-2 rounded-borders">
              <small class="text-primary text-weight-bold">Идентификатор записи</small><br>
              {{ person.id }}
          </div>
      </div>
      <div class="row col-grow q-ma-xs">
          <div class="col-grow q-ma-xs q-pa-sm bg-grey-2 rounded-borders">
              <small class="text-primary text-weight-bold">Дата создания карточки</small><br>
              <q-icon name="mdi-calendar" /> {{ person.created_at }}
          </div>
          <div class="col-grow q-ma-xs q-pa-sm bg-grey-2 rounded-borders">
              <small class="text-primary text-weight-bold">Дата последнего обновления</small><br>
              <q-icon name="mdi-calendar" /> {{ person.updated_at }}
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
