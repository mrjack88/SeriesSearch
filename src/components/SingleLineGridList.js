import GridList from "@material-ui/core/GridList"
import GridListTile from "@material-ui/core/GridListTile"
import GridListTileBar from "@material-ui/core/GridListTileBar"
import IconButton from "@material-ui/core/IconButton"
import { makeStyles } from "@material-ui/core/styles"
import Typography from "@material-ui/core/Typography"
import useMediaQuery from "@material-ui/core/useMediaQuery"
import StarBorderIcon from "@material-ui/icons/StarBorder"
import React from "react"

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper
  },
  gridList: {
    flexWrap: "nowrap",
    height: 245
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
  },
  title: {
    color: "#fff",
    fontSize: 14
  },
  titleBar: {
    background:
      "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)"
  },
  image: {
    width: "100%"
  },
  cast: {
    display: "flex",
    width: "100%",
    justifyContent: "flex-start"
  },
  tile: {
    height: "100% !important",
    "@media (max-width:414px)": {
      width: "50%",
    }
  }
}))

/**
 * The example data is structured as follows:
 *
 * import image from 'path/to/image.jpg';
 * [etc...]
 *
 * const tileData = [
 *   {
 *     img: image,
 *     title: 'Image',
 *     author: 'author',
 *   },
 *   {
 *     [etc...]
 *   },
 * ];
 */
export default function SingleLineGridList(props) {
  const classes = useStyles()
  const { tileData } = props
  const matches = useMediaQuery(theme => theme.breakpoints.up("sm"))
  let cols = matches ? 4 : 1

  if (tileData.length == 1) cols = 1
  switch (tileData.length) {
    case 1:
      cols = 1
      break
    case 2:
      cols = 2
      break
    case 3:
      cols = 3
      break
    default:
      break
  }
  return (
    <div className={classes.root}>
      <div className={classes.cast}>
        <Typography variant="h6">Show Cast</Typography>
      </div>
      <GridList className={classes.gridList} cols={cols}>
        {tileData.map(tile => (
          <GridListTile key={tile.person.id} className={classes.tile}>
            <img
              className={classes.image}
              src={
                tile.person.image !== null ? (tile.person.image.medium !== null ? tile.person.image.medium : tile.person.image.original ): ""
              }
              alt={tile.person.name}
            />
            <GridListTileBar
              title={tile.person.name}
              classes={{
                root: classes.titleBar,
                title: classes.title
              }}
              actionIcon={
                <IconButton aria-label={`star ${tile.person.name}`}>
                  <StarBorderIcon className={classes.title} />
                </IconButton>
              }
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  )
}
