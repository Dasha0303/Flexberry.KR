import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  датаПоставки: DS.attr('string'),
  имяМат: DS.attr('string'),
  номерТН: DS.attr('number'),
  номерТС: DS.attr('string'),
  поставщик: DS.attr('string'),
  принял: DS.attr('string'),
  состав: DS.attr('string'),
  цвет: DS.attr('string'),
  записьМат: DS.belongsTo('i-i-s-k-r-запись-мат', { inverse: null, async: false }),
  сотрудники: DS.belongsTo('i-i-s-k-r-сотрудники', { inverse: null, async: false })
});

export let ValidationRules = {
  датаПоставки: {
    descriptionKey: 'models.i-i-s-k-r-т-н.validations.датаПоставки.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  имяМат: {
    descriptionKey: 'models.i-i-s-k-r-т-н.validations.имяМат.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  номерТН: {
    descriptionKey: 'models.i-i-s-k-r-т-н.validations.номерТН.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  номерТС: {
    descriptionKey: 'models.i-i-s-k-r-т-н.validations.номерТС.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  поставщик: {
    descriptionKey: 'models.i-i-s-k-r-т-н.validations.поставщик.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  принял: {
    descriptionKey: 'models.i-i-s-k-r-т-н.validations.принял.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  состав: {
    descriptionKey: 'models.i-i-s-k-r-т-н.validations.состав.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  цвет: {
    descriptionKey: 'models.i-i-s-k-r-т-н.validations.цвет.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  записьМат: {
    descriptionKey: 'models.i-i-s-k-r-т-н.validations.записьМат.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  сотрудники: {
    descriptionKey: 'models.i-i-s-k-r-т-н.validations.сотрудники.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ТНE', 'i-i-s-k-r-т-н', {
    цвет: attr('Цвет', { index: 0 }),
    датаПоставки: attr('Дата поставки', { index: 1 }),
    номерТС: attr('Номер ТС', { index: 2 }),
    имяМат: attr('Имя мат', { index: 3 }),
    поставщик: attr('Поставщик', { index: 4 }),
    номерТН: attr('Номер ТН', { index: 5 }),
    принял: attr('Принял', { index: 6 }),
    состав: attr('Состав', { index: 7 }),
    записьМат: belongsTo('i-i-s-k-r-запись-мат', 'Запись мат', {
      материал: attr('Материал', { index: 9, hidden: true })
    }, { index: 8, displayMemberPath: 'материал' }),
    сотрудники: belongsTo('i-i-s-k-r-сотрудники', 'Сотрудники', {
      должность: attr('Должность', { index: 11, hidden: true })
    }, { index: 10, displayMemberPath: 'должность' })
  });

  modelClass.defineProjection('ТНL', 'i-i-s-k-r-т-н', {
    цвет: attr('Цвет', { index: 0 }),
    датаПоставки: attr('Дата поставки', { index: 1 }),
    номерТС: attr('Номер ТС', { index: 2 }),
    имяМат: attr('Имя мат', { index: 3 }),
    поставщик: attr('Поставщик', { index: 4 }),
    номерТН: attr('Номер ТН', { index: 5 }),
    принял: attr('Принял', { index: 6 }),
    состав: attr('Состав', { index: 7 }),
    записьМат: belongsTo('i-i-s-k-r-запись-мат', 'Материал', {
      материал: attr('Материал', { index: 8 })
    }, { index: -1, hidden: true }),
    сотрудники: belongsTo('i-i-s-k-r-сотрудники', 'Должность', {
      должность: attr('Должность', { index: 9 })
    }, { index: -1, hidden: true })
  });
};
