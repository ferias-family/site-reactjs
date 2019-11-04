import React from 'react'
import * as moment from "moment"

export default class Cronometro extends React.Component {
    constructor(props) {
        super(props);
        this.state = { liked: false };
    }

    componentDidMount() {
        setInterval(() => {
            const days = moment("2019-11-18 00:00:00").diff(new Date(), "days")
            const hours = moment("2019-11-18 00:00:00").diff(new Date(), "hours")
            const minutes = moment("2019-11-18 00:00:00").diff(new Date(), "minutes")
            const seconds = moment("2019-11-18 00:00:00").diff(new Date(), "seconds")
            this.setState({ days, hours, minutes, seconds})
        }, 1000);
    }

    render() {
        return (
            <div>
                <h1>Quanto falta para as férias?</h1>
                Em Dias  {this.state.days}<br />
                Em Horas  {this.state.hours}<br />
                Em Minutos  {this.state.minutes}<br />
                Em segundos  {this.state.seconds}<br />
            </div>
        );
    }
}

