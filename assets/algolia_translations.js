(function(algolia) {
  'use strict';
  algolia.translations = {
    search: 'Ditt søk',
    noCollectionFound: 'Ingen kategori funnet',
    allProducts: 'Se alle produkter',
    matching: 'matcher',
    sortBy: 'Sortert etter',
    relevance: 'Relevans',
    outOf: 'out of',
    resultsFound: 'resultater funnet',
    oneResultFound: '1 resultat funnet',
    noResultFound: 'Ingen resultater funnet',
    addToCart: 'Legg i handlekurv',
    searchForProduct: 'Søk etter produkter',
    selectedFilter: 'Valgte filter',
    clearAll: 'Fjern alt',
    noPageFound: 'Ingen sider funnet',
    outOfStock: 'Utsolgt',
    'Vendor': 'Merke',
  };

  algolia.translation_helpers = {
    no_result_for: function(text, render) {
      return 'No result for query ' + render(text);
    },
    in: function() {
      return 'in ' + this.processingTimeMS / 1000 + 's';
    },

    try_clear_or_change_input: function(text, render) {
      var regex = new RegExp(/<\/a>|<a[a-z "-=]*>/, 'g');
      var html_tags = text.match(regex);
      return (
        'Try ' +
        render(html_tags[0]) +
        ' clearing filters ' +
        render(html_tags[1]) +
        ' or ' +
        render(html_tags[2]) +
        ' changing your input ' +
        render(html_tags[3])
      );
    },

    outOf: function() {
      return (
        this.page * this.hitsPerPage +
        1 +
        '-' +
        Math.min((this.page + 1) * this.hitsPerPage, this.nbHits) +
        ' out of'
      );
    },

    by: function(text, render) {
      return 'by ' + render(text);
    },

    translation: function(text, render) {
      return algolia.translations[render(text)];
    },
  };
})(window.algoliaShopify);
