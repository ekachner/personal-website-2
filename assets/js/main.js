

function Navbar (props) {
    return (
        <div className={`navbar ${props.navClass}`}>{props.children}</div>
    );
}



function Column (props) {
    const columnClass = props.columns ? 'columns' : 'column';
    return <div id={props.id} className={columnClass + ' ' + props.colClass}>{props.children}</div>
}



function Card (props) {
    return (
        <div className="card is-shadowless is-2">
            <div className="card-image">
                <figure className="image is-128x128">
                    <img src={props.imgUrl} alt={props.altContent} />
                </figure>
            </div>
            <div className="card-content">
                <p className="content">
                    {props.children}  
                </p>
            </div>
        </div>
    );
}

class ContactFormToggle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showForm: false
        };
    }

    toggleFormHandler(e) {
        this.setState({showForm: !this.state.showForm});
    }

    render() {
        const componentToShow = this.state.showForm ? <ContactForm /> : '';
        const buttonToShow = this.state.showForm ? '' : <button className="button is-medium" onClick={this.toggleFormHandler.bind(this)}>Contact Me</button>
        return (
            <div id="contact" className="section">
                <div className="container is-flex">
                    {componentToShow}
                    {buttonToShow}
                </div>
            </div>
        );
    }
}

class ContactForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            from: '',
            message: ''
        }
    }

    handleFromChange(event) {
        this.setState({from: event.target.value});
    }

    handleMessageChange(event) {
        this.setState({message: event.target.value});
    }

    render() {
        return (
            <form>
                <div className="field is-horizontal margin-r">
                    <div className="field-label">
                        <label htmlFor="from">From:</label>
                    </div>
                    <div className="columns field-body">
                        <div className="column is-three-fifths is-offset-onefield">
                            <p className="control">
                                <input className="input" type="text" name="from" placeholder="email" value={this.state.from} onChange={this.handleFromChange.bind(this)}/>
                            </p>
                        </div>
                    </div>
                </div>

                <div className="field is-horizontal margin-r">
                    <div className="field-label">
                        <label htmlFor="message">Message:</label>
                    </div>
                    <div className="columns field-body">
                        <div className="column is-three-fifths is-offset-onefield">
                            <p className="control">
                                <textarea className="input is-normal textarea is-medium" name="message" placeholder="write your message here" onChange={this.handleMessageChange.bind(this)} value={this.state.message}></textarea>
                            </p>
                        </div>
                    </div>
                </div>
                    <div className="control centered-button">
                        <button className="button is-medium">Submit</button>
                    </div>
            </form>
        )
    }
}


ReactDOM.render(
    <React.Fragment>
        <Navbar navClass="navbar">
            <Navbar navClass="navbar-brand">
                <Navbar navClass="">
                    <Navbar navClass="logo">
                        <img src="assets/imgs/logo.png" width="290" height="99"/>
                    </Navbar>
                </Navbar>
            </Navbar>
            <Navbar navClass="navbar-menu">
                <Navbar navClass="navbar-end">
                    <a className="navbar-item hover-underline-animation" href="#home">Home</a>
                    <a className="navbar-item hover-underline-animation" href="#about-me">About Me</a>
                    <a className="navbar-item hover-underline-animation" href="#contact">Contact</a>
                    <a className="navbar-item hover-underline-animation" href="https://github.com/ekachner" target="_blank">Portfolio</a>
                </Navbar>
            </Navbar>
        </Navbar>

        <div id="home" className="home">
            <img src="assets/imgs/home-hero.jpg"/>
        </div>

        <Column id="about-me" colClass="about-me"> 
            <Column columns colClass="is-multiline">
                <Column colClass="is-12 has-text-centered is-size-1">
                    <h1 className="header">~ web-designer ~ textile artist ~ world traveller ~</h1>
                </Column>
                <Column>
                    <Card imgUrl="assets/imgs/web-icon.png" altContent="Web Icon">
                        <p>Web design satiates my desire to mix a profession that incorporates creativity with logic. My favorite part about web engineering is the sound of my keyboard clicking away as the image within my head slowly rounds into something malleable through a process of structuring a hypertext markup language, tweaking a cascading style sheet and wrestling with JavaScript. I know I need to take a break when my pointer finger fatigues from so much trackpad useage; which is what happens when I’m too lazy to plug my mouse in.</p>
                    </Card>
                </Column>
                <Column>
                    <Card imgUrl="assets/imgs/sewing-needle-icon.png" altContent="Sewing Needle Icon">
                        <p>In my spare time you can find me hidden in piles of fabric scraps and thread ends nesting their way into my hair. I started sewing just after my grandmother’s passing, who happened to be a seasoned seamstress herself. Her passing was paired with the passing of her mantle in textile design onto me. I’ve been sewing for 10 years now. I believe in creating more than I consume. I love a good sewing challenge and take commissions on the side, however lately I’ve been making lots and lots of baby blankets for all my friends with a bun in the oven.</p>
                    </Card>
                </Column>
                <Column>
                    <Card imgUrl="assets/imgs/travelling-icon.png" altContent="Travelling Content">
                        <p>The best part upon exiting the airport is that first intake of foreign air. (awkwardly including those with heavy pollution) A week after graduating high school I found myself on an airplane headed to Switzerland to be a Jeune Fille Au Pair (nanny) for two amazing little boys. I spent a lot of my free time doing a fair bit of travelling. Among delving into the history, gazing upon period architecture and imersing myself amongst the locals, my favorite part about travelling abroad is the food! Bonus if they have a plethora of vegan options.</p>
                    </Card>
                </Column>
            </Column>
        </Column>
        <ContactFormToggle />
        <div className="footer">
            <img src="assets/imgs/copyright-icon2.svg"/>
            <p>Copyright 2020</p>
        </div>
    </React.Fragment>,
    document.getElementById("original")
);


