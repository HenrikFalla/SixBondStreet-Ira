
         if (Shopify.Checkout.step === 'payment_method')
           
         {
document.querySelector(".step__footer").insertAdjacentHTML("beforeBegin",
"<label><input type='checkbox' class='input-checkbox'> Jeg har lest og godkjenner <a href='/policies/terms-of-service'>kjøpsvilkårene</a></label>");
           
           console.log("ready");
           
//            var checker = document.getElementById('checkme');
var sendbtn = document.getElementById('continue_button');
             sendbtn.disabled = true;
// checker.onchange = function() {
//   sendbtn.disabled = !!this.checked;
// };
           
           
         }
   

