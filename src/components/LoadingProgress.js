import LinearProgress from "@material-ui/core/LinearProgress"
import React, { Component } from "react"
import { connect } from "react-redux"

class LoadingProgress extends Component {
  render() {
    const { isLoading, isSigningIn } = this.props

    const display = isLoading || isSigningIn

    return <div>{display ? <LinearProgress color="secondary" /> : null}</div>
  }
}

const mapStateToProps = function(state) {
  return {
    isLoading: state.shows.isFetchingData || false,
    isSigningIn: state.user.isFetchingData || false
  }
}

export default connect(mapStateToProps)(LoadingProgress)
