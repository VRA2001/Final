import React from "react";
const [objArr, setValue] = useState(items);
const items =[
    {
        "name": 'Som',
        "email": 'asdfh@mai.ry',
    },
    {
        "name": 'Kat',
        "email": 'aerhehh@mai.ry',
    },
    {
        "name": 'Nim',
        "email": 'aerhehh@mai.ry',
    },
    {
        "name": 'Chel',
        "email": 'aerhehh@mai.ry',
    },
    {
        "name": 'Crek',
        "email": 'aerhehh@mai.ry',
    },
];
function delete1(id) { 
    setValue(objArr.filter(item => item.id != id));
 }
 

//console.log(items);
class TableComponent extends React.Component{

    
    render(){

        const rows = items.map((item, index) => {
            return <tr key = {index}>
            <td>{index+1}</td>
            <td>{item.name}</td>
            <td>{item.email}</td>
            <td>
                <button onClick={() => delete1(index)}> Delete</button>
            </td>
        </tr>
        })

        return <table>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {rows}
            </tbody>
        </table>;
    }
}

export default TableComponent;