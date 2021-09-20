import React from "react";
import axios from "axios";
import Announcement from "../../../components/hr_management/announcement/announcement"
import axiosInstance from "../../../components/connection";
import { HrLayout } from "../../templates/hr_manager/hrlayout";



class AnnoucememtList extends React.Component {
  state = {
    announcements: []
  };

  fetchAnnouncement = () => {
    axiosInstance
    .get("hr/Announcement/").then(res => {
      this.setState({
        announcements: res.data
      });
    });
  }

  componentDidMount() {
    this.fetchAnnouncement();
  }

  componentWillReceiveProps(newProps) {
    if (newProps.token) {
      this.fetchAnnouncement();      
    }
  }

  render() {
    return (
      <div>
        <HrLayout>
        <Announcement data={this.state.announcements} /> <br />
        </HrLayout>
      </div>
    );
  }
}

export default AnnoucememtList;
