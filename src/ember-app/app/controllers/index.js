import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.k-r.caption'),
          title: i18n.t('forms.application.sitemap.k-r.title'),
          children: [{
            link: 'i-i-s-k-r-запись-мат-l',
            caption: i18n.t('forms.application.sitemap.k-r.i-i-s-k-r-запись-мат-l.caption'),
            title: i18n.t('forms.application.sitemap.k-r.i-i-s-k-r-запись-мат-l.title'),
            icon: 'book',
            children: null
          }, {
            link: 'i-i-s-k-r-сотрудники-l',
            caption: i18n.t('forms.application.sitemap.k-r.i-i-s-k-r-сотрудники-l.caption'),
            title: i18n.t('forms.application.sitemap.k-r.i-i-s-k-r-сотрудники-l.title'),
            icon: 'folder',
            children: null
          }, {
            link: 'i-i-s-k-r-заказ-l',
            caption: i18n.t('forms.application.sitemap.k-r.i-i-s-k-r-заказ-l.caption'),
            title: i18n.t('forms.application.sitemap.k-r.i-i-s-k-r-заказ-l.title'),
            icon: 'list',
            children: null
          }, {
            link: 'i-i-s-k-r-отпуск-мат-l',
            caption: i18n.t('forms.application.sitemap.k-r.i-i-s-k-r-отпуск-мат-l.caption'),
            title: i18n.t('forms.application.sitemap.k-r.i-i-s-k-r-отпуск-мат-l.title'),
            icon: 'edit',
            children: null
          }, {
            link: 'i-i-s-k-r-т-н-l',
            caption: i18n.t('forms.application.sitemap.k-r.i-i-s-k-r-т-н-l.caption'),
            title: i18n.t('forms.application.sitemap.k-r.i-i-s-k-r-т-н-l.title'),
            icon: 'edit',
            children: null
          }, {
            link: 'i-i-s-k-r-место-хран-l',
            caption: i18n.t('forms.application.sitemap.k-r.i-i-s-k-r-место-хран-l.caption'),
            title: i18n.t('forms.application.sitemap.k-r.i-i-s-k-r-место-хран-l.title'),
            icon: 'edit',
            children: null
          }]
        }
      ]
    };
  }),
})