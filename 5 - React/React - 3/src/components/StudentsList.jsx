import "../styles/List.css"


const StudentsList = (props) => { 
    const {data}=props; 
    return (
        <> 
          <table id="students">
            <thead>
              <tr>
                  <th>Name</th>
                  <th>Age</th>
                  <th>Email</th>
              </tr>
            </thead>
            <tbody>
                {data.map((u)=><tr key={u.id}>
                  {u.name&&<td>{u.name}</td>}
                  {u.age&&<td>{u.age}</td>}
                  {u.email&&<td>{u.email}</td>}
              </tr>)}
            </tbody>
          </table>
        </>
    );
};

export default StudentsList;