import React, {Component} from 'react';
import "../js/popsicle.js"
import { View, Text } from 'react-native';
import MakeItRain from 'react-native-make-it-rain';

export default function Nav(){
    return (
        <nav>
                <img src={require("../css/Pictures/cupcake.png")} className="cupcake lag" alt="an artists rendition of a pink cupcake with sprinkles and a mint green wrapper"/>
                <a className="nav-link" href="/">Home</a>
                <a className="nav-link" href="/portfolio">Portfolio</a>
                <a className="nav-link" href="/contact">Contact</a>
                <Popsicle/>
        </nav>
    )
}

class Popsicle extends React.Component {

    constructor(props) {
    super(props);
    this.state = {
        imgSrc: require("../css/Pictures/popsicle.png"),
        className: "popsicle lag",
        alt: "An artist rendered image of a dreamsicle"
    };
    this.handleMouseOver = this.handleMouseOver.bind(this);
    this.handleMouseOut = this.handleMouseOut.bind(this);
    }

    handleMouseOver() {
    this.setState({
        imgSrc: require("../css/Pictures/popsicle.gif"),
        alt: "A gif of what looks like vanilla sauce dripping down a dreamsicle"
    });
    }

    handleMouseOut() {
    this.setState({
        imgSrc: require("../css/Pictures/popsicle.png"),
        alt: "An artist rendered image of a dreamsicle"
    });
    }

    render() {
    return (
        <div>
        <img onMouseOver={this.handleMouseOver} onMouseOut={this.handleMouseOut} src={this.state.imgSrc} className={this.state.className} alt={this.state.alt}/>
        </div>
    );
    }

}

class Demo extends Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Make It Rain</Text>
        <MakeItRain
          numItems={80}
          itemDimensions={{width: 40, height: 20}}
          itemComponent={<Text>🤍</Text>}
          itemTintStrength={0.8}
        />
      </View>
    );
  }
}