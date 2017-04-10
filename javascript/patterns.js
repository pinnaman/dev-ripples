var Logger = function() {
   var init = function() {
      $('#btnClickMe').on('click',function() {
          $('.para').html(new Date().getFullYear());
              logMessage();
          });
   },
          logMessage = function() {
             console.log('Using Revealing Module Pattern from backend');
          };

   return {
     init:init
   };

}();
