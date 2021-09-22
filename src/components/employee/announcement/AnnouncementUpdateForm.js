import React , { useState, useEffect } from "react";
import { Form, Input, Button} from "antd";
import axiosInstance from "../../connection";
import { useHistory, useParams} from 'react-router-dom';



const FormItem = Form.Item;


export default function AnnouncemntUpdateForm () {
  
  const history = useHistory();
	const { announcemnetID } = useParams();
	const initialFormData = Object.freeze({
        Message: '',
		From: '',
		To : '',
    
	});

	const [formData, updateFormData] = useState(initialFormData);

	useEffect(() => {
		axiosInstance.get(`hr/Announcement/${announcemnetID}/`).then((res) => {
			updateFormData({
				...formData,
				['Message']: res.data.Message,
				['From']: res.data.From,
				['To']: res.data.To,
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

		axiosInstance.put(`hr/Announcement/${announcemnetID}/`, {
            Message: formData.Message,
            From:formData.From,
            To:formData.To,
		});
		history.push({
			pathname: `/announcement/${announcemnetID}/`,
		});
		window.location.reload();
	};

	

    return (
      <div>
        <Form>

        <FormItem label="Message">
            <Input 
            id="Message"
            name="Message" 
						label="Message"
						onChange={handleChange}
            placeholder="Input a Message here" 
            />
          </FormItem>

          <FormItem label="From">
            <Input 
            id="From"
            name="From" 
			label="From"
			onChange={handleChange}
            placeholder="Input a business from here" 
            />
          </FormItem>

          <FormItem label="To">
            <Input 
            id="To"
            name="To" 
			label="To"
			onChange={handleChange}
            placeholder="Input where a message is to  here" 
            />
          </FormItem>
         


 
          
        {/* <Form.Item label="Date of Birth">
        <DatePicker label="Date_of_birth" placeholder="Enter some content ..." />
        </Form.Item> */}

       

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


