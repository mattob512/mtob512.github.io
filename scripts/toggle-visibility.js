function toggleVisibility(id)
{
    var ele = document.getElementById(id);
    if (ele.style.display === "none" ) {
      ele.style.display = "inline";
    }
    else {
      ele.style.display = "none";
    }
}
