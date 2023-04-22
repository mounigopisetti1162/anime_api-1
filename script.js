document.body.innerHTML=`<div class="animi"> <h4>ANIMATION</h4>
<img class="icon" src="https://tse3.mm.bing.net/th?id=OIP.IAU4rRu7fzzBuoJvPTRRkgHaD4&pid=Api&P=0">
</div>
<div id="main"></div>
`
const getdata=async()=>
{
    try {
        
   
    let animi=await fetch("https://api.disneyapi.dev/character")
    let value=await animi.json()
   let output=(value.data)
    output.forEach((obj)=>
    {
        console.log(obj)
        display(obj)
    })
}
 catch (error) {
        alert("not found")
}
}

function display(obj)
{
    main.innerHTML+=`<div class="name">Name:<h4>${obj.name}</h4>
    <img class="image" src=${obj.imageUrl}>
    </div>`
}
getdata()
