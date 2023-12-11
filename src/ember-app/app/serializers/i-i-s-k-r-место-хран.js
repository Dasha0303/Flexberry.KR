import { Serializer as МестоХранSerializer } from
  '../mixins/regenerated/serializers/i-i-s-k-r-место-хран';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(МестоХранSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
