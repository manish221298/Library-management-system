import React, { useEffect, useState } from "react";
import axios from "axios";
import ShowItemDetails from "./ShowItemDetails";

function BookStore({email}) {
  const [books, setBooks] = useState([]);
  const [selectedBook, setSelectedBook] = useState("");
  const [rentalPeriod, setRentalPeriod] = useState(0);
  const [totalRent, setTotalRent] = useState(0)
  const [item, setItem] = useState([])
  const [bookName, setBookName] = useState("")
  const [errorMsg, setErrorMsg] = useState("")
  const [status, setStatus] = useState(false)

  const  userId  = localStorage.getItem("userId")

  const handleBookSelect = (id, bookName) => {
    setSelectedBook(id);
    setBookName(bookName)
  };
  console.log(selectedBook)

  const handleRentalPeriodSelect = (e) => {
    setRentalPeriod(parseInt(e.target.value));
    let baseCharge = 500; // Base charge for first 15 days
  let additionalDays = e.target.value - 15; // Number of days beyond first 15 days
  if (additionalDays > 0) {
    let additionalCharge = Math.ceil(additionalDays / 15) * 50; // Charge for additional days
    setTotalRent(baseCharge + additionalCharge);
  } else {
     setTotalRent(baseCharge);
  }
  };

  console.log("total rent", totalRent)

    useEffect(() => {
        axios.get(`http://localhost:4055/getbook`)
      .then((res) => {
        console.log("books", res.data);
        setBooks(res.data);
      })
      .catch((err) => {
        console.log("books error", err);
      });

      itemListAndRent()
    }, [status])

    function itemListAndRent(){
      let arr = []
      axios.get(`http://localhost:4055/itemlist`)
      .then((res) => {
        console.log("books rent", res.data);
        res.data.map(item => {
          if(item.userId === userId){
            arr.push(item)
          }
        })
        setItem(arr);
      })
      .catch((err) => {
        console.log("books error", err);
      });
    }


  function addBook(){
    validation()
    const data = {
      bookId: selectedBook,
      bookName: bookName,
      bookRent: totalRent,
      days: rentalPeriod,
      userId: userId,
      email: email
    }
    console.log("bdhbfdhn pahle", data)
    {errorMsg === "" && axios.post("http://localhost:4055/additem", data)
    .then(res => {
      console.log(res.data)
      setStatus(true)
    })
    .catch(err => {
      console.log(err)
    })}
  }


  function validation(){
    if(email === ""){
      setErrorMsg("email is mandatory field")
    }
    else if(selectedBook === 0){
      setErrorMsg("Please select any of the book")
    }
    else if(rentalPeriod == 0){
      setErrorMsg("Please select days")
    }
  }
console.log(" fv", item)

  return (
    <div style={{display: "flex", justifyContent: "space-between"}}>
      
      <div style={{width: "50%"}}>
      <h1>Book Store</h1>
        <h2>Total rent for {rentalPeriod} days is:- <b>$ {totalRent}</b>
            <button onClick={addBook}>BUY</button>
        </h2>
      <div style={{marginBottom: "30px"}}>
        <label><b>Select number of days</b></label>
      <select style={{fontSize: "25px"}} value={rentalPeriod} onChange={handleRentalPeriodSelect}>
          <option value="">0 days</option>
          <option value="15">15 days</option>
          <option value="30">30 days</option>
          <option value="45">45 days</option>
          <option value="60">60 days</option>
        </select>
      </div>

       
      {books.map(book => {
  return (
    <div key={book._id} style={{display: "flex", justifyContent: "space-around"}}>
      <div style={{marginRight: "10px", margin: "15px"}}>
        {book.bookName}
      </div>
      {item.find((item) => item.bookId === book._id) ? (
        <button disabled={true} onClick={() => {
          handleBookSelect(book._id)
        }} style={{padding: "10px", backgroundColor: "gray", border: "none", color: "white", margin: "5px"}}>
          All Ready rented
        </button>
      ) : (
        <button onClick={() => {
          handleBookSelect(book._id, book.bookName)
        }} style={{padding: "10px", backgroundColor: "blue", border: "none", color: "white", margin: "5px"}}>
          Select
        </button>
      )}
    </div>
  );
})}

          <h3 style={{color: "red"}}>{errorMsg !== ""  && errorMsg}</h3>
      </div>
      <div style={{width: "50%", paddingTop: "90px"}}>
        <ShowItemDetails data={item} />
      </div>
    </div>
  );
}


export default BookStore