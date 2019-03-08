import React from 'react';
import { withRouter } from 'react-router-dom';
class ZipCode extends React.Component {
  state = {
    zip: ''
  };

  handleChange = ({ target: { value } }) => {
    this.setState((state, props) => {
      return {
        zip: value
      };
    });
  };

  handleZipChange = () => {
    this.props.handleSubmit(this.state.zip);
    this.setState({ zip: '' });
  };
  render() {
    return (
      <div className='zipcode-container' style={{ flexDirection: `${this.props.direction}` }}>
        <input className='form-control' placeholder='19046..' value={this.state.zip} onChange={this.handleChange} />
        <button type='button' className='btn btn-success' style={{ margin: 10 }} onClick={this.handleZipChange}>
          Get Weather
        </button>
      </div>
    );
  }
}
export default withRouter(ZipCode);
