(function(global) {
    Object.defineProperty(global, 'search', {
        set: function(query) {
            if (typeof query === 'string' && query.trim() !== '') {
                var encodedQuery = encodeURIComponent(query);
                var googleSearchUrl = 'https://www.google.com/search?q=' + encodedQuery;
                var iframe = document.getElementById('search-iframe');
                if (!iframe) {
                    iframe = document.createElement('iframe');
                    iframe.id = 'search-iframe';
                    iframe.style.width = '100%';
                    iframe.style.height = '500px';
                    document.body.appendChild(iframe);
                }
                iframe.src = googleSearchUrl;
            } else {
                console.error('يرجى تقديم استعلام بحث صالح.');
            }
        },
        configurable: true
    });
})(this);