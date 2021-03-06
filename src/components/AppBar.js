import AppBar from "@material-ui/core/AppBar"
import Badge from "@material-ui/core/Badge"
import IconButton from "@material-ui/core/IconButton"
import InputBase from "@material-ui/core/InputBase"
import Menu from "@material-ui/core/Menu"
import MenuItem from "@material-ui/core/MenuItem"
import { fade, makeStyles } from "@material-ui/core/styles"
import Toolbar from "@material-ui/core/Toolbar"
import Typography from "@material-ui/core/Typography"
import AccountCircle from "@material-ui/icons/AccountCircle"
import ArrowBackIcon from "@material-ui/icons/ArrowBack"
import MailIcon from "@material-ui/icons/Mail"
import MenuIcon from "@material-ui/icons/Menu"
import MoreIcon from "@material-ui/icons/MoreVert"
import NotificationsIcon from "@material-ui/icons/Notifications"
import SearchIcon from "@material-ui/icons/Search"
import queryString from "query-string"
import React, { Component } from "react"
import { connect } from "react-redux"
import { withRouter } from "react-router-dom"
import { bindActionCreators } from "redux"
import { showsActions, userActions } from "../actions"
import LoadingProgress from "./LoadingProgress"

const useStyles = makeStyles(theme => ({
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block"
    }
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25)
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto"
    },
    display: "flex",
    justifyContent: "flex-end"
  },
  searchIcon: {
    width: theme.spacing(7),
    height: "100%",
    position: "absolute",
    width: 35,
    display: "flex",
    alignItems: "center",
    justifyContent: "right",
    cursor: "pointer"
  },
  inputRoot: {
    color: "inherit"
  },
  inputInput: {
    padding: theme.spacing(1, 7, 1, 1),
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: 200
    }
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex"
    }
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none"
    }
  }
}))

function PrimarySearchAppBar(props) {
  const classes = useStyles()
  const [anchorEl, setAnchorEl] = React.useState(null)
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null)

  const isMenuOpen = Boolean(anchorEl)
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl)

  function handleProfileMenuOpen(event) {
    setAnchorEl(event.currentTarget)
  }

  function handleMobileMenuClose() {
    setMobileMoreAnchorEl(null)
  }

  function handleMenuClose() {
    setAnchorEl(null)
    handleMobileMenuClose()
  }

  function logout() {
    props.onSignOut()
  }

  function handleMobileMenuOpen(event) {
    setMobileMoreAnchorEl(event.currentTarget)
  }

  function handleQueryChange(event) {
    props.handleQueryChange(event.target.value)
  }

  function searchOnClick() {
    props.onSearch()
  }

  function onKeyPressed(event) {
    if (event.key === "Enter") {
      props.onSearch()
    }
  }

  const menuId = "primary-search-account-menu"
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
      <MenuItem onClick={logout}>Log out</MenuItem>
    </Menu>
  )

  const mobileMenuId = "primary-search-account-menu-mobile"
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="secondary">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton aria-label="show 11 new notifications" color="inherit">
          <Badge badgeContent={11} color="secondary">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  )
  const handleIconButton = () => {
    if (props.history.location.pathname !== "/") {
      props.history.goBack()
    }
  }

  return (
    <div className={classes.grow}>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
            onClick={handleIconButton}
          >
            {props.history.location.pathname === "/" ? (
              <MenuIcon />
            ) : (
              <ArrowBackIcon />
            )}
          </IconButton>
          <Typography className={classes.title} variant="h6" noWrap>
            TV Series
          </Typography>
          {props.history.location.pathname === "/" && (
            <div className={classes.search}>
              <InputBase
                value={props.query}
                onChange={handleQueryChange}
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput
                }}
                inputProps={{ "aria-label": "search" }}
                onKeyPress={onKeyPressed}
              />
              <div className={classes.searchIcon}>
                <SearchIcon onClick={searchOnClick} />
              </div>
            </div>
          )}
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
        <LoadingProgress />
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </div>
  )
}

class MainAppBar extends Component {
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

  componentDidUpdate(prevProps, prevState) {
    if (this.props.location.search !== prevProps.location.search) {
      const parsed = queryString.parse(this.props.location.search)
      if (parsed.q != undefined) {
        this.setState({ query: parsed.q }, () => {
          this.props.getShows(parsed.q)
        })
      }
    }
  }

  render() {
    return (
      <PrimarySearchAppBar
        handleQueryChange={this.handleQueryChange}
        query={this.state.query}
        onSearch={this.getShows}
        onSignOut={this.props.signout}
        history={this.props.history}
      />
    )
  }
}
const mapStateToProps = function(state) {
  return {}
}
const mapDispatchToProps = dispatch => {
  return {
    getShows: bindActionCreators(showsActions.getShows, dispatch),
    signout: bindActionCreators(userActions.signout, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(MainAppBar))
