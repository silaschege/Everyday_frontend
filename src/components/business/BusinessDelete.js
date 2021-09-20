import React , { useState, useEffect } from "react";
import { Form, Input, Button} from "antd";
import HrLayout from "../../containers/templates/hr_manager/hrlayout";
import axiosInstance from "../connection";
import { useHistory, useParams} from 'react-router-dom';
import Business from "./business";


const FormItem = Form.Item;


export default function BusinessDeleteForm () {
    const history = useHistory();
	const { businessID } = useParams();

	const handleSubmit = (e) => {
		e.preventDefault();
		axiosInstance
			.delete(`business/Business/${businessID}/`)
			.catch(function (error) {
				if (error.response) {
					console.log(error.response.data);
					console.log(error.response.status);
					console.log(error.response.headers);
				}
			})
			.then(function () {
					history.push({
						pathname: '/business/',
					});
					window.location.reload();
			});
	};


	

    return (
      <div>
          <Form>
          <FormItem>
            <Button 
            type="submit"
			color="Blue"
			onClick={handleSubmit}
            >
            Delete
            </Button>
          </FormItem>

        </Form>
        
      </div>
    );
  
}


