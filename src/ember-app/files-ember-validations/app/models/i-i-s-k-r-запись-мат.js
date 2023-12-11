import {
  defineNamespace,
  defineProjections,
  Model as ЗаписьМатMixin
} from '../mixins/regenerated/models/i-i-s-k-r-запись-мат';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ЗаписьМатMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
