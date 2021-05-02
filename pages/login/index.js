import React from 'react';
import { Button, InputText } from '../../components';
import Link from 'next/link';
import { Controller, useForm } from 'react-hook-form';

const defaultValues = {
  email: null,
  password: null
};
const Login = () => {
  const { control, handleSubmit } = useForm({
    defaultValues
  });

  const onSubmit = values => {
    console.log(values);
  };

  return (
    <div className="h-screen flex">
      <form
        onSubmit={handleSubmit(onSubmit)}
        method="POST"
        className="bg-white w-full md:w-4/12 m-auto rounded shadow p-10">
        <div className="mb-5">
          <h1 className="text-center text-2xl">Identifiez-vous</h1>
        </div>
        <Controller
          control={control}
          name="email"
          render={({field, formState}) => (
            <InputText
              label="Email"
              contrainerClassName="mb-2"
              errors={formState.errors}
              rules={{required: 'Ce champ est obligatoire'}}
              {...field}
            />
          )}
        />

        <Controller
          control={control}
          name="password"
          render={({field}) => (
            <InputText
              label="Mot de passe"
              {...field}
            />
          )}
        />

        <div className="lost-password my-1">
          <p className="text-sm">Vous avez perdu votre mot de passe ?</p>
        </div>

        <div className="my-1 flex justify-between mt-5">
          <Link href="/">Retour à l’accueil</Link>
          <Button label="connexion"/>
        </div>
      </form>
    </div>
  );
};

export default Login;
