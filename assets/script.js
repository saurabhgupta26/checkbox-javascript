const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');
let lastChecked;
function handleCheck(e) {
    console.log(e);
    let inBetween = false;
    if(e.shiftKey && this.checked) {
        checkboxes.forEach(checkbox => {
            console.log(checkbox);
            if(checkbox === this || checkbox === lastChecked) {
                inBetween = !inBetween;
                console.log("starting to check");
            }
            if(inBetween) {
                checkbox.checked = true;
            }
        });
    }
    lastChecked = this;
}
console.log(checkboxes);
 checkboxes.forEach(checkbox => {
     console.log(checkbox);
     checkbox.addEventListener("click", handleCheck)
    });