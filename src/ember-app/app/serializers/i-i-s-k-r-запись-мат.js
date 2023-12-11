import { Serializer as ЗаписьМатSerializer } from
  '../mixins/regenerated/serializers/i-i-s-k-r-запись-мат';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ЗаписьМатSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
