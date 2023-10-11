import axios from "axios";
import { useRouter } from "next/router"
import { useEffect, useState } from "react";

// Front End
export default function UrlsID (props) {
  console.log(props);
  // const [dogImage, setDogImage ] = useState("");
  // useEffect(() => {
  //   axios.get('https://dog.ceo/api/breeds/image/random')
  //   .then(({data}) => {
  //     console.log(data.message);
  //     setDogImage(data.message)
  //   })
  // },[])
  const router = useRouter()


  const handleClick = () => {
    router.push("/hello")
  }

  return (
    <div>
      <h1>This is the {router.query.id} </h1>
      <button onClick={handleClick}>Click Me</button>
      <img src={props.data} />
      {/* {dogImage && <img src={dogImage} />} */}
    </div>
  )
}

// Backend 2 parts
// backend static getStaticProps - data is VERY VERY VERY VERY likely to be the same everytime, think blog

// backend server getServerSideProps - this means everytime the page loads, the page will go to the DB and get new data for the page

// Backend
export async function getServerSideProps (req) {
  // axios request to get the dog image
  const {data} = await axios.get('https://dog.ceo/api/breeds/image/random')
  return {
    props: {
      data: data.message
    }
  }
}