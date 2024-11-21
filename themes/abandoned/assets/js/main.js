console.log("This site was generated by Hugo.");

async function fetchSummary(link) {
  var summary = await fetch(link.href)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok " + response.statusText);
      }
      return response.text(); // Fetches the response body as text
    })
    .then((htmlString) => {
      var doc = new DOMParser().parseFromString(htmlString, "text/html");
      var summary = doc.querySelectorAll(".summary")[0];
      return summary;
    })
    .catch((error) => {
      console.error(
        "There has been a problem with your fetch operation:",
        error,
      );
    });
  return summary;
}

window.addEventListener("load", async function () {
  var hoverLinks = document.querySelectorAll(".hoverLinkGroup");

  hoverLinks.forEach(async (linkDiv) => {
    var hoverDiv = linkDiv.querySelector(".hoverDetail");
    var link = linkDiv.querySelector("a");
    var summary = await fetchSummary(link);
    hoverDiv.innerHTML = summary.innerHTML;
    console.log(summary.innerHTML);
  });
});