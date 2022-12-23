import React, { useState } from "react";

function Search() {
  const [search, setSearch] = useState("");
  console.log(search);

  return (
    <div className=" flex justify-center bg-black fixed top-36 right-20 ">
      {/* <input
        type="text"
        name=""
        className=""
        onChange={(e) => setSearch(e.target.value)}
        value={search}
      /> */}
    </div>
  );
}

export default Search;
