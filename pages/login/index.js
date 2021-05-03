import React from 'react';
import { Button, Input } from '../../components';
import Link from 'next/link';
import { Controller, useForm } from 'react-hook-form';
import { ruleEmail, ruleMinLength, ruleRequired } from '../../helpers/form/validation';
import { useTranslation } from 'react-i18next';

const defaultValues = {
  email: null,
  password: null
};
const Login = () => {
  const { t } = useTranslation();
  const { control, handleSubmit } = useForm({
    defaultValues
  });

  const onSubmit = values => {
    console.log(values);
  };

  return (
    <div className="h-screen flex">
      <div className="bg-white w-full md:w-4/12 m-auto rounded shadow p-10">
        <form
          onSubmit={handleSubmit(onSubmit)}
          method="POST"
        >
          <div className="mb-5">
            <h1 className="text-center text-2xl">{t('authLogin')}</h1>
          </div>
          <Controller
            control={control}
            name="email"
            render={({ field, formState }) => (
              <Input
                label="Email"
                contrainerClassName="mb-2"
                errors={formState.errors}
                {...field}
              />
            )}
            rules={{ ...ruleRequired, ...ruleEmail }}
          />

          <Controller
            control={control}
            name="password"
            render={({ field, formState }) => (
              <Input
                label="Mot de passe"
                errors={formState.errors}
                {...field}
              />
            )}
            rules={{ ...ruleRequired, ...ruleMinLength(6) }}
          />

          <div className="my-1 flex justify-between items-center mt-5">
            <Link href="/">{t('goHome')}</Link>
            <Button label="Connexion" />
          </div>
        </form>
        <div className="lost-password my-1 mt-5">
          <p className="text-sm text-gray-500">{t('lostPassword')}</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
