'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
export default function SignupPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userName, setUserName] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [country, setCountry] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  // const [profilePicture, setProfilePicture] = useState('');
  // const [isActive, setIsActive] = useState(true);
  // const [isAdmin, setIsAdmin] = useState(false);
  const router = useRouter();

  const handleSignup = async (e) => {
    e.preventDefault();
    const res = await fetch('/api/auth/signup', {
      method: 'POST',
      body: JSON.stringify({ email, password, userName, firstName, lastName, phone, address, city, state, zipCode, country, dateOfBirth}),
    });
    if (res.ok) router.push('/login');
  };

  return (
    <form onSubmit={handleSignup} className="p-6 max-w-md mx-auto">
      <h2 className="text-xl font-bold">Sign Up</h2>
      <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)}  className="border p-2 w-full my-2 placeholder-gray-500"
 />
      <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} className="border p-2 w-full my-2 placeholder-gray-500" />
      <input type="text" placeholder="Username" value={userName} onChange={e => setUserName(e.target.value)} className="border p-2 w-full my-2 placeholder-gray-500" />
      <input type="text" placeholder="First Name" value={firstName} onChange={e => setFirstName(e.target.value)} className="border p-2 w-full my-2 placeholder-gray-500" />
      <input type="text" placeholder="Last Name" value={lastName} onChange={e => setLastName(e.target.value)} className="border p-2 w-full my-2 placeholder-gray-500"  />
      <input type="text" placeholder="Phone" value={phone} onChange={e => setPhone(e.target.value)} className="border p-2 w-full my-2 placeholder-gray-500" />
      <input type="text" placeholder="Address" value={address} onChange={e => setAddress(e.target.value)} className="border p-2 w-full my-2 placeholder-gray-500" />
      <input type="text" placeholder="City" value={city} onChange={e => setCity(e.target.value)} className="border p-2 w-full my-2 placeholder-gray-500" />
      <input type="text" placeholder="State" value={state} onChange={e => setState(e.target.value)} className="border p-2 w-full my-2 placeholder-gray-500" />
      <input type="text" placeholder="Zip Code" value={zipCode} onChange={e => setZipCode(e.target.value)} className="border p-2 w-full my-2 placeholder-gray-500" />
      <input type="text" placeholder="Country" value={country} onChange={e => setCountry(e.target.value)} className="border p-2 w-full my-2 placeholder-gray-500" />
      <input type="date" placeholder="Date of Birth" value={dateOfBirth} onChange={e => setDateOfBirth(e.target.value)} className="border p-2 w-full my-2 placeholder-gray-500" />
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 cursor-pointer hover:bg-red-700">Sign Up</button>
        <p className="text-sm mt-4 text-gray-600 text-center">
  Already have an account?{' '}
  <Link href="/login" className="text-blue-600 hover:underline">
    Login
  </Link>
</p>
    </form>
    
  );

}

