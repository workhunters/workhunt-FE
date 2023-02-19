import React, { useEffect, useState } from "react";
import { Button, Card, Divider, Skeleton, Typography } from "antd";
import { useSelector, useDispatch } from "react-redux";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import moment from "moment";
import { Link } from "react-router-dom";
import "./jobs.css";

const { Title } = Typography;
const TOP5 = [
  {
    additionalPlain:
      "how is life at CRED?\n\nworking at CRED would instantly make you realize one thing: you are working with the best talent around you. not just in the role you occupy, but everywhere you go. talk to someone around you; most likely you will be talking to a singer, standup comic, artist, writer, an athlete, maybe a magician. \n\nat CRED people always have talent up their sleeves. with the right company, even conversations can be rejuvenating. at CRED, we guarantee a good company.\n\nhard truths: pushing oneself comes with the role. and we realise pushing oneself is hard work. which is why CRED is in the continuous process of building an environment that helps the team rejuvenate oneself: included but not limited to a stacked, in-house pantry, with lunch and dinner provided for all the team members, paid sick leaves and a comprehensive health insurance. \n\nto make things smoother and to make sure you spend time and energy only on the most important things,  CRED strives to make every process transparent: there are no work timings because we do not believe in archaic methods of calculating productivity, your work should speak for you. there are no job designations because you will be expected to hold down roles that cannot be described in one word. since trust is a major virtue in the community we have built, we make it a point to highlight it in the community behind CRED: all our employees get their salaries before their joining date. a show of trust that speaks volumes because of the skin in the game. \n\nthere are many more such eccentricities that make CRED what it is but that’s for one to discover. \nif you feel at home reading this, get in touch.\n",
    additional:
      "<div><b>how is life at CRED?</b></div><div><br></div><div>working at CRED would instantly make you realize one thing: you are working with the best talent around you. not just in the role you occupy, but everywhere you go. talk to someone around you; most likely you will be talking to a singer, standup comic, artist, writer, an athlete, maybe a magician. </div><div><br></div><div>at CRED people always have talent up their sleeves. with the right company, even conversations can be rejuvenating. at CRED, we guarantee a good company.</div><div><br></div><div>hard truths: pushing oneself comes with the role. and we realise pushing oneself is hard work. which is why CRED is in the continuous process of building an environment that helps the team rejuvenate oneself: included but not limited to a stacked, in-house pantry, with lunch and dinner provided for all the team members, paid sick leaves and a comprehensive health insurance.&nbsp;</div><div><br></div><div>to make things smoother and to make sure you spend time and energy only on the most important things,&nbsp; CRED strives to make every process transparent: there are no work timings because we do not believe in archaic methods of calculating productivity, your work should speak for you. there are no job designations because you will be expected to hold down roles that cannot be described in one word. since trust is a major virtue in the community we have built, we make it a point to highlight it in the community behind CRED: all our employees get their salaries before their joining date. a show of trust that speaks volumes because of the skin in the game.&nbsp;</div><div><br></div><div>there are many more such eccentricities that make CRED what it is but that’s for one to discover. </div><div>if you feel at home reading this, get in touch.</div>",
    categories: {
      commitment: "full time",
      department: "engineering",
      location: "Bengaluru, Karnataka",
      team: "Frontend",
    },
    createdAt: 1668670654679,
    descriptionPlain:
      "what is CRED?\n\nCRED is an exclusive community for India’s most trustworthy and creditworthy individuals, where the members are rewarded for good financial behavior. CRED was born out of a need to bring back the focus on a long lost virtue, one of trust, the idea being to create a community centered around this virtue. a community that constantly strives to become more virtuous in this regard till they finally scale their behavior to create a utopia where being trustworthy is the norm and not the exception. to build a community like this requires a community of its own; a community special in its own way, working towards making this vision come true. \n\nhere’s a thought experiment: what do you get when you put a group of incredibly passionate and driven people and entrust them with the complete freedom to chase down their goals in a completely uninhibited manner? answer: you get something close to what we have at CRED; CRED just has it better.\n \nhere’s what will be in store for you at CRED once you join as a part of the team \n\n",
    description:
      "<div><b>what is CRED?</b></div><div><br></div><div>CRED is an exclusive community for India’s most trustworthy and creditworthy individuals, where the members are rewarded for good financial behavior. CRED was born out of a need to bring back the focus on a long lost virtue, one of trust, the idea being to create a community centered around this virtue. a community that constantly strives to become more virtuous in this regard till they finally scale their behavior to create a utopia where being trustworthy is the norm and not the exception.&nbsp;to build a community like this requires a community of its own; a community special in its own way, working towards making this vision come true.&nbsp;</div><div><br></div><div>here’s a thought experiment: what do you get when you put a group of incredibly passionate and driven people and entrust them with the complete freedom to chase down their goals in a completely uninhibited manner? answer: you get something close to what we have at CRED; CRED just has it better.</div><div>&nbsp;</div><div>here’s what will be in store for you at CRED once you join as a part of the team&nbsp;</div><div><br></div>",
    id: "9b97183b-2d89-4d77-9c27-4ea62f5250e9",
    lists: [
      {
        text: "what you will do?",
        content:
          "<li>work on a disruptive product that’s still in its early stages</li><li>be responsible to drive innovation in software development, while relentlessly improving performance, scalability, and maintainability.</li><li>owning the design process, implementation, and verification of framework components leveraging standard software engineering methodologies</li><li>translating functional and technical requirements into detailed architecture and design.</li>",
      },
      {
        text: "you should apply if you:",
        content:
          "<li>posses 2 to 6 years of experience building high-performance consumer web applications.</li><li>extensive experience in javascript/typescript and with some of the modern web frameworks(React, svelte, vue)</li><li>experience with styling web applications and working with CSS frameworks like styled components, tailwind, etc.</li><li>good knowledge in frontend architecture principles and design patterns.</li><li>familiar with application performance, different web rendering strategies and caching techniques.</li><li>understanding of Node.js and frontend build tools.</li><li>keep up to date with current trends and the latest web standards.</li><li>attention to detail, obsession for pixel perfection and ability to convert a designer's vision to a working app.</li><li>have passion to code, but also you’re awesome at it!</li>",
      },
    ],
    text: "frontend developer",
    country: "IN",
    workplaceType: "hybrid",
    hostedUrl:
      "https://jobs.lever.co/cred/9b97183b-2d89-4d77-9c27-4ea62f5250e9",
    applyUrl:
      "https://jobs.lever.co/cred/9b97183b-2d89-4d77-9c27-4ea62f5250e9/apply",
  },
  {
    additionalPlain:
      "how is life at CRED?\n\nworking at CRED would instantly make you realize one thing: you are working with the best talent around you. not just in the role you occupy, but everywhere you go. talk to someone around you; most likely you will be talking to a singer, standup comic, artist, writer, an athlete, maybe a magician. at CRED people always have talent up their sleeves. with the right company, even conversations can be rejuvenating. at CRED, we guarantee a good company.\n\nhard truths: pushing oneself comes with the role. and we realise pushing oneself is hard work. which is why CRED is in the continuous process of building an environment that helps the team rejuvenate oneself: included but not limited to a stacked, in-house pantry, with lunch and dinner provided for all the team members, paid sick leaves and a comprehensive health insurance. \n\nto make things smoother and to make sure you spend time and energy only on the most important things,  CRED strives to make every process transparent: there are no work timings because we do not believe in archaic methods of calculating productivity, your work should speak for you. there are no job designations because you will be expected to hold down roles that cannot be described in one word. since trust is a major virtue in the community we have built, we make it a point to highlight it in the community behind CRED: all our employees get their salaries before their joining date. a show of trust that speaks volumes because of the skin in the game. \n\nthere are many more such eccentricities that make CRED what it is but that’s for one to discover. if you feel at home reading this, get in touch.\n\n",
    additional:
      "<div>how is life at CRED?</div><div><br></div><div>working at CRED would instantly make you realize one thing: you are working with the best talent around you. not just in the role you occupy, but everywhere you go. talk to someone around you; most likely you will be talking to a singer, standup comic, artist, writer, an athlete, maybe a magician. at CRED people always have talent up their sleeves. with the right company, even conversations can be rejuvenating. at CRED, we guarantee a good company.</div><div><br></div><div>hard truths: pushing oneself comes with the role. and we realise pushing oneself is hard work. which is why CRED is in the continuous process of building an environment that helps the team rejuvenate oneself: included but not limited to a stacked, in-house pantry, with lunch and dinner provided for all the team members, paid sick leaves and a comprehensive health insurance.&nbsp;</div><div><br></div><div>to make things smoother and to make sure you spend time and energy only on the most important things,&nbsp; CRED strives to make every process transparent: there are no work timings because we do not believe in archaic methods of calculating productivity, your work should speak for you. there are no job designations because you will be expected to hold down roles that cannot be described in one word. since trust is a major virtue in the community we have built, we make it a point to highlight it in the community behind CRED: all our employees get their salaries before their joining date. a show of trust that speaks volumes because of the skin in the game.&nbsp;</div><div><br></div><div>there are many more such eccentricities that make CRED what it is but that’s for one to discover. if you feel at home reading this, get in touch.</div><div><br></div>",
    categories: {
      commitment: "internship",
      department: "infrastructure & security",
      location: "Bengaluru, Karnataka",
      team: "Infrastructure- Database",
    },
    createdAt: 1675838033665,
    descriptionPlain:
      "what is CRED?\n\nCRED is an exclusive community for India’s most trustworthy and creditworthy individuals, where the members are rewarded for good financial behavior. CRED was born out of a need to bring back the focus on a long lost virtue, one of trust, the idea being to create a community centered around this virtue. a community that constantly strives to become more virtuous in this regard till they finally scale their behavior to create a utopia where being trustworthy is the norm and not the exception. to build a community like this requires a community of its own; a community special in its own way, working towards making this vision come true. \n\nhere’s a thought experiment: what do you get when you put a group of incredibly passionate and driven people and entrust them with the complete freedom to chase down their goals in a completely uninhibited manner? answer: you get something close to what we have at CRED; CRED just has it better. \n\nhere’s what will be in store for you at CRED once you join as a DBA intern.\n",
    description:
      '<div><b style="font-size: 11pt">what is CRED?</b></div><div><br></div><div><span style="font-size: 11pt">CRED is an exclusive community for India’s most trustworthy and creditworthy individuals, where the members are rewarded for good financial behavior. CRED was born out of a need to bring back the focus on a long lost virtue, one of trust, the idea being to create a community centered around this virtue. a community that constantly strives to become more virtuous in this regard till they finally scale their behavior to create a utopia where being trustworthy is the norm and not the exception. to build a community like this requires a community of its own; a community special in its own way, working towards making this vision come true.&nbsp;</span></div><div><br></div><div><span style="font-size: 11pt">here’s a thought experiment: what do you get when you put a group of incredibly passionate and driven people and entrust them with the complete freedom to chase down their goals in a completely uninhibited manner? answer: you get something close to what we have at CRED; CRED just has it better.&nbsp;</span></div><div><br></div><div><span style="font-size: 11pt">here’s what will be in store for you at CRED once you join as a DBA intern.</span></div>',
    id: "621767d5-6626-4d3f-a178-0ba1f538f2b0",
    lists: [
      {
        text: "what will you do:",
        content:
          '<li>learn from a scalable, fault-tolerant and resilient cloud Database infrastructure at the world’s fastest-growing <a href="http://startup.design">startup.</a></li><li><a href="http://startup.design">design</a> and implement the ideal Database infrastructure roadmap backed by robust security and compliance plan </li><li>translate our business vision into a forward-looking secure scalable Data infrastructure strategy</li><li>work with an industry renowned team to be part of india’s best fintech infrastructure team</li>',
      },
      {
        text: "you should apply if you have: ",
        content:
          "<li>0-6 months of experience and an interest in managing large, complex Database deployments / distributed systems&nbsp;</li><li>an interest in managing highly compliant financial services Database and ensure the continuance of compliance against pci-dss, iso:27001:2013, data-localization (RBI) and NPCI guidelines</li><li>curiosity to learn and understand the ecosystem around microservice architecture with regards to Data storage and retrieval.</li><li>learn/work with MySQL , Postgres, Amazon DynamoDB , Aerospike, Scylla , Elastic Search, Redis , Python, Golang, AWS, Amazon Aurora, Datadog, Prometheus, Grafana etc.</li>",
      },
    ],
    text: "database administrator intern",
    country: "IN",
    workplaceType: "hybrid",
    hostedUrl:
      "https://jobs.lever.co/cred/621767d5-6626-4d3f-a178-0ba1f538f2b0",
    applyUrl:
      "https://jobs.lever.co/cred/621767d5-6626-4d3f-a178-0ba1f538f2b0/apply",
  },
];
const Jobs = ({ selected }) => {
  let [jobs, setJob] = useState([]);

  const { allCompanies, jobsByCompanies } = useSelector((state) => state.jobs);
  useEffect(() => {
    console.log(selected);
    setJob(jobsByCompanies[selected]);
    // if (selected.companyname === "razorpay") {
    //   console.log(selected.jobs.jobs);
    //   setJob(selected.jobs.jobs);
    // } else if (selected.companyname === "pharmeasy") {
    //   setJob([]);
    // } else {
    //   SortJobs(selected.jobs, setJob);
    //   setJob(selected.jobs);
    // }
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
          {selected} - {jobs?.length}
          <div>
            <Title level={1} style={{ textTransform: "capitalize" }}>
              {selected?.name}
            </Title>
          </div>
          <Divider />
          <Title level={2}>All Other Job Roles available</Title>
          <div style={{ display: "flex", flexWrap: "wrap" }}>
            {selected.companyname !== "pharmeasy" &&
              selected.companyname !== "skit.ai" &&
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
                      className="jobscard"
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
                          href={
                            eachJob?.applyUrl ||
                            eachJob?.absolute_url ||
                            eachJob?.applylink
                          }
                        >
                          Apply Url
                        </a>,
                      ]}
                    >
                      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPI9bry6KL7AggyYTx0KedDRZZ4qKbMy6Nm5kU&s=0" />
                      <br />
                      {eachJob["text"] || eachJob["title"]}

                      <br />
                      <strong>
                        {moment(
                          eachJob?.dateposted
                            ? Number(eachJob?.dateposted) * 1000
                            : ""
                        ).fromNow()}
                      </strong>
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
