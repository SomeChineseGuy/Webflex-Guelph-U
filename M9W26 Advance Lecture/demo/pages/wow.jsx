import Button from "../components/Button"
import { useState, useEffect } from "react"
import styles from "../styles/Wow.module.css"
import { getServerSideProps } from "./urls/[id]"
import axios from "axios"

export default function DoesNotMatter() {
  const [counter, setCounter ] = useState(0)
  const increment = () => {
    setCounter(counter + 1)
  }
  const decrement = () => {
    setCounter(counter - 1)
  }

  // const [dogImage, setDogImage ] = useState("");
  useEffect(() => {
    axios.get('/api/user')
    .then(({data}) => {
      console.log(data);
      // console.log(data.message);
      // setDogImage(data.message)
    })
  },[])

  return (
    <div>
      <h1>Welcome to my Wow Page</h1>
      <p className={styles.counter}>The count is: {counter}</p>
      <div className={styles.counterContainer}>
        <button onClick={increment} className={styles.btn}>Increment</button>
        <button onClick={decrement} className={styles.btn}>Decrement</button>
      </div>
    </div>
  )
}

export function getStaticProps() {
  return {
    props: {

    }
  }
}