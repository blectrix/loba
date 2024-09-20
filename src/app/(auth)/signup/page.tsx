/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';
import { Button } from '@/components/ui/button';
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { zodResolver } from '@hookform/resolvers/zod';
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import React, { useMemo, useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import Logo from '../../../../public/lobalogo.svg';
import Loader from '@/components/global/Loader';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { MailCheck } from 'lucide-react';
import { FormSchema } from '@/lib/types';
import { actionSignUpUser } from '@/lib/server-actions/auth-actions';
import { ThemeModeToggle } from '@/components/theme-mode-toggle';

const SignUpFormSchema = z
    .object({
        email: z.string().describe('Email').email({ message: 'Invalid Email' }),
        password: z
        .string()
        .describe('Password')
        .min(8, 'Password must be a minimum of 8 characters'),
        confirmPassword: z
        .string()
        .describe('Confirm Password')
        .min(8, 'Password must be a minimum of 8 characters'),
    })
    .refine((data) => data.password === data.confirmPassword, {
        message: "Passwords don't match.",
        path: ['confirmPassword'],
    });

const Signup = () => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const [submitError, setSubmitError] = useState('');
    const [confirmation, setConfirmation] = useState(false);

    const codeExchangeError = useMemo(() => {
        if (!searchParams) return '';
        return searchParams.get('error_description');
    }, [searchParams]);

    const confirmationAndErrorStyles = useMemo(
        () =>
        clsx('bg-primary', {
            'bg-destructive/60': codeExchangeError,
            'border-destructive/80': codeExchangeError,
            'text-destructive': codeExchangeError,
        }),
        [codeExchangeError]
    );

    const form = useForm<z.infer<typeof SignUpFormSchema>>({
        mode: 'onChange',
        resolver: zodResolver(SignUpFormSchema),
        defaultValues: { email: '', password: '', confirmPassword: '' },
    });

    const isLoading = form.formState.isSubmitting;
    const onSubmit = async ({ email, password }: z.infer<typeof FormSchema>) => {
        const { error } = await actionSignUpUser({ email, password });
        if (error) {
        setSubmitError(error.message);
        form.reset();
        return;
        }
        setConfirmation(true);
    };

    return (
        <Form {...form}>
        <form
            onChange={() => {
                if (submitError) setSubmitError('');
            }}
            onSubmit={form.handleSubmit(onSubmit)}
            className="w-full sm:justify-center sm:w-[400px]
            space-y-3 flex mb-20
            flex-col
            justify-center
            items-center
            "
        >
            <ThemeModeToggle />
            <Link
                href="/"
                className="
                w-fit
                flex
                justify-center
                items-center"
            >
            <Image
                src={Logo}
                alt="loba Logo"
                width={50}
                height={50}
            />
            <span
                className="font-semibold
            dark:text-foreground text-4xl first-letter:ml-2"
            >
                loba.
            </span>
            </Link>
            <span
                className="font-semibold
            dark:text-foreground text-2xl"
            >
                Welcome to Loba!
            </span>
            <span
                className="font-normal text-sm
            dark:text-foreground/70 text-center"
            >
                An all-In-One Collaboration and Productivity Platform
            </span>
            <FormDescription
                className="
                text-foreground/50"
            >
            Sign up and start taking notes.
            </FormDescription>
            {!confirmation && !codeExchangeError && (
            <>
            <div className='py-8 gap-3 w-[300px] flex flex-col'>
                <FormField
                    disabled={isLoading}
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                        <FormControl>
                            <Input
                            type="email"
                            placeholder="Email"
                            {...field}
                            />
                        </FormControl>
                        <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    disabled={isLoading}
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                        <FormItem>
                        <FormControl>
                            <Input
                            type="password"
                            placeholder="Password"
                            {...field}
                            />
                        </FormControl>
                        <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    disabled={isLoading}
                    control={form.control}
                    name="confirmPassword"
                    render={({ field }) => (
                        <FormItem>
                        <FormControl>
                            <Input
                            type="password"
                            placeholder="Confirm Password"
                            {...field}
                            />
                        </FormControl>
                        <FormMessage />
                        </FormItem>
                    )}
                />
                </div>
                <Button
                    type="submit"
                    className="w-fit p-4"
                    size="sm"
                    disabled={isLoading}
                >
                {!isLoading ? 'Create Account' : <Loader />}
                </Button>
            </>
            )}

            {submitError && <FormMessage>{submitError}</FormMessage>}
            <span className="self-container text-xs py-4">
            Already have an account?{' '}
            <Link
                href="/login"
                className="text-primary"
            >
                Login
            </Link>
            </span>
            {(confirmation || codeExchangeError) && (
            <>
                <Alert className={confirmationAndErrorStyles}>
                {!codeExchangeError && <MailCheck className="h-4 w-4" />}
                <AlertTitle>
                    {codeExchangeError ? 'Invalid Link' : 'Check your email.'}
                </AlertTitle>
                <AlertDescription>
                    {codeExchangeError || 'An email confirmation has been sent.'}
                </AlertDescription>
                </Alert>
            </>
            )}
        </form>
        </Form>
    );
};

export default Signup;