const url = "https://ghibliapi.herokuapp.com/films";
const corsEnabledUrl = "https://noroffcors.herokuapp.com/" + url;

async function getInfo() {
  try {
    const response = await fetch(corsEnabledUrl);
    const results = await response.json();
    console.log(results);
    displayInfo(results);
  } catch (error) {
    const heading = document.querySelector("h1");
    heading.innerHTML = "An error occured";
    console.log(error);
  } finally {
    const loading = document.querySelector(".loader");
    loading.style.display = "none";
  }
}

getInfo();

function displayInfo(results) {
  const rowResults = document.querySelector(".row.results");

  let html = "";

  for (let i = 0; i < results.length; i++) {
    html += `<div class="col-sm-6 col-md-4 col-lg-3">
                    <div class="card">
                        <div class="details">
                            <h4 class="name">${results[i].title}</h4>
                            <p><b>Director:</b>${results[i].director}</p>
                            <p><b>Producer:</b>${results[i].producer}</p>
                            <a class="btn btn-primary" href="details.html?id=${results[i].id}">Details</a>
                        </div>
                    </div>
                </div>
            </div>`;
  }
  rowResults.innerHTML += html;
}
