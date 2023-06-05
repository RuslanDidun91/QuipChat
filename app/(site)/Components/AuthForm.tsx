'use client'
import { useForm, FieldValues, SubmitHandler } from 'react-hook-form';
import { BsGithub, BsGoogle } from 'react-icons/bs';
import { useState, useCallback } from 'react';
import Input from '@/app/components/inputs/Input';
import Button from '@/app/components/Button';
import AuthSocialButton from './AuthSocialButton';
import axios from 'axios';

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
      axios.post('/api/register', data)
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
              disabled={isLoading}
            />
          )}
          <Input
            id='email'
            label='Email address'
            type='email'
            errors={errors}
            register={register}
            disabled={isLoading}
          />
          <Input
            id='password'
            label='password'
            type='password'
            errors={errors}
            register={register}
            disabled={isLoading}
          />
          <div>
            <Button
              disabled={isLoading}
              fullWidth
              type='submit'>
              {variant === "LOGIN" ? 'Sign In' : 'Register'}
            </Button>
          </div>
        </form>
        <div className='mt-6'>
          <div className='relative'>
            <div className='absolute inset-0 flex items-center'>
              {/* gray line */}
              <div className='w-full border-t border-gray-300' />
            </div>
            <div className='relative flex justify-center text-sm'>
              <span className='bg-white px-2 text-gray-500'>
                Or continue with
              </span>
            </div>
          </div>

          <div className='mt-6 flex gap-2'>
            <AuthSocialButton
              icon={BsGithub}
              onClick={() => socialAction('github')}
            />
            <AuthSocialButton
              icon={BsGoogle}
              onClick={() => socialAction('Google')}
            />
          </div>
        </div>

        <div className='flex justify-center gap-2 text-sm mt-6 px-2 text-gray-500'>
          <div>
            {variant === 'LOGIN' ? 'New to QuipChat?' : 'Already have an account?'}
          </div>
          <div onClick={toggleVariant}
            className='underline cursor-pointer'
          >
            {variant === 'LOGIN' ? 'Create an account' : 'Log in'}
          </div>
        </div>

      </div>
    </div>
  )
}

export default AuthForm;