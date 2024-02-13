// eslint-disable-next-line no-unused-vars
// import React from "react";

// export default function MaskPhone(value) {
//   return( value
//     .replace(/\D/g, "")
//     .replace(/^(\d{2})(\d)/g, "($1)$2")
//     .replace(/(\d)(\d{4})$/, "$1-$2")
//   )
// }

// export function maskCurrency(value) {
//   return ( value
//     .replace(/\D/g, "")
//     .replace(/(\d)(\d{2})$/, "$1.$2")
//     .replace(/(?=(\d{3})+(\D))\B/g, " ")
//   )

// }

// export function maskCPF(value){
//   return (value
//     .replace(/\D/g, "") 
//     .replace(/(\d{3})(\d{3})(\d{3})(\d{2})$/, "$1.$2.$3-$4")
//   )
// }

// export function maskRG(value){
//   return(value
//     .replace(/\D/g, "") 
//     .replace(/(\d{2})(\d{3})(\d{3})(\d{1})$/, "$1.$2.$3-$4")
//   ) 
// }

// export function maskCNPJ(value) {
//   return (value
//     .replace(/\D/g, "") 
//     .replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})$/, "$1.$2.$3/$4-$5")
//   ) 
// }

// export function maskCEP(value) {
//   return (value
//     .replace(/\D/g, "") 
//     .replace(/(\d{5})(\d{3})$/, "$1-$2")
//   ) 

// }