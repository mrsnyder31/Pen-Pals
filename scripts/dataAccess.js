const applicationState = {
    posts: [],
    authors: [],
    topics: [],
    recipients: []
}


const API = "http://localhost:8088"

export const fetchPosts = () => {
    return fetch(`${API}/posts`)
    .then(response => response.json())
    .then(
        (servicePosts) => {
            // Store the external state in application state
            applicationState.posts = servicePosts
        }
        )
}
    
    
    export const getPosts = () => {
        return applicationState.posts.map(r => ({...r}))
    }



    export const sendPost = (userServiceRequest) => {
        const fetchOptions = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userServiceRequest)
        }
    
    
        return fetch(`${API}/posts`, fetchOptions)
            .then(response => response.json())
            .then(() => {
                mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
            })
    }


    export const deletePost = (id) => {
        return fetch(`${API}/posts/${id}`, { method: "DELETE" })
            .then(
                () => {
                    mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
                }
            )
    }

    export const fetchAuthors = () => {
        return fetch(`${API}/authors`)
        .then(response => response.json())
        .then(
            (serviceAuthors) => {
                // Store the external state in application state
                applicationState.authors = serviceAuthors
            }
            )
    }
    
    export const getAuthors = () => {
        return applicationState.authors.map(r => ({...r}))
    }

console.log(getAuthors())

    export const sendAuthors = (userServiceRequest) => {
        const fetchOptions = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userServiceRequest)
        }
    
    
        return fetch(`${API}/authors`, fetchOptions)
            .then(response => response.json())
            .then(() => {
                mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
            })
    }

    export const fetchTopics = () => {
        return fetch(`${API}/topics`)
        .then(response => response.json())
        .then(
            (servicetopics) => {
                // Store the external state in application state
                applicationState.topics = servicetopics
            }
            )
    }
    
    export const getTopics = () => {
        return applicationState.topics.map(r => ({...r}))
    }



    export const sendTopics = (userServiceRequest) => {
        const fetchOptions = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userServiceRequest)
        }
    
    
        return fetch(`${API}/topics`, fetchOptions)
            .then(response => response.json())
            .then(() => {
                mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
            })
    }

    export const fetchRecipients = () => {
        return fetch(`${API}/recipients`)
        .then(response => response.json())
        .then(
            (servicerecipients) => {
                // Store the external state in application state
                applicationState.recipients = servicerecipients
            }
            )
    }
    
    export const getRecipients = () => {
        return applicationState.recipients.map(r => ({...r}))
    }



    export const sendRecipients = (userServiceRequest) => {
        const fetchOptions = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userServiceRequest)
        }
    
    
        return fetch(`${API}/recipients`, fetchOptions)
            .then(response => response.json())
            .then(() => {
                mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
            })
    }