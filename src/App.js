import React from 'react';
import Footer from './Footer';
import Header from './Header';
import Wrapper from './Wrapper';
import Hero from './Hero';
import Card from './Card'
import './App.css';

function App() {
  return (
    <div className="App">

      <Header/>
      <Hero title="Say hello to ReactJS" 
            description="You will learn a Frontend framework
            form scratch, to become a Ninja Developer"
      />

      <Wrapper>
          <Card title="Declarative" 
                description="React makes it painless to create interactive UIs." 
                img="./images/icon1.png" 
          />
          <Card title="Components" 
                description="Build encapsulated components." 
                img="./images/icon2.png" 
          />
          <Card title="Single-way" 
                description="A set of immutable values are passed to the component`s." 
                img="./images/icon3.png" 
          />
          <Card title="JSX" 
                description="Statically-typed designed to run on modern browsers." 
                img="./images/icon4.png" 
          />
      </Wrapper>

      <Footer />  
      
    </div>
  );
}

export default App;
