import React from "react";

const Pagination = ({ postPerPage, totalPosts, setCurrentPage }) => {
  const Pages = [1, 2];
  console.log(postPerPage, totalPosts);

  //  for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {
  //   Pages.push(i);
  //  }

  
  console.log(Pages);
  return (
    <div className="flex gap-2 justify-center py-5 my-2">
     {Pages.map((number, index)=>( <button className=" bg-transparent hover:bg-green-500 text-green-700 font-semibold hover:text-white py-2 px-4 border border-green-500 hover:border-transparent " key={index} onClick={()=> setCurrentPage(number)}> {number} </button> ))}
  </div>
  );
};

export default Pagination;
