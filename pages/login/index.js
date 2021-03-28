import React from 'react';
import { Button, InputText } from '../../components';
import Link from 'next/link';

const Login = () => {
  return (
    <div className="h-screen flex">
      <div className="bg-white w-full md:w-4/12 m-auto rounded shadow p-10">
        <div className="mb-5">
          <h1 className="text-center text-2xl">Identifiez-vous</h1>
        </div>
        <InputText label="Email" className="mb-2"/>
        <InputText label="Mot de passe" inputProps={{disabled: true, value: 'frfrfrfr'}}/>

        <div className="lost-password my-1">
          <p className="text-sm">Vous avez perdu votre mot de passe ?</p>
          <Link href="/">Go to home</Link>
        </div>

        <div className="my-1 flex justify-end">
          <Button label="connexion"/>
        </div>
      </div>
    </div>
  );
};

export default Login;
