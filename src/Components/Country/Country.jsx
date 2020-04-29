import React, {useState, useEffect} from 'react';
import {FormControl, MenuItem, Select, InputLabel} from '@material-ui/core'
import {receivedCountries} from '../../Api/Api'
import styles from './Country.module.css';

const Countries = ({handleCountryChange}) => {
    const [Countries, setReceivedCountries] = useState([]);

    useEffect(() => {
        const receivedAPI = async () => {
            setReceivedCountries(await receivedCountries());
        };

        receivedAPI();
    }, []);

    return (
        <FormControl className={styles.formControl}>
            <InputLabel>Country</InputLabel>
            <Select defaultValue="" onChange={(event) => handleCountryChange(event.target.value)}>
                <MenuItem value="">Global</MenuItem>{Countries.map((country, index) => <MenuItem key={index} value={country}>{country}</MenuItem>)}
            </Select>
        </FormControl>
    );
};

export default Countries;