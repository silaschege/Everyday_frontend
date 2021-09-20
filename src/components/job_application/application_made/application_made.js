import React from "react";
import { List, Avatar} from "antd";
import Icon from '@ant-design/icons';

const IconText = ({ type, text }) => (
  <span>
    <Icon
      type={type}
      style={{
        marginRight: 8
      }}
    />
    {text}
  </span>
);

const ApplicationMade = props => {
  return (
    <List
      itemLayout="vertical"
      size="large"
      pagination={{
        onChange: page => {
          console.log(page);
        },
        pageSize: 3
      }}
      dataSource={props.data}
      renderItem={item => (
        <List.Item
          key={item.title}
          actions={[
            <IconText type="star-o" text="156" />,
            <IconText type="like-o" text="156" />,
            <IconText type="message" text="2" />
          ]}
        >
          <List.Item.Meta
            avatar={<Avatar src={item.avatar} />}
            title={<a href={`/application_made/${item.Application_made_Id}`}> {item.Application_made_Id} </a>}
            description={item.Job_listing}
          />
          {item.content}
        </List.Item>
      )}
    />
  );
};

export default ApplicationMade;