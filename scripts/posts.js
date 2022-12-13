import { getAuthors, getPosts, getRecipients, getTopics } from "./dataAccess.js"



export const posts = () => {
    const allPosts = getPosts();
    const allAuthors = getAuthors();
    const allTopics = getTopics();
    const allRecipients = getRecipients();

    const getAllTopicNamesToHtml = () => {
        
    }

    let html = `
        <div>
            ${
                allPosts.map(
                    (requestObj) => {
                        return `
                        <div class="submit">
                            Dear ${
                                allRecipients.map(
                                (recipient) => {
                                    if (parseInt(requestObj.recipientName) === recipient.id){
                                    return `${recipient.name}`
                                    }
                                }
                                    ).join("")
                             } 
                            (${
                                allRecipients.map(
                                    (recipient) => {
                                        if (parseInt(requestObj.recipientName) === recipient.id){
                                        return `${recipient.email}`
                                    }
                                }
                                ).join("")
                            })<br><br>
                            ${requestObj.letterBox}<br><br>
                            Sincerely, ${
                                allAuthors.map(
                                    (author) => {
                                        if (parseInt(requestObj.authorId) === author.id){
                                        return `${author.name}`
                                        }
                                    }
                                ).join("")
                            } (
                                ${
                                    allAuthors.map(
                                        (author) => {
                                            if (parseInt(requestObj.authorId) === author.id){
                                            return `${author.email}`
                                            }
                                        }
                                    ).join("")
                                }
                            )<br>
                            <bdi class="sent">
                            Sent on ${requestObj.date}
                            </bdi>
                            
                            <section class="tagHolder">
                            ${
                                allTopics.map(
                                   (topic) => { 
                                       if (Array.isArray(requestObj.topicSelect)){
                                        for (const topicB of requestObj.topicSelect){
                                            if (topicB === topic.id){
                                            return `
                                            <section class="topicTag">
                                            ${topic.name}
                                            </section> `
                                            }
                                       }}
                                       
                                   }
                               ).join("")
                           }
                        
                        </section>
                            
                            
                        </div>
                        `
                    }
                ).join("")

            
            
            
            
            
            }
            
        </div>
    `

    return html
}



// <div class="topicTag">


//     if (Array.isArray(requestObj.topicSelect)){
//         for (const topic of requestObj.topicSelect){
//             allTopics.map(
//                 (topic) => { 
//                     if (requestObj.topicSelect === topic.id){
//                      return `${topic.name}`
//                     }
//                 }
//             ).join("")
//         }
    
//     }
//     else{
//         allTopics.map(
//             (topic) => { 
//                 if (requestObj.topicSelect === topic.id){
//                     return `${topic.name}`
//                 }
            
//         ).join("")
//     }



// </div>