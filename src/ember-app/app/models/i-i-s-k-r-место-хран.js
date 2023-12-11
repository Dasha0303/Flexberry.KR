import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as МестоХранMixin
} from '../mixins/regenerated/models/i-i-s-k-r-место-хран';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(МестоХранMixin, Validations, {
});

defineProjections(Model);

export default Model;
