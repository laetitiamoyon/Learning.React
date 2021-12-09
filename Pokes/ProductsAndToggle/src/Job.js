const {useState} = require("react");
const JOBS =
[
  {
    "id": 1,
    "job": "Commis de cuisine",
    "pricePerHour": "20 euros",
    "durationInMinutes": "240 minutes"
  },
  {
    "id": 2,
    "job": "Plongeur",
    "pricePerHour": "18 euros",
    "durationInMinutes": "270 minutes"
  },
  {
    "id": 3,
    "job": "Chef pâtissier",
    "pricePerHour": "21 euros",
    "durationInMinutes": "195 minutes"
  }
]

const Jobs = ({job, pricePerHour, durationInMinutes}) =>
{
  const [visible, setVisible] = useState(false)
  const toggleShow = () => setVisible(!visible) // useToggle

  return <div className="container">
    <div className="jobContainer">
      <div className="firstPart">
        <div className="jobTitle">{job}</div>
        {!visible && (<button onClick={toggleShow} className="button">+</button>)}
        {visible && (<button onClick={toggleShow} className="button">-</button>)}
      </div>

      {visible && (
        <div className="seeMoreInformations" >
          <div>{pricePerHour}</div>
          <div>{durationInMinutes}</div>
        </div>)}
    </div>

  </div>
}

export const JobList = () =>
  <div>
    <h1>Missions</h1>
    {JOBS.map(j => <Jobs {...j} key={j.id}/>)}
  </div>