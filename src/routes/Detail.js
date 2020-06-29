import React from 'react';

class Detail extends React.Component {
    componentDidMount() {
        const { location, history } = this.props;
        console.log(history);
        if (location.state === undefined) {
            history.push("/");
        }
    }
    render() {
        const { location } = this.props;
        if (location.state) {
            return (
                <div className="about__container">
                    <h1>{location.state.title}</h1>
                    <h3>Summary</h3>
                    <span> &nbsp;{location.state.summary}</span>
                </div>
            );
        } else {
            console.log(this.props);
            return null;
        }

    }
}

export default Detail;