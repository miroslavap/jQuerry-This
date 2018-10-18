$(document).ready(function() {

        $(".stream_nav").on("click", function(){

            var stream1 = $(this).attr("id");
            var cardStream1 = $(".card").attr("class").split(" ")[0];

        if($("." + stream1).css("background-color") == "rgb(235,82,85)") {
                
            $("." + stream1).css("background-color", "#fff");

            } else {
                $("." + cardStream1).css("background-color", "#fff");
                $("." + stream1).css("background-color", "rgb(235,82,85)");
                 }
            });
        });
