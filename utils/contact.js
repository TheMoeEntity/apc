'use server'
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