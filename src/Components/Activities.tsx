import { useEffect } from "react";
import { useState } from "react";

const Activities = () => {
  const LoadActivity = () => {
    setisLoading(true)
    fetch("http://www.boredapi.com/api/activity")
      .then((Response) => Response.json())
      
      .then((data) => {
      setactivity(data.activity)
      setisLoading(false)
    })

  };

  const [activity, setactivity] = useState([]);
  const [isLoading, setisLoading] = useState(true);
  useEffect(() => {
    LoadActivity();
  },[]);
  if (isLoading){
    return <p>Loading...</p>
  }
  return (
    <>
      <h1>{activity} </h1>
      <button disabled={isLoading} onClick={LoadActivity}>load more</button>
    </>
  );
};

export default Activities;
