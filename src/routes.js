import React from "react";
import { Route } from "react-router-dom";




import ApplicantList from "./containers/job_application/applicant/ApplicantListView";
import ApplicantDetail from "./containers/job_application/applicant/ApplicantDetailView";

import ApplicationMadeList from "./containers/job_application/application_made/Application_madeListView";
import ApplicationMadeDetail from "./containers/job_application/application_made/Application_madeDetailView";

import GuarantorList from "./containers/job_application/guarantor/GuarantorListView";
import GuarantorDetail from "./containers/job_application/guarantor/GuarantorDetailView";

import JobList from "./containers/job_application/job_listing/Job_listingListView";
import JobDetail from "./containers/job_application/job_listing/Job_listingDetailView";

import BusinessList from "./containers/business/Business/BusinessList";
import BusinessDetail from "./containers/business/Business/BusinessDetail";
import BusinessCreateForm from "./components/business/BusinessCreateForm";
import BusinessUpdateForm from "./components/business/BusinesssUpdateFrom";

import ApplicantRegister from "./containers/templates/applicant/applicantregister";
import ApplicantLogin from "./containers/templates/applicant/applicantlogin";
import ApplicantLogout from "./containers/templates/applicant/applicantlogout";
import ApplicantHomepage from "./containers/templates/applicant/applicanthomepage";


import HrManagerHomepage from "./containers/templates/hr_manager/hrmanagerhomepage";
import HrLogin from "./containers/templates/hr_manager/hrlogin";
import HrLogout from "./containers/templates/hr_manager/hrlogout";

import AnnoucememtList from "./containers/hr_management/announcement/announcementListVIew";
import AnnouncemnetDetail from "./containers/hr_management/announcement/announcementDetailView";

import ComplainList from "./containers/hr_management/complains/complainListView";
import ComplainDetail from "./containers/hr_management/complains/complainDetailView";

import EmployeeList from "./containers/hr_management/employee/employeeListView";
import EmployeeDetail from "./containers/hr_management/employee/employeeDetailView";

import IssueList from "./containers/hr_management/issue/issueListView";
import IssueDetail from "./containers/hr_management/issue/issueDetailView";

import TaskList from "./containers/hr_management/task/taskListView";
import TaskDetail from "./containers/hr_management/task/taskDetailView";

import WorkdayList from "./containers/hr_management/workday/workdayListView";
import WorkdayDetail from "./containers/hr_management/workday/workdayDetailView";

const BaseRouter = () => (
  <div>
    <Route exact path="/" component={ApplicantHomepage} />{" "} 
    <Route exact path="/applicantregister/" component={ApplicantRegister} />{" "} 
    <Route exact path="/applicantlogin/" component={ApplicantLogin} />{" "} 
    <Route exact path="/applicantlogout/" component={ApplicantLogout} />{" "} 

    <Route exact path="/hrhomepage" component={HrManagerHomepage} />{" "} 
    <Route exact path="/hrlogin/" component={HrLogin} />{" "} 
    <Route exact path="/hrlogout/" component={HrLogout} />{" "} 

    <Route exact path="/applicant" component={ApplicantList} />{" "} 
    <Route exact path="/applicant/:applicantID/" component={ApplicantDetail} />{" "} 

    <Route exact path="/business" component={BusinessList} />{" "} 
    <Route exact path="/business/:businessID/" component={BusinessDetail} />{" "} 
    <Route exact path="/businesscreate" component={BusinessCreateForm} />{" "} 
    <Route exact path="/businessupdate" component={BusinessUpdateForm} />{" "} 


    <Route exact path="/application_made" component={ApplicationMadeList} />{" "} 
    <Route exact path="/application_made/:applicationID/" component={ApplicationMadeDetail} />{" "} 

    <Route exact path="/guarantor" component={GuarantorList} />{" "} 
    <Route exact path="/guarantor/:guarantorID/" component={GuarantorDetail} />{" "} 

    <Route exact path="/joblisting" component={JobList} />{" "} 
    <Route exact path="/joblisting/:jobID/" component={JobDetail} />{" "} 

    <Route exact path="/announcement" component={AnnoucememtList} />{" "} 
    <Route exact path="/announcement/:announcemnetID/" component={AnnouncemnetDetail} />{" "} 

    <Route exact path="/complain/" component={ComplainList} />{" "} 
    <Route exact path="/complain/:complainsID/" component={ComplainDetail} />{" "} 


    <Route exact path="/employee" component={EmployeeList} />{" "} 
    <Route exact path="/employee/:employeeID/" component={EmployeeDetail} />{" "} 

    <Route exact path="/issue" component={IssueList} />{" "} 
    <Route exact path="/issue/:issueID/" component={IssueDetail} />{" "} 

    <Route exact path="/task" component={TaskList} />{" "} 
    <Route exact path="/task/:taskID/" component={TaskDetail} />{" "} 

    <Route exact path="/workday" component={WorkdayList} />{" "} 
    <Route exact path="/workday/:workdayID/" component={WorkdayDetail} />{" "} 


  </div>
);

export default BaseRouter;