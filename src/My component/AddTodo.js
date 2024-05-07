
import React, {useState}  from 'react';
export default function AddTodo({addTodo}) {
    const [title,setTitle]=useState("");
    const [desc,setDesc]=useState("");
    
    const submit =(e)=>{
       e.preventDefault();
       if(!title || !desc)
       {
           alert("Title or Desc cannot be blank");
       }
       else{
       addTodo(title,desc);
       setTitle("");
       setDesc("");
       }

    }
    return (
        

        <div className="container my-3">
            <h3>Add Your Todos</h3>
            <form onSubmit={submit}>
                <div class="mb-3">
                    <label for="title" class="form-label">
                        Add Todo Title Here
                    </label>
                    <input
                        type="text"
                        value={title} onChange={(e)=>setTitle(e.target.value)}
                        class="form-control"
                        id="title"
                        aria-describedby="emailHelp"
                    />
                </div>
                <div class="mb-3">
                    <label for="desc" class="form-label">
                        Add Todo Description here
                    </label>
                    <input
                        type="text"
                        value={desc} onChange={(e)=>setDesc(e.target.value)}
                        class="form-control"
                        id="desc"
                    />
                </div>
                <button type="submit" class="btn btn-sm btn-primary">
                    Submit
                </button>
            </form>
        </div>
    );
}
