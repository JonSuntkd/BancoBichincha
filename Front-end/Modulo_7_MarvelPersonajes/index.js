const fetchData = async () => {
  var response = await axios.get(
    "https://bp-marvel-api.herokuapp.com/marvel-characters?idAuthor=1"
  );
  return response;
};

const setTodoList = async () => {
  var json = await fetchData();
  console.log(json);
  console.log(json.data.length);
  var element_container = document.querySelector(".container-list");
  element_container.innerHTML = "";
  for (let index = 0; index < json.data.length; index++) {
    const element = json.data[index];
    element_container.innerHTML += `
        <div class="container container-div">
      <div class="row">
        <div class="col">
         <img src="${element.image}"
                    class="img-fluid rounded-start" alt="...">
        </div>
        <div class="col-6">
          <h3>
            ${element.title}
          </h3>
          <p>${element.body}</p>
        </div>
        <div class="col">
          <h3>
            Botones
          </h3>
        </div>
      </div>
    </div>
    `;
  }
};

window.addEventListener("DOMContentLoaded", function (event) {
  setTodoList();
});
