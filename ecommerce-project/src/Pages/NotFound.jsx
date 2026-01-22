import {Header} from '../components/Header';

export function NotFound({cart}) {
  return(
     <>
        <Header cart={cart} />
        <div className='mt-40'>
          <p>Page not found</p>
        </div>
     </>
  )
}