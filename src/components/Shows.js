import Avatar from "@material-ui/core/Avatar"
import Button from "@material-ui/core/Button"
import Divider from "@material-ui/core/Divider"
import ExpansionPanel from "@material-ui/core/ExpansionPanel"
import ExpansionPanelActions from "@material-ui/core/ExpansionPanelActions"
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails"
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary"
import Typography from "@material-ui/core/Typography"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"
import { makeStyles } from "@material-ui/styles"
import React from "react"

const useStyles = makeStyles(theme => ({
  root: {
    display: "inline-block",
    justifyContent: "center"
  },
  heading: {
    display: "flex",
    alignItems: "center",
    paddingLeft: 10,
    "@media (max-width:414px)": {
      paddingLeft: 8,
      fontSize: theme.typography.pxToRem(15)
    }
  },
  details: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
    "@media (max-width:414px)": {
      fontSize: theme.typography.pxToRem(13)
    }
  },
  showName: {}
}))

export default function AlignItemsList(props) {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      {props.data.map(item => (
        <CustomPanel
          key={item.show.id}
          item={item}
          classes={classes}
          onDetails={props.onDetails}
        />
      ))}
    </div>
  )
}
AlignItemsList.defaultProps = {
  data: [],
  query: ""
}

const CustomPanel = props => {
  const { item, classes, onDetails } = props
  const handleMore = () => {
    onDetails(item.show.id)
  }
  return (
    <ExpansionPanel
      onChange={() => {
        console.log(item.show.id + " changed")
      }}
    >
      <ExpansionPanelSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Avatar
          alt={item.show.name}
          src={
            item.show.image
              ? item.show.image.medium
              : "https://ui-avatars.com/api/?name=" + item.show.name
          }
        />
        <Typography className={classes.heading}>{item.show.name}</Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        <Typography className={classes.details}>
          {item.show.summary &&
            item.show.summary
              .replace(/<[/]?p>/g, "")
              .replace(/<[/]?b>/g, "")
              .replace(/<[/]?i>/g, "")}
        </Typography>
      </ExpansionPanelDetails>
      <Divider />
      <ExpansionPanelActions>
        <Button size="small" color="primary" onClick={handleMore}>
          View More
        </Button>
      </ExpansionPanelActions>
    </ExpansionPanel>
  )
}
