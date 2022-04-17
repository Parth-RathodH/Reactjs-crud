import React, { useEffect, useState } from "react"


const Form = () => {

  const [user, setUser] = useState({
    id: 1,
    name: "",
    Email: "",
    number: ""
  });
  const [list, setList] = useState([]);

  function change(e) {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  }

  function AddRow(e,id) {

     
  if (!user.name || !user.Email || !user.number) {
    e.preventDefault();
      alert("All Field are require..");
    } else {
      e.preventDefault();
      setList([...list, user]);
      setUser({
        id: user.id + 1,
        name: "",
        Email: "",
        number: ""
      });
  }
  
}

  function del(id) {
      const temp=list.filter((x)=>{
        return x.id !== id;
      });
      setList(temp);
  }

  useEffect(() => {
    setList([]);
  }, [])


  return (

    <div className="container">
      <form className="mt-3">
        <div class="row mb-3">
          <label class="col-2 col-form-label">User ID</label>
          <div class="col-6">
            <p>{user.id}</p>
          </div>
        </div>
        <div class="row mb-3">
          <label class="col-2 col-form-label">Name</label>
          <div class="col-6">
            <input
              type="text"
              class="form-control"
              id="inputName"
              name="name"
              value={user.name}
              onChange={change}
            />
          </div>
        </div>
        <div class="row mb-3">
          <label class="col-2 col-form-label">Email</label>
          <div class="col-6">
            <input
              type="Email"
              class="form-control"
              id="inputEmail"
              name="Email"
              value={user.Email}
              onChange={change}
            />
          </div>
        </div>
        <div class="row mb-3">
          <label class="col-2 col-form-label">Phone No :-</label>
          <div class="col-6">
            <input
              type="text"
              class="form-control"
              id="inputnumber"
              name="number"
              value={user.number}
              onChange={change}
            />
          </div>
        </div>

        <button type="submit" class="btn btn-dark" onClick={AddRow}>
          Add Data
        </button>
      </form>


      <h1 className="mt-5 text-center">List Of All Employees:-</h1>
      <div className="table-responsive">
        <table className="table mt-5  table-success table-striped">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">First Name</th>

              <th scope="col">Email</th>

              <th scope="col">PhoneNumber</th>
              <th scope="col">Update</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody>
            {list.map((emp) => {
              return (

                <tr>
                  <th scope="row">{emp.id}</th>
                  <td>{emp.name}</td>

                  <td>{emp.Email}</td>

                  <td>{emp.number}</td>
                  <td>
                    <button className="btn btn-sm btn-outline-success" 
                    // onClick={() => {
                    //       AddRow(emp.id);
                    //     }}
                        >
                      Update
                    </button>
                  </td>
                  <td>
                    <button
                      className="btn btn-sm btn-outline-danger"
                      onClick={() => {
                        del(emp.id);
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>

              );
            })}
          </tbody>
        </table>
      </div>
    </div>


  );


};

export default Form;