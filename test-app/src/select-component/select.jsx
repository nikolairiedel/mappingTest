import React, { Component } from 'react';
import './select.css'
import AsyncSelect from 'react-select/async';
import { countries } from './countries';
import axios from 'axios';

export default class WithPromises extends Component {

  state = {
      selectedCountryCode: '',
      selectedRegion: ''
    };

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
    return axios.get(`http://geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer/suggest?countryCode=${countryCode}&category=region&text=${inputValue}&f=pjson`)
                .then(res => {
                  var suggestions = res.data.suggestions.map((value) => {
                    return {
                      label: value.text,
                      code: value.text
                    }
                  });
                  return suggestions;
                });
  }

  getSuggestedBlocks = (inputValue) => {
    const countryCode = this.state.selectedCountryCode;
    return axios.get(`http://geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer/suggest?countryCode=${countryCode}&category=block&text=${inputValue}&f=pjson`)
                .then(res => {
                  var suggestions = res.data.suggestions.map((value) => {
                    return {
                      label: value.text,
                      code: value.text
                    }
                  });
                  return suggestions;
                });
  }

  getSuggestedSectors = (inputValue) => {
    const countryCode = this.state.selectedCountryCode;
    return axios.get(`http://geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer/suggest?countryCode=${countryCode}&category=sector&text=${inputValue}&f=pjson`)
                .then(res => {
                  var suggestions = res.data.suggestions.map((value) => {
                    return {
                      label: value.text,
                      code: value.text
                    }
                  });
                  return suggestions;
                });
  }

  getSuggestedNeighborhoods = (inputValue) => {
    const countryCode = this.state.selectedCountryCode;
    return axios.get(`http://geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer/suggest?countryCode=${countryCode}&category=neighborhood&text=${inputValue}&f=pjson`)
                .then(res => {
                  var suggestions = res.data.suggestions.map((value) => {
                    return {
                      label: value.text,
                      code: value.text
                    }
                  });
                  return suggestions;
                });
  }

  getSuggestedDistricts = (inputValue) => {
    const countryCode = this.state.selectedCountryCode;
    return axios.get(`http://geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer/suggest?countryCode=${countryCode}&category=district&text=${inputValue}&f=pjson`)
                .then(res => {
                  var suggestions = res.data.suggestions.map((value) => {
                    return {
                      label: value.text,
                      code: value.text
                    }
                  });
                  return suggestions;
                });
  }

  getSuggestedCities = (inputValue) => {
    const countryCode = this.state.selectedCountryCode;
    return axios.get(`http://geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer/suggest?countryCode=${countryCode}&category=city&text=${inputValue}&f=pjson`)
                .then(res => {
                  var suggestions = res.data.suggestions.map((value) => {
                    return {
                      label: value.text,
                      code: value.text
                    }
                  });
                  return suggestions;
                });
  }

  getSuggestedSubregions = (inputValue) => {
    const countryCode = this.state.selectedCountryCode;
    return axios.get(`http://geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer/suggest?countryCode=${countryCode}&category=subregion&text=${inputValue}&f=pjson`)
                .then(res => {
                  var suggestions = res.data.suggestions.map((value) => {
                    return {
                      label: value.text,
                      code: value.text
                    }
                  });
                  return suggestions;
                });
  }

  getSuggestedTerritories = (inputValue) => {
    const countryCode = this.state.selectedCountryCode;
    return axios.get(`http://geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer/suggest?countryCode=${countryCode}&category=territory&text=${inputValue}&f=pjson`)
                .then(res => {
                  var suggestions = res.data.suggestions.map((value) => {
                    return {
                      label: value.text,
                      code: value.text
                    }
                  });
                  return suggestions;
                });
  }

  getSuggestedZones = (inputValue) => {
    const countryCode = this.state.selectedCountryCode;
    return axios.get(`http://geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer/suggest?countryCode=${countryCode}&category=zone&text=${inputValue}&f=pjson`)
                .then(res => {
                  var suggestions = res.data.suggestions.map((value) => {
                    return {
                      label: value.text,
                      code: value.text
                    }
                  });
                  return suggestions;
                });
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
    this.setState({ selectedCity });
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
        <div className="wrapperInputs">
        <span>The region to select&nbsp;</span>
          <AsyncSelect
            className="selectClassNyss"
            loadOptions={this.getSuggestedRegions}
            onInputChange={this.handleRegionInputChange}
            onChange={this.handleRegionChange}
          />
        <span>&nbsp;{ this.state.selectedRegion }</span>
        </div>
        <div className="wrapperInputs">
        <span>The territory to select&nbsp;</span>
          <AsyncSelect
            className="selectClassNyss"
            loadOptions={this.getSuggestedTerritories}
            onInputChange={this.handleTerritoryChange}
          />
        </div>
        <div className="wrapperInputs">
        <span>The subregion to select&nbsp;</span>
          <AsyncSelect
            className="selectClassNyss"
            loadOptions={this.getSuggestedSubregions}
            onInputChange={this.handleSubregionChange}
          />
        </div>
        <div className="wrapperInputs">
        <span>The city to select&nbsp;</span>
          <AsyncSelect
            className="selectClassNyss"
            loadOptions={this.getSuggestedCities}
            onInputChange={this.handleCityChange}
          />
        </div>
        <div className="wrapperInputs">
        <span>The district to select&nbsp;</span>
          <AsyncSelect
            className="selectClassNyss"
            loadOptions={this.getSuggestedDistricts}
            onInputChange={this.handleDistrictChange}
          />
        </div>
        <div className="wrapperInputs">
        <span>The block to select&nbsp;</span>
          <AsyncSelect
            className="selectClassNyss"
            loadOptions={this.getSuggestedBlocks}
            onInputChange={this.handleBlockChange}
          />
        </div>
        <div className="wrapperInputs">
        <span>The sector to select&nbsp;</span>
          <AsyncSelect
            className="selectClassNyss"
            loadOptions={this.getSuggestedSectors}
            onInputChange={this.handleSectorChange}
          />
        </div>
        <div className="wrapperInputs">
        <span>The neighborhood to select&nbsp;</span>
          <AsyncSelect
            className="selectClassNyss"
            loadOptions={this.getSuggestedNeighborhoods}
            onInputChange={this.handleNeighborhoodChange}
          />
        </div>
        <div className="wrapperInputs">
        <span>The zone to select&nbsp;</span>
          <AsyncSelect
            className="selectClassNyss"
            loadOptions={this.getSuggestedZones}
            onInputChange={this.handleZoneChange}
          />
        </div>
      </div>
    );
  }
}