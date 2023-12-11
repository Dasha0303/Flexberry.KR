import {
  defineNamespace,
  defineProjections,
  Model as МестоХранMixin
} from '../mixins/regenerated/models/i-i-s-k-r-место-хран';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(МестоХранMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
