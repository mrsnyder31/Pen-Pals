import { postForm } from "./postForm.js"
import { posts } from "./posts.js"





export const PageContent = () => {
    return `
        
        <h2>Pen Pal Society </h2>
        <section class="serviceForm">
           ${postForm()}
        </section>
       
        <section class="serviceRequests">
            <h1>Letters</h1>
           ${posts()}
        </section>
    `
}