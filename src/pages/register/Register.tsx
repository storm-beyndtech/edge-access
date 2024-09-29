import { useState, ChangeEvent, FormEvent, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { ImSpinner8 } from 'react-icons/im';
import { MdVisibility } from "react-icons/md";
import logo from "../../assets/logo2.svg";
import s from './Register.module.css';
import Otp from "@/components/Otp";
import { contextData } from "@/context/AuthContext";


export default function Register() {
  const [accountType, setAccountType] = useState<string>('none');
  const [email, setEmail] = useState<string>('');
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [referredBy, setReferredBy] = useState<string>('');
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [error, setError] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);
  const url = import.meta.env.VITE_REACT_APP_SERVER_URL;
  const { user } = contextData()
  const navigate = useNavigate()
  const { ref } = useParams();

  useEffect(() => {
    if(user) return navigate('/dashboard')
    if(ref) setReferredBy(ref)
  }, [])


  const validateForm = (): boolean => {
    return (
      accountType !== 'none' &&
      email.length > 5 &&
      email.includes('@') &&
      username.length > 1 &&
      password.length > 1
    );
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>): void => {
    const { id, value } = e.target;

    if (id === 'accountType') {
      setAccountType(value);
    }

    if (id === 'email' || id === 'username' || id === 'password') {
      const lowercaseValue = id === 'email' ? value.toLowerCase() : value;
      if (id === 'email') setEmail(lowercaseValue);
      if (id === 'username') setUsername(value);
      if (id === 'password') setPassword(value);
    }
  };

  const handleShowPassword = (): void => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e: FormEvent<HTMLButtonElement>): Promise<void> => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess(false);

    try {
      const res = await fetch(`${url}/users/signup`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, username }),
      });

      const data = await res.json();

      if (res.ok) {
        setSuccess(true);
      } else {
        throw new Error(data.message);
      }

      setLoading(false);
    } catch (err:any) {
      setError(err.message);
      setLoading(false);
    }
  };

  


  if(success) {
    return (
    <Otp username={username} email={email} password={password} referredBy={referredBy}/>
    )
  }

  return (!user &&
    <div className={s.ctn}>
      <form className={s.formWrp} autoComplete="off">
        <Link to="/" className="w-fit m-auto mb-6">
          <img className="w-auto h-7" alt="logo" src={logo} />
        </Link>

        <div className={s.formLinks}>
          <Link to="/login">Sign <span>In</span></Link>
          <Link to="/register" style={{ borderBottom: '2px solid #031C6E' }}>Sign <span>Up</span></Link>
        </div>

        <select id="accountType" className={s.formInput} onChange={handleChange}>
          <option value='none'>Select Account Type</option>
          <option value='individual'>Individual</option>
          <option value='company'>Company</option>
        </select>

        <input id="email" value={email} onChange={handleChange} className={s.formInput} type='email' placeholder='Email' autoComplete="off" />
        <input id="username" value={username} onChange={handleChange} className={s.formInput} type='username' placeholder='Username' autoComplete="off" />

        <div className={s.inputWrp}>
          <input
            id="password"
            value={password}
            onChange={handleChange}
            className={s.formInput}
            type={showPassword ? 'text' : 'password'}
            placeholder='Password'
            autoComplete="new-password"
          />
          <MdVisibility onClick={handleShowPassword} className={s.visibility} />
        </div>

        <div style={{ gap: '10px' }}>
          <input checked disabled style={{ width: '25px' }} type='checkbox' />
          <p>Edge Access <br /><Link to='#'><span>Terms & Condition | Privacy Policy</span></Link></p>
        </div>

        {validateForm() && (
          <button onClick={handleSubmit} className={`${s.formBtn} ${s.slideAnim} bigBtn`}>
            {loading ? <ImSpinner8 className={s.spin} /> : 'Sign Up'}
          </button>
        )}

        {error && <p className={s.formError}>{error}</p>}
        {success && <p className={s.formSuccess}>A Verification Mail Was Sent To Your Mailbox!</p>}
      </form>
    </div>
  );
}
