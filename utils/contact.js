"use server";
import { checkEnvironment } from "./checkEnvironment";

export async function sendMail(data) {
    fetch(checkEnvironment().concat('/api/contact'), {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(async res => {
        const isJson = res.headers.get('content-type')?.includes('application/json')
        const data = isJson ? await res.json() : null

        if (!res.ok) {

          const error = (data && data.message) || res.status;
          return Promise.reject(error)

        } else if (res.ok) {
            return res.json()
        }
    })
    .catch(err => {
        console.log(err)
    })
}

// export async function sendMail(data) {
//   fetch(checkEnvironment().concat("/api/contact"), {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       Accept: "application/json",
//     },
//     body: JSON.stringify(data),
//   })
//     .then((res) => {
//       if (res.status === 200) {
//         return res.json();
//       }
//     })
//     .catch((err) => {
//       return res.json({err});
//     });
// }
