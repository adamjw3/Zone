import React , { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import { fetchGenreList, addGenreId, removeGenreId } from '../../actions';

class Genres extends Component{
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }
  componentDidMount() {
    this.props.fetchGenreList();
  }

  handleChange(e, id) {
    if (e.target.checked) {
      return this.props.addGenreId(id);
    }

    return this.props.removeGenreId(id);
  }

  render() {
    let _this = this;

    const ul = {
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      padding: 0,
      listStyle: 'none',
      marginBottom: '20px',
      maxWidth: '800px',
    };

    const li = {
      marginBottom: '10px'
    }

    const Genres = this.props.genreList.map(function(genre) {
      return (
        <li style={li} key={genre.id}>
            <input type="checkbox" id={genre.id} value={genre.id} onClick={(e) => _this.handleChange(e, genre.id)}/>
            <label htmlFor={genre.id}>{genre.name}</label>
        </li>
      )
    });

    return(
      <Grid container justify="center" spacing={16}>
        <ul style={ul}>
          {Genres}
        </ul>
      </Grid>
    )
  }
}

const mapDispatchToProps ={
  addGenreId,
  removeGenreId,
  fetchGenreList
};

const mapStateToProps = (state) => ({
  genreList: state.genreList.items,
  isfetchingGenres: state.genreList.isFetching,
});

Genres.propTypes = {
  fetchGenreList: PropTypes.func,
  genreList: PropTypes.array.isRequired,
  removeGenreId: PropTypes.func,
  addGenreId: PropTypes.func
};

export default connect(mapStateToProps, mapDispatchToProps )(Genres);
