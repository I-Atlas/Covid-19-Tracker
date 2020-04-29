import React from 'react';
import Cards from './Components/Cards/Cards';
import Chart from './Components/Chart/Chart';
import Country from './Components/Country/Country';
import {receivedData} from './Api/Api';
import styles from './App.module.css';
import image from './Img/COVID-19.png';

class App extends React.Component {
    state = {
        data: {},
        country: '',
    };

    async componentDidMount() {
        const data = await receivedData();
        this.setState({data});
    }
    handleCountryChange = async (country) => {
        const data = await receivedData(country);
        this.setState({data, country: country});
    };

    render() {
        const{data, country} = this.state;
        return (
            <div className={styles.container}>
                <img className={styles.image} src={image} alt="COVID-19"/>
                <Cards data={data}/>
                <Country handleCountryChange={this.handleCountryChange}/>
                <Chart data={data} country={country}/>
            </div>
        );
    }
}

export default App;