import React from 'react';

export default function Greeting(props) {
   return (
      <div>
         <p>Halo {props.nama}, umur kamu {props.umur}.</p>
         <strong>Email kamu: {props.email}</strong><br />
         Saya bekerja di {props.perusahaan}<br />
         saya sudah bekerja selama {props.lamaKerja} tahun
         <hr />
      </div>
   )
}
