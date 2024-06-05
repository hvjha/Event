//  Not Recommended

// import React, { useState } from 'react'

// export default function Profile() {
//     const [loggedIn,setLoggedIn]=useState(false)
//     if (loggedIn){
//         return (
//             <div>
//               <h1>Profile component</h1>
//             </div>
//           )
//     }
//     else{
//         return(
//             <div>
//                 <h1>Profile not logged</h1>
//             </div>
//         )
//     }
 
// }

// Recommended Method

// import React, { useState } from 'react'

// export default function Profile() {
//     const [loggedIn,setLoggedIn]=useState(true)
//   return (
//     <div>
//       {loggedIn?<h1>Welcome Harsh</h1>:<h1>Welcome Guest</h1>}
//     </div>
//   )
// }

// if else ifelse condition
import React, { useState } from 'react'

export default function Profile() {
    const [loggedIn,setLoggedIn]=useState(3)
  return (
    <div>
      {loggedIn==1?<h1>Welcome Harsh</h1>:loggedIn==2?<h1>Welcome Priti</h1>:<h1>welcome guest</h1>}
    </div>
  )
}