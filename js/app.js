const cl=console.log;

const cardContainer=document.getElementById("cardContainer");




let postarr=[];
const fetchBlogs=()=>{
	fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data=>{
		cl(data)
		postarr=data;
		templating(postarr);
	  })
}

const templating=(arr)=>{

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
                            ${ele.body}
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

fetchBlogs();
