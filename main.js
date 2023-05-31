// let btn = document.querySelectorAll ('.btn');
// let itemBox = document.querySelectorAll ('.itemBox');

// for(let i=0; i<btn.length; i++){
//     btn[i].addEventListener('click',function(){
//         for(let e=0;  e<btn.length; e++){
//             btn[e].classList.remove("active");
//         }
//         this.classList.add("active");

//         let dataFilter = this.getAttribute('data-filter');

//         for(let k=0; k<itemBox.length; k++){
//             itemBox[k].classList.remove('active');
//             itemBox[k].classList.add('hide');

//             if(itemBox[k].getAttribute('data-item')== dataFilter || dataFilter == "all" ){
//                 itemBox[k].classList.remove('hide');
//                 itemBox[k].classList.add('active');
//             }
//         }
//     })
// }
















let btn = document.querySelectorAll('.btn');
let itemBox = document.querySelectorAll('.itemBox')

for (let i = 0; i < btn.length ; i++){
    btn[i].addEventListener('click',function(){
        for(let e = 0;  e < btn.length ; e++){
            btn[e].classList.remove("active");
        }
        this.classList.add("active");

        let dataFilter = this.getAttribute('data-filter');

        for( let k = 0; k < itemBox.length; k++){
           itemBox[k].classList.remove('active');
           itemBox[k].classList.add('hide');
   
           if (itemBox[k].getAttribute('data-item') == dataFilter || dataFilter == "all" ){
               itemBox[k].classList.remove('hide');
               itemBox[k].classList.add('active');
           }
        }
    })
}



