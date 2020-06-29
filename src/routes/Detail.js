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
                    <h1>Summary</h1>
                    <span> {location.state.summary}</span>
                </div>
            );
        } else {
            console.log(this.props);
            return null;
        }

    }
}

export default Detail;