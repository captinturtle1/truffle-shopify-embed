import { useState, useEffect } from 'react';

export default function Home() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch(`/api/getProducts/`, {method: 'POST'})
        .then((jsonResponse) => jsonResponse.json())
        .then((response) => {
            console.log(response.fetchedProducts);
            setProducts(response.fetchedProducts);
        })
        .catch((err) => {
          console.log(err);
        })
    }, []);

    return (
        <div className='w-screen h-[95vh] flex bg-white/10 rounded-xl text-white mt-[5vh]'>
            <div className='m-auto flex gap-16'>
                {products.map((product, index) =>
                    <div className='flex flex-col gap-2'>
                        <img src={product.images[0].src} className='h-52 drop-shadowlg rounded-xl'/>
                            <a href={``} className='w-32 h-10 bg-green-400 m-auto rounded-xl text-lg flex'><div className='m-auto'>Buy</div></a>
                    </div>
                )}
            </div>
        </div>
    )
}
