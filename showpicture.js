function show(id,x,y,tf) {
if (tf == true) {
id.style.display = "block"
id.style.left = x + "px"
id.style.top = y + "px"
}
if (tf == false) {
id.style.display = "none"
}
}