import React from 'react';
import duongda from '../../img/duongda.png';
import kemCN from '../../img/kemCN.jpg';
import kemTriMun from '../../img/kemTriMun.jpg';
import './style.scss';
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import Button from "react-bootstrap/Button";
export default function Skincare() {
    return (
        <div>
            <div className = "banner-productSkincare" >
        <div >
        <h4 style={{textAlign:'center'}}> CHĂM SÓC DA - SKIN CARE </h4> </div > 
        <Carousel >
        <Carousel.Item >
        <div className = "tab_1" >
        <Card style = {
          {
            width: '18rem'
          }
        }>
        <Card.Img variant = "top" src = {kemCN}/> 
        <Card.Body >
        <Card.Title > Kem chống nắng </Card.Title>
                    <Card.Text > <h5 style={{color:'red'}}>300.000 đ</h5>
                      Kem chống nắng Innisfree Intensive Long Lasting Suncreen EX. </Card.Text >
                    <Button variant="primary" > Buy now </Button> </Card.Body > </Card>
                <Card style={{ width: '18rem' }} >
                  <Card.Img variant="top" src={duongda} />
                  < Card.Body >
                    <Card.Title > Kem dưỡng </Card.Title>
                    <Card.Text ><h5 style={{color:'red'}}>450.000 đ</h5>
                      Kem dưỡng Vitamin E body lotion Redwin 400ml. </Card.Text >
                    <Button variant="primary" > Buy now </Button> </Card.Body > </Card>
                <Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" src={kemCN} />
                  <Card.Body >
                    <Card.Title > Kem dưỡng da </Card.Title>
                    <Card.Text ><h5 style={{color:'red'}}>550.000 đ</h5>
                      Kem Dưỡng Chống Nắng Da Mụn Paula's Choice 60ml. </Card.Text >
                    <Button variant="primary" > Buy now </Button> </Card.Body> </Card>
                <Card style={{ width: '18rem' }} >
                  <Card.Img variant="top" src={kemTriMun} />
                  <Card.Body >
                    <Card.Title > Serum</Card.Title>
                    <Card.Text ><h5 style={{color:'red'}}>950.000 đ</h5>
                      Serum OBAGI Cấp Nước Phục Hồi Da Daily Hydro Drops 30ml. </Card.Text >
                    <Button variant="primary" > Buy now </Button> </Card.Body > </Card> </div >
              <Carousel.Caption >
                <p > Nulla vitae elit libero,a pharetra augue mollis interdum. </p> </Carousel.Caption > </Carousel.Item>
            < Carousel.Item >
              <div className="tab_1" >
                <Card style={{ width: '18rem' }} >
                  <Card.Img variant="top" src={kemCN} />
                  <Card.Body >
                  <Card.Title > Kem chống nắng </Card.Title>
                    <Card.Text > <h5 style={{color:'red'}}>300.000 đ</h5>
                      Kem chống nắng Innisfree Intensive Long Lasting Suncreen EX. </Card.Text >
                    <Button variant="primary" > Buy now </Button> </Card.Body > </Card>
                <Card style={{ width: '18rem' }} >
                  <Card.Img variant="top" src={duongda} />
                  < Card.Body >
                    <Card.Title > Kem dưỡng </Card.Title>
                    <Card.Text ><h5 style={{color:'red'}}>450.000 đ</h5>
                      Kem dưỡng Vitamin E body lotion Redwin 400ml. </Card.Text >
                    <Button variant="primary" > Buy now </Button> </Card.Body > </Card>
                <Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" src={kemCN} />
                  <Card.Body >
                    <Card.Title > Kem dưỡng da </Card.Title>
                    <Card.Text ><h5 style={{color:'red'}}>550.000 đ</h5>
                      Kem Dưỡng Chống Nắng Da Mụn Paula's Choice 60ml. </Card.Text >
                    <Button variant="primary" > Buy now </Button> </Card.Body> </Card>
                <Card style={{ width: '18rem' }} >
                  <Card.Img variant="top" src={kemTriMun} />
                  <Card.Body >
                    <Card.Title > Serum</Card.Title>
                    <Card.Text ><h5 style={{color:'red'}}>950.000 đ</h5>
                      Serum OBAGI Cấp Nước Phục Hồi Da Daily Hydro Drops 30ml. </Card.Text >
                    <Button variant="primary" > Buy now </Button> </Card.Body > </Card> </div > </Carousel.Item>
            <Carousel.Item >
              <div className="tab_1" >
                <Card style={{ width: '18rem' }} >
                  < Card.Img variant="top" src={kemCN} />
                  <Card.Body >
                  <Card.Title > Kem chống nắng </Card.Title>
                    <Card.Text > <h5 style={{color:'red'}}>300.000 đ</h5>
                      Kem chống nắng Innisfree Intensive Long Lasting Suncreen EX. </Card.Text >
                    <Button variant="primary" > Buy now </Button> </Card.Body > </Card>
                <Card style={{ width: '18rem' }} >
                  <Card.Img variant="top" src={duongda} />
                  < Card.Body >
                    <Card.Title > Kem dưỡng </Card.Title>
                    <Card.Text ><h5 style={{color:'red'}}>450.000 đ</h5>
                      Kem dưỡng Vitamin E body lotion Redwin 400ml. </Card.Text >
                    <Button variant="primary" > Buy now </Button> </Card.Body > </Card>
                <Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" src={kemCN} />
                  <Card.Body >
                    <Card.Title > Kem dưỡng da </Card.Title>
                    <Card.Text ><h5 style={{color:'red'}}>550.000 đ</h5>
                      Kem Dưỡng Chống Nắng Da Mụn Paula's Choice 60ml. </Card.Text >
                    <Button variant="primary" > Buy now </Button> </Card.Body> </Card>
                <Card style={{ width: '18rem' }} >
                  <Card.Img variant="top" src={kemTriMun} />
                  <Card.Body >
                    <Card.Title > Serum</Card.Title>
                    <Card.Text ><h5 style={{color:'red'}}>950.000 đ</h5>
                      Serum OBAGI Cấp Nước Phục Hồi Da Daily Hydro Drops 30ml. </Card.Text >
                    <Button variant="primary" > Buy now </Button> </Card.Body > </Card> </div> </Carousel.Item> </Carousel > </div> 
        </div>
    )
}
