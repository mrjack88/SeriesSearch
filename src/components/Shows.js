import Avatar from "@material-ui/core/Avatar";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { makeStyles } from "@material-ui/styles";
import React from "react";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    maxWidth: 768,
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
    display: "flex",
    alignItems: "center",
    paddingLeft:10
  },
  showName:{
   
  }
}))

export default function AlignItemsList(props) {
  const classes = useStyles()

  return (
    <div  className={classes.root}>
      {props.data.map(item => (
        <ExpansionPanel key={item.show.id}>
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
            <Typography className={classes.heading}>
              {item.show.name}
            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
              {item.show.summary &&
                item.show.summary
                  .replace(/<[/]?p>/g, "")
                  .replace(/<[/]?b>/g, "")
                  .replace(/<[/]?i>/g, "")}
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      ))}
    </div>
    // <List className={classes.root}>
    //   {props.data.map(item => (
    //     <div key={item.show.id}>
    //       <ListItem alignItems="center">
    //         <ListItemAvatar>
    //           <Avatar
    //             alt={item.show.name}
    //             src={
    //               item.show.image
    //                 ? item.show.image.medium
    //                 : "https://ui-avatars.com/api/?name=" + item.show.name
    //             }
    //           />
    //         </ListItemAvatar>
    //         <ListItemText
    //           primary={item.show.name}
    //           secondary={
    //             <React.Fragment>
    //               <Typography
    //                 component="span"
    //                 variant="body2"
    //                 className={classes.inline}
    //                 color="textPrimary"
    //               >
    //                 {item.show.genres.map(genre => genre + " ")}
    //               </Typography>
    //               {item.show.summary &&
    //                 item.show.summary
    //                   .replace(/<[/]?p>/g, "")
    //                   .replace(/<[/]?b>/g, "")
    //                   .replace(/<[/]?i>/g, "")}
    //             </React.Fragment>
    //           }
    //         />
    //       </ListItem>
    //       <Divider variant="inset" component="li" />
    //     </div>
    //   ))}
    // </List>
  )
}

AlignItemsList.defaultProps = {
  data: [],
  query: ""
}
