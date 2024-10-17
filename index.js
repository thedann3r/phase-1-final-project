document.addEventListener("DOMContentLoaded", () => {
    
    fetch("https://lucifer-quotes.vercel.app/api/quotes/4")
        .then(resp => resp.json())
        .then(data => {
            data.forEach(quotes => {
                displayQuotes(quotes)
            })
        })
        .catch(error => console.log(error))

            let header = document.querySelector("h1")
        header.addEventListener("mouseover", () =>{
        header.style.color = 'red'
        })

        header.addEventListener("mouseleave", () => {
        header.style.color = 'black'
        })

        function displayQuotes(quotes) {
    let quotez = document.createElement("div")
    quotez.classList.add("quotez")
    quotez.innerHTML = `
    <p>quote: ${quotes.quote}</p>
    <p>author: ${quotes.author}</p>
    `
    let quoteHold = document.getElementById("mainQuotes")
    quoteHold.appendChild(quotez)
}

    const randomBtn = document.getElementById("random-quote-btn")
    randomBtn.addEventListener("click", () => {
        fetchRandomQuote()
    })

    randomBtn.addEventListener("mouseover", () => {
        randomBtn.style.background = 'red'
    })

    randomBtn.addEventListener("mouseleave", () => {
        randomBtn.style.background = 'black'
    })
    let quotes = []
function fetchQuotes() {
    fetch("https://lucifer-quotes.vercel.app/api/quotes/150")
        .then(resp => resp.json())
        .then(data => {
            quotes = data 
            fetchRandomQuote()
        })
        .catch(error => console.log(error))
}
fetchQuotes()

function fetchRandomQuote() {
    if (quotes.length > 0) {
        const randomQuote = quotes[Math.floor(Math.random() * quotes.length)]
        displayQuote(randomQuote)
    }
}

function displayQuote(quote) {
    let quoteDiv = document.createElement("div")
    quoteDiv.classList.add("quoteDiv")
    quoteDiv.innerHTML = `
        <p>Quote: ${quote.quote}</p>
        <p>Author: ${quote.author}</p>
    `

    let form = document.createElement("form")
    form.classList.add("myForm")
    let comment = document.createElement("textarea")
    comment.name = "comment"
    comment.id = "comment"
    comment.placeholder = "Add comment here..."
    comment.required = "true"
    let butt = document.createElement("button")
    butt.textContent = "+"
    butt.type = "submit"
    butt.id = "butt"
    form.appendChild(comment)
    form.appendChild(butt)

    butt.addEventListener("mouseover", () =>{
        butt.style.background = 'red'
        butt.style.color = 'black'
    })
    butt.addEventListener("mouseleave", () =>{
        butt.style.background = 'rgb(34, 23, 23)'
        butt.style.color = 'white'
    })

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        let value = comment.value
        let commented = document.createElement("p")
        commented.textContent = value
        quoteDiv.appendChild(commented)
        form.reset()
    })
    quoteDiv.appendChild(form)

    let like = document.createElement("button")
    like.classList.add("like")
    like.textContent = "❤"
    like.style.color = 'white'
    like.addEventListener("click", () => {
     if(like.style.color === "red"){
        like.style.color = "white"
     }else{
        like.style.color = "red"
     }
    })
    quoteDiv.appendChild(like)
    
    let x = document.createElement("button")
    x.classList.add("x")
    x.textContent = "Remove!"
    x.addEventListener("click", () => {
        x.parentNode.remove()
    })
    quoteDiv.appendChild(x)

    let quoteContainer = document.getElementById("quotes")
    quoteContainer.appendChild(quoteDiv)
}
 
let x = document.createElement("button")
x.textContent = "X"
x.addEventListener("click", () => {
    x.parentNode.removeChild()
})
quoteDiv.appendChild(x)
})

// let form = document.createElement("form")
// form.classList.add("myForm")
// let comment = document.createElement("textarea")
// comment.name = "comment"
// comment.id = "comment"
// comment.placeholder = "Add comment here..."
// comment.required = "true"
// let butt = document.createElement("button")
// butt.textContent = "commit"
// butt.type = "submit"
// form.appendChild(comment)
// form.appendChild(butt)


