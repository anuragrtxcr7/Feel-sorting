async function insertion() {
    console.log("In insertion()");
    const ele = document.querySelectorAll(".bar");
    // color
    ele[0].style.background = "green";
    for (let i = 1; i < ele.length; i++) {
        console.log("In ith loop");
        let j = i - 1;
        let key = ele[i].style.height;
        // color
        ele[i].style.background = "blue";

        while (j >= 0 && parseInt(ele[j].style.height) > parseInt(key)) {
            console.log("In while loop");
            // color
            await waitforme(delay);
            ele[j].style.background = "blue";
            ele[j + 1].style.background = "green";
            ele[j + 1].style.height = ele[j].style.height;
            j--;
        }
        ele[j + 1].style.height = key;
        ele[j + 1].style.background = "green";
    }
}

const inSortbtn = document.querySelector(".insertionSort");
inSortbtn.addEventListener("click", async function () {
    disableSortingBtn();
    disableSizeSlider();
    disableNewArrayBtn();
    await insertion();
    enableSortingBtn();
    enableSizeSlider();
    enableNewArrayBtn();
});
