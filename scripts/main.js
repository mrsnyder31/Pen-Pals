import { fetchAuthors, fetchPosts, fetchRecipients, fetchTopics } from "./dataAccess.js"
import { PageContent } from "./pageContent.js"







const mainContainer = document.querySelector("#container")

const render = () => {
    fetchPosts()
    .then(() => fetchAuthors())
    .then(() => fetchRecipients())
    .then(() => fetchTopics())
    .then(
        () => {
            mainContainer.innerHTML = PageContent()
        }
    )
}

render()

mainContainer.addEventListener(
    "stateChanged",
    customEvent => {
        render()
    }
)