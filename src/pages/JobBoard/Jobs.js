import React, { useEffect, useState } from "react";
import { Card, Skeleton, Typography } from "antd";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import moment from "moment";

const { Title } = Typography;

const Jobs = ({ selected }) => {
  let [jobs, setJob] = useState([]);
  useEffect(() => {
    console.log(selected);
    if (selected.companyname == "razorpay") setJob(selected.jobs.jobs);
    else if (selected.companyname == "pharmeasy") {
      setJob([]);
    } else setJob(selected.jobs);
  }, [selected]);
  return (
    <div>
      {selected && selected.companyname === null ? (
        <>
          <Title>Workhunt</Title>
          <Title level={4}>Job Search made easy</Title>
          Pick companies in that you are interested
        </>
      ) : (
        <React.Fragment>
          <div>{selected?.companyname}</div>
          <div style={{ display: "flex", flexWrap: "wrap" }}>
            {selected.companyname != "pharmeasy" &&
              Array.isArray(jobs) &&
              jobs?.map((eachJob, eachIndex) => {
                return (
                  <div style={{ flex: "1 1 0" }} key={eachIndex}>
                    <Card
                      style={{ width: 300, marginTop: 16 }}
                      actions={[
                        <SettingOutlined key="setting" />,
                        <EditOutlined key="edit" />,
                        <EllipsisOutlined key="ellipsis" />,
                      ]}
                    >
                      {eachJob["text"] || eachJob["title"]}

                      <br />
                      <strong>{moment(eachJob?.createdAt).fromNow()}</strong>
                      {/* <Skeleton loading={loading} avatar active>
                    <Meta
                      avatar={
                        <Avatar src="https://joeschmoe.io/api/v1/random" />
                      }
                      title="Card title"
                      description="This is the description"
                    />
                  </Skeleton> */}
                    </Card>
                  </div>
                );
              })}
          </div>
        </React.Fragment>
      )}
    </div>
  );
};
export default Jobs;
