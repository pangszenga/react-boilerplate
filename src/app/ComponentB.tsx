import { css } from '@emotion/react'
import { Link } from 'react-router-dom'

const ComponentB = () => {
  return (
    <div>
      <div
       css={css`
           background-color: hotpink;
       `}
       >Cows🐮</div>
       <Link to="/">Back to the farm 🐷🐓🐄</Link>
    </div>
  )
}

export default ComponentB
