//console.log("Hello World!");
import('./css/styles.styl');
import $ from "jquery";

var jq = $.noConflict();
(function($){
    let zoneImages=[],
    ids=[],
    bestSellingStylesImgs='/360/360';

    $(function() {
        zoneImages=$('[class*="zone"] img');

        $(zoneImages).each(function(item){

            const randomNo=getRandomNumber(ids,zoneImages.length),
            parent=$(zoneImages[item]).parents('[class*="zone"]');

            if($(parent).hasClass('zone_5')){
                $(zoneImages[item]).attr('src','https://picsum.photos/id/' + randomNo + bestSellingStylesImgs);
            } else {
                $(zoneImages[item]).attr('src','https://picsum.photos/id/' + randomNo + '/960/960');
            }

        });

    });

    function getRandomNumber(array,qty){

        let random=Math.floor(Math.random() * qty);

        for(let i=0;i<array.length;i++ ){

            if(random!==array[i]){

                continue;

            } else {

                random=Math.floor(Math.random() * qty);

            }

        }

        ids.push(random);

        return random;

    }
    
})(jq);