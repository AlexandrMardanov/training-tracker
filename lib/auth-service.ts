import { User } from '@supabase/supabase-js';

import { supabase } from './supabase';

export type SignInData = {
  email: string;
  password: string;
};

export type SignUpData = {
  email: string;
  password: string;
  name: string;
};

export type UpdateProfileData = {
  name: string;
};

export type VerifyOTPData = {
  email: string;
  token: string;
  newPassword: string;
};

// Authentication operations using Supabase

export async function signIn(data: SignInData): Promise<User> {
  const { data: authData, error } = await supabase.auth.signInWithPassword({
    email: data.email,
    password: data.password,
  });

  if (error) {
    throw new Error('Невдалося увійти');
  }

  if (!authData.session || !authData.user) {
    throw new Error('Невдалося створити сесію');
  }

  return authData.user;
}

export async function signUp(data: SignUpData): Promise<void> {
  const { error } = await supabase.auth.signUp({
    email: data.email,
    password: data.password,
    options: {
      data: {
        name: data.name.trim(),
      },
    },
  });

  if (error) {
    throw new Error('Невдалося зареєструватися');
  }
}

export async function signOut(): Promise<void> {
  const { error } = await supabase.auth.signOut();

  if (error) {
    throw new Error('Невдалося вийти');
  }
}

export async function updateProfile(userId: string, data: UpdateProfileData): Promise<void> {
  const { error } = await supabase.auth.updateUser({
    data: {
      name: data.name.trim(),
    },
  });

  if (error) {
    throw new Error('Невдалося оновити профіль');
  }
}

export async function sendPasswordResetOTP(email: string): Promise<void> {
  const { error } = await supabase.auth.signInWithOtp({
    email,
    options: {
      shouldCreateUser: false,
    },
  });

  if (error) {
    throw new Error('Невдалося надіслати код для відновлення пароля');
  }
}

export async function verifyOTPAndResetPassword(data: VerifyOTPData): Promise<void> {
  // Verify OTP
  const { error: verifyError } = await supabase.auth.verifyOtp({
    email: data.email,
    token: data.token,
    type: 'email',
  });

  if (verifyError) {
    throw new Error('Невдалося верифікувати код OTP');
  }

  // Update password
  const { error: updateError } = await supabase.auth.updateUser({
    password: data.newPassword,
  });

  if (updateError) {
    throw new Error('Невдалося оновити пароль');
  }
}

export async function updatePassword(newPassword: string): Promise<void> {
  const { error } = await supabase.auth.updateUser({
    password: newPassword,
  });

  if (error) {
    throw new Error('Невдалося оновити пароль');
  }
}

export async function getCurrentUser(): Promise<User | null> {
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return user;
}

export async function getCurrentSession() {
  const {
    data: { session },
  } = await supabase.auth.getSession();

  return session;
}
