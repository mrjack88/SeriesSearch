import Grid from "@material-ui/core/Grid"
import Paper from "@material-ui/core/Paper"
import Typography from "@material-ui/core/Typography"
import { withStyles } from "@material-ui/styles"
import React, { Component } from "react"
import { connect } from "react-redux"
import { withRouter } from "react-router"
import { CSSTransition } from "react-transition-group"
import { bindActionCreators } from "redux"
import { showsActions } from "../actions"
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
  }
}
class Details extends Component {
  componentDidMount() {
    this.props.getShowById(this.props.match.params.id)
  }

  render() {
    const { classes, show, isFetchingData } = this.props
    const isThereAnyData =
      !(Object.keys(show).length === 0 && show.constructor === Object) || false
    const transitionIn = isThereAnyData

    return (
      <div className={classes.section}>
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
          {isThereAnyData ? (
            <Paper className={classes.root} elevation={4}>
              <Grid container spacing={1}>
                <Grid item xs={12}>
                  <Typography variant="h4" gutterBottom>
                    {show.name}
                  </Typography>
                </Grid>
                <Grid item md={4} xs={12}>
                  <img
                    alt={show.name}
                    src={
                      show.image
                        ? show.image.medium
                        : "https://ui-avatars.com/api/?name=" + show.name
                    }
                  />
                </Grid>
                <Grid item md={8} xs={12}>
                  <Typography variant="body1" gutterBottom>
                    {show.summary &&
                      show.summary
                        .replace(/<[/]?p>/g, "")
                        .replace(/<[/]?b>/g, "")
                        .replace(/<[/]?i>/g, "")}
                  </Typography>
                </Grid>
              </Grid>
            </Paper>
          ):<div/>}
        </CSSTransition>
      </div>
    )
  }
}

const mapStateToProps = function(state) {
  return {
    show: state.shows.show || [],
    isFetchingData: state.shows.isFetchingData
  }
}
const mapDispatchToProps = dispatch => {
  return {
    getShowById: bindActionCreators(showsActions.getShowById, dispatch)
  }
}

export default withStyles(styles)(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(withRouter(Details))
)
