import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISKRЗаказLForm from './forms/i-i-s-k-r-заказ-l';
import IISKRЗаписьМатLForm from './forms/i-i-s-k-r-запись-мат-l';
import IISKRМестоХранLForm from './forms/i-i-s-k-r-место-хран-l';
import IISKRОтпускМатLForm from './forms/i-i-s-k-r-отпуск-мат-l';
import IISKRСотрудникиLForm from './forms/i-i-s-k-r-сотрудники-l';
import IISKRТНLForm from './forms/i-i-s-k-r-т-н-l';
import IISKRЗаказEForm from './forms/i-i-s-k-r-заказ-e';
import IISKRЗаписьМатEForm from './forms/i-i-s-k-r-запись-мат-e';
import IISKRМестоХранEForm from './forms/i-i-s-k-r-место-хран-e';
import IISKRОтпускМатEForm from './forms/i-i-s-k-r-отпуск-мат-e';
import IISKRСотрудникиEForm from './forms/i-i-s-k-r-сотрудники-e';
import IISKRТНEForm from './forms/i-i-s-k-r-т-н-e';
import IISKRЗаказModel from './models/i-i-s-k-r-заказ';
import IISKRЗаписьМатModel from './models/i-i-s-k-r-запись-мат';
import IISKRМестоХранModel from './models/i-i-s-k-r-место-хран';
import IISKRОтпускМатModel from './models/i-i-s-k-r-отпуск-мат';
import IISKRСотрудникиModel from './models/i-i-s-k-r-сотрудники';
import IISKRТНModel from './models/i-i-s-k-r-т-н';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-k-r-заказ': IISKRЗаказModel,
    'i-i-s-k-r-запись-мат': IISKRЗаписьМатModel,
    'i-i-s-k-r-место-хран': IISKRМестоХранModel,
    'i-i-s-k-r-отпуск-мат': IISKRОтпускМатModel,
    'i-i-s-k-r-сотрудники': IISKRСотрудникиModel,
    'i-i-s-k-r-т-н': IISKRТНModel
  },

  'application-name': 'KR',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'KR',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'KR',
          title: 'KR'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        'k-r': {
          caption: 'KR',
          title: 'KR',
          'i-i-s-k-r-запись-мат-l': {
            caption: 'Запись мат',
            title: ''
          },
          'i-i-s-k-r-сотрудники-l': {
            caption: 'Сотрудники',
            title: ''
          },
          'i-i-s-k-r-заказ-l': {
            caption: 'Заказ',
            title: ''
          },
          'i-i-s-k-r-отпуск-мат-l': {
            caption: 'Отпуск мат',
            title: ''
          },
          'i-i-s-k-r-т-н-l': {
            caption: 'ТН',
            title: ''
          },
          'i-i-s-k-r-место-хран-l': {
            caption: 'Место хран',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-k-r-заказ-l': IISKRЗаказLForm,
    'i-i-s-k-r-запись-мат-l': IISKRЗаписьМатLForm,
    'i-i-s-k-r-место-хран-l': IISKRМестоХранLForm,
    'i-i-s-k-r-отпуск-мат-l': IISKRОтпускМатLForm,
    'i-i-s-k-r-сотрудники-l': IISKRСотрудникиLForm,
    'i-i-s-k-r-т-н-l': IISKRТНLForm,
    'i-i-s-k-r-заказ-e': IISKRЗаказEForm,
    'i-i-s-k-r-запись-мат-e': IISKRЗаписьМатEForm,
    'i-i-s-k-r-место-хран-e': IISKRМестоХранEForm,
    'i-i-s-k-r-отпуск-мат-e': IISKRОтпускМатEForm,
    'i-i-s-k-r-сотрудники-e': IISKRСотрудникиEForm,
    'i-i-s-k-r-т-н-e': IISKRТНEForm
  },

});

export default translations;
