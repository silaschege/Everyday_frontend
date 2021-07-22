import 'antd/dist/antd.css';
import CustomLayout from './containers/Layout';
import { connect } from 'react-redux';




function App() {
  return (
    <div className>
      <CustomLayout{...this.props}/>
    </div>
  );
}


const mapStateToProps=(state)=>{
  return{
        isAuthenticated: state.token !==null
  }
}



export default connect(mapStateToProps) (App);
