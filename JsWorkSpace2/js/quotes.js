const quotes = [

{
    quotes : "Don't dwell on the past.",
},
{
    quotes : "Believe in yourself.",
},
{
    quotes : "Follow your heart.",
},
{
    quotes : "Seize the day.",
},
{
    quotes : "You only live once.",
},
{
    quotes : "Past is just past.",
},
{
    quotes : "Love yourself.",
},
{
    quotes : "Where there is a will there is a WebGLVertexArrayObject",
},
{
    quotes : "Don't beat yourself up.",
},

];

const quote = document.querySelector("#quotes span:first-child");

const TodaysQutoes = (quotes[Math.floor(Math.random() * quotes.length)]);
quote.innerText = TodaysQutoes.quotes;