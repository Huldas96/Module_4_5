
// A function that adds shadows and padding
function neatShadowz(options) {
    let images = document.querySelectorAll(".neatShadowz");

    if(options.shadow_type === "hard") {
        options.shadow_type = "0px";
    } else {
        options.shadow_type = "15px";
    }
    images.forEach(image => {
        image.style.boxShadow = `10px 10px ${options.shadow_type} 1px rgba(0,0,0,0.2) `;

        if(options.padding) {
            image.style.padding = "1rem";
        }
    });

}

// This is just an example on how it works
neatShadowz({
    shadow_type: "soft",
    padding: true
});

// To export to npm
module.exports.neatShadowz = neatShadowz;
