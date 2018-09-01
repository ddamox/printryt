for (j = 0; j < printriteData.length; j++) {
    

    var modalProduct = document.createElement("DIV");
    modalProduct.setAttribute("class", "modal_image"); // appending child div to parent div
    var parent1div = document.getElementsByClassName("modal_back")[0];
    parent1div.appendChild(modalProduct);

    var modalProduct2 = document.createElement("DIV");
    modalProduct2.setAttribute("class", "modal_desc"); // appending child div to parent div
    parent1div.appendChild(modalProduct);

}