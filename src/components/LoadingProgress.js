import LinearProgress from "@material-ui/core/LinearProgress"
import React, { Component } from "react"
import { connect } from "react-redux"

class LoadingProgress extends Component {
  render() {
    return <div>{this.props.isLoading ? (<LinearProgress color="secondary"/>) :null}</div>
  }
}

const mapStateToProps = function(state) {
  return {
    isLoading: state.shows.isFetchingData || false
  }
}

export default connect(mapStateToProps)(LoadingProgress)
