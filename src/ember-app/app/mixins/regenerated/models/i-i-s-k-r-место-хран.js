import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  имяМеста: DS.attr('string'),
  расположение: DS.attr('string'),
  записьМат: DS.belongsTo('i-i-s-k-r-запись-мат', { inverse: null, async: false })
});

export let ValidationRules = {
  имяМеста: {
    descriptionKey: 'models.i-i-s-k-r-место-хран.validations.имяМеста.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  расположение: {
    descriptionKey: 'models.i-i-s-k-r-место-хран.validations.расположение.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  записьМат: {
    descriptionKey: 'models.i-i-s-k-r-место-хран.validations.записьМат.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('МестоХранE', 'i-i-s-k-r-место-хран', {
    расположение: attr('Расположение', { index: 0 }),
    имяМеста: attr('Имя места', { index: 1 }),
    записьМат: belongsTo('i-i-s-k-r-запись-мат', 'Запись мат', {
      материал: attr('Материал', { index: 3, hidden: true })
    }, { index: 2, displayMemberPath: 'материал' })
  });

  modelClass.defineProjection('МестоХранL', 'i-i-s-k-r-место-хран', {
    расположение: attr('Расположение', { index: 0 }),
    имяМеста: attr('Имя места', { index: 1 }),
    записьМат: belongsTo('i-i-s-k-r-запись-мат', 'Материал', {
      материал: attr('Материал', { index: 2 })
    }, { index: -1, hidden: true })
  });
};
