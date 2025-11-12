import React from 'react'


const ItemListContainer = ({ greeting }) => {
  return (
    <section style={styles.container}>
      <h2>{greeting}</h2>
      <p>Descubrí los mejores productos seleccionados para vos </p>
    </section>
  )
}

const styles = {
  container: {
    textAlign: 'center',
    marginTop: '3rem',
    fontFamily: 'Poppins, sans-serif',
  },
}
 
export default ItemListContainer