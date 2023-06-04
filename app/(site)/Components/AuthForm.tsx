'use client'
import { useState, useCallback } from 'react';
import { useForm, FieldValues, SubmitHandler } from 'react-hook-form';
import Input from '@/app/components/inputs/Input';

type Variant = 'LOGIN' | 'REGISTER';

const AuthForm = () => {

  const [variant, setVariant] = useState<Variant>('LOGIN');
  const [isLoading, setIsLoading] = useState(false);

  const toggleVariant = useCallback(() => {
    (variant === 'LOGIN')
      ? setVariant('REGISTER')
      : setVariant('LOGIN')
  }, [variant]);

  const { register, handleSubmit, formState: { errors } } = useForm<FieldValues>({
    defaultValues: {
      name: '',
      email: '',
      password: ''
    }
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);

    if (variant === 'REGISTER') {
      //axios register
    }
    if (variant === 'LOGIN') {
      //NextAuth SignIn
    }
  }

  const socialAction = (action: string) => {
    setIsLoading(true);
    //NextAuth social SignIn
  }

  return (
    <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md" >
      <div className="bg-white px-4 py-8 shadow sm:rounded-lg sm:px-10" >
        <form className="space-y-6"
          // passing data to onSubmit function
          onSubmit={handleSubmit(onSubmit)}>
          {variant === 'REGISTER' && (
            <Input
              id='name'
              label='Name'
              errors={errors}
              register={register}
            />
          )}
          <Input
            id='email'
            label='Email address'
            type='email'
            errors={errors}
            register={register}
          />
          <Input
            id='password'
            label='password'
            type='password'
            errors={errors}
            register={register}
          />
          <div>
            <Button>Test</Button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AuthForm;