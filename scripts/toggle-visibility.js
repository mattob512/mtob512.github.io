function toggleVisibility(id)
{
  var ele = document.getElementById(id);
    if (ele.style.display === "none" ) {
      ele.style.display = "inline-block";
    }
    else {
      ele.style.display = "none";
    }
}
