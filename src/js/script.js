const text = ["information management", "data warehousing", "payroll remediation", "data transformation", "technical writing", "data governance", "visualization and analytics", "data migration"];
let counter = 0;

setInterval(change, 4000);

function change() {
    document.getElementById("specialization").setAttribute("class", "text-fade");
    setTimeout(() => {
        document.getElementById("specialization").innerHTML = text[counter];
        document.getElementById("specialization").setAttribute("class", "text-show");
    }, 1000)

    counter++;
    if (counter >= text.length) {
        counter = 0;
    }
}