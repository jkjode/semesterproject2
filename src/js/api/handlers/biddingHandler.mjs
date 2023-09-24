import { createBid } from "../listing/index.mjs";
import * as templates from "../templates/index.mjs";

export function setBiddingListener(){
    console.log("test");
    const bid = document.querySelector("#biddingButton");
    const bidInput = document.querySelector("#bidInput");
//  getidparam from URL
    const params = new URLSearchParams(window.location.search);
    const id = params.get("id");
    
    if (bidInput) {
        bid.addEventListener("click", async(event) => {
            event.preventDefault();
            
            const amount = bidInput.value;
            console.log(1);
            const returnTheListing = await createBid(id, amount);
            const container = document.querySelector("#listing");
            console.log(returnTheListing);
            // templates.renderOneListingTemplate(returnTheListing, container);
            // refresh to page
            window.location.reload();
            
        }
        )
    }

}