import type { NextPage } from 'next';
import styles from '../styles/Home.module.css';
import Navbar from '../components/Navbar';
import sample from '../assets/sample.png';
import Image from 'next/image';
import 'primeicons/primeicons.css';
import Card from '../components/card';


//here is the tinder
const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Card/>
    </div>
  )
}

export default Home
