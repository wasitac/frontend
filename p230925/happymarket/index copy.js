const form = document.querySelector("form");
const input = document.querySelector("input#text");
const ul = document.querySelector("#container ul");
const submit = document.querySelector(".sign-up");

const deleteLi = (event) => {
  const parentElement = event.target.parentElement;
  li_items = li_items.filter((li_item) => {
    return li_item.id !== parseInt(parentElement.id);
  });

  storage_save();
  parentElement.remove();
};

const addLi = (li_item) => {
  const li = document.createElement("li");
  ul.appendChild(li);
  const span = document.createElement("span");
  span.innerText = li_item.content;
  const btn_cross = document.createElement("button");

  li.append(span, btn_cross);

  btn_cross.addEventListener("click", deleteLi);

  storage_save();

  li.id = li_item.id;
};

var li_items = [];

const storage_save = () => {
  localStorage.setItem("li_items", JSON.stringify(li_items));
};

const handler = (event) => {
  event.preventDefault();

  if (input.value !== "") {
    const li_item = {
      id: Date.now(),
      content: input.value,
    };
    li_items.push(li_item);
    addLi(li_item);
  }

  input.value = null;
};

submit.addEventListener("click", handler);

const init = () => {
  const local_storage_data = JSON.parse(localStorage.getItem("li_items"));
  console.log("local_storage_data : ", local_storage_data);

  if (local_storage_data) li_items = local_storage_data;
  li_items.forEach((value) => {
    addLi(value);
  });
};

init();

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btn_modal = document.querySelector(".btn-modal");
const btn_close = document.querySelector(".btn-close");
const modal_input = document.querySelector("#email");

btn_modal.addEventListener("click", () => {
  modal.classList.add("active");
  overlay.classList.add("active");
});

const close_elements = [btn_close, overlay];

close_elements.forEach((value) => {
  value.addEventListener("click", () => {
    modal.classList.remove("active");
    overlay.classList.remove("active");
    modal_input.value = "";
  });
});
