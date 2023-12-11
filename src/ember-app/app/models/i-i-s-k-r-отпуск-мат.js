import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as ОтпускМатMixin
} from '../mixins/regenerated/models/i-i-s-k-r-отпуск-мат';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(ОтпускМатMixin, Validations, {
});

defineProjections(Model);

export default Model;
