import "./App.scss";
import { useState } from "react";

import { makeStyles } from "@material-ui/core/styles";
import IconButton from '@material-ui/core/IconButton';

import InputAdornment from "@material-ui/core/InputAdornment";
import VisibilityIcon from "@material-ui/icons/Visibility";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";

const currencies = [
  {
    value: "I would describe my user as",
    label: "I would describe my user as",
  },
  {
    value: "Developer",
    label: "Developer",
  },
  {
    value: "Designer",
    label: "Designer",
  },
  {
    value: "Tester",
    label: "Tester",
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    position: "absolute",
    left: "50%",
    marginLeft: -250,
    display: "flex",
    flexDirection: "column",
    width: 500,
    alignItems: "center",
    justifyContent: "center",
    top: 30,
    height: "100vh",
    "& .MuiTextField-root": {
      margin: 10,
      width: 500,
    },
  },
  passwordStyles: {
    margin: 15,
    width: 500,
  },
  TextField: {
    width: 300,
    padding: 30,
  },
}));

function App() {
  const [values, setValues] = useState({
    name: "",
    email: "",
    option: "",
    password: "",
    showPassword: false,
  });

  const [nameInvalid, setNameInvalid] = useState(false);
  const [emailInvalid, setEmailInvalid] = useState(false);
  const [passwordInvalid, setPasswordInvalid] = useState(false);
  const [optionInValid, setOptionInvalid] = useState(false);

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!values.name) {
      setNameInvalid(true);
    } else {
      setNameInvalid(false);
    }
    if (!values.email) {
      setEmailInvalid(true);
    } else {
      if (!/\S+@\S+\.\S+/.test(values.email)) {
        setEmailInvalid(true);
      } else {
        setEmailInvalid(false);
      }
    }
    if (!values.password) {
      setPasswordInvalid(true);
    } else {
      if (values.password.length < 6) {
        setPasswordInvalid(true);
      } else {
        setPasswordInvalid(false);
      }
    }
    if (!values.option) {
      setOptionInvalid(true);
    } else {
      setOptionInvalid(false);
    }
  };
  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const classes = useStyles();
  return (
    <div className="App">
      <div className="container">
        <div className="form-container">
          <form className={classes.root} noValidate autoComplete="off">
            <h2>Let's set up your account</h2>
            <p className="link-text">
              Already have an account?&nbsp;
              <a class="links" href=" ">
                Sign up
              </a>
            </p>
            <TextField
              className={classes.textField}
              error={nameInvalid}
              value={values.name}
              id="outlined-basic"
              label="Name"
              variant="outlined"
              name="name"
              helperText={emailInvalid ? "please enter your name" : ""}
              onChange={handleChange}
              InputProps={{
                className: classes.input,
              }}
              InputLabelProps={{ className: "text_label" }}
            />
            <TextField
              InputLabelProps={{ className: "text_label" }}
              error={emailInvalid}
              value={values.email}
              id="outlined-basic"
              label="Email"
              variant="outlined"
              name="email"
              helperText={emailInvalid ? "please enter valid emaild" : ""}
              onChange={handleChange}
            />
            <TextField
              id="outlined-select-currency"
              error={optionInValid}
              select
              label="Select"
              value={values.option}
              onChange={handleChange}
              helperText={optionInValid ? "Please select your currency " : ""}
              variant="outlined"
              InputLabelProps={{ className: "text_label" }}
            >
              {currencies.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>

            <TextField
              // id="outlined-adornment-password"
              error={passwordInvalid}
              className={classes.textField}
              variant="outlined"
              type={values.showPassword ? "text" : "password"}
              helperText={passwordInvalid ? "Minimum 6 characters" : ""}
              label="Password"
              value={values.password}
              onChange={handleChange}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {values.showPassword ? (
                        <VisibilityOffIcon fontSize="small" />
                      ) : (
                        <VisibilityIcon fontSize="small" />
                      )}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <button
              className="inputContent-btn"
              type="submit"
              onClick={handleSubmit}
            >
              Next
            </button>
            <p className="link-text">
              By clicking the "Next" button, you agree to creating a free
              account and to &nbsp;
              <a className="links" href=" ">
                Terms of service
              </a>
              &nbsp;and&nbsp;
              <a class="links" href=" ">
                Privacy policy
              </a>{" "}
            </p>
          </form>
        </div>
        <div className="blue-container">
          <h1>Incsub</h1>
          <p className="blue-container-desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi illum
            reiciendis vel nam doloribus sapiente sequi,
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
