import Collapse from "@material-ui/core/Collapse"
import Paper from "@material-ui/core/Paper"
import { withStyles } from "@material-ui/styles"
import React from "react"
import { connect } from "react-redux"
import { withRouter } from "react-router"
import { bindActionCreators } from "redux"
import { showsActions } from "../actions"
import MenuAppBar from "../components/AppBar.js"
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
    justifyContent: "center"
  },
  section: {
    display: "flex",
    justifyContent: "center",
    marginTop: 60
  }
}

class Home extends React.Component {
  state = {
    query: ""
  }

  handleQueryChange = query => {
    this.setState({ query })
  }
  getShows = () => {
    if (this.state.query != "") {
      this.props.getShows(this.state.query)
    }
  }
  render() {
    const { classes } = this.props
    return (
      <div>
        <MenuAppBar onSearch={this.handleQueryChange} />
        <section className={classes.section}>
          <Collapse in={this.props.searchdata.length > 0}>
            <Paper className={classes.root} elevation={4}>
              <AlignItemsList
                query={this.state.query}
                onSearch={this.getShows}
                data={this.props.searchdata}
              />
            </Paper>
          </Collapse>
        </section>
      </div>
    )
  }
}

const mapStateToProps = function(state) {
  return {
    searchdata: state.shows.searchdata || []
  }
}
const mapDispatchToProps = dispatch => {
  return {
    getShows: bindActionCreators(showsActions.getShows, dispatch)
  }
}

export default withStyles(styles)(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(withRouter(Home))
)
