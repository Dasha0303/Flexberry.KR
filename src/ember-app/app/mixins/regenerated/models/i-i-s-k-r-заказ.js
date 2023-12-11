import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  адресЗаказ: DS.attr('string'),
  колво: DS.attr('string'),
  материал: DS.attr('string'),
  номерЗаказа: DS.attr('number'),
  способДоставки: DS.attr('string'),
  фИОЗаказчика: DS.attr('string'),
  цвет: DS.attr('string'),
  отпускМат: DS.belongsTo('i-i-s-k-r-отпуск-мат', { inverse: null, async: false })
});

export let ValidationRules = {
  адресЗаказ: {
    descriptionKey: 'models.i-i-s-k-r-заказ.validations.адресЗаказ.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  колво: {
    descriptionKey: 'models.i-i-s-k-r-заказ.validations.колво.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  материал: {
    descriptionKey: 'models.i-i-s-k-r-заказ.validations.материал.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  номерЗаказа: {
    descriptionKey: 'models.i-i-s-k-r-заказ.validations.номерЗаказа.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  способДоставки: {
    descriptionKey: 'models.i-i-s-k-r-заказ.validations.способДоставки.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  фИОЗаказчика: {
    descriptionKey: 'models.i-i-s-k-r-заказ.validations.фИОЗаказчика.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  цвет: {
    descriptionKey: 'models.i-i-s-k-r-заказ.validations.цвет.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  отпускМат: {
    descriptionKey: 'models.i-i-s-k-r-заказ.validations.отпускМат.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ЗаказE', 'i-i-s-k-r-заказ', {
    способДоставки: attr('Способ доставки', { index: 0 }),
    фИОЗаказчика: attr('Ф и о заказчика', { index: 1 }),
    цвет: attr('Цвет', { index: 2 }),
    колво: attr('Колво', { index: 3 }),
    номерЗаказа: attr('Номер заказа', { index: 4 }),
    адресЗаказ: attr('Адрес заказ', { index: 5 }),
    материал: attr('Материал', { index: 6 }),
    отпускМат: belongsTo('i-i-s-k-r-отпуск-мат', 'Отпуск мат', {
      датаПроводки: attr('Дата проводки', { index: 8, hidden: true })
    }, { index: 7, displayMemberPath: 'датаПроводки' })
  });

  modelClass.defineProjection('ЗаказL', 'i-i-s-k-r-заказ', {
    способДоставки: attr('Способ доставки', { index: 0 }),
    фИОЗаказчика: attr('Ф и о заказчика', { index: 1 }),
    цвет: attr('Цвет', { index: 2 }),
    колво: attr('Колво', { index: 3 }),
    номерЗаказа: attr('Номер заказа', { index: 4 }),
    адресЗаказ: attr('Адрес заказ', { index: 5 }),
    материал: attr('Материал', { index: 6 }),
    отпускМат: belongsTo('i-i-s-k-r-отпуск-мат', 'Дата проводки', {
      датаПроводки: attr('Дата проводки', { index: 7 })
    }, { index: -1, hidden: true })
  });
};
