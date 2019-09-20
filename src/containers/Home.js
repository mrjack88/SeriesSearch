import Paper from "@material-ui/core/Paper"
import { withStyles } from "@material-ui/styles"
import queryString from "query-string"
import React from "react"
import { connect } from "react-redux"
import { withRouter } from "react-router"
import { CSSTransition } from "react-transition-group"
import { bindActionCreators } from "redux"
import { showsActions, userActions } from "../actions"
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
    justifyContent: "center",
    '@media (max-width:414px)': {
      margin: "10px 0 10px 0",
      paddingLeft: 0,
      paddingRight: 0,
      paddingTop: 0,
      paddingBottom: 0,
    }
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
      this.props.history.push({
        pathname: "/",
        search: "?q=" + this.state.query
      })
      this.props.getShows(this.state.query)
    }
  }

  componentDidMount() {
    const parsed = queryString.parse(this.props.location.search)
    if (parsed.q != undefined) {
      this.setState({ query: parsed.q })
    }
  }

  render() {
    const { classes, isFetchingData } = this.props
    const isThereAnyData = this.props.searchdata.length > 0 || false
    const transitionIn = isThereAnyData && !isFetchingData
    return (
      <div>
        <MenuAppBar
          handleQueryChange={this.handleQueryChange}
          query={this.state.query}
          onSearch={this.getShows}
          onSignOut={this.props.signout}
        />
        <section className={classes.section}>
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
                query={this.state.query}
                data={this.props.searchdata}
              />
            </Paper>
          </CSSTransition>
        </section>
      </div>
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
  return {
    getShows: bindActionCreators(showsActions.getShows, dispatch),
    signout: bindActionCreators(userActions.signout, dispatch)
  }
}

export default withStyles(styles)(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(withRouter(Home))
)
