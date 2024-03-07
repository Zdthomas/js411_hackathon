import axios from 'axios'
import { useEffect, useState } from 'react';
import './App.css';

function App() {

  const [results, setResults] = useState([])

  useEffect(() => {

    axios.get(`http://hn.algolia.com/api/v1/search?query=`)

            .then( res => {

                // console.log(res.data.hits);

                setResults(res.data.hits);

                

                

            })


  }, [])

  const fetchResults = (event) => {

    console.log(event.target.value)


    axios.get(`http://hn.algolia.com/api/v1/search?query=${event.target.value}`)

            .then( res => {

                
                setResults(res.data.hits);

                

                

            })
  }

  return (

    <div class = "MasterContainer">

    <header class = "SearchHeader">

      <img src = "https://hn.algolia.com/public/899d76bbc312122ee66aaaff7f933d13.png" alt='Logo' class = "Logo"/>

      <div class= "SearchHeaderLabel">

        <p>Search</p>
        {/* <br /> */}
        <p>Hacker News</p>

      </div>


      <form  >

        <input type = "text" placeholder= "Search stories by title, url or author" onChange = {fetchResults} name = "search" class ="SearchInput"/>

      </form>

    </header>

      <div class = "storyContainer">

        <ul style={ {listStyle: "none"} }>

          {results.map((article, idx) => 
          
          <li key = {idx}> <a style= {{ textDecoration: 'none' }}class ="storyLink" href={article.title}>{article.title}</a></li>


          )}

        </ul>

      </div>

    </div>
    
  );
}

export default App;
