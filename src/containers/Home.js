import Paper from "@material-ui/core/Paper"
import MovieCreationOutlinedIcon from "@material-ui/icons/MovieCreationOutlined"
import { withStyles } from "@material-ui/styles"
import React from "react"
import { connect } from "react-redux"
import { withRouter } from "react-router"
import { CSSTransition } from "react-transition-group"
import AlignItemsList from "../components/Shows.js"
import "./App.css"

const styles = {
  root: {
    paddingTop: 16,
    paddingBottom: 16,
    paddingLeft: 24,
    paddingRight: 24,
    margin: 24,
    display: "inline-block",
    justifyContent: "center",
    "@media (max-width:414px)": {
      margin: "10px 0 10px 0",
      paddingLeft: 0,
      paddingRight: 0,
      paddingTop: 0,
      paddingBottom: 0
    }
  },
  section: {
    display: "flex",
    justifyContent: "center",
    marginTop: 60,
    alignItems: "center"
  },
  movie: {
    fontSize: 420,
    color: "#e0e0e0"
  }
}

class Home extends React.Component {
  onDetails = showId => {
    this.props.history.push("/shows/" + showId)
  }

  render() {
    const { classes, isFetchingData } = this.props
    const isThereAnyData = this.props.searchdata.length > 0 || false
    const transitionIn = isThereAnyData && !isFetchingData
    return (
      <React.Fragment>
        <section className={classes.section}>
          {!isThereAnyData && (
            <MovieCreationOutlinedIcon className={classes.movie} />
          )}
          <CSSTransition
            in={transitionIn}
            unmountOnExit
            timeout={{
              appear: 500,
              enter: 300,
              exit: 200
            }}
            classNames="my-node"
          >
            <Paper className={classes.root} elevation={4}>
              <AlignItemsList
                data={this.props.searchdata}
                onDetails={this.onDetails}
              />
            </Paper>
          </CSSTransition>
        </section>
      </React.Fragment>
    )
  }
}

const mapStateToProps = function(state) {
  return {
    searchdata: state.shows.searchdata || [],
    isFetchingData: state.shows.isFetchingData
  }
}
const mapDispatchToProps = dispatch => {
  return {}
}

export default withStyles(styles)(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(withRouter(Home))
)
