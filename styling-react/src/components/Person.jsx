import React, {memo} from 'react';

const Person = memo(({ person }) => {
  console.log('render child')
  return (
    <>
    {/* // <div> */}

      <div>{person.name}</div>
      <div>{person.age} thn</div>
    {/* // </div> */}
    </>
  )
})

export default Person