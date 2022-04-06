
import { Container, Grow, Grid } from '@material-ui/core';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getAllPost } from '../../reduxStore/actions/posts';
import Form from '../Form/Form';
import Posts from '../Posts/Posts';
import useStyles from './styles';

const Home = () => {

    const [currentId, setCurrentId] = useState(null);
    const dispatch = useDispatch();
    const classes = useStyles();


    useEffect(() => {
        // this call is very important... 
        // for loading 1st time data in ui...
        dispatch(getAllPost());

        // currentId ==> when user edit/update the post & enter submit
        // then at Form Component id become null again
        // for updating this change base on id, reload this component again...
    }, [currentId, dispatch]);


    return (
        <Grow in>
            <Container>
                <Grid className={classes.mainContainer} container justifyContent="space-between" alignItems='stretch' spacing={3}>

                    <Grid item xs={12} sm={7}>
                        <Posts setCurrentId={setCurrentId} />
                    </Grid>

                    <Grid item xs={12} sm={4}>
                        <Form currentId={currentId} setCurrentId={setCurrentId} />
                    </Grid>

                </Grid>
            </Container>
        </Grow>
    )
}

export default Home