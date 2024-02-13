// eslint-disable-next-line no-unused-vars
import React from "react";

 const simbolsMask = ["#", "?"];
 // Define um array com os símbolos de máscara permitidos (no caso, "#" e "?").

 export function Mask(value, mask) {
   // Declaração de uma função chamada Mask com dois parâmetros, 'value=valor' e 'mask=padrao'.
   const split_value = value.split("");
   const split_mask = mask.split("");
   // Divide as strings 'value' e 'mask' em arrays de caracteres.

   return (
     split_value
       .slice(0, split_mask.length)
       // Seleciona uma parte do array 'split_value' com base no comprimento de 'split_mask'.
       //seleciona o valor pelo padrao da mask
       .reduce((masked, letter, indice) => {
         // Utiliza o método reduce para iterar sobre os arrays e acumular o resultado.
         const letter_mask = split_mask[indice];
         // Obtém o caractere correspondente na posição atual do array 'split_mask'.

         if (letter_mask === "#" && /\d/.test(letter))
           // Se o caractere de máscara for "#" e a letra for um dígito,
           return masked.concat(letter);
         // Adiciona a letra ao resultado acumulado.

         if (letter_mask === "?" && /\w/i.test(letter))
           // Se o caractere de máscara for "?" e a letra for um caractere alfanumérico (ignorando case),
           return masked.concat(letter);
         // Adiciona a letra ao resultado acumulado.

         if (
           !simbolsMask.includes(letter_mask) &&
           ((masked.length > 0 && indice > 0) ||
             (masked.length === 0 && indice === 0))
         ) {
           // Se o caractere de máscara não estiver nos símbolos permitidos
           // e se a condição do segundo bloco for atendida (lógica complexa),
           masked = masked.concat(letter_mask);
           // Adiciona o caractere de máscara ao resultado acumulado.

           const letter_mask_next = split_mask[indice + 1];
           // Obtém o próximo caractere de máscara.

           if (letter_mask_next === "#" && /\d/.test(letter))
             // Se o próximo caractere de máscara for "#" e a letra for um dígito,
             return masked.concat(letter);
           // Adiciona a letra ao resultado acumulado.

           if (letter_mask_next === "?" && /\w/.test(letter))
             // Se o próximo caractere de máscara for "?" e a letra for um caractere alfanumérico,
             return masked.concat(letter);
           // Adiciona a letra ao resultado acumulado.

           return masked;
         }

         return masked;
         // Retorna o resultado acumulado.
       }, "")
   );
   // O último parâmetro do reduce é um valor inicial para o resultado acumulado (uma string vazia).
 }




//  codigo melhorado com atualizacoes a baixo, preciso testar

// export function mask(value: string, mask: string): string {
//   const split_value = value.split("");
//   const split_mask = mask.split("");

//   function replaceMaskToValue(
//     masked_value: string,
//     letter: string,
//     index: number
//   ) {
//     const letter_mask = split_mask[index];

//     if (letter === letter_mask) return masked_value.concat(letter);

//     if (letter_mask === "#" && /\d/.test(letter))
//       return masked_value.concat(letter);

//     if (letter_mask === "?" && /[a-z]/i.test(letter))
//       return masked_value.concat(letter);

//     if (!symbols_mask.includes(letter_mask)) {
//       masked_value = masked_value.concat(letter_mask);

//       const letter_mask_next = split_mask[index + 1];

//       if (
//         symbols_mask.includes(letter_mask_next) ||
//         !symbols_mask.includes(letter_mask_next)
//       )
//         masked_value = replaceMaskToValue(masked_value, letter, index + 1);

//       return masked_value;
//     }

//     return masked_value;
//   }

//   return split_value.slice(0, mask.length).reduce(replaceMaskToValue, "");
// }