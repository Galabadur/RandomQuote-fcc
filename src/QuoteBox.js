import React, {Component} from 'react';
// styles over all



class QuoteBox extends Component {
    constructor(props){
        super(props);
//------variables

//------state
        this.state = {
            loading: true,
            text: 'dummy text',
            author: 'dummy author',
            quoteList : {},
            //animation
            }
//------bind
        this.handleClickQuote = this.handleClickQuote.bind(this);
    }
//------customMethods
    randomNumber(min,max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
    listGoGet() { 
        return(
            fetch("https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json")
                .then(result => result.json())
                .then(data => {
                    this.setState({
                        loading: false,
                        quoteList : data
                    })
                })
        )
    }

    async triggerRandomState() {
        await this.listGoGet();
        let random = this.randomNumber(0,101); // podesi da uzima argumente prema nizu
        let obtText = this.state.quoteList.quotes[random].quote;
        let obtAuth = this.state.quoteList.quotes[random].author;
        //console.log(random);
        //console.log(obtText, obtAuth);
        //console.log(this.state.quoteList);
        return (
            this.setState({
                text: obtText,
                author: obtAuth
            })
        )
    }

//------classMethods
    async componentDidMount() {
        console.log("Component mounted")
        //let random = this.randomNumber(0,102);
        //request here
        await this.triggerRandomState();

        console.log(this.state.quoteList);
        console.log(this.triggerRandomState());
        //console.log(this.state.quoteList);
    }

    handleClickQuote(e){
        this.triggerRandomState();

    }
//------render and JSX
    render() {
        if(this.state.loading){
            return (
                <div className="quote-box" id="quote-box">
                    <h1>Loading...</h1>
                </div>
            )
        }else{
            return (
                <div className="quote-box" id="quote-box">
                    <p id="text">{this.state.text}</p>
                    <h4 id="author">{this.state.author}</h4>
                    <div className="buttons">
                        <button id="new-quote" onClick={this.handleClickQuote}>New Quote</button>
                        <a id="tweet-quote" href={"https://twitter.com/intent/tweet?text=" + this.state.text + " -" + this.state.author} rel="noopener noreferrer" target="_blank">Tweet About It >></a>
                    </div>
                </div>
            )
        }
    }
} 
export default QuoteBox;