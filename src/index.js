//console.log("Hello World!");
import('./css/styles.styl');
import $ from "jquery";

var jq = $.noConflict();
(function($){
    let zoneImages=[],
    ids=[];
    $(function() {
        zoneImages=$('[class*="zone"] img');

        $(zoneImages).each(function(item){

            const randomNo=Math.floor(Math.random() * 10);

            for(let i=0;i<ids.length;i++ ){

                if(randomNo==ids[i]){

                    randomNo=Math.floor(Math.random() * 10);

                    ids.push(randomNo);

                } else{

                    ids.push(randomNo);

                }
            }

            $(zoneImages[item]).attr('src','https://picsum.photos/id/' + randomNo + '/960/960')
        })
    });
    
})(jq);