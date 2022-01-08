
/*
 * get all keys and sort by count, max 50: Your top N links
 * if it is less than 10 then do not show
 */

export function readFavorites() {
    if (typeof(Storage) !== "undefined") {
        return Object.entries(localStorage).sort(function(a, b){
            if(parseInt(a["value"]) < parseInt(b["value"])){
                return -1;
            } else if(parseInt(a["value"]) > parseInt(b["value"])){
                return 1;
            }
            return 0;
        });
    }
}
