// jquery for search button in navigation 

$( document ).ready(function() {
       $( ".btn-search" ).click(function() {
        $( "#hidden-search" ).slideToggle(
        "fast",
        function () {
               $("#searchGadget").focus();
           });
        });
       
       $("#portal-globalnav a[tabindex]").click(function(){
        $("#hidden-search").hide('fast');
       });
});