import React, { useContext, useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  Form,
  Label,
  Input,
  Button,
  Spinner,
  FormFeedback,
} from "reactstrap";
import { Apis } from "../Apis";
import swal from "sweetalert";
import context from "../../Context/ContextState";
import { useHistory } from "react-router-dom";
const Login = ({ setValues, values }) => {
  const { setUserDetails } = useContext(context);

  const [loading, setLoading] = useState(false);
  const [credentials, setCredentials] = useState({
    userName: "",
    password: "",
  });

  const [errors, setErrors] = useState(credentials);
  const history = useHistory();
  const validate = () => {
    let temp = {};
    temp.userName =
      credentials.userName !== "" ? "" : "Please Enter User Name.";

    temp.password =
      credentials.password !== ""
        ? credentials.password.length < 6
          ? "Your password must be at least 6 characters long."
          : ""
        : "Please Enter password.";

    setErrors({
      ...temp,
    });

    return Object.values(temp).every((x) => x === "");
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setLoading(true);
      Apis()
        .login(credentials)
        .then((res) => {
          if (
            res.data.code === 200 &&
            res.data.message.includes("successful")
          ) {
            localStorage.setItem("token", res.data.data.token);
            localStorage.setItem("user", JSON.stringify(res.data.data.user));
            setUserDetails(res.data.data.user);
            setValues({
              ...values,
              token: res.data.data,
            });
            history.push({
              pathname: `/`,
            });
            setLoading(false);
          } else {
            swal({
              title: res.data.message,
              icon: "error",
              buttons: "OK",
            });
            setLoading(false);
          }
        })
        .catch((err) => {
          console.log(err);
          setLoading(false);
        });
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCredentials({
      ...credentials,
      [name]: value,
    });

    setErrors({
      ...errors,
      [name]: "",
    });
  };

  return (
    <main>
      <Container>
        <section className="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
          <Row className="justify-content-center">
            <Col
              lg="9"
              md="6"
              className="d-flex flex-column align-items-center justify-content-center"
            >
              <div className="d-flex justify-content-center py-4">
                <h3
                  href="index.html"
                  className="logo d-flex align-items-center w-auto"
                >
                  <img src="assets/img/logo.jpg" alt="" />
                  <span className="d-none d-lg-block">
                    Al-Hafeez Scan Process
                  </span>
                </h3>
              </div>

              <Card className="mb-3 animated-background">
                <CardBody>
                  <div className="pt-4 pb-2">
                    <h5 className="card-title text-center pb-0 fs-4">Login</h5>
                    <p className="text-center small">
                      Enter your User Name & Password to login
                    </p>
                  </div>
                  <Form
                    className="row g-3 needs-validation"
                    onSubmit={handleSubmit}
                  >
                    <>
                      {!loading ? (
                        <>
                          <Col xs="12">
                            <Label className="form-label">User Name</Label>
                            <Input
                              type="text"
                              name="userName"
                              {...(errors.userName && { invalid: true })}
                              onChange={handleInputChange}
                            />
                            {errors.userName && (
                              <FormFeedback>
                                <h6 className="small">{errors.userName}</h6>
                              </FormFeedback>
                            )}
                          </Col>
                          <Col xs="12">
                            <Label className="form-label">Password</Label>
                            <Input
                              type="password"
                              name="password"
                              {...(errors.password && { invalid: true })}
                              onChange={handleInputChange}
                            />
                            {errors.password && (
                              <FormFeedback>
                                <h6 className="small">{errors.password}</h6>
                              </FormFeedback>
                            )}
                          </Col>
                        </>
                      ) : (
                        <div className="text-center">
                          <Spinner
                            size="m"
                            color="success"
                            style={{ textAlign: "center" }}
                          />
                        </div>
                      )}
                      <Col xs="12">
                        <Button color="success" className="w-100" type="submit">
                          Login
                        </Button>
                      </Col>
                      <br></br>
                      <br></br>
                      <br></br>
                      <br></br>
                    </>
                  </Form>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </section>
      </Container>
    </main>
  );
};

export default Login;
