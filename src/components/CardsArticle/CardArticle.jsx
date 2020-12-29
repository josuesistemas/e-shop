import makeStyles from "@material-ui/core/styles/makeStyles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import {articlesAdded, infoStrings} from "../../constants/strings";
import {CorrectLabel, ErrorLabel} from "../Labels";
import Counter from "../Counter";
import {useState} from "react";
import DeleteIcon from '@material-ui/icons/Delete';
import GetPlural from "../../Utils";
import {Link} from "react-router-dom";


const CardArticle =({article})=> {

    const [count, setCount] = useState(0)
    const [added, setAdded] = useState(false)

    const useStyles = makeStyles({
        root: {
            maxWidth: 345,
            borderRadius: '5px',
        },
        media: {
            height: 300,
        },
        icon:{
            color: "blue"
        },
        deleteIcon:{
          color: "red"
        },
        actions:{
            display: "flex",
            justifyContent: "space-between",
        },
        actionToCart:{
            float: "right",
        },
        name:{
            color: "blue"
        }
    });

    const classes = useStyles();

    const handleAddCart =()=>{
        setAdded(true)
    }

    const handleDelete =()=>{
        setCount(0)
        setAdded(false)
    }

    return(
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={article.images[0]}
                    title={article.name}
                />
                <CardContent>
                    <Link to={'/detail/'+article.id} >
                        <Typography gutterBottom variant="h5" component="h2" className={classes.name} >
                            {article.name}
                        </Typography>
                    </Link>

                    <Typography variant="body2" color="textSecondary" component="p" >
                        {article.description}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions className={classes.actions} >
                {added
                    ?
                    <>
                        <CorrectLabel
                            text={articlesAdded(count, article.unit,GetPlural(article.unit))}
                        />
                        <div>
                            <IconButton color="inherit" className={classes.actionToCart}>
                                <DeleteIcon className={classes.deleteIcon} onClick={handleDelete}/>
                            </IconButton>
                        </div>
                    </>
                    :
                    <>
                        <Counter
                            limit={article.stock}
                            count={count}
                            setCount={setCount}
                        />
                        <div>
                            <IconButton color="inherit" className={classes.actionToCart}>
                                <AddShoppingCartIcon className={classes.icon} onClick={handleAddCart}/>
                            </IconButton>
                        </div>
                    </>
                }
            </CardActions>
            {count===article.stock && !added
                ?
                <ErrorLabel
                    text={infoStrings.stockOut}
                />
                :null}
        </Card>
    )
}
export default CardArticle;