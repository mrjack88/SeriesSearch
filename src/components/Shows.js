import Avatar from "@material-ui/core/Avatar"
import Divider from "@material-ui/core/Divider"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemAvatar from "@material-ui/core/ListItemAvatar"
import ListItemText from "@material-ui/core/ListItemText"
import Typography from "@material-ui/core/Typography"
import { makeStyles } from "@material-ui/styles"
import React from "react"

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    maxWidth: 768,
    backgroundColor: theme.palette.background.paper
  },
  inline: {
    display: "inline"
  }
}))

export default function AlignItemsList(props) {
  const classes = useStyles()

  return (
    <List className={classes.root}>
      {props.data.map(item => (
        <div key={item.show.id}>
          <ListItem alignItems="center">
            <ListItemAvatar>
              <Avatar
                alt={item.show.name}
                src={
                  item.show.image
                    ? item.show.image.medium
                    : "https://ui-avatars.com/api/?name=" + item.show.name
                }
              />
            </ListItemAvatar>
            <ListItemText
              primary={item.show.name}
              secondary={
                <React.Fragment>
                  <Typography
                    component="span"
                    variant="body2"
                    className={classes.inline}
                    color="textPrimary"
                  >
                    {item.show.genres.map(genre => genre + " ")}
                  </Typography>
                  {item.show.summary &&
                    item.show.summary
                      .replace(/<[/]?p>/g, "")
                      .replace(/<[/]?b>/g, "")
                      .replace(/<[/]?i>/g, "")}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
        </div>
      ))}
    </List>
  )
}

AlignItemsList.defaultProps = {
  data: [],
  query:""
};