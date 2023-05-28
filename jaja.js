const container = document.querySelector(".product-image");

const url2 = "https://leaugeblog.sugal.no/wp-json/wp/v2/posts?_embed";

async function fetchCharacter() {
  const response = await fetch(url2);
  const moreDetails = await response.json();

  container.innerHTML = "";

  html(moreDetails);
  console.log(moreDetails);
}

fetchCharacter();

function html(moreDetails) {
  document.title = `${moreDetails.name}`;
  container.innerHTML = `
  <img src="${moreDetails[6]._embedded["wp:featuredmedia"][0].source_url}" class="product-thumb" alt="" />
  <img src="${moreDetails[6]._embedded["wp:featuredmedia"][0].source_url}" class="product-thumb1" alt="" />
  <img src="${moreDetails[6]._embedded["wp:featuredmedia"][0].source_url}" class="product-thumb1" alt="" />
  <img src="${moreDetails[6]._embedded["wp:featuredmedia"][0].source_url}" class="product-thumb1" alt="" />

  
                        `;
}
