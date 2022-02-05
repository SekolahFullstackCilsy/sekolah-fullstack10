import React from 'react';
import Greeting from './Greeting';

export default function Person() {
   const [person, setPerson] = React.useState([
      { nama: "Afif", umur: 20, email: "afif@gg.com", lamakerja: 1 }, // 0
      { nama: "Satria", umur: 20, email: "satria@gg.com", lamakerja: 1 } // 1
   ]);
   const [perusahaan, setPerusahaan] = React.useState("Sekolah Fullstack");

   return (
      <div>
         <Greeting
            nama={person[0].nama}
            umur={person[0].umur}
            email={person[0].email}
            perusahaan={perusahaan}
            lamaKerja={person[0].lamakerja}
         />
         <Greeting
            nama={person[1].nama}
            umur={person[1].umur}
            email={person[1].email}
            perusahaan={perusahaan}
            lamaKerja={person[1].lamakerja}
         />
      </div>
   )
}
