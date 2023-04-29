import React from "react";

function ShowItemDetails({ data }) {

    function TotalCost(){
        const totalBookRent = data.reduce((acc, curr) => acc + parseInt(curr.bookRent), 0);
        console.log(totalBookRent)
        return totalBookRent
    }

  return (
    <>
        <table>
      <thead>
        <tr>
          <th>Book Name</th>
          <th>Number of Days</th>
          <th>Email</th>
          <th>Cost of Each book</th>
          
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td>{item.bookName}</td>
            <td>{item.days}</td>
            <td>{item.email}</td>
            <td>{item.bookRent}</td>
            
          </tr>
        ))}
      </tbody>
    </table>
    <hr />
    <div>
        <p style={{fontSize: "35px"}} >Total effective cost of <b>{data.length}</b> Books are <b>$ {TotalCost()}</b></p>
    </div>
    </>
  );
}

export default ShowItemDetails
