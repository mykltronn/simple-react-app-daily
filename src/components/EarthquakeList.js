import React, { Component } from 'react';
import moment from 'moment';
import Earthquakes from '../data/earthquakes.js';

export default class EarthquakeList extends Component {
    render() {
        let quakes = Earthquakes.features.map((earthquake) => {
            return (

                <div className="col-sm-6" key={earthquake.id}>
                  <div className="card" >
                    <div className="card-block">
                      <h4 className="card-title">{earthquake.properties.place}</h4>
                      <h6 className="card-subtitle mb-2 text-muted">Magnitude: {earthquake.properties.mag}</h6>
                      <h6 className="card-subtitle mb-2 text-muted">Time: {moment(earthquake.time).format('llll')}</h6>
                      <p className="card-text">Coordinates: {earthquake.geometry.coordinates}</p>

                      <a href={earthquake.properties.url} className="card-link">USGS Event Link</a>

                    </div>
                  </div>
                </div>
            )
        })
        return (
            <div className="quake-list">
                <div className="row">
                    {quakes}
                </div>
            </div>

        )

    }

}
