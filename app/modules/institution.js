import React from 'react'
import {Link} from 'react-router'

export default React.createClass({
  getInitialState: function() {
    return {institution: ''};
  },
  handleInstitutionChange: function(e) {
    this.setState({institution: e.target.value});
  },
  render: function() {
    return (
      <div className="text-center login">
        <h1 className="sub-title">Institution</h1>
        <div className="box">
          <div className="col-sm-6">
            <form>
              {/* TODO: make the select load dynamically */}
              <div className="form-group">
                <p>Please select your institution</p>
                <label></label>
                <select
                  value={this.state.institution}
                  onChange={this.handleInstitutionChange}
                  >
                  <option value="Scripps">Scripps</option>
                  <option value="Test">Test</option>
                </select>
              </div>
              <Link className="btn btn-warning" to="/login">Back</Link>
              <Link className="btn btn-warning" to={"/" + this.state.institution + "/tasks"}>Select</Link>
            </form>
          </div>
          <div className="col-sm-6">
            <h2>{this.state.institution}</h2>
            <p className="temporary">A brief description of the institution is given here.</p>
          </div>
        </div>
      </div>
    );
  }
});
