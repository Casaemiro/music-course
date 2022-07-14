import { Grid } from "@mui/material";
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import testimage from '../images/DSC_2203.JPG'
import testimage1 from '../images/DSC_2185.JPG'
import testimage2 from '../images/DSC_2163.JPG'
import testimage3 from '../images/DSC_2311.JPG'
import testimage4 from '../images/DSC_2415.JPG'
import testimage5 from '../images/DSC_2630.JPG'
import { Link } from 'react-router-dom'
import './mj.css'
const CourseListPage = () => {
    return (
        <div style={{ paddingLeft: "7%",paddingRight: "7%",paddingTop: "4.5rem", }}>
            <div style={{ paddingTop: "10px" }}></div>
            <div style={{ padding: "20px", textAlign:"center", fontSize:"0.8rem",color:"rgba(0,50,0,0.6)" }} sx="6" >
            <span className="titl">Courses</span><br/>
            Every course on this site has undergone a quality check conducted by musicians all over the country and aboad. We evaluate our courses thoroughly to ensure that we serve you with the best.</div>
            <Grid container spacing={4} sx="12">
            <Grid item xs={12} sm="6" md ="4" lg="3">
            <Link to="/basicmusiccourse" style={{textDecoration:"none"}}>
                    <Card sx={"12"} className="morefunc" >
                        <CardMedia
                            component="img"
                            height="140"
                            image={testimage}
                            alt="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Basic Music Theory 1
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                This course provides vital knowledge needed by every beginner and intermediate musician to kick start their music journey.
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Share</Button>
                            <Link to="/basicmusiccourse"><Button size="small">Learn More</Button></Link>
                        </CardActions>
                    </Card>
                </Link>
                </Grid>
                <Grid item xs={12} sm="6" md ="4" lg="3">
                <Card sx={"12"} className="morefunc">
                        <CardMedia
                            component="img"
                            height="140"
                            image={testimage1}
                            alt="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Transcribtion
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                This course is tailored towards providing you with skills in converting song to solfa notation
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Share</Button>
                            <Link to="/basicmusiccourse"><Button size="small">Learn More</Button></Link>
                        </CardActions>
                    </Card>
                    

                </Grid>
                <Grid item xs={12} sm="6" md ="4" lg="3">
                    <Card sx={"12"} className="morefunc" >
                        <CardMedia
                            component="img"
                            height="140"
                            image={testimage2}
                            alt="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Drop-2 Made easy
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                This course provides vital knowledge needed by every beginner and intermediate musician to kick start their music journey.
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Share</Button>
                            <Link to="/basicmusiccourse"><Button size="small">Learn More</Button></Link>
                        </CardActions>
                    </Card>

                </Grid>
                <Grid item xs={12} sm="6" md ="4" lg="3">
                    <Card sx={"12"} className="morefunc" >
                        <CardMedia
                            component="img"
                            height="140"
                            image={testimage3}
                            alt="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Sound Engineering basics
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                This course provides vital knowledge needed by every beginner and intermediate musician to kick start their music journey.
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Share</Button>
                            <Link to="/basicmusiccourse"><Button size="small">Learn More</Button></Link>
                        </CardActions>
                    </Card>

                </Grid>
                <Grid item xs={12} sm="6" md ="4" lg="3">
                    <Card sx={"12"} className="morefunc" >
                        <CardMedia
                            component="img"
                            height="140"
                            image={testimage4}
                            alt="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Introduction to Harmony
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                This course provides vital knowledge needed by every beginner and intermediate musician to kick start their music journey.
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Share</Button>
                            <Link to="/basicmusiccourse"><Button size="small">Learn More</Button></Link>
                        </CardActions>
                    </Card>

                </Grid>
                <Grid item xs={12} sm="6" md ="4" lg="3">
                    <Card sx={"12"} className="morefunc" >
                        <CardMedia
                            component="img"
                            height="140"
                            image={testimage5}
                            alt="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Playing in a team
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                This course provides vital knowledge needed by every beginner and intermediate musician to kick start their music journey.
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Share</Button>
                            <Link to="/basicmusiccourse"><Button size="small">Learn More</Button></Link>
                        </CardActions>
                    </Card>

                </Grid>
                <Grid item xs={12} sm="6" md ="4" lg="3">
                    <Card sx={"12"} className="morefunc" >
                        <CardMedia
                            component="img"
                            height="140"
                            image={testimage}
                            alt="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                The piano
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                This course provides vital knowledge needed by every beginner and intermediate musician to kick start their music journey.
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Share</Button>
                            <Link to="/basicmusiccourse"><Button size="small">Learn More</Button></Link>
                        </CardActions>
                    </Card>

                </Grid>
                <Grid item xs={12} sm="6" md ="4" lg="3">
                    <Card sx={"12"} className="morefunc" >
                        <CardMedia
                            component="img"
                            height="140"
                            image={testimage}
                            alt="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Basic Music Theory 2
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                This course provides vital knowledge needed by every beginner and intermediate musician to kick start their music journey.
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Share</Button>
                            <Link to="/basicmusiccourse"><Button size="small">Learn More</Button></Link>
                        </CardActions>
                    </Card>

                </Grid>
            </Grid>
        </div>
    );
}

export default CourseListPage;