import React from "react";
import { Route } from "react-router-dom";




import ApplicantList from "./containers/job_application/applicant/ApplicantListView";
import ApplicantDetail from "./containers/job_application/applicant/ApplicantDetailView";
import ApplicantCreateForm from "./components/job_application/applicant/applicantCreateForm";

import ApplicationMadeList from "./containers/job_application/application_made/Application_madeListView";
import ApplicationMadeDetail from "./containers/job_application/application_made/Application_madeDetailView";

import GuarantorList from "./containers/job_application/guarantor/GuarantorListView";
import GuarantorDetail from "./containers/job_application/guarantor/GuarantorDetailView";
import GuarantorCreateForm from "./components/job_application/guarantor/guarantorCreateForm";

import JobList from "./containers/job_application/job_listing/Job_listingListView";
import JobDetail from "./containers/job_application/job_listing/Job_listingDetailView";
import JoblistingCreateForm from "./components/job_application/job_listing/joblistingCreateForm";

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
import HrRegister from "./containers/templates/hr_manager/hrregister";

import AnnoucememtList from "./containers/hr_management/announcement/announcementListVIew";
import AnnouncemnetDetail from "./containers/hr_management/announcement/announcementDetailView";
import AnnouncementCreateForm from "./components/hr_management/announcement/AnnouncementCreateForm";

import ComplainList from "./containers/hr_management/complains/complainListView";
import ComplainDetail from "./containers/hr_management/complains/complainDetailView";
import ComplainCreateForm from "./components/hr_management/complain/complainCreateForm";

import EmployeeList from "./containers/hr_management/employee/employeeListView";
import EmployeeDetail from "./containers/hr_management/employee/employeeDetailView";
import EmployeeCreateForm from "./components/hr_management/employee/employeeCreateForm";

import IssueList from "./containers/hr_management/issue/issueListView";
import IssueDetail from "./containers/hr_management/issue/issueDetailView";
import IssueCreateForm from "./components/hr_management/issue/issueCreateForm";

import TaskList from "./containers/hr_management/task/taskListView";
import TaskDetail from "./containers/hr_management/task/taskDetailView";
import TaskCreateForm from "./components/hr_management/task/taskCreateForm";

import WorkdayList from "./containers/hr_management/workday/workdayListView";
import WorkdayDetail from "./containers/hr_management/workday/workdayDetailView";
import WorkdayCreateForm from "./components/hr_management/workday/workdayCreateForm";


import EmployeeHomepage from "./containers/templates/employee/employeehomepage";
import EmployeeRegister from "./containers/templates/employee/employeeregister";
import EmployeeLogin from "./containers/templates/employee/employeelogin";
import EmployeeTaskList from "./containers/employee/task/taskListView";
import EmployeeTaskDetail from "./containers/employee/task/taskDetailView";
import EmployeeLogout from "./containers/templates/employee/employeelogout";
import EmployeeTaskCreateForm from "./components/employee/task/taskCreateForm";



const BaseRouter = () => (
  <div>
     <Route exact path="/employeehomepage" component={EmployeeHomepage} />{" "} 
     <Route exact path="/employeeregister/" component={EmployeeRegister} />{" "} 
     <Route exact path="/employeelogin/" component={EmployeeLogin} />{" "} 
     <Route exact path="/employeetask/" component={EmployeeTaskList} />{" "} 
     <Route exact path="/employeetaskcreate/" component={EmployeeTaskCreateForm} />{" "} 
     <Route exact path="/employeetask/:taskID/" component={EmployeeTaskDetail} />{" "} 
     <Route exact path="/employeelogout/" component={EmployeeLogout} />{" "} 
     

    <Route exact path="/applicanthomepage" component={ApplicantHomepage} />{" "} 
    <Route exact path="/applicantregister/" component={ApplicantRegister} />{" "} 
    <Route exact path="/applicantlogin/" component={ApplicantLogin} />{" "} 
    <Route exact path="/applicantlogout/" component={ApplicantLogout} />{" "} 

    <Route exact path="/" component={HrManagerHomepage} />{" "} 
    <Route exact path="/hrlogin/" component={HrLogin} />{" "} 
    <Route exact path="/hrlogout/" component={HrLogout} />{" "} 
    <Route exact path="/hrregister/" component={HrRegister} />{" "} 
    

    <Route exact path="/applicant" component={ApplicantList} />{" "} 
    <Route exact path="/applicant/:applicantID/" component={ApplicantDetail} />{" "} 
    <Route exact path="/applicantcreate" component={ApplicantCreateForm} />{" "} 

    <Route exact path="/business" component={BusinessList} />{" "} 
    <Route exact path="/business/:businessID/" component={BusinessDetail} />{" "} 
    <Route exact path="/businesscreate" component={BusinessCreateForm} />{" "} 
    <Route exact path="/businessupdate" component={BusinessUpdateForm} />{" "} 


    <Route exact path="/application_made" component={ApplicationMadeList} />{" "} 
    <Route exact path="/application_made/:applicationID/" component={ApplicationMadeDetail} />{" "} 
   

    <Route exact path="/guarantor" component={GuarantorList} />{" "} 
    <Route exact path="/guarantor/:guarantorID/" component={GuarantorDetail} />{" "} 
    <Route exact path="/guarantorcreate" component={GuarantorCreateForm} />{" "} 

    <Route exact path="/joblisting" component={JobList} />{" "} 
    <Route exact path="/joblisting/:jobID/" component={JobDetail} />{" "} 
    <Route exact path="/joblistingcreate" component={JoblistingCreateForm} />{" "} 

    <Route exact path="/announcement" component={AnnoucememtList} />{" "} 
    <Route exact path="/announcement/:announcemnetID/" component={AnnouncemnetDetail} />{" "} 
    <Route exact path="/announcementcreate" component={AnnouncementCreateForm} />{" "} 

    <Route exact path="/complain/" component={ComplainList} />{" "} 
    <Route exact path="/complain/:complainsID/" component={ComplainDetail} />{" "} 
    <Route exact path="/complaincreate" component={ComplainCreateForm} />{" "}



    <Route exact path="/employee" component={EmployeeList} />{" "} 
    <Route exact path="/employee/:employeeID/" component={EmployeeDetail} />{" "} 
    <Route exact path="/employeecreate" component={EmployeeCreateForm} />{" "} 

    <Route exact path="/issue" component={IssueList} />{" "} 
    <Route exact path="/issue/:issueID/" component={IssueDetail} />{" "} 
    <Route exact path="/issuecreate" component={IssueCreateForm} />{" "} 

    <Route exact path="/task" component={TaskList} />{" "} 
    <Route exact path="/task/:taskID/" component={TaskDetail} />{" "} 
    <Route exact path="/taskcreate" component={TaskCreateForm} />{" "} 

    <Route exact path="/workday" component={WorkdayList} />{" "} 
    <Route exact path="/workday/:workdayID/" component={WorkdayDetail} />{" "} 
    <Route exact path="/workdaycreate" component={WorkdayCreateForm} />{" "} 


  </div>
);

export default BaseRouter;