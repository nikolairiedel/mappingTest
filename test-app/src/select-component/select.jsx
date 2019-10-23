import React, { Component } from 'react';
import './select.css'
import AsyncSelect from 'react-select/async';
import { countries } from './countries';
import axios from 'axios';

export default class WithPromises extends Component {

  state = {
      selectedCountryCode: '',
      selectedRegion: '',
      selectedBlock: '',
      selectedCity: '',
      selectedDistrict: '',
      selectedNeighborhood: '',
      selectedSector: '',
      selectedSubregion: '',
      selectedTerritory: '',
      selectedZone: '',
    };

  setStateByFetchingWithMagicKey = (magicKey) => {
    return axios.get(`https://geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer/findAddressCandidates?magicKey=${magicKey}&outFields=Type,ShortLabel,LangCode,Block,Sector,Nbrhd,District,City,Subregion,Region,Territory,Zone,Country&f=pjson`)
                .then(res => { 
                  this.setState({
                    selectedRegion: res.data.candidates[0].attributes.Region,
                    selectedBlock: res.data.candidates[0].attributes.Block,
                    selectedCity: res.data.candidates[0].attributes.Type === 'City' ? res.data.candidates[0].attributes.ShortLabel : res.data.candidates[0].attributes.City,
                    selectedDistrict: res.data.candidates[0].attributes.District,
                    selectedNeighborhood: res.data.candidates[0].attributes.Nbrhd,
                    selectedSector: res.data.candidates[0].attributes.Sector,
                    selectedSubregion: res.data.candidates[0].attributes.Subregion,
                    selectedTerritory: res.data.candidates[0].attributes.Territory,
                    selectedZone: res.data.candidates[0].attributes.Zone
                  })
                });
  }  

  filterCountries = (inputValue) => {
    return countries.filter(i =>
      i.label.toLowerCase().includes(inputValue.toLowerCase())
    );
  };
  getSuggestedCountries = (inputValue) => { 
    return new Promise(resolve => {
      resolve(this.filterCountries(inputValue));
    })
  }
  getSuggestedRegions = (inputValue) => {
    const countryCode = this.state.selectedCountryCode;
    return axios.get(`https://geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer/suggest?countryCode=${countryCode}&category=region&text=${inputValue}&maxSuggestions=15&f=pjson`)
                .then(res => {
                  var suggestions = res.data.suggestions.map((value) => {
                    return {
                      label: value.text,
                      code: value.text,
                      magicKey: value.magicKey
                    }
                  });
                  return suggestions;
                });
  }
  getSuggestedBlocks = (inputValue) => {
    const countryCode = this.state.selectedCountryCode;
    return axios.get(`https://geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer/suggest?countryCode=${countryCode}&category=block&text=${inputValue}&maxSuggestions=15&f=pjson`)
                .then(res => {
                  var suggestions = res.data.suggestions.map((value) => {
                    return {
                      label: value.text,
                      code: value.text,
                      magicKey: value.magicKey
                    } 
                  });
                  return suggestions;
                });
  }
  getSuggestedSectors = (inputValue) => {
    const countryCode = this.state.selectedCountryCode;
    return axios.get(`https://geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer/suggest?countryCode=${countryCode}&category=sector&text=${inputValue}&maxSuggestions=15&f=pjson`)
                .then(res => {
                  var suggestions = res.data.suggestions.map((value) => {
                    return {
                      label: value.text,
                      code: value.text,
magicKey: value.magicKey
                    }
                  });
                  return suggestions;
                });
  }
  getSuggestedNeighborhoods = (inputValue) => {
    const countryCode = this.state.selectedCountryCode;
    return axios.get(`https://geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer/suggest?countryCode=${countryCode}&category=neighborhood&text=${inputValue}&maxSuggestions=15&f=pjson`)
                .then(res => {
                  var suggestions = res.data.suggestions.map((value) => {
                    return {
                      label: value.text,
                      code: value.text,
magicKey: value.magicKey
                    }
                  });
                  return suggestions;
                });
  }
  getSuggestedDistricts = (inputValue) => {
    const countryCode = this.state.selectedCountryCode;
    return axios.get(`https://geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer/suggest?countryCode=${countryCode}&category=district&text=${inputValue}&maxSuggestions=15&f=pjson`)
                .then(res => {
                  var suggestions = res.data.suggestions.map((value) => {
                    return {
                      label: value.text,
                      code: value.text,
magicKey: value.magicKey
                    }
                  });
                  return suggestions;
                });
  }
  getSuggestedCities = (inputValue) => {
    const countryCode = this.state.selectedCountryCode;
    return axios.get(`https://geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer/suggest?countryCode=${countryCode}&category=city&text=${inputValue}&maxSuggestions=15&f=pjson`)
                .then(res => {
                  var suggestions = res.data.suggestions.map((value) => {
                    return {
                      label: value.text,
                      code: value.text,
magicKey: value.magicKey
                    }
                  });
                  return suggestions;
                });
  }
  getSuggestedSubregions = (inputValue) => {
    const countryCode = this.state.selectedCountryCode;
    return axios.get(`https://geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer/suggest?countryCode=${countryCode}&category=subregion&text=${inputValue}&maxSuggestions=15&f=pjson`)
                .then(res => {
                  var suggestions = res.data.suggestions.map((value) => {
                    return {
                      label: value.text,
                      code: value.text,
magicKey: value.magicKey
                    }
                  });
                  return suggestions;
                });
  }
  getSuggestedTerritories = (inputValue) => {
    const countryCode = this.state.selectedCountryCode;
    return axios.get(`https://geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer/suggest?countryCode=${countryCode}&category=territory&text=${inputValue}&maxSuggestions=15&f=pjson`)
                .then(res => {
                  var suggestions = res.data.suggestions.map((value) => {
                    return {
                      label: value.text,
                      code: value.text,
magicKey: value.magic
                    }
                  });
                  return suggestions;
                });
  }
  getSuggestedZones = (inputValue) => {
    const countryCode = this.state.selectedCountryCode;
    return axios.get(`https://geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer/suggest?countryCode=${countryCode}&category=zone&text=${inputValue}&maxSuggestions=15&f=pjson`)
                .then(res => {
                  var suggestions = res.data.suggestions.map((value) => {
                    return {
                      label: value.text,
                      code: value.text,
magicKey: value.magic
                    }
                  });
                  return suggestions;
                });
  }

  handleSomethingSet = (newValue) => {
    this.setStateByFetchingWithMagicKey(newValue.magicKey);
  }

  handleCountryChange = (newValue) => {
    const selectedCountryCode = newValue.value;
    this.setState({ selectedCountryCode });
  };
  handleRegionChange = (newValue) => {
    const selectedRegion = newValue.code;
    this.setState({ selectedRegion });
  }
  handleBlockChange = (newValue) => {
    const selectedBlock = newValue.code;
    this.setState({ selectedBlock });
  }
  handleSectorChange = (newValue) => {
    const selectedSector = newValue.code;
    this.setState({ selectedSector });
  }

  handleNeighborhoodChange = (newValue) => {
    const selectedNeighborhood = newValue.code;
    this.setState({ selectedNeighborhood });
  }

  handleDistrictChange = (newValue) => {
    const selectedDistrict = newValue.code;
    this.setState({ selectedDistrict });
  }

  handleCityChange = (newValue) => {
    const selectedCity = newValue.code;
    this.setState({ selectedCity: selectedCity });
  }

  handleSubregionChange = (newValue) => {
    const selectedSubregion = newValue.code;
    this.setState({ selectedSubregion });
  }

  handleRegionChange = (newValue) => {
    const selectedRegion = newValue.code;
    this.setState({ selectedRegion });
  }

  handleTerritoryChange = (newValue) => {
    const selectedTerritory = newValue.code;
    this.setState({ selectedTerritory });
  }

  handleZoneChange = (newValue) => {
    const selectedZone = newValue.code;
    this.setState({ selectedZone });
  }

  render() {
    return (
      <div>
        <div className="wrapperInputs">
          <span>The country to select&nbsp;</span>
          <AsyncSelect
            onChange={this.updateCountryState}
            className="selectClassNyss"
            loadOptions={this.getSuggestedCountries}
            defaultOptions={countries}
            onChange={this.handleCountryChange}
            openMenuOnClick={false}
          />
          <span>&nbsp;{ this.state.selectedCountryCode }</span>
        </div>
        <div className={this.state.selectedCountryCode === '' ? "nonCountryWrapper" : ""}>
          <div className="wrapperInputs">
          <span>The region to select&nbsp;</span>
            <AsyncSelect
              className="selectClassNyss"
              value={this.state.selectedRegion}
              loadOptions={this.getSuggestedRegions}
              onInputChange={this.handleRegionInputChange}
              onChange={this.handleSomethingSet}
            />
          <span>&nbsp;{ this.state.selectedRegion }</span>
          </div>
          <div className="wrapperInputs">
          <span>The territory to select&nbsp;</span>
            <AsyncSelect
              className="selectClassNyss"
              loadOptions={this.getSuggestedTerritories}
              onChange={this.handleSomethingSet}
            />
          </div>
          <div className="wrapperInputs">
          <span>The subregion to select&nbsp;</span>
            <AsyncSelect
              className="selectClassNyss"
              loadOptions={this.getSuggestedSubregions}
              onChange={this.handleSomethingSet}
            />
          </div>
          <div className="wrapperInputs">
          <span>The city to select&nbsp;</span>
            <AsyncSelect
              className="selectClassNyss"
              loadOptions={this.getSuggestedCities}
              onChange={this.handleSomethingSet}
            />
          </div>
          <div className="wrapperInputs">
          <span>The district to select&nbsp;</span>
            <AsyncSelect
              className="selectClassNyss"
              loadOptions={this.getSuggestedDistricts}
              onChange={this.handleSomethingSet}
            />
          </div>
          <div className="wrapperInputs">
          <span>The block to select&nbsp;</span>
            <AsyncSelect
              className="selectClassNyss"
              loadOptions={this.getSuggestedBlocks}
              onChange={this.handleSomethingSet}
            />
          </div>
          <div className="wrapperInputs">
          <span>The sector to select&nbsp;</span>
            <AsyncSelect
              className="selectClassNyss"
              loadOptions={this.getSuggestedSectors}
              onChange={this.handleSomethingSet}
            />
          </div>
          <div className="wrapperInputs">
          <span>The neighborhood to select&nbsp;</span>
            <AsyncSelect
              className="selectClassNyss"
              loadOptions={this.getSuggestedNeighborhoods}
              onChange={this.handleSomethingSet}
            />
          </div>
          <div className="wrapperInputs">
          <span>The zone to select&nbsp;</span>
            <AsyncSelect
              className="selectClassNyss"
              loadOptions={this.getSuggestedZones}
              onChange={this.handleSomethingSet}
            />
          </div>
        </div>
        <div className="wrapperBottom">
          <ul>
            <li>Selected Block: <b>{this.state.selectedBlock}</b></li>
            <li>Selected City: <b>{this.state.selectedCity}</b></li>
            <li>Selected Country Code:<b>{this.state.selectedCountryCode}</b></li>
            <li>Selected District:<b>{this.state.selectedDistrict}</b></li>
            <li>Selected Neighborhood:<b>{this.state.selectedNeighborhood}</b></li>
            <li>Selected Region:<b>{this.state.selectedRegion}</b></li>
            <li>Selected Sector:<b>{this.state.selectedSector}</b></li>
            <li>Selected Subregion:<b>{this.state.selectedSubregion}</b></li>
            <li>Selected Territory:<b>{this.state.selectedTerritory}</b></li>
            <li>Selected Zone:<b>{this.state.selectedZone}</b></li>
          </ul>
        </div>
      </div>
    );
  }
}