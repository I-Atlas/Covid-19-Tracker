import { PureComponent } from "react";
import { Cards, Chart, Country } from "./components";
import { receivedData } from "./api";
import styles from "./App.module.css";
import image from "./assets/COVID-19.png";

class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      data: {},
      country: "",
    };
  }

  async componentDidMount() {
    this.setState({
      data: await receivedData(),
    });
  }

  handleCountryChange = async (country) => {
    this.setState({
      data: await receivedData(country),
      country: country,
    });
  };

  render() {
    const { data, country } = this.state;
    return (
      <div className={styles.container}>
        <a className={styles.link} href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019">
          <img className={styles.image} src={image} alt="COVID-19" />
        </a>
        <Cards data={data} />
        <Country handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country={country} />
      </div>
    );
  }
}

export default App;
