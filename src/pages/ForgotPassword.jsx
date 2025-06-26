import React, { useState, useRef } from 'react';
import { OverlayTrigger, Tooltip, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

export default function ForgotPassword() {
  const navigate = useNavigate();
  const [otp, setOtp] = useState(['', '', '', '']);
  const [form, setForm] = useState({
    oldPassword: '',
    newPassword: '',
    confirmPassword: '',
  });
  const [showPassword, setShowPassword] = useState({
    old: false,
    new: false,
    confirm: false,
  });
  const [validationMessage, setValidationMessage] = useState('');

  const otpRefs = [useRef(), useRef(), useRef(), useRef()];

  const dummyPassword = '#Ash03';
  const dummyOtp = '1234';

  const isValidPassword = (password) => {
    const regex = {
      length: /.{6,}/,
      upper: /[A-Z]/,
      lower: /[a-z]/,
      number: /[0-9]/,
      special: /[^A-Za-z0-9]/,
    };
    return Object.values(regex).every((rule) => rule.test(password));
  };

  const handleOtpChange = (index, value) => {
    if (value.length <= 1) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      if (value && index < 3) otpRefs[index + 1].current.focus();
      if (!value && index > 0) otpRefs[index - 1].current.focus();
    }
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleClose = () => {
    navigate('/login');
  };

  const handleInitialSubmit = () => {
    if (form.oldPassword === dummyPassword || otp.join('') === dummyOtp) {
      document.getElementById('newPassword').focus();
    } else {
      alert('Incorrect old password or OTP.');
    }
  };

  const handleFinalSubmit = () => {
    if (!isValidPassword(form.newPassword)) {
      setValidationMessage('Password does not meet criteria');
      return;
    }
    if (form.newPassword !== form.confirmPassword) {
      setValidationMessage("Passwords don't match");
      return;
    }
    navigate('/login');
  };

  const renderPasswordRequirements = () => {
    const pwd = form.newPassword;
    return (
      <ul className="mb-0">
        <li className={pwd.length >= 6 ? 'text-success' : 'text-danger'}>At least 6 characters</li>
        <li className={/[A-Z]/.test(pwd) ? 'text-success' : 'text-danger'}>One UPPER case letter</li>
        <li className={/[a-z]/.test(pwd) ? 'text-success' : 'text-danger'}>One lower case letter</li>
        <li className={/[0-9]/.test(pwd) ? 'text-success' : 'text-danger'}>One numeric digit</li>
        <li className={/[^A-Za-z0-9]/.test(pwd) ? 'text-success' : 'text-danger'}>One special character</li>
      </ul>
    );
  };

  return (
    <div style={{ height: '100vh', backgroundColor: '#f3f3f3', display: 'flex', flexDirection: 'column' }}>
      <div style={{ backgroundColor: '#8faadc', padding: '10px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: '#000', fontWeight: 'bold', fontSize: '18px', borderBottom: '1px solid #ccc' }}>
        <div>Change/Forgot Password</div>
        <div>
          <Button variant="warning" className="me-2">Change / Forget Password</Button>
          <Button variant="light" onClick={handleClose}><i className="bi bi-x-lg"></i></Button>
        </div>
      </div>

      <div style={{ flex: 1, backgroundColor: '#ffffff', padding: '30px 50px', overflowY: 'auto' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>

          <div className="mb-3 position-relative">
            <label><b>Old Password</b>
              <OverlayTrigger placement="top" overlay={<Tooltip>Enter your current password</Tooltip>}>
                <i className="bi bi-info-circle-fill text-danger ms-1"></i>
              </OverlayTrigger>
            </label>
            <div className="position-relative">
              <input type={showPassword.old ? 'text' : 'password'} name="oldPassword" value={form.oldPassword} onChange={handleChange} className="form-control border-warning pe-5" />
              <i className="bi bi-eye position-absolute top-50 end-0 translate-middle-y me-2" role="button" onClick={() => setShowPassword({ ...showPassword, old: !showPassword.old })}></i>
            </div>
          </div>

          <p className="text-center">OR</p>

          <label><b>Enter OTP</b></label>
          <div className="d-flex gap-2 mb-1">
            {otp.map((value, index) => (
              <input
                key={index}
                ref={otpRefs[index]}
                type="text"
                maxLength="1"
                value={value}
                onChange={(e) => handleOtpChange(index, e.target.value)}
                className="form-control text-center border-warning"
                style={{ width: '50px' }}
              />
            ))}
          </div>
          <p className="text-end"><a href="#">Resend OTP?</a></p>

          <Button variant="primary" className="mb-3" onClick={handleInitialSubmit}>Submit</Button>

          <div className="mb-3 position-relative">
            <label><b>New Password</b>
              <OverlayTrigger placement="top" overlay={<Tooltip>Must be strong</Tooltip>}>
                <i className="bi bi-info-circle-fill text-danger ms-1"></i>
              </OverlayTrigger>
            </label>
            <div className="position-relative">
              <input type={showPassword.new ? 'text' : 'password'} id="newPassword" name="newPassword" value={form.newPassword} onChange={handleChange} className="form-control border-warning pe-5" disabled={!(form.oldPassword === dummyPassword || otp.join('') === dummyOtp)} />
              <i className="bi bi-eye position-absolute top-50 end-0 translate-middle-y me-2" role="button" onClick={() => setShowPassword({ ...showPassword, new: !showPassword.new })}></i>
            </div>
          </div>

          <div className="mb-3 position-relative">
            <label><b>Confirm New Password</b>
              <OverlayTrigger placement="top" overlay={<Tooltip>Re-enter the new password</Tooltip>}>
                <i className="bi bi-info-circle-fill text-danger ms-1"></i>
              </OverlayTrigger>
            </label>
            <div className="position-relative">
              <input type={showPassword.confirm ? 'text' : 'password'} name="confirmPassword" value={form.confirmPassword} onChange={handleChange} className="form-control border-warning pe-5" disabled={!isValidPassword(form.newPassword)} />
              <i className="bi bi-eye position-absolute top-50 end-0 translate-middle-y me-2" role="button" onClick={() => setShowPassword({ ...showPassword, confirm: !showPassword.confirm })}></i>
            </div>
          </div>

          <div className="alert alert-light border">
            <p><b>Password should be strong</b></p>
            {renderPasswordRequirements()}
          </div>

          {validationMessage && <p className="text-danger fw-bold">{validationMessage}</p>}

          <div className="d-flex justify-content-start">
            <Button variant="primary" onClick={handleFinalSubmit}>Submit</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
