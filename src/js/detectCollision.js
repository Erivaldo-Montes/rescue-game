export const collision = (element1, element2) => {
  if (
    parseInt(element1.css("left")) + parseInt(element1.css("width")) >=
      parseInt(element2.css("left")) &&
    parseInt(element1.css("left")) <=
      parseInt(element2.css("left")) + parseInt(element2.css("width")) &&
    parseInt(element1.css("top")) + parseInt(element1.css("height")) >=
      parseInt(element2.css("top")) &&
    parseInt(element1.css("top")) <=
      parseInt(element2.css("top")) + parseInt(element2.css("height"))
  ) {
    return true;
  }
};
