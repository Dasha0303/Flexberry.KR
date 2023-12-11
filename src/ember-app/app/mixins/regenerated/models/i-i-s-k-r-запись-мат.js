import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  датаСоздания: DS.attr('string'),
  материал: DS.attr('string'),
  номерЗаписи: DS.attr('number'),
  сотрудники: DS.belongsTo('i-i-s-k-r-сотрудники', { inverse: null, async: false })
});

export let ValidationRules = {
  датаСоздания: {
    descriptionKey: 'models.i-i-s-k-r-запись-мат.validations.датаСоздания.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  материал: {
    descriptionKey: 'models.i-i-s-k-r-запись-мат.validations.материал.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  номерЗаписи: {
    descriptionKey: 'models.i-i-s-k-r-запись-мат.validations.номерЗаписи.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  сотрудники: {
    descriptionKey: 'models.i-i-s-k-r-запись-мат.validations.сотрудники.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ЗаписьМатE', 'i-i-s-k-r-запись-мат', {
    номерЗаписи: attr('Номер записи', { index: 0 }),
    материал: attr('Материал', { index: 1 }),
    датаСоздания: attr('Дата создания', { index: 2 }),
    сотрудники: belongsTo('i-i-s-k-r-сотрудники', 'Сотрудники', {
      должность: attr('Должность', { index: 4, hidden: true })
    }, { index: 3, displayMemberPath: 'должность' })
  });

  modelClass.defineProjection('ЗаписьМатL', 'i-i-s-k-r-запись-мат', {
    номерЗаписи: attr('Номер записи', { index: 0 }),
    материал: attr('Материал', { index: 1 }),
    датаСоздания: attr('Дата создания', { index: 2 }),
    сотрудники: belongsTo('i-i-s-k-r-сотрудники', 'Должность', {
      должность: attr('Должность', { index: 3 })
    }, { index: -1, hidden: true })
  });
};
