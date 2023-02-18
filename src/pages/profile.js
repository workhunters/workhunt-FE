import { Button, Divider, Form, Input, Slider, Typography } from "antd";
import DashboardHeader from "./JobBoard/DashboardHeader";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const { Title } = Typography;

const ProfilePage = () => {
  const navigate = useNavigate();
  const isLoggedIn = useSelector((state) => state.user?.isLoggedIn);
  const [additional, setAdditional] = useState({
    workExperience: [],
    education: [],
    projects: [],
  });
  useEffect(() => {
    console.log(additional);
  }, [additional]);
  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  useEffect(() => {
    console.log(isLoggedIn);
    if (isLoggedIn === false) {
      navigate("/login");
    }
  }, [isLoggedIn]);
  let items = [
    {
      name: "firstname",
      title: "First Name",
      required: true,
    },
    {
      name: "middlename",
      title: "Middle Name",
      required: true,
    },
    {
      name: "lastname",
      title: "Last Name",
      required: true,
    },
    {
      name: "email",
      title: "Email",
      required: true,
    },
    {
      name: "phone",
      title: "Phone Number",
      required: false,
    },
    {
      name: "country",
      title: "Country",
      required: false,
    },
    {
      name: "state",
      title: "State",
      required: false,
    },
    {
      name: "city",
      title: "City",
      required: false,
    },
    {
      name: "addressline1",
      title: "Address Line 1",
      required: false,
    },
    {
      name: "addressline2",
      title: "Address Line 2",
      required: false,
    },
    {
      name: "pincode",
      title: "Pincode",
      required: false,
    },
    {
      name: "yoe",
      title: "Year of Experience",
      type: "slider",
    },
    {
      name: "linkedin",
      title: "LinkedIn URL",
    },
    {
      name: "twitter",
      title: "Twitter URL",
    },
    {
      name: "github",
      title: "Github URL",
    },
    {
      name: "stackoverflow",
      title: "Stackoverflow URL",
    },
  ];
  const addWorkExp = (item, index, eachkey) => {
    setAdditional((prev) => {
      let all = prev.workExperience;
      all[index][eachkey] = item.target.value;

      return { ...prev, workExperience: all };
    });
  };

  const removeWorkExp = (index) => {
    setAdditional((prev) => {
      let all = prev.workExperience.filter(
        (each, eachIndex) => index !== eachIndex
      );

      return { ...prev, workExperience: all };
    });
  };
  const addEducation = (item, index, eachkey) => {
    setAdditional((prev) => {
      let all = prev.education;
      all[index][eachkey] = item.target.value;

      return { ...prev, education: all };
    });
  };

  const removeEducation = (index) => {
    setAdditional((prev) => {
      let all = prev.education.filter((each, eachIndex) => index !== eachIndex);

      return { ...prev, education: all };
    });
  };
  const addProject = (item, index, eachkey) => {
    setAdditional((prev) => {
      let all = prev.projects;
      all[index][eachkey] = item.target.value;

      return { ...prev, projects: all };
    });
  };
  const removeProject = (index) => {
    setAdditional((prev) => {
      let all = prev.projects.filter((each, eachIndex) => index !== eachIndex);

      return { ...prev, projects: all };
    });
  };
  return (
    <div>
      <DashboardHeader />

      <Title
        style={{ marginTop: "12px", margin: "30px 30px", textAlign: "center" }}
      >
        Profile Page
      </Title>
      <div>
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          style={{ maxWidth: 600, margin: "0 auto" }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          {items.map((eachItem, eachKey) => {
            return (
              <>
                {eachItem.type !== "slider" ? (
                  <Form.Item
                    label={eachItem.title}
                    name={eachItem.name}
                    rules={[
                      {
                        required: eachItem.required,
                        message: `Please input your ${eachItem.name}!`,
                      },
                    ]}
                  >
                    <Input placeholder={eachItem.title} />
                  </Form.Item>
                ) : (
                  <Form.Item name={eachItem.name} label={eachItem.title}>
                    <Slider
                      min={0}
                      max={10}
                      range={false}
                      marks={{
                        0: "0",
                        1: "1",
                        2: "2",
                        3: "3",
                        4: "4",
                        5: "5",
                        6: "6",
                        7: "7",
                        8: 8,
                        9: 9,
                        10: 10,
                      }}
                    />
                  </Form.Item>
                )}
              </>
            );
          })}

          <Divider />
          <Form.Item
            wrapperCol={{ offset: 0, span: 16 }}
            style={{ textAlign: "left" }}
          >
            <Button
              htmlType="button"
              onClick={() => {
                setAdditional((prev) => {
                  return {
                    ...prev,
                    education: [
                      ...prev.education,
                      {
                        college: "",
                        despartment: "",
                        endyear: "",
                      },
                    ],
                  };
                });
              }}
            >
              {" "}
              Add Education
            </Button>
          </Form.Item>
          {additional.education.map((eachWorkExp, eachIndex) => {
            return (
              <div key={"education" + eachIndex}>
                <Title level={3}>Education {eachIndex + 1}</Title>
                <Button
                  style={{ margin: "10px" }}
                  onClick={() => {
                    removeEducation(eachIndex);
                  }}
                >
                  Remove This Education {eachIndex + 1}
                </Button>
                <Form.Item
                  label={"College"}
                  name={"college" + eachIndex}
                  rules={[
                    {
                      required: false,
                      message: `Please input your College!`,
                    },
                  ]}
                >
                  <Input
                    placeholder={"College"}
                    onChange={(e) => {
                      addEducation(e, eachIndex, "college");
                    }}
                  />
                </Form.Item>

                <Form.Item
                  label={"Department"}
                  name={"department" + eachIndex}
                  rules={[
                    {
                      required: false,
                      message: `Please input your department!`,
                    },
                  ]}
                >
                  <Input
                    placeholder={"Department"}
                    onChange={(e) => {
                      addEducation(e, eachIndex, "department");
                    }}
                  />
                </Form.Item>
                <Form.Item
                  label={"End Year"}
                  name={"endyear" + eachIndex}
                  rules={[
                    {
                      required: false,
                      message: `Please input your End Year!`,
                    },
                  ]}
                >
                  <Input
                    placeholder={"End Year"}
                    onChange={(e) => {
                      addEducation(e, eachIndex, "endyear");
                    }}
                  />
                </Form.Item>
              </div>
            );
          })}

          <Divider />
          <Form.Item
            wrapperCol={{ offset: 0, span: 16 }}
            style={{ textAlign: "left" }}
          >
            <Button
              htmlType="button"
              onClick={() => {
                setAdditional((prev) => {
                  return {
                    ...prev,
                    workExperience: [
                      ...prev.workExperience,
                      {
                        jobTitle: "",
                        company: "",
                        description: "",
                      },
                    ],
                  };
                });
              }}
            >
              {" "}
              Add Work Experience
            </Button>
          </Form.Item>
          {additional.workExperience.map((eachWorkExp, eachIndex) => {
            return (
              <div key={"workexp" + eachIndex}>
                <Title level={3}>Job {eachIndex + 1}</Title>
                <Button
                  style={{ margin: "10px" }}
                  onClick={() => {
                    removeWorkExp(eachIndex);
                  }}
                >
                  Remove This Job {eachIndex + 1}
                </Button>
                <Form.Item
                  label={"jobTitle"}
                  name={"jobTitle" + eachIndex}
                  rules={[
                    {
                      required: false,
                      message: `Please input your jobTitle!`,
                    },
                  ]}
                >
                  <Input
                    placeholder={"jobTitle"}
                    onChange={(e) => {
                      addWorkExp(e, eachIndex, "jobTitle");
                    }}
                  />
                </Form.Item>

                <Form.Item
                  label={"Company Name"}
                  name={"company" + eachIndex}
                  rules={[
                    {
                      required: false,
                      message: `Please input your company!`,
                    },
                  ]}
                >
                  <Input
                    placeholder={"company"}
                    onChange={(e) => {
                      addWorkExp(e, eachIndex, "company");
                    }}
                  />
                </Form.Item>
                <Form.Item
                  label={"Description"}
                  name={"description" + eachIndex}
                  rules={[
                    {
                      required: false,
                      message: `Please input your Description!`,
                    },
                  ]}
                >
                  <Input
                    placeholder={"Description"}
                    onChange={(e) => {
                      addWorkExp(e, eachIndex, "description");
                    }}
                  />
                </Form.Item>
              </div>
            );
          })}

          {/* Projeects */}
          <Divider />
          <Form.Item
            wrapperCol={{ offset: 0, span: 16 }}
            style={{ textAlign: "left" }}
          >
            <Button
              htmlType="button"
              onClick={() => {
                setAdditional((prev) => {
                  return {
                    ...prev,
                    projects: [
                      ...prev.projects,
                      {
                        projectTitle: "",
                        projectTags: "",
                        projectdescription: "",
                      },
                    ],
                  };
                });
              }}
            >
              {" "}
              Add Projects
            </Button>
          </Form.Item>
          {additional.projects.map((eachWorkExp, eachIndex) => {
            return (
              <div key={"projects" + eachIndex}>
                <Title level={3}>Project {eachIndex + 1}</Title>
                <Button
                  style={{ margin: "10px" }}
                  onClick={() => {
                    removeProject(eachIndex);
                  }}
                >
                  Remove This Project {eachIndex + 1}
                </Button>
                <Form.Item
                  label={"projectTitle"}
                  name={"projectTitle" + eachIndex}
                  rules={[
                    {
                      required: false,
                      message: `Please input your projectTitle!`,
                    },
                  ]}
                >
                  <Input
                    placeholder={"projectTitle"}
                    onChange={(e) => {
                      addProject(e, eachIndex, "projectTitle");
                    }}
                  />
                </Form.Item>

                <Form.Item
                  label={"Project Tags"}
                  name={"projectTags" + eachIndex}
                  rules={[
                    {
                      required: false,
                      message: `Please input your projectTags!`,
                    },
                  ]}
                >
                  <Input
                    placeholder={"projectTags"}
                    onChange={(e) => {
                      addProject(e, eachIndex, "projectTags");
                    }}
                  />
                </Form.Item>
                <Form.Item
                  label={"Description"}
                  name={"projectdescription" + eachIndex}
                  rules={[
                    {
                      required: false,
                      message: `Please input your Description!`,
                    },
                  ]}
                >
                  <Input
                    placeholder={"Description"}
                    onChange={(e) => {
                      addProject(e, eachIndex, "projectdescription");
                    }}
                  />
                </Form.Item>
              </div>
            );
          })}

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};
export default ProfilePage;
