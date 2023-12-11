import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-k-r-заказ', 'Unit | Model | i-i-s-k-r-заказ', {
  // Specify the other units that are required for this test.
  needs: [
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
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
