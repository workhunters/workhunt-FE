import React, { useEffect, useState } from "react";
import { Card, Skeleton, Typography } from "antd";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import moment from "moment";
import { Link } from "react-router-dom";

const { Title } = Typography;

let SortJobs = (allJobs, cb) => {
  let all = [];
  allJobs.sort((a, b) => {
    return a.createdAt - b.createdAt;
  });
  for (let job of allJobs) {
    console.log(job);
    all.push(job);
  }
  allJobs = allJobs.reverse();
  cb(allJobs);
};
const Jobs = ({ selected }) => {
  let [jobs, setJob] = useState([]);
  useEffect(() => {
    if (selected.companyname === "razorpay") {
      console.log(selected.jobs.jobs);
      setJob(selected.jobs.jobs);
    } else if (selected.companyname === "pharmeasy") {
      setJob([]);
    } else {
      SortJobs(selected.jobs, setJob);
      setJob(selected.jobs);
    }
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
          <div>
            <Title level={1} style={{ textTransform: "capitalize" }}>
              {selected?.companyname}
            </Title>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap" }}>
            {selected.companyname != "pharmeasy" &&
              selected.companyname != "skit.ai" &&
              Array.isArray(jobs) &&
              jobs?.map((eachJob, eachIndex) => {
                return (
                  <div
                    style={{
                      flex: "1 1 0",
                      display: "flex",
                      justifyContent: "center",
                    }}
                    key={eachIndex + (eachJob["text"] || eachJob["title"])}
                  >
                    <Card
                      style={{
                        width: 300,
                        marginTop: 16,
                        border: "1px solid #cfcfcf",
                        textAlign: "left",
                      }}
                      actions={[
                        <>Open Job</>,
                        <a
                          target="_blank"
                          rel="noreferrer"
                          href={eachJob?.applyUrl || eachJob?.absolute_url}
                        >
                          Apply Url
                        </a>,
                      ]}
                    >
                      {eachJob["text"] || eachJob["title"]}

                      <br />
                      <strong>
                        {moment(
                          eachJob?.createdAt
                            ? eachJob?.createdAt
                            : new Date(eachJob.updated_at).getTime()
                        ).fromNow()}
                      </strong>
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
