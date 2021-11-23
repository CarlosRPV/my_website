 const image = document.getElementById("image");
      const range = document.getElementById("range");
      const ArrayImg = [];

      for (let index = 1; index < 37; index++) {
        const number=index.toString().padStart(2,'00')
        console.log(index)
        ArrayImg.push(`https://images.stockx.com/360/Nike-Dunk-Low-University-Red-2021/Images/Nike-Dunk-Low-University-Red-2021/Lv2/img${number}.jpg?auto=compress&w=480&q=90&dpr=1&updated_at=1627326560&h=320&fm=webp`);
      }

      image.setAttribute("src", ArrayImg[1]);

      range.addEventListener("input", (e) => {
        let value = e.target.value;
        image.setAttribute("src", ArrayImg[value]);
      });


 let img2=document.querySelector('.img2')
let contenedor=document.querySelector('.contenedor')

contenedor.addEventListener('mousemove',(e)=>{
            let posicionX=e.offsetX
            let posicionY=e.offsetY
            img2.style.clipPath=`circle(100px at ${posicionX}px ${posicionY}px)`
        })