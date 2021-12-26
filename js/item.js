const item = document.querySelectorAll("#itembox");
const main = document.querySelector(".main");
const body_ = document.querySelector("body");

const data = [{
  check: true,
  title: "blabla",
  subtit: "this is news officail skdfw lwkejfdl"
},
{
    check: false,
    title: "한국 뉴스 입니다",
    subtit: "이것은 한국말 입니다 한국어"
}
];

item.forEach((e) => {
  e.onmouseover = () => {
    e.style.backgroundColor = `rgb(172, 169, 169)`;
  };
});

item.forEach((e) => {
  e.onmouseout = () => {
    e.style.backgroundColor = `#fff`;
  };
});

function render(data) {
  let dom = `
    <div id="itembox" class="item">
            <div class="wrap">
                <div class="logo">
                    ${
                      (data.check == true)
                        ? `<img class="doctor" src="./media/img/item/hospital.png" alt="">
                        <img class="check" src="./media/img/item/check.png" alt="">`
                        : `<img class="doctor" src="./media/img/item/news.svg" alt="">
                        `
                    }
                </div>
                <div class="context">
                    <h3 class="title">${data.title}</h3>
                    <h3 class="subtit">${data.subtit}</h5>
                </div>
            </div>
    </div>
    `;

  main.innerHTML += dom;
}

render(data[0]);
render(data[1]);
