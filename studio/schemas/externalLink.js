export default {
    title: 'External Link',
    name: 'external_link',
    type: 'object',
    of: [
        {
            type: 'block',
            title: 'Block',
        }
    ]
}


// const addClassToEveryNthElement = (elementList, className, divisor) => {
//     elementList.forEach((elem, i) => {
//       if (i % divisor === 0) {
//         elementList[i].classList.add(className)
//       }
//     })
//   }
//   const listItems = document.querySelectorAll('li')
//   // give every fourth list item the `bg-blue` class
//   addClassToEveryNthElement(listItems, 'bg-blue', 4) 

// // Cycle backwards one index at a time:
// setIndex((index - 1 + array.length) % array.length)

// // Cycle forwards one index at a time:
// setIndex((index + 1) % array.length)

// const ceasarCipherEncodeLower = (string, shiftBy) => {
//     const alpha = "abcdefghijklmnopqrstuvwxyz"
//     return string.replace(/[a-z]/gi, letterToShift => {
//       return alpha[(
//         alpha.indexOf(
//           letterToShift.toLowerCase()
//         ) + shiftBy) % 26]
//     })
//   }
//   ceasarCipherEncodeLower('aBcFe', 4) // 'efghi' 
//   ceasarCipherEncodeLower('xyz', 3) // 'abc' 
//   ceasarCipherEncodeLower('X Y#z', 29) // 'a b#c' 