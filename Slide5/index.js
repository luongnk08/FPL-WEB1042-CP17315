// demo innerHTML

function showDog() {
  var dAnhElement = document.getElementById("dAnh");

  console.log("dAnhElement", dAnhElement);

  var elements = document.getElementsByTagName("p");

  elements[0].style.background = "#3333CC";
  elements[1].style.background = "#CC0066";

  // console.log(document.getElementsByName("nodeName"));

  // var testNode = elements.item(0);

  // dAnhElement.innerHTML = "<img src='images/dog.jpg' />";

  // var imgNode = document.createElement("img");

  // imgNode.setAttribute("src", "images/dog.jpg");

  // var testNode1 = testNode.cloneNode(true);
  // var testNode2 = testNode.cloneNode(true);

  // console.log(testNode1);

  // dAnhElement.append(testNode, imgNode, testNode1, testNode2);

  // imgNode.style.transition = "0.2s all ease";

  // let mL = 0;
  // setInterval(() => {
  //   imgNode.style.marginLeft = `${mL++}px`;
  // }, 5);
}
