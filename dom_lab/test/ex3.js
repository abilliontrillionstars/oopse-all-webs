
//imgs = list of URL's
//callback = function to call when loaded
function loadImages( imgs, callback ){
    let numToLoad = imgs.length;
    let loaded=[];
    imgs.forEach( (url, idx) => {
        let img = document.createElement("img");
        loaded[idx] = img;
        img.addEventListener("load", ()=>{
            numToLoad--;
            if( numToLoad === 0 ){
                callback(loaded);
            }
        });
        img.src = url;
    });
}


function main(){

    loadImages( ["pic1.svg","pic2.svg","pic3.svg"],
                main2
    );

}

function main2(svgs){

    let activeImage = undefined;

    //put images in the document and establish callbacks
    svgs.forEach( (pic,idx) => {
        document.body.appendChild(pic);
        pic.classList.add("ungrabbed");
        pic.style.position = "fixed";
        pic.style.left = (50 + idx*200)+"px";
        pic.style.top = 70+"px";
        pic.addEventListener("click", (event) => {
            if( activeImage ){
                activeImage.classList.remove("grabbed");
                activeImage.classList.add("ungrabbed");

            }
            activeImage = pic;
            activeImage.classList.add("grabbed");
            activeImage.classList.remove("ungrabbed");
            //don't let window event handler see this
            //event
            event.stopPropagation();
        });
    });

    window.addEventListener("click", (ev) => {
        if(!activeImage)
            return;
        let w = activeImage.width;
        let h = activeImage.height;
        activeImage.style.left = (ev.pageX-w/2)+"px" ;
        activeImage.style.top =  (ev.pageY-h/2)+"px" ;
    });
}


