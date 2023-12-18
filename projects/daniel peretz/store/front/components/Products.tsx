


const Products =[
    {
      name:"מותגי על",
      price: 219,
      imgUrl: "https://www.factory54.co.il/on/demandware.static/-/Sites-storefront-catalog/default/dwa40b99e3/SHOP%20IN%20SHOP/MEN/Categories/041023-SHIRTS-LUXURY.jpg"
    },
    {
      name:"מותגי פרמיום",
      price: 250,
      imgUrl: "https://www.factory54.co.il/on/demandware.static/-/Sites-storefront-catalog/default/dwa40b99e3/SHOP%20IN%20SHOP/MEN/Categories/041023-SHIRTS-LUXURY.jpg"
    },
    {
      name:"טי שירט",
      price: 300,
      imgUrl: "https://www.factory54.co.il/on/demandware.static/-/Sites-storefront-catalog/default/dw7f6b4a6d/SHOP%20IN%20SHOP/MEN/Categories/041023-SHIRTS-TSHIRT.jpg"
    },
    {
      name:"מכופתרות",
      price: 219,
      imgUrl: "https://www.factory54.co.il/on/demandware.static/-/Sites-storefront-catalog/default/dw232df13d/SHOP%20IN%20SHOP/MEN/Categories/041023-SHIRTS-BUTTOMS.jpg"
    },
  
  ];

export function Products(){
    return (
        <div>
      {Products.map((Products,index)=>(
        <div>
        <div>{Products.name}</div>
        <div>{Products.price}</div>
        <div><img src={Products.imgUrl} alt={Products.name}/></div>
        </div>
        ))};
        </div>
      );
}