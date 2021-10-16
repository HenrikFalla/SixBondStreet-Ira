
         if (Shopify.Checkout.step === 'payment_method')
           
         {
document.querySelector(".step__footer").insertAdjacentHTML("beforeBegin",
"<label id='agreement-label'><input type='checkbox' class='input-checkbox' id='agreement-input'> Jeg har lest og godkjenner <a href='/policies/terms-of-service'>kjøpsvilkårene</a></label>");
           
           console.log("ready");
           
           var checker = document.getElementById('agreement-input');
var sendbtn = document.getElementById('continue_button');
//              sendbtn.disabled = true;
checker.onchange = function() {
  sendbtn.disabled = !(this.checked);
};
           
           
         }
   

