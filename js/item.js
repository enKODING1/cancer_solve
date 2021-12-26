const item = document.querySelectorAll("#itembox");
const main = document.querySelector(".main");
const body_ = document.querySelector("body");

const data = {
    "check":true,
    "title":"blabla",
    "subtit":"this is news officail skdfw lwkejfdl"
}


item.forEach(e=>{
    e.onmouseout = ()=>{
        e.style.backgroundColor = `rgb(172, 169, 169)`;
    }
})


function render(data){
    `
    <div id="itembox" class="item">
            <div class="wrap">
                <div class="logo">
                    <img class="doctor" src="./media/img/item/hospital.png" alt="">
                    <img class="check" src="./media/img/item/check.png" alt="">
                </div>
                <div class="context">
                    <h3 class="title">official</h3>
                    <h3 class="subtit">this is news official speickal okaysdsfsdfsdfsfdf</h5>
                </div>
            </div>
        </div>
    `
}