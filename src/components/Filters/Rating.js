import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setRating } from '../../actions';
import Grid from '@material-ui/core/Grid';

class Rating extends Component {
  constructor(props) {
    super(props);
    this.onRangeChange= this.onRangeChange.bind(this);
  }

  onRangeChange(e) {
    this.props.setRating(e.target.value);
  }

  render() {
    return (
      <Grid container justify="center" spacing={0}>
        <Grid>
        0 <input type="range" min="0" max="10" step="0.5" value={this.props.rating} onChange={this.onRangeChange}/> 10
        </Grid>
      </Grid>
    );
  }
}
const mapDispatchToProps ={
  setRating,
};

const mapStateToProps = (state) => {
  return {
    rating: state.filters.rating
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Rating);
