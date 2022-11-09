<!-- Start of Clerk.io E-commerce Personalisation tool - www.clerk.io -->
<script type="text/javascript">
  (function(w,d){
    var e=d.createElement('script');e.type='text/javascript';e.async=true;
    e.src=(d.location.protocol=='https:'?'https':'http')+'://cdn.clerk.io/clerk.js';
    var s=d.getElementsByTagName('script')[0];s.parentNode.insertBefore(e,s);
    w.__clerk_q=w.__clerk_q||[];w.Clerk=w.Clerk||function(){w.__clerk_q.push(arguments)};
  })(window,document);

  Clerk('config', {
    key: 'OZLV8JPBfFyDcsotFN0rcxcIm7a9vydn',
    formatters: {
      currency_converter: function(price) {
        var converted_price = (price*Shopify.currency.rate);
        return (converted_price).toString();
      }
    },
    globals: {
      currency_iso: "{{ cart.currency.iso_code }}",
      currency_symbol: "{{ cart.currency.symbol }}"
    }
  });
</script>
<!-- End of Clerk.io E-commerce Personalisation tool - www.clerk.io -->