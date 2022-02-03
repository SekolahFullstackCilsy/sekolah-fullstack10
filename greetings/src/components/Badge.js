import React from 'react';

function Badge(props) {
   if (props.lulus) {
      return <span className="text-green">Lulus</span>
   }

   return <span className="text-orange">Tidak Lulus</span>
}

export default Badge;
