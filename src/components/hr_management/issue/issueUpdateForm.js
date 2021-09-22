import React , { useState, useEffect } from "react";
import { Form, Input, Button} from "antd";
import axiosInstance from "../../connection";
import { useHistory, useParams} from 'react-router-dom';



const FormItem = Form.Item;


export default function ComplainUpdateForm () {
  
  const history = useHistory();
	const { issueID } = useParams();
	const initialFormData = Object.freeze({
        Staff_issue: '',
        Action: '',  
    
	});

	const [formData, updateFormData] = useState(initialFormData);

	useEffect(() => {
		axiosInstance.get(`hr/Issue/${issueID}/`).then((res) => {
			updateFormData({
				...formData,
				['Staff_issue']: res.data.Staff_issue,
				['Action']: res.data.Action,
			});
			console.log(res.data);
		});
	}, [updateFormData]);

	const handleChange = (e) => {
		updateFormData({
			...formData,
			// Trimming any whitespace
			[e.target.name]: e.target.value.trim(),
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(formData);

		axiosInstance.put(`hr/Issue/${issueID}/`, {
            Staff_issue:formData.Staff_issue,
            Action:formData.Action,
		});
		history.push({
			pathname: `/issue/${issueID}/`,
		});
		window.location.reload();
	};

	

    return (
      <div>
        <Form>

        <FormItem label="Staff_issue">
            <Input 
            id="Staff_issue"
            name="Staff_issue" 
			label="Staff_issue"
			onChange={handleChange}
            placeholder="Input a staff issue here" 
            />
          </FormItem>



          <FormItem label="Action">
            <Input 
            id="Action"
            name="Action" 
			label="Action"
			onChange={handleChange}
            placeholder="Input a business  action taken here" 
            />
          </FormItem>
         

          <FormItem>
            <Button 
            type="submit"
			color="Blue"
			onClick={handleSubmit}
            >
            Update
            </Button>
          </FormItem>

        </Form>
      </div>
    );
  
}


