import './Dashboard.css'
import DashboardCard from "../../Components/DashboardCard/DashboardCard"
import DashboardComponent from "../../Components/DashboardComponent/DashboardComponent"
import dashemail from '../../Assets/dashboard_email.svg'
import dashmessage from '../../Assets/dashboard_message.svg'
import dashcreate from '../../Assets/dashboard_create.svg'




const Dashboard = () => {
  const dashboardData = [{id: 0, head: 'Send your first email', text: 'Choose a pre-designed template', buttonText: 'Create Email', bgColor: '#FBCFBD', img: dashemail},{id: 1, head: 'Send your first text message', text: 'Choose a pre-designed template', buttonText: 'Create Text', bgColor: '#D8EACC', img: dashmessage},{id: 2, head: 'Create audience', text: `Once you add your contacts, you’ll be able to send your first campaign`, buttonText: 'Create Audience', bgColor: `#C5DBF2`, img: dashcreate}]
  return (
    <>
      <div className="main-dashboard-container">
        <DashboardComponent />
        <div className='dashboard-second-section'>
          <h1 className='dashboard-h1'>Create your first campaign</h1>
          <h2 className='dashboard-h2'>Chose how you’d like to start</h2>
          <div className="dashboard-card-flex">
            {
              dashboardData.map(item => <DashboardCard key={item.id} heading={item.head} text={item.text} btnText={item.buttonText} background={item.bgColor} img={item.img}/>)
            }
          </div>
        </div>


      </div>
      {/* <DashboardCard /> */}
    </>
  )
}

export default Dashboard