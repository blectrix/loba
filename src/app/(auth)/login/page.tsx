/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { FormSchema } from '@/lib/types';
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormMessage,
} from '@/components/ui/form';
import Link from 'next/link';
import Image from 'next/image';
import Logo from '../../../../public/lobalogo.svg';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import Loader from '@/components/global/Loader';
import { Separator } from '@/components/ui/separator';
import { actionLoginUser } from '@/lib/server-actions/auth-actions';
import { ThemeModeToggle } from '@/components/theme-mode-toggle';

const LoginPage = () => {
    const router = useRouter();
    const [submitError, setSubmitError] = useState('');

    const form = useForm<z.infer<typeof FormSchema>>({
        mode: 'onChange',
        resolver: zodResolver(FormSchema),
        defaultValues: { email: '', password: '' },
    });

    const isLoading = form.formState.isSubmitting;

    const onSubmit: SubmitHandler<z.infer<typeof FormSchema>> = async (
        formData
    ) => {
        const { error } = await actionLoginUser(formData);
        if (error) {
        form.reset();
        setSubmitError(error.message);
        }
        router.replace('/dashboard');
    };

    return (
        <Form {...form}>
        <form
            onChange={() => {
                if (submitError) setSubmitError('');
            }}
            onSubmit={form.handleSubmit(onSubmit)}
            className="w-full sm:justify-center sm:w-[400px] space-y-3 mb-5 flex flex-col justify-center
            items-center"
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
                Login
            </span>
            <FormDescription
            className="
            text-foreground/70"
            >
            to continue to your Loba account.
            </FormDescription>
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
            </div>
            {submitError && <FormMessage>{submitError}</FormMessage>}
            <div className='flex flex-row gap-4 items-center text-sm justify-between'>
            <Button
            type="submit"
            className="w-fit p-4"
            size="sm"
            disabled={isLoading}
            >
            {!isLoading ? 'Login' : <Loader />}
            </Button>
            <Link
                href="/forgot-password"
                className="text-primary text-xs"
            >
                Forgot Password?
            </Link>
            </div>
            <span className="self-container text-xs py-4">
            Don't have an account?{' '}
            <Link
                href="/signup"
                className="text-primary"
            >
                Sign Up
            </Link>
            </span>
        </form>
        </Form>
    );
};

export default LoginPage;