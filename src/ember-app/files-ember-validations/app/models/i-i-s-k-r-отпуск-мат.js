import {
  defineNamespace,
  defineProjections,
  Model as ОтпускМатMixin
} from '../mixins/regenerated/models/i-i-s-k-r-отпуск-мат';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ОтпускМатMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
