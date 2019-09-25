import Skeleton from "@material-ui/lab/Skeleton"
import { withStyles } from "@material-ui/styles"
import React, { Component } from "react"

const styles = {
  media: {
    height: 190
  },
  section: {
    paddingTop: 100,
    "@media (max-width:414px)": {
        paddingTop: 60,
      }
  }
}
class Details extends Component {
  render() {
    const { classes } = this.props
    return (
      <div className={classes.section}>
        <Skeleton height={15} width="45%" />
        <Skeleton variant="rect" className={classes.media} />
        <Skeleton height={15} width="60%"/>
        <Skeleton height={15} width="80%" />
        <Skeleton height={15} width="80%" />
      </div>
    )
  }
}

export default withStyles(styles)(Details)
