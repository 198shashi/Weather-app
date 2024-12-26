import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import "./InfoBox.css";




export default function InfoBox({info}) {
    const INIT_URL = "https://media.istockphoto.com/id/1269580436/photo/sleeping-street-puppy-dogs.jpg?s=1024x1024&w=is&k=20&c=pBeMVC89NyCspksmjm9ToBy_KZIfwf2Ku_i-DAzZgNA="

    const HOT_URL="https://media.istockphoto.com/id/2161510610/photo/woman-on-camel-in-the-desert-at-sunset.jpg?s=612x612&w=is&k=20&c=IYfrXDPnu6AazF8UUWJfAAanry1Al6T0WWAJiGHfpqQ=";
    const COLD_URL="https://media.istockphoto.com/id/1296158976/photo/female-hands-in-knitted-mittens-with-snowy-heart-against-snow-background.jpg?s=612x612&w=is&k=20&c=mApPzJWCzdgvlRDJZhiT9pDJNXeqLpvrJelyxD9lx-k=";
    const RAINY_URL="https://media.istockphoto.com/id/1172426567/photo/happy-couple-enjoying-the-rain.jpg?s=612x612&w=is&k=20&c=dff8z8X0PV2AQVaEnyeS6CMRk7DNz1UtTQMtvT9EvAo=";




    return (
        <div className="InfoBox">
           
            <div className='cardContainer'>
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        sx={{ height: 140 }}
                        image={info.humidity>80?RAINY_URL:info.temp>15?HOT_URL:COLD_URL}
                        title="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {info.city}
                            {info.humidity>80?<ThunderstormIcon/>:info.temp>15?<WbSunnyIcon/>:<AcUnitIcon/>}

                        </Typography>
                        <Typography variant="body2" color="text.secondary" component={"span"}>
                            <p>Temperature ={info.temp}&deg;C</p>
                            <p>Humidity ={info.humidity}</p>
                            <p>Min Temperatre ={info.tempMin}&deg;C</p>
                            <p>Max Temperature ={info.tempMax}&deg;C</p>
                            <p>the weather can be described as <b>{info.weather}</b> feels like{info.feelslike}&deg:C</p>
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        </div>
    )

}