// import images
import supervisor from './images/icon-supervisor.svg'
import karma from './images/icon-karma.svg'
import teamBuilder from './images/icon-team-builder.svg'
import calculator from './images/icon-calculator.svg'

//components
import Card from './Card'


function App() {
  return (
    <div className="App">
      <header>
        <h1>Reliable, efficient delivery</h1>
        <h2>Powered by Technology</h2>

        <p>Our Artificial Intelligence powered tools use millions of project data points
        to ensure that your project is successful</p>
      </header>

      <section className="container">
        <Card
          title="Supervisor"
          content="Monitors activity to identify project roadblocks"
          img={supervisor}
          addClass="card--supervisor"
        />

        <Card
          title="Team Builder"
          content="Scans our talent network to create the optimal team for your project"
          img={karma}
          addClass="card--karma"
        />

        <Card
          title="Karma"
          content="Regularly evaluates our talent to ensure quality"
          img={teamBuilder}
          addClass="card--team-builder"
        />

        <Card
          title="Calculator"
          content="Uses data from past projects to provide better delivery estimates"
          img={calculator}
          addClass="card--calculator"
        />
      </section>
    </div>
  );
}

export default App;
