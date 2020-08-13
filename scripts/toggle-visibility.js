function toggleVisibility(id)
{
    var ele = document.getElementById(id);
    if (ele.style.display === "none" ) {
      ele.show(600);
    }
    else {
      ele.style.display = "none";
    }
}
