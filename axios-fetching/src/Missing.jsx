import { Link } from 'react-router-dom'

const Missing = () => {
  return (
    <main className='Missing'>
      <h2 className='notFound'>404</h2>
      <p>Page Not Found</p>
      
    <p>
      <Link to='/'>Visit Our Homepage</Link>
    </p>
    </main>
  )
}

export default Missing
