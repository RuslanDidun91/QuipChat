'use client'
import { useState, useCallback } from 'react';
import { useForm, FieldValues, SubmitHandler } from 'react-hook-form';
import Input from '@/app/components/inputs/Input';
import Button from '@/app/components/Button';

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
            <AuthSocialButton />
          </div>

        </div>
      </div>
    </div>
  )
}

export default AuthForm;