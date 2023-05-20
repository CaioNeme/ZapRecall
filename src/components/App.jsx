import React from 'react';
import CARDS from '../mock';
import Header from './Header'
import Cards from './Cards'
import Footer from './Footer'



export default function App() {

  let [amount, setAmount] = React.useState(0);

  return (
    <>
      <Header />
      {CARDS.map(dadosCard => <Cards key={dadosCard.number} amount={amount} setAmount={setAmount} {...dadosCard} />)}
      <Footer amount={amount} />
    </>
  )
}


