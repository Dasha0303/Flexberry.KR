import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-k-r-заказ', 'Unit | Serializer | i-i-s-k-r-заказ', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-k-r-заказ',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'model:i-i-s-k-r-заказ',
    'model:i-i-s-k-r-запись-мат',
    'model:i-i-s-k-r-место-хран',
    'model:i-i-s-k-r-отпуск-мат',
    'model:i-i-s-k-r-сотрудники',
    'model:i-i-s-k-r-т-н',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
