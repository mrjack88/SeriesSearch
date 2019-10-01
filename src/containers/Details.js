import Divider from "@material-ui/core/Divider"
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
import SingleLineGridList from "../components/SingleLineGridList"
import "./App.css"

const styles = theme => ({
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
      padding: 5
    }
  },
  section: {
    display: "flex",
    justifyContent: "center",
    marginTop: 60,
    alignItems: "center"
  },
  image: {
    width: "100%"
  },
  summary: {
    "@media (max-width:414px)": {
      fontSize: theme.typography.pxToRem(15)
    }
  }
})
class Details extends Component {
  componentDidMount() {
    this.props.getShowById(this.props.match.params.id)
    this.props.getShowCast(this.props.match.params.id)
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
                <Grid item md={4} sm={12} xs={12}>
                  <img
                    className={classes.image}
                    alt={show.name}
                    src={
                      show.image
                        ? show.image.medium
                        : "https://ui-avatars.com/api/?name=" + show.name
                    }
                  />
                </Grid>
                <Grid item md={8} sm={12} xs={12}>
                  <Typography
                    variant="body1"
                    gutterBottom
                    className={classes.summary}
                  >
                    {show.summary &&
                      show.summary
                        .replace(/<[/]?p>/g, "")
                        .replace(/<[/]?b>/g, "")
                        .replace(/<[/]?i>/g, "")}
                  </Typography>
                </Grid>
              </Grid>
              {this.props.cast.length > 0 && (
                <React.Fragment>
                  <Divider />
                  <Grid item xs={12}>
                    <SingleLineGridList tileData={this.props.cast} />
                  </Grid>
                </React.Fragment>
              )}
            </Paper>
          ) : (
            <div />
          )}
        </CSSTransition>
      </div>
    )
  }
}

const mapStateToProps = function(state) {
  return {
    show: state.shows.show || [],
    cast: state.shows.cast || [],
    isFetchingData: state.shows.isFetchingData
  }
}
const mapDispatchToProps = dispatch => {
  return {
    getShowById: bindActionCreators(showsActions.getShowById, dispatch),
    getShowCast: bindActionCreators(showsActions.getShowCast, dispatch)
  }
}

export default withStyles(styles)(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(withRouter(Details))
)
