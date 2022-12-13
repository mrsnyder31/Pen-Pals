import { getAuthors, sendPost, getRecipients, getTopics } from "./dataAccess.js"

// add funtion to interpolate author list -line 13
// add funtion to interpolate topics list -line 25
// add funtion to interpolate recipient list -line 32
const authorFormInfo = () => {
    const authors = getAuthors()
    let html = `
            ${
                authors.map(
                    (author) => {
                        return `
                        <option value="${author.id}">${author.name}</option>`
                    }
                    ).join("")
                }
                `
                console.log(html)
    return html
}

const recipientFormInfo = () => {
    const recipients = getRecipients()
    let html = `
            ${
                recipients.map(
                    (recipient) => {
                        return `
                        <option value="${recipient.id}">${recipient.name}</option>`
                    }
                    ).join("")
                }
                `
                console.log(html)
    return html
}
const topicsFormInfo = () => {
    const topics = getTopics()
    let html = `
            ${
                topics.map(
                    (topic) => {
                        return `
                        <input type="checkbox" class="needSpace"name="topic" value="${topic.id}"/> ${topic.name} </input>`
                    }
                    ).join("")
                }
                `
    return html
    }


export const postForm = () => {
    let html = `
   
    <label class="label" for="authors">Pen Pal</label>
    <div class="field">
            <select id="authorId">
                <option value="0"> Choose Author</option>
                ${authorFormInfo()}
            </select>
        </div>
    
    <label class="label" for="letterBox">Letter</label>
        <div class="field">
         <input type="text" name="letterBox" class="input letterbox" </label>
        </div>
    
    <label class="label" for="topics">Topics</label>
        <div class="field" id="topicId">
            ${topicsFormInfo()}
        </div>
    
        <label class="label" for="recipients">Recipient</label>
        <div class="field">
                <select id="recipientId">
                    <option value="0"> Choose Recipient</option>
                    ${recipientFormInfo()}
                </select>
            </div>

    <button class="button" id="submitRequest">Send Letter</button>
    `

    return html
}

const mainContainer = document.querySelector("#container")

mainContainer.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "submitRequest") {
        // Get what the user typed into the form fields
        const authorName = document.querySelector("select[id='authorId'").value
        const letterBox = document.querySelector("input[name='letterBox']").value
        const recipientName = document.querySelector("select[id='recipientId']").value
        const topicSelect = document.querySelectorAll("input[name='topic']:checked")
        let values = [];
       topicSelect.forEach((checkbox) => {
            values.push(parseInt(checkbox.value))
       });
   
          
    

        // Make an object out of the user input
        const dataToSendToAPI = {
            authorId: authorName,
            letterBox: letterBox,
            topicSelect: values,
            recipientName: recipientName,
            date: new Date().toDateString()
        }

        // Send the data to the API for permanent storage
        sendPost(dataToSendToAPI)
    }
})



