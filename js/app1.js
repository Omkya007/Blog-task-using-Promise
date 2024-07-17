const cl=console.log;

//temp Backend
let blogsArr=[
    {
    title:"Angular 18",
    content:"Removes Modular Structure,Suports standalone Components,Services...",
    blogid:"1233"
},
{
    title:"Angular 10",
    content:"Removes Modular Structure,Suports standalone Components,Services...",
    blogid:"1222"
}
]

//templating the retrived data from fetch to show it on ui

const createBlogCard=(arr)=>{
    if(arr.length==0){
		alert(`please provide the Valid Data `)
	}

	let result='';
	arr.forEach(ele=>{
		result+=`<div class="col-md-4 mb-4" >
                <div class="card">
                    <div class="card-header">
                        <h2 class="m-0">${ele.title}</h2>

                    </div>
                    <div class="card-body">
                        <p class="m-0">
                            ${ele.content}
                        </p>
                    </div>
                    <div class="card-footer">
                        <button class="btn btn-sm btn-outline-info">Edit</button>
                        <button class="btn btn-sm btn-outline-danger">Remove</button>
                    </div>
                </div>
            </div>`
	});
	cardContainer.innerHTML=result;
}


// Async  createBlogs

const createBlogs=(blog)=>{
    //Api Call to add new Blog in DB
//Async >>non blocking

return new Promise((resolve,reject)=>{
    //Api Call to add new Blog in DB
    setTimeout(() => {
        let error=Math.random()>=.5 ? false:true;
        if(!error){
            blogsArr.push(blog)
            resolve(`New Blog Created Successfully`);
        }else{
            reject(`Something Went Wrong while cretaing new Blog`)
        }

    },2500);
})
}

//fetchBlog
const fetchBlog=()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            let error=Math.random()>=.5  ?false:true;
            if(!error){
                //Api call to fetch all blogs
                resolve(blogsArr)
            }else{
                reject(`Something went Wrong`);
            }
            
        }, 1500);

    })
}


//templating
createBlogs({
    title:"Angular 10",
    content:"Removes Modular Structure,Suports standalone Components,Services...",
    blogid:"1222"
})
    .then((res)=>{
        cl(res)
        return fetchBlog() //here then also returns promise and fetch blog call the first occuring then after it
    })
    .then((res)=>{
        cl(res)
        createBlogCard(res)
    })
    .catch(err=>{
        Swal.fire({
            title:err,
            timer:1400,
            icon:`error`
        })
    })



