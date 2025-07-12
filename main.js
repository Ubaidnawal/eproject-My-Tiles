$(document).ready(function(){
            $("#read-more").click(function(){
                $("#full-text").slideDown();
                $("#read-more").hide();
                $("#read-less").show();
            });

            $("#read-less").click(function(){
                $("#full-text").slideUp();
                $("#read-more").show();
                $("#read-less").hide();
            });
});
        





        