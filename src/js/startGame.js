export const setBackgroundMove = () => {
  const bgPosition = parseInt($("#backgroundGame").css("background-position"));
  $("#backgroundGame").css("background-position", bgPosition - 3);
};
