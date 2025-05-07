require("dotenv").config();

const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
app.use(cors());

const API_KEY = process.env.API_KEY;

function fetchNews(url, res) {
  axios.get(url)
    .then(response => {
      if (response.data.totalResults > 0) {
        res.json({
          status: 200,
          success: true,
          message: "Successfully fetched the data",
          data: response.data
        });
      } else {
        res.json({
          status: 200,
          success: true,
          message: "No more results to show"
        });
      }
    })
    .catch(error => {
      res.json({
        status: 500,
        success: false,
        message: "Failed to fetch data from the API",
        error: error.message
      });
    });
}

app.get("/all-news", (req, res) => {
  let pagesSize = parseInt(req.query.pageSize) || 40;
  let page = parseInt(req.query.page) || 1;
  let url = `https://newsapi.org/v2/everything?q=page=${page}&pageSize=${pagesSize}&apiKey=${API_KEY}`;
  fetchNews(url, res);
});

//top headlines


app.options("/top-headlines", cors());
app.get("/top-headlines", (req, res)=>{
    let pageSize=parseInt(req.query.pageSize)||80;
    let page=parseInt(req.query.page) ||1;
    let category=req.query.category || "business";

    let url=`https://newsapi.org/v2/top-headlines?category=${category}&page=${page}&pageSize=${pageSize}&apiKey=${API_KEY}`;
    fetchNews(url,res);
});


//country
app.options("/country/:iso", cors());
app.get("/country/:iso",(req,res)=>{
    let pageSize=parseInt(req.query.pageSize)||80;
    let page=parseInt(req.query.page)||1;
    const country=req.params.iso;

    let url=`https://newsapi.org/v2/top-headlines?country=${country}&page=${page}&pageSize=${pageSize}&apiKey=${API_KEY}`;
    fetchNews(url,res);
});

app.get("/language/:lang", (req, res) => {
  const language = req.params.lang || "en";
  const pageSize = parseInt(req.query.pageSize) || 20;
  const page = parseInt(req.query.page) || 1;

  // Use 'everything' endpoint to support language
  const url = `https://newsapi.org/v2/everything?language=${language}&page=${page}&pageSize=${pageSize}&apiKey=${API_KEY}`;

  axios.get(url)
    .then(response => {
      res.json(response.data); // This includes { status, totalResults, articles }
    })
    .catch(error => {
      console.error("Error fetching language news:", error);
      res.status(500).json({ error: "Failed to fetch language news" });
    });


});


const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running at port ${PORT}`);
});
