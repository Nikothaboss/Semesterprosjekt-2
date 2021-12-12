
const token = window.localStorage.getItem("token")



export const base_url = "https://sp2-database.herokuapp.com"


export const editProduct = async (title, rating, description, price, image, featured, id  ) => {
    const url = base_url + "/products/" + id
    const body = JSON.stringify({title: title, rating: rating, description: description, price: price, image_url: image, featured: featured,})
    const request = {
        method: "PUT",
        body: body,
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        },
    }
    try{
        const res = await fetch(url, request)
        const data = await res.json()
        console.log(data)
    }catch(err){
        console.log(err)
    }
}

export const addProduct = async (title, rating, description, price, image, featured) =>{
    const url = base_url + "/products"    
    const body = JSON.stringify({title: title, rating: rating, description: description, price: price, image_url: image, featured: featured,})
    const request = {
        method: "POST",
        body: body,
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        },
    };

    try{
        const data = await fetch(url, request);
        const res = await data.json()
        console.log(res)
        
    }catch(err){
        console.log(err)
    }
}