import React from 'react';

export default function Greeting(props) {
   return (
      <div>
         <p>Halo {props.nama}, umur kamu {props.umur}.</p>
         <strong>Email kamu: {props.email}</strong><br />
         <hr />
      </div>
   )
}
