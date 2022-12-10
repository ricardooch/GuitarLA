import imagen from '../../public/img/nosotros.jpg'
import styles from '~/styles/nosotros.css'
import {useOutletContext} from '@remix-run/react'

export function meta() {
  return {
    title: 'GuitarLA - Remix Run',
    description: 'Venta de guitarras, blog de música y más'
  }
}

export function links() {
  return [
      {
        rel: 'stylesheet',
        href: styles
      },
      {
        rel: 'preload',
        href: imagen,
        as: 'image'
      }
  ]
}

function Nosotros() {
  const data = useOutletContext()
  return (
    <main className="contenedor nosotros">
      <h2 className="heading">Nosotros</h2>
      
      <div className="contenido">
        <img src={imagen} alt="imagen sobre nosotros" />
        <div>
          <p>
            Integer a feugiat enim, non gravida sem. Donec id velit non est luctus pellentesque. Fusce quis tortor convallis, gravida nulla sit amet, interdum orci. Aenean iaculis, elit eu tincidunt pretium, eros purus facilisis magna, mollis facilisis libero ex vel lectus. Donec risus sapien, volutpat sed eleifend at, tristique ac nibh. Duis ultrices ex in enim ultrices, quis volutpat lacus sagittis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Quisque bibendum dictum arcu, eu tincidunt tellus rhoncus suscipit. Mauris pretium lobortis est in dictum.
          </p>
          <p>
            Integer a feugiat enim, non gravida sem. Donec id velit non est luctus pellentesque. Fusce quis tortor convallis, gravida nulla sit amet, interdum orci. Aenean iaculis, elit eu tincidunt pretium, eros purus facilisis magna, mollis facilisis libero ex vel lectus. Donec risus sapien, volutpat sed eleifend at, tristique ac nibh. Duis ultrices ex in enim ultrices, quis volutpat lacus sagittis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Quisque bibendum dictum arcu, eu tincidunt tellus rhoncus suscipit. Mauris pretium lobortis est in dictum.
          </p>
        </div>
      </div>
    </main>
  )
}

export default Nosotros